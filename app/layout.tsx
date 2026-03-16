import './globals.css'
import type { Metadata } from 'next'
import { TrendingUp, TrendingDown, Clock, DollarSign, BarChart3, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PredictX | Crypto & Prediction Markets - Trade the Future',
  description: 'PredictX is a decentralized prediction market platform. Trade on crypto prices, sports, politics & more. Get started with $10,000 demo funds. Built on Base blockchain.',
  keywords: ['prediction market', 'crypto trading', 'polymarket alternative', 'decentralized betting', 'bitcoin predictions', 'ethereum predictions', 'sports betting', 'crypto forecast'],
  authors: [{ name: 'PredictX Team' }],
  creator: 'PredictX',
  publisher: 'PredictX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://predictx.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://predictx.io',
    siteName: 'PredictX',
    title: 'PredictX | Crypto & Prediction Markets - Trade the Future',
    description: 'Trade on crypto prices, sports, politics & more. Get started with $10,000 demo funds.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PredictX - Prediction Market Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PredictX | Crypto & Prediction Markets',
    description: 'Trade on crypto prices, sports, politics & more. Get started with $10,000 demo funds.',
    images: ['/og-image.png'],
    creator: '@predictx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "PredictX",
              "description": "Decentralized prediction market platform for crypto, sports, and politics trading",
              "url": "https://predictx.io",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Crypto price predictions",
                "Sports betting",
                "Political markets",
                "Demo trading with $10,000",
                "Real-time price feeds",
                "API access for traders"
              ],
              "provider": {
                "@type": "Organization",
                "name": "PredictX",
                "url": "https://predictx.io"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is PredictX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PredictX is a decentralized prediction market platform where users can trade on the outcomes of real-world events including crypto prices, sports, politics, and more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do prediction markets work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Prediction markets allow you to buy shares in the probability of an event occurring. Prices range from $0 to $1, representing the probability. If your prediction is correct, you can redeem for $1 per share."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I try for free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer $10,000 in demo funds for all new users to practice trading without risking real money."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there an API for traders?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide API access for automated trading. API plans start at $10 USDC/month."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
