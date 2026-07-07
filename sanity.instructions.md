---
applyTo: "sanity/**/*.ts"
description: "Sanity CMS setup and queries in this template. Use when: creating document schemas, writing GROQ queries, configuring the Sanity client, or managing content."
---

# Sanity CMS Integration Guide

This guide covers Sanity setup and usage patterns in this template.

## Project Setup

### Environment Variables

Create `.env.local` with your Sanity project config:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_read_write_token
```

### Sanity Client Setup

Location: `sanity/lib/client.ts`

```typescript
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});
```

### Live Query Hook

Location: `sanity/lib/live.ts`

```typescript
import { live } from "next-sanity";
import { client } from "./client";

export const liveFetch = live(client);
```

## Schema Definition

### Document Types Location

Schema files go in: `sanity/schemas/`

### Example Document Schema

```typescript
// sanity/schemas/documents/author.ts
export const author = {
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      type: "text",
      title: "Biography",
    },
    {
      name: "image",
      type: "image",
      title: "Profile Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
```

### Object Types (Reusable Blocks)

```typescript
// sanity/schemas/objects/seo.ts
export const seo = {
  name: "seo",
  type: "object",
  title: "SEO",
  fields: [
    {
      name: "title",
      type: "string",
      title: "SEO Title",
    },
    {
      name: "description",
      type: "text",
      title: "Meta Description",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      of: [{ type: "string" }],
    },
  ],
};
```

### Register Schemas

Location: `sanity/schemas/index.ts`

```typescript
import { type SchemaConfig } from "sanity";
import { author } from "./documents/author";
import { seo } from "./objects/seo";

export const schema: SchemaConfig = {
  types: [
    author,
    seo,
    // Add more types here
  ],
};
```

## GROQ Queries

### Query Examples

Location: `sanity/lib/queries.ts`

#### Fetch All Documents

```typescript
export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    author-> {
      name,
      image
    }
  }
`;
```

#### Fetch Single Document

```typescript
export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content,
    author-> {
      name,
      bio
    }
  }
`;
```

#### Fetch Nested Data

```typescript
export const SETTINGS_QUERY = `
  *[_type == "settings"][0] {
    _id,
    siteTitle,
    navigation[] {
      label,
      href
    },
    footer {
      text,
      links[] {
        label,
        url
      }
    }
  }
`;
```

#### Conditional Fields

```typescript
export const PRODUCTS_QUERY = `
  *[_type == "product"] {
    _id,
    name,
    price,
    inStock,
    description,
    image {
      asset-> {
        url
      }
    },
    _type == "product" && inStock => featured
  }
`;
```

## Using Queries in Components

### Static Query (Next.js App Router)

```tsx
// app/posts/page.tsx
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
};

export default async function PostsPage() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
```

### Dynamic Query with Parameters

```tsx
// app/posts/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug: params.slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}
```

### Client-Side Query (React Component)

```tsx
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(POSTS_QUERY);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}
```

### Live Query (Real-time Updates)

```tsx
"use client";

import { useEffect, useState } from "react";
import { liveFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export function LivePostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const subscription = liveFetch(POSTS_QUERY).subscribe((data) => {
      setPosts(data.result);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## Portable Text / Rich Text

### Schema Definition

```typescript
{
  name: "body",
  type: "array",
  title: "Body",
  of: [
    { type: "block" },
    {
      type: "object",
      name: "image",
      fields: [
        { name: "src", type: "string", title: "Image Path" },
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
    },
  ],
}
```

### Rendering Portable Text

```tsx
import { PortableText } from "next-sanity";

type Props = {
  content: PortableTextBlock[];
};

const components = {
  types: {
    image: ({ value }: any) => (
      <img src={value.src} alt={value.alt} className="my-4" />
    ),
  },
};

export function RichText({ content }: Props) {
  return (
    <div className="prose">
      <PortableText value={content} components={components} />
    </div>
  );
}
```

## Image Handling

### Local Image Paths

Store images in `public/` and reference them with root-relative paths:

```tsx
import Image from "next/image";

export function PostImage() {
  return (
    <Image
      src="/images/post-featured.webp"
      alt="Featured post image"
      width={600}
      height={400}
      className="rounded-lg"
    />
  );
}
```

If a Sanity document needs to point at an image, store the public path as a string field and use it directly in components.

## References & Relationships

### Define References

```typescript
{
  name: "author",
  type: "reference",
  title: "Author",
  to: [{ type: "author" }],
  validation: (Rule) => Rule.required(),
}
```

### Query with References

```typescript
export const POST_WITH_AUTHOR = `
  *[_type == "post"] {
    _id,
    title,
    author-> {
      _id,
      name,
      email
    }
  }
`;
```

### Back References

```typescript
export const AUTHOR_WITH_POSTS = `
  *[_type == "author"] {
    _id,
    name,
    posts[]-> {
      _id,
      title
    }
  }
`;
```

## Mutation/Writing Data

### Create Document

```typescript
import { client } from "@/sanity/lib/client";

const newPost = {
  _type: "post",
  title: "My New Post",
  slug: { current: "my-new-post" },
  content: "Post content here",
};

const createdPost = await client.create(newPost);
```

### Update Document

```typescript
await client.patch("post-id").set({ title: "Updated Title" }).commit();
```

### Delete Document

```typescript
await client.delete("post-id");
```

**Note**: These operations require `SANITY_API_TOKEN` with write permissions. Typically done in API routes or server actions.

## Common Patterns

### Settings Document

Create a singleton document for site-wide settings:

```typescript
export const settings = {
  name: "settings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "siteTitle",
      type: "string",
      title: "Site Title",
    },
    {
      name: "navigation",
      type: "array",
      title: "Main Navigation",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        },
      ],
    },
  ],
};
```

Query it:

```typescript
export const SETTINGS_QUERY = `
  *[_type == "settings"][0] {
    siteTitle,
    navigation
  }
`;
```

### SEO Object

Reuse SEO fields:

```typescript
export const PAGE_QUERY = `
  *[_type == "page"][0] {
    title,
    content,
    seo {
      title,
      description,
      keywords
    }
  }
`;
```

## Deployment

### Deploy Schema Changes

```bash
npm run sanity deploy
```

### Export Data

```bash
npm run sanity dataset export production ./dataset-export.ndjson
```

### Import Data

```bash
npm run sanity dataset import ./dataset-export.ndjson production
```

## Best Practices

1. **Validation**: Add rules to all required fields
2. **Descriptions**: Add descriptive titles and help text
3. **Ordering**: Use `| order(field desc)` in queries
4. **Projections**: Only fetch fields you need
5. **Caching**: Use `useCdn: true` in production
6. **Performance**: Index frequently queried fields
7. **Slugs**: Always use slugs instead of IDs in URLs

## Troubleshooting

**"Token not found"**: Ensure `SANITY_API_TOKEN` is set for write operations

**"Document not found in query"**: Check dataset name and document `_type`

**"Invalid GROQ syntax"**: Test queries in Sanity Studio's GROQ editor

**"Images not loading"**: Verify the file exists in `public/` and the path is correct

---

For more info: [Sanity Docs](https://www.sanity.io/docs)
