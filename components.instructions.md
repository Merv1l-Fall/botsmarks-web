---
applyTo: "src/components/**/*.tsx"
description: "Component development in this Next.js template project. Use when: creating React components, modifying existing components, working with forms, or building reusable UI elements."
---

# Component Development Guide

This file guides AI agents on conventions and patterns for component development in this template.

## File Structure

```
src/components/
├── sections/          # Full-page sections (hero, info, contact, etc.)
│   ├── hero/
│   ├── info/
│   └── contact/
├── navigation/        # Header, footer, navigation
├── ui/               # Reusable UI components (buttons, cards, etc.)
└── common.tsx        # Shared utilities
```

## Component Patterns

### 1. Functional Components with Hooks

All components use React Hooks (never classes):

```tsx
import { useEffect, useState } from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const MyComponent = ({ title, children }: Props) => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    // Side effects
  }, []);

  return (
    <div className="...">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default MyComponent;
```

**Rules**:
- Always destructure props with a `type Props` interface
- Use `const` for component definitions
- Export default components
- Add explicit return types for non-JSX functions

### 2. Props Interface Pattern

Define types clearly:

```tsx
type Props = {
  image?: string;
  onSubmit: (data: FormData) => Promise<void>;
  className?: string;
};
```

### 3. Responsive Design

Use Tailwind breakpoints with mobile-first approach:

```tsx
<div className="
  w-full                    // mobile first
  md:flex md:gap-4         // tablet and up
  lg:px-8                  // desktop and up
  xl:max-w-7xl xl:mx-auto  // large screens
">
```

Common breakpoints:
- `md`: 768px (tablets)
- `lg`: 1024px (small laptops)
- `xl`: 1280px (large screens)

### 4. Mobile Detection

Use the mobile store:

```tsx
import { useMobileStore } from "@/lib/store/useMobileStore";

const MyComponent = () => {
  const isMobile = useMobileStore((state) => state.isMobile);

  return (
    <Image
      width={isMobile ? 300 : 600}
      height={isMobile ? 400 : 800}
    />
  );
};
```

### 5. Images with Next.js Image Component

Always use `Image` from "next/image":

```tsx
import Image from "next/image";

const MyComponent = () => {
  return (
    <Image
      src="/images/example.webp"
      alt="Descriptive alt text"
      width={400}
      height={300}
      className="rounded-md"
    />
  );
};
```

## Form Components

Use **React Hook Form** with **Zod** validation:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Minimum 10 characters"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<void> }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmitHandler = async (data: FormData) => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="w-full border rounded px-3 py-2"
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}

      <textarea
        {...register("message")}
        placeholder="Your message"
        className="w-full border rounded px-3 py-2"
      />
      {errors.message && <span className="text-red-500">{errors.message.message}</span>}

      <button type="submit" className="bg-brand-red text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};
```

## Styling Standards

### Tailwind CSS Classes

- **Colors**: Use `brand-red`, `brand-blue` defined in `tailwind.config.ts`
- **Spacing**: Use consistent spacing scale (px-4, py-8, gap-4, etc.)
- **Typography**: Use `font-serif` for headings, `font-sans` for body
- **Responsive**: Always include mobile and larger screens

Example:
```tsx
<div className="
  flex flex-col
  gap-4
  px-4 py-8
  md:flex-row md:px-8
  bg-gray-50
">
  <h2 className="font-serif font-bold text-4xl md:text-5xl text-brand-red">
    Title
  </h2>
  <p className="font-sans text-gray-700">Description</p>
</div>
```

### Dark Mode (if needed)

Components support dark mode via Tailwind's `dark:` prefix:
```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

## Performance Considerations

1. **Image Optimization**: Always use Next.js `Image` component
2. **Lazy Loading**: Use `useEffect` for data fetching (not in render)
3. **Memoization**: Use `React.memo()` for expensive components
4. **Avoid Inline Functions**: Define callbacks outside render when possible

## Accessibility (a11y)

- Always include `alt` text for images
- Use semantic HTML: `<button>`, `<form>`, `<nav>`, etc.
- Add ARIA labels for custom components
- Ensure color contrast meets WCAG AA standards

```tsx
<button
  className="..."
  aria-label="Close menu"
  onClick={onClose}
>
  ✕
</button>
```

## Common Component Patterns

### Section Component Pattern

```tsx
type Props = {
  title: string;
};

const SectionName = ({ title }: Props) => {
  return (
    <section className="w-full py-16 px-4 max-w-7xl mx-auto">
      <div className="space-y-8">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default SectionName;
```

### Modal/Dialog Component

```tsx
type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};
```

## When to Create New Components

Create a new component when:
- ✅ Logic is reused in multiple places
- ✅ Component is 150+ lines (signals need to break down)
- ✅ Component has distinct responsibility
- ❌ Only used once (keep in parent or inline)
- ❌ Simple enough to be a utility function

## Testing Notes

For component testing, follow these patterns:
- Use component props to control behavior
- Avoid testing implementation details
- Test user interactions, not internal state
- Mock Sanity calls in tests

---

## Questions?

Refer to specific guides:
- Forms: See "Form Components" section above
- Styling: See `tailwind.config.ts`
- Fetching data: See `sanity.instructions.md`
