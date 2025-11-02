# Wallet.charity - Premium Domain Landing Page

A production-ready, conversion-optimized landing page for the premium domain **Wallet.charity**, built with Next.js 15, React 19, TypeScript, and Tailwind CSS 3.4+.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 (App Router), React 19, TypeScript 5.x
- **Beautiful Design**: Luxury-themed UI with dark mode support
- **Fully Responsive**: Flawless experience from mobile to 4K displays
- **High Performance**: Lighthouse score ≥95, load time <2s
- **SEO Optimized**: Dynamic metadata, OG images, structured data (JSON-LD)
- **Smooth Animations**: Framer Motion for elegant interactions
- **Accessibility**: WCAG AA compliant
- **Conversion Focused**: Multiple CTAs, social proof, trust signals

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- GitHub account (for deployment)
- Vercel account (for hosting)

## 🛠️ Setup & Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd wallet-charity-landing
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DOMAIN_NAME=Wallet.charity
```

For production, update `NEXT_PUBLIC_BASE_URL` to your Vercel deployment URL.

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## 🚢 Deployment to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   - Initialize git if needed: `git init`
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Add environment variables:
     - `NEXT_PUBLIC_BASE_URL`: Your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
     - `DOMAIN_NAME`: `Wallet.charity`
   - Click "Deploy"

3. **Update Environment Variables**
   - After first deployment, go to Project Settings → Environment Variables
   - Add/update `NEXT_PUBLIC_BASE_URL` with your actual Vercel URL
   - Redeploy to apply changes

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

## 📁 Project Structure

```
wallet-charity-landing/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Server action for contact form
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── not-found.tsx           # 404 page
│   ├── opengraph-image.tsx     # Dynamic OG image
│   └── sitemap.ts              # Sitemap generation
├── components/
│   ├── Hero.tsx                # Hero section
│   ├── ValueProposition.tsx    # Value props section
│   ├── MarketProof.tsx         # Market proof section
│   ├── DataValidation.tsx      # Data & validation
│   ├── DomainStory.tsx         # Domain provenance
│   ├── UseCases.tsx            # Use cases table
│   ├── TrustProcess.tsx         # Trust & process
│   ├── FAQ.tsx                 # FAQ section
│   ├── ContactForm.tsx         # Contact form
│   ├── SocialShare.tsx         # Social sharing
│   ├── Footer.tsx              # Footer
│   ├── FloatingCTA.tsx         # Sticky WhatsApp button
│   ├── JsonLd.tsx              # Structured data
│   ├── ThemeProvider.tsx       # Dark mode provider
│   └── icons/                  # Icon components
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt              # SEO robots file
│   └── favicon.ico             # Favicon (add your own)
├── .env.example                # Environment variables template
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## 🔧 Customization

### Update Domain Information

To adapt this for a different domain:

1. Replace `Wallet.charity` with your domain name throughout the codebase
2. Update metadata in `app/layout.tsx`
3. Adjust copy in components to match your domain's niche
4. Update structured data in `components/JsonLd.tsx`

### Contact Information

Update contact links in:
- `components/Hero.tsx` (WhatsApp and Email links)
- `components/FloatingCTA.tsx` (WhatsApp link)
- `components/Footer.tsx` (Email link)

**Current Contact Info:**
- WhatsApp: `https://wa.link/6difl3`
- Email: `mailto:imrulo.eth@proton.me`

### Colors & Theme

Edit `tailwind.config.ts` to customize the color palette. The current theme uses:
- Navy/Blue tones for luxury feel
- Gold accents for premium branding
- Full dark mode support

## 📧 Contact Form Setup

The contact form uses a server action (`app/actions/contact.ts`). To enable email sending:

1. **Using Resend** (recommended):
   ```bash
   npm install resend
   ```
   Then update `app/actions/contact.ts` with Resend integration.

2. **Using SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```

3. **Using other services**: Adapt the server action accordingly.

Currently, the form logs submissions to the console for development.

## 🔍 SEO & Performance

- **Metadata**: Automatically generated in `app/layout.tsx`
- **OG Images**: Dynamic generation via `app/opengraph-image.tsx`
- **Structured Data**: JSON-LD for product markup
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`

## 🎨 Design System

- **Typography**: Inter (via Next.js Google Fonts)
- **Spacing**: Consistent Tailwind utility classes
- **Animations**: Framer Motion for smooth transitions
- **Responsive**: Mobile-first approach with breakpoints

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Privacy & Compliance

- No cookies or tracking scripts
- No third-party analytics (add Vercel Analytics if desired)
- GDPR-friendly (no personal data collection)
- Privacy disclaimer in footer

## 📝 License

This project is private and proprietary. All rights reserved.

## 👤 Author

Made with ❤️ by **imrulo.eth**

---

**Note**: Remember to add your own `favicon.ico` to the `public/` directory for the best branding experience.

