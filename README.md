
# 🚀 3-Day Next.js Project: Tech360-mini-portfolio 

A modern Next.js application built in 3 days covering App Router, rendering models, API routes, and deployment.

## 📋 Project Overview

This project demonstrates key Next.js 14+ concepts through a practical e-commerce product listing and detail application.

- **Day 1**: Project structure, App Router, routing & layouts
- **Day 2**: Server vs Client components, data fetching, rendering models
- **Day 3**: API routes, state management, optimization & deployment

---

## 🗓️ Day 1: Foundation & Routing

### Concepts Learned
- Next.js App Router file-based routing
- Nested routes and dynamic routes
- Root and nested layouts
- Project scaffolding

### Outcomes
- Complete page structure with routing
- Shared layouts across all pages
- Dynamic product detail route ready

### File Structure Created
```

my-app/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Home page (/)
│   ├── products/
│   │   ├── layout.tsx          # Products section layout
│   │   ├── page.tsx            # Product listing (/products)
│   │   └── [id]/
│   │       └── page.tsx        # Dynamic detail page (/products/123)
│   └── globals.css             # Global styles

```

---

## 🗓️ Day 2: Components & Data Fetching

### Concepts Learned
- **Server Components** (default): Direct data fetching, better SEO, smaller bundle
- **Client Components** ('use client'): Interactivity, hooks, browser APIs
- **Data Fetching**: Async/await in server components

### Why This Matters
| Without Day 2 | With Day 2 |
|---------------|------------|
| Blank page then loads | HTML with data ready |
| Poor SEO | Search engines see content |
| Large JavaScript bundles | Only interactive parts ship |
| Complex loading states | Server handles errors |

### Real-World Examples
- **Amazon/Flipkart**: Product info (server) + Add to Cart button (client)
- **Twitter/X**: Tweet content (server) + Like/Retweet buttons (client)

### File Structure Added
```

my-app/
├── app/products/
│   ├── page.tsx                    # SERVER - fetches all products
│   ├── components/
│   │   ├── ProductFilters.tsx      # CLIENT - useState for filters
│   │   ├── ProductSort.tsx         # CLIENT - handles sorting
│   │   └── ProductCard.tsx         # SERVER - static product display
│   └── [id]/
│       ├── page.tsx                # SERVER - fetches single product
│       └── components/
│           ├── AddToCart.tsx       # CLIENT - button with onClick
│           └── QuantitySelector.tsx # CLIENT - useState for quantity
├── lib/
│   └── data.ts                     # Shared fetch functions
└── types/
└── product.ts                  # TypeScript interfaces

```

### Code Example
```tsx
// Server Component - app/products/page.tsx
import { getProducts } from '@/lib/data';

export default async function ProductsPage() {
  const products = await getProducts(); // Runs on server
  return <div>{products.map(p => <ProductCard {...p} />)}</div>;
}

// Client Component - AddToCart.tsx
'use client';
import { useState } from 'react';

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1);
  return <button onClick={() => setQuantity(q => q + 1)}>Add ({quantity})</button>;
}
```

---

🗓️ Day 3: API, State & Deployment

Concepts Learned

· API routes in Next.js (backend endpoints)
· Client-side state management (Context/Zustand)
· Performance optimization (next/image, lazy loading)
· Production deployment

File Structure Final

```
my-app/
├── app/
│   ├── api/
│   │   └── products/
│   │       └── route.ts            # GET /api/products endpoint
│   ├── products/                   # (from Day 1 & 2)
│   └── layout.tsx
├── components/
│   ├── CartProvider.tsx            # State management
│   └── OptimizedImage.tsx          # next/image wrapper
├── public/                         # Static assets
├── next.config.js                  # Optimization settings
└── package.json
```

API Route Example

```tsx
// app/api/products/route.ts
import { getProducts } from '@/lib/data';

export async function GET() {
  const products = await getProducts();
  return Response.json(products);
}
```

Deployment Commands

```bash
npm run build      # Production build
npm run start      # Run production server
# Deploy to Vercel: vercel --prod
```

---

🛠️ Tech Stack

Category Technologies
Framework Next.js 14+ (App Router)
Language TypeScript
Styling Tailwind CSS / CSS Modules
State React Context / Zustand
Deployment Vercel / Netlify

---

📁 Complete Project Structure

```
my-app/
├── app/
│   ├── api/
│   │   └── products/
│   │       └── route.ts
│   ├── products/
│   │   ├── components/
│   │   │   ├── ProductFilters.tsx
│   │   │   ├── ProductSort.tsx
│   │   │   └── ProductCard.tsx
│   │   ├── [id]/
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   │       ├── AddToCart.tsx
│   │   │       └── QuantitySelector.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CartProvider.tsx
│   └── OptimizedImage.tsx
├── lib/
│   └── data.ts
├── types/
│   └── product.ts
├── public/
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

🚦 Quick Decision Guide

Use Server Component when:

· Fetching data from database/API
· SEO matters (product pages, blog posts)
· No user interaction needed
· Page loads slowly on client

Use Client Component when:

· User clicks, types, or hovers
· Using useState, useEffect, useContext
· Browser APIs needed (localStorage)
· Real-time updates required

Rule of thumb: Server by default. Add 'use client' only for interactivity.

---

✅ What You've Built

By completing all 3 days, your application can:

· ✅ Navigate between pages with shared layouts (Day 1)
· ✅ Display products from data source with SEO-friendly rendering (Day 2)
· ✅ Filter, sort, and add items to cart (Day 2)
· ✅ Provide backend API endpoints (Day 3)
· ✅ Maintain cart state across pages (Day 3)
· ✅ Run optimized in production (Day 3)

---

📦 Getting Started

```bash
# Clone repository
git clone https://github.com/yourusername/your-repo.git

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

🎯 Learning Resources

· Next.js App Router Docs
· Server vs Client Components
· Data Fetching Patterns

---

📝 Notes

· Day 1 focuses on structure - everything else depends on this
· Day 2 focuses on performance & SEO - choose component types wisely
· Day 3 focuses on completeness - full-stack capabilities

---

Built in 3 days | Next.js 14+ | JavaSript | Modern React Patterns

```
## Questions I Had (And Answers)

**Q: Why do I see warnings about CRLF/LF?**  
A: Don't worry! It's just Windows vs Mac thing. Nothing is broken.

**Q: Why "master" not "main"?**  
A: Old git uses "master", new uses "main". Both are fine!

**Q: Why use next/link instead of <a> tag?**  
A: <Link> is faster - no page refresh!

**Q: What does [slug] mean?**  
A: It's like a box that catches anything. Example: `/products/laptop` → slug = "laptop"

## Built With

- Next.js 14 (App Router)
- React
- JavaScript
- Git & GitHub

## Author

Dhananjayan - Learning Next.js from scratch

---

*This is my Day 1 project. I'm still learning, so please ignore the simple styling! The goal was to understand concepts, not make it beautiful.* 🚀
```

---

## Even Simpler (Short Version)

If you want something super short and simple:

```markdown
# My Next.js Learning - Day 1

I built my first Next.js app today! 🎉

## What I Made
- Home page (/)
- Products page (/products)
- Dynamic product pages (/products/laptop, /products/phone)
- About page (/about)

## How to Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What I Learned

- Next.js creates pages from folders (app/products/page.js = /products)
- [slug] folder creates dynamic pages (catches anything in URL)
- layout.js adds header/footer on ALL pages
- <Link> is faster than <a> tag
- loading.js shows while page loads
- not-found.js shows when page doesn't exist

## My Code

https://github.com/Dhananjayan507/Tech360-mini-portfolio

---

Day 1 done! ✅ Moving to Day 2 tomorrow!
```

---

## How to Add README to GitHub

### Method 1: Direct on GitHub (Easiest)

1. Go to: `https://github.com/Dhananjayan507/Tech360-mini-portfolio`
2. Click **"Add file"** button
3. Click **"Create new file"**
4. Type `README.md` as filename
5. Copy and paste the simple README above
6. Click **"Commit changes"** (green button)

### Method 2: Using Terminal

```bash
cd C:\Users\Public\nextjs projects\Tech360-mini\tech360-mini

# Create README file
echo "# My First Next.js Project - Day 1" > README.md

# Open in notepad to paste content
notepad README.md

# After pasting, save and close

# Upload to GitHub
git add README.md
git commit -m "Add simple README"
git push
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
