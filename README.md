# My First Next.js Project - Day 1

Hey everyone! 👋 This is my first project learning Next.js. I built this in one day to understand how Next.js works.

## What is this project?

This is a simple website with 3 pages (Home, Products, About). I learned how to create pages, add a header/footer on all pages, and make dynamic product pages.

## What I Learned Today

- **What is Next.js?** - It's a framework that makes React better (faster loading, SEO friendly)
- **App Router** - The new way to create pages in Next.js (just make folders!)
- **How to make pages** - Create a folder with `page.js` file inside
- **Dynamic routes** - Use `[slug]` folder to create pages like `/products/laptop`
- **Shared layout** - Header and footer that appear on every page
- **Link component** - Moving between pages without refresh (super fast!)
- **Loading & 404 pages** - Special files that show while loading or when page not found

## How to Run This Project

```bash
# Step 1: Download the code
git clone https://github.com/Dhananjayan507/Tech360-mini-portfolio.git

# Step 2: Go inside the folder
cd Tech360-mini-portfolio

# Step 3: Install required packages
npm install

# Step 4: Start the project
npm run dev
```

Open your browser and go to: `http://localhost:3000`

## Pages You Can Visit

| Type this in URL | What you'll see |
|------------------|-----------------|
| `http://localhost:3000` | Home page |
| `http://localhost:3000/products` | List of products |
| `http://localhost:3000/products/laptop` | Laptop product page |
| `http://localhost:3000/products/phone` | Phone product page |
| `http://localhost:3000/products/anything` | Shows 404 page (not found) |
| `http://localhost:3000/about` | About page |

## My Project Structure (Easy Explanation)

```
my-project/
│
├── app/                    # All my pages go here
│   ├── layout.js          # Header + Footer (shows on every page)
│   ├── page.js            # Home page
│   ├── products/          
│   │   ├── page.js        # Products list page
│   │   ├── loading.js     # Shows while products are loading
│   │   ├── not-found.js   # Shows when product doesn't exist
│   │   └── [slug]/        # Dynamic folder (slug = any product name)
│   │       └── page.js    # Shows individual product
│   └── about/
│       └── page.js        # About page
│
├── components/             # Reusable pieces
│   ├── Header.js          # Navigation menu
│   └── Footer.js          # Footer text
│
└── package.json           # List of packages used
```

## How Navigation Works

In my `Header.js` file, I use Next.js `<Link>` instead of normal `<a>` tag:

```javascript
// This is what I wrote
<Link href="/products">Products</Link>

// Instead of normal HTML
<a href="/products">Products</a>
```

**Why?** Because `<Link>` is faster - it doesn't refresh the whole page!

## My Git & GitHub Learning

I also learned how to put my code on GitHub:

```bash
git init                    # Start git in my project
git add .                   # Add all files
git commit -m "message"     # Save my work
git remote add origin URL   # Connect to GitHub
git push                    # Upload to GitHub
```

## What I Can Improve Tomorrow

- Add real data from an API
- Add images to products
- Make it look beautiful with CSS
- Add more pages

## Check My Code Online

My project is live on GitHub:  
🔗 [https://github.com/Dhananjayan507/Tech360-mini-portfolio](https://github.com/Dhananjayan507/Tech360-mini-portfolio)

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
