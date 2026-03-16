'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, Clock, DollarSign, BarChart3, Shield, Zap, ChevronRight, Users, Globe, Lock } from 'lucide-react'

// Mock data - will come from API later
const mockMarkets = [
  {
    id: '1',
    question: 'Will Bitcoin reach $150,000 by December 2026?',
    asset: 'BTC',
    yesPrice: 0.35,
    noPrice: 0.65,
    volume: 125000,
    endTime: '2026-12-31',
    status: 'ACTIVE',
    category: 'Crypto'
  },
  {
    id: '2',
    question: 'Will ETH flip BTC market cap by 2027?',
    asset: 'ETH',
    yesPrice: 0.18,
    noPrice: 0.82,
    volume: 89000,
    endTime: '2027-01-01',
    status: 'ACTIVE',
    category: 'Crypto'
  },
  {
    id: '3',
    question: 'Will SOL reach $500 by end of Q2 2026?',
    asset: 'SOL',
    yesPrice: 0.62,
    noPrice: 0.38,
    volume: 56000,
    endTime: '2026-06-30',
    status: 'ACTIVE',
    category: 'Crypto'
  },
  {
    id: '4',
    question: 'Will Bitcoin be above $100,000 in 24 hours?',
    asset: 'BTC',
    yesPrice: 0.71,
    noPrice: 0.29,
    volume: 234000,
    endTime: '2026-03-16',
    status: 'ACTIVE',
    category: 'Crypto'
  }
]

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Trading',
    description: 'Trade prediction markets with instant price updates and low fees'
  },
  {
    icon: Shield,
    title: 'Secure & Transparent',
    description: 'Built on Base blockchain with Chainlink oracles for fair resolution'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Lightning-quick trades with minimal slippage and optimal pricing'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join thousands of traders predicting real-world outcomes'
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Access markets from anywhere with our Telegram bot integration'
  },
  {
    icon: Lock,
    title: 'Demo Mode',
    description: 'Practice with $10,000 virtual funds before trading real crypto'
  }
]

export default function Home() {
  const [balance] = useState(10000)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition">
            PredictX
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#markets" className="text-slate-300 hover:text-white transition">Markets</a>
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="font-mono font-semibold">${balance.toLocaleString()}</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
              P
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent">
            Trade the Future
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Predict outcomes on crypto, sports, politics & more. Built on Base with Chainlink price feeds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#markets" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2">
              Start Trading <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#features" className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-700 transition">
              Learn More
            </a>
          </div>
          <p className="mt-4 text-slate-400 text-sm">
            🎉 New users get $10,000 demo funds
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PredictX</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition">
                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm">Your Balance</p>
              <p className="text-2xl font-bold mt-1">${balance.toLocaleString()}</p>
              <p className="text-green-400 text-sm mt-1">Demo Funds</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm">Active Positions</p>
              <p className="text-2xl font-bold mt-1">0</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm">Total P&L</p>
              <p className="text-2xl font-bold mt-1 text-green-400">$0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section id="markets" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trending Markets</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition">
                All
              </button>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition">
                Crypto
              </button>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition">
                Sports
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {mockMarkets.map((market) => (
              <article 
                key={market.id}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">
                        {market.asset}
                      </span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded">
                        {market.category}
                      </span>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Ends {new Date(market.endTime).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium mb-4">{market.question}</h3>
                    
                    {/* Trading buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Yes {(market.yesPrice * 100).toFixed(0)}%
                      </button>
                      <button className="flex-1 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                        <TrendingDown className="w-4 h-4" />
                        No {(market.noPrice * 100).toFixed(0)}%
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-slate-400 text-sm">Volume</p>
                    <p className="font-mono font-semibold">${(market.volume / 1000).toFixed(1)}K</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-lg border border-slate-700">
              <summary className="px-6 py-4 font-semibold cursor-pointer hover:text-blue-400 transition">
                What is PredictX?
              </summary>
              <p className="px-6 pb-4 text-slate-400">
                PredictX is a decentralized prediction market platform where users can trade on the outcomes of real-world events including crypto prices, sports, politics, and more.
              </p>
            </details>
            <details className="bg-slate-800/50 rounded-lg border border-slate-700">
              <summary className="px-6 py-4 font-semibold cursor-pointer hover:text-blue-400 transition">
                How do prediction markets work?
              </summary>
              <p className="px-6 pb-4 text-slate-400">
                Prediction markets allow you to buy shares in the probability of an event occurring. Prices range from $0 to $1, representing the probability. If your prediction is correct, you can redeem for $1 per share.
              </p>
            </details>
            <details className="bg-slate-800/50 rounded-lg border border-slate-700">
              <summary className="px-6 py-4 font-semibold cursor-pointer hover:text-blue-400 transition">
                Can I try for free?
              </summary>
              <p className="px-6 pb-4 text-slate-400">
                Yes! We offer $10,000 in demo funds for all new users to practice trading without risking real money.
              </p>
            </details>
            <details className="bg-slate-800/50 rounded-lg border border-slate-700">
              <summary className="px-6 py-4 font-semibold cursor-pointer hover:text-blue-400 transition">
                Is there an API for traders?
              </summary>
              <p className="px-6 pb-4 text-slate-400">
                Yes, we provide API access for automated trading. API plans start at $10 USDC/month with lag-adjusted data feeds.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2026 PredictX. Built on Base. Powered by Chainlink.</p>
          <p className="text-sm mt-2">
            <a href="#" className="hover:text-white transition">Terms</a> · 
            <a href="#" className="hover:text-white transition">Privacy</a> · 
            <a href="#" className="hover:text-white transition">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
