---
name: "next-sanity-template"
description: "AI agent instructions for a Next.js + Sanity project"
---

# AI Agent Instructions: Next.js Sanity Template

This file provides guidelines for AI assistants (GitHub Copilot, Claude, etc.) working on projects built with this template.

## Project Overview

**Stack**:
- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **CMS**: Sanity (headless content management)
- **State**: Zustand
- **Forms**: React Hook Form + Zod
- **Assets**: Static images stored in the project `/public` folder

## Key Principles

### 1. React Hooks Architecture
- Use functional components with React Hooks (never class components)
- Prefer `useState`, `useEffect`, `useContext` for state management
- Use Zustand stores for global state
- Always destructure props with explicit type interfaces

### 2. Type Safety
- Full TypeScript, no `any` types unless absolutely necessary
- Define `type Props` for every component
- Use discriminated unions for complex state
- Export types from files where they're defined

### 3. Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Use `md:`, `lg:`, `xl:` prefixes for responsive behavior
- Use `useMobileStore` for breakpoint-sensitive logic
- Test on actual devices or emulator

### 4. Performance
- Use Next.js `Image` component for images stored in `/public` when image optimization is helpful
- Lazy-load Sanity data with `useEffect`, never in render
- Memoize expensive components with `React.memo()`
- Unsubscribe from listeners in cleanup functions

## File Structure Conventions

```
src/
├── app/                 # Next.js app directory (pages, layouts)
├── components/          # React components
│   ├── sections/       # Full-page sections
│   ├── navigation/      # Header, footer
│   └── ui/             # Reusable UI components
├── lib/                # Utilities & services
│   ├── store/          # Zustand stores
│   └── [domain]/       # Domain-specific utilities
├── constants/          # Configuration & types
└── public/              # Static assets and images

sanity/                 # CMS configuration
├── schemas/           # Document types & objects
├── lib/              # Sanity client & queries
└── scripts/          # Migration & setup scripts
```

## Component Patterns

### Standard Component

```tsx
import { useEffect, useState } from "react";

type Props = {
  title: string;
  onSubmit?: (data: string) => Promise<void>;
};

const MyComponent = ({ title, onSubmit }: Props) => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    // Side effects only
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="font-serif font-bold text-2xl text-brand-red">
        {title}
      </h1>
      {/* Content */}
    </div>
  );
};

export default MyComponent;
```

### Form Component (React Hook Form)

Use `react-hook-form` + `zod` for form validation:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(async (data) => {
      // Submit to API or database
    })}>
      {/* form fields */}
    </form>
  );
};
```

### Data Fetching (Server Component)

In Next.js 16 app directory:

```tsx
// This is a Server Component by default
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function PostsPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>{post.title}</article>
      ))}
    </div>
  );
}
```

## Development Workflow

### Starting Development

```bash
# Terminal 1: Next.js dev server
npm run dev
```

### Creating New Features

1. **Design in Sanity**: Define schema for new content types
2. **Create queries**: Write GROQ queries in `sanity/lib/queries.ts`
3. **Build components**: Create React components to display data
4. **Use local assets**: Place images in `public/` and reference them from components

## Common Tasks

### Add a New Page

Create in `src/app/[page-name]/page.tsx`:

```tsx
export default async function PageName() {
  return (
    <main>
      {/* Content */}
    </main>
  );
}
```

### Fetch from Sanity

```tsx
import { client } from "@/sanity/lib/client";
import { MY_QUERY } from "@/sanity/lib/queries";

const data = await client.fetch(MY_QUERY);
// or with parameters:
const data = await client.fetch(MY_QUERY, { param: value });
```

### Use Global State (Zustand)

```tsx
import { create } from "zustand";

export const useMyStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// In component:
const count = useMyStore((state) => state.count);
```

### Add Form Validation

Use Zod schemas:

```tsx
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

## Styling Standards

### Color System

Configured in `tailwind.config.ts`:
- `brand-red`: Primary brand color
- `brand-blue`: Secondary color
- Standard Tailwind colors for neutrals

Use these in components:

```tsx
<button className="bg-brand-red text-white hover:bg-brand-red/90">
  Action
</button>
```

### Spacing & Sizing

Always use Tailwind's spacing scale:
- `px-4`, `py-8`, `gap-4` for spacing
- `w-full`, `max-w-7xl` for sizing
- `rounded-lg`, `rounded-none` for borders

### Typography

```tsx
<h1 className="font-serif font-bold text-4xl md:text-5xl">Title</h1>
<p className="font-sans text-base text-gray-700">Body text</p>
```

## Testing Expectations

For components, think about:
- Props validation (TypeScript catches most)
- Responsive breakpoints (test on mobile, tablet, desktop)
- Empty/loading/error states
- User interactions (clicks, form submissions)
- Accessibility (semantic HTML, ARIA labels)

## Code Review Checklist

When reviewing code in this template:
- ✅ All components have `type Props`
- ✅ No `any` types
- ✅ Images are stored in `public/` and referenced consistently
- ✅ Mobile responsiveness with Tailwind
- ✅ Error handling in try-catch blocks
- ✅ Proper cleanup in useEffect (unsubscribe, etc.)
- ✅ Consistent naming conventions

## Troubleshooting

**Issue**: Images not loading
- Verify the file exists in `public/`
- Use the correct root-relative path, like `/images/example.png`

**Issue**: Sanity queries returning empty
- Verify dataset name matches `.env.local`
- Test query in Sanity Studio's GROQ tab
- Check document type names

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [Zustand State](https://github.com/pmndrs/zustand)

## Additional Instructions

For specific guidance, see:
- [Components Guide](./components.instructions.md)
- [Sanity Guide](./sanity.instructions.md)
