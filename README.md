# PredictX - Decentralized Prediction Market

A modern, SEO-optimized prediction market platform built with Next.js 14.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## Features

- 🏷️ **SEO Optimized** - Full metadata, Open Graph, Twitter Cards, JSON-LD structured data
- 🤖 **AEO Ready** - AI-friendly schema markup for FAQ and WebApplication
- 📱 **Responsive** - Mobile-first design with dark theme
- ⚡ **Fast** - Built on Next.js 14 App Router
- 🔗 **Web3 Ready** - Designed for Base blockchain integration

## SEO Highlights

| Feature | Status |
|---------|--------|
| Meta Title & Description | ✅ |
| Open Graph Tags | ✅ |
| Twitter Cards | ✅ |
| JSON-LD Schema | ✅ |
| FAQ Schema | ✅ |
| WebApplication Schema | ✅ |
| Robots.txt | ✅ |
| Sitemap.xml | ✅ |
| Semantic HTML | ✅ |
| Proper Heading Hierarchy | ✅ |

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add DATABASE_URL if using a database

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Database:** Prisma (PostgreSQL ready)
- **Deployment:** Vercel (recommended)

## Project Structure

```
prediction-market/
├── app/
│   ├── api/
│   │   └── markets/       # Market API endpoints
│   ├── globals.css
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx          # Main page
├── prisma/
│   └── schema.prisma      # Database schema
├── public/
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml       # XML sitemap
├── package.json
└── tailwind.config.js
```

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

```env
# Database (optional for demo)
DATABASE_URL="postgresql://..."

# Telegram Bot (for notifications)
TELEGRAM_BOT_TOKEN=""
TELEGRAM_CHAT_ID=""

# API Keys (for production)
CHAINLINK_API_KEY=""
```

## License

MIT © 2026 PredictX
