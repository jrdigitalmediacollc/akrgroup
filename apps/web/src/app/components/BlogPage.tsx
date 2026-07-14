"use client";

import { useState } from "react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Why Investors Still Choose UAE Real Estate During Times of War",
    date: "16 March 2026",
    category: "Investment",
    image: null,
    slug: "why-investors-choose-uae",
  },
  {
    id: 2,
    title: "Global Tensions Increase, Yet Dubai Real Estate Investment Continues to Surge – Here's Why",
    date: "11 March 2026",
    category: "Market Trends",
    image: null,
    slug: "dubai-investment-surge",
  },
  {
    id: 3,
    title: "War Headlines vs. Reality: Why Celebrities and Investors Continue Choosing Dubai Real Estate",
    date: "11 March 2026",
    category: "Investment",
    image: null,
    slug: "celebrities-choosing-dubai",
  },
  {
    id: 4,
    title: "How the UAE Government Protects Investors During Global Uncertainty",
    date: "9 March 2026",
    category: "Market Trends",
    image: null,
    slug: "uae-government-protects-investors",
  },
  {
    id: 5,
    title: "People Watching Missiles in the Sky — But Investors Are Buying Dubai Property Faster Than Ever",
    date: "9 March 2026",
    category: "Investment",
    image: null,
    slug: "investors-buying-dubai-property",
  },
  {
    id: 6,
    title: "How the UAE's People-Centric Leadership Solidifies Real Estate Confidence",
    date: "7 March 2026",
    category: "Market Trends",
    image: null,
    slug: "uae-leadership-real-estate",
  },
  {
    id: 7,
    title: "AKR Group UAE Honoured with Broker Recognition Award at the Property Show",
    date: "27 February 2026",
    category: "News",
    image: null,
    slug: "akr-broker-recognition-award",
  },
  {
    id: 8,
    title: "How Dubai Square Mall is Redefining Investment Potential in Dubai's Property Market",
    date: "9 February 2026",
    category: "Market Trends",
    image: null,
    slug: "dubai-square-mall",
  },
  {
    id: 9,
    title: "How AKR Group UAE Earned Recognition Among Dubai's Leading Agencies",
    date: "5 February 2026",
    category: "News",
    image: null,
    slug: "akr-recognition-dubai",
  },
  {
    id: 10,
    title: "The Mercedes-Maybach Mindset: Why Luxury Thinking Now Extends to Real Estate",
    date: "2 February 2026",
    category: "Investment",
    image: null,
    slug: "luxury-mindset-real-estate",
  },
];

const categories = ["All", "Investment", "Market Trends", "News"];
const ITEMS_PER_PAGE = 9;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = posts.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-pearl">
      {/* Hero */}
      <div className="relative min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-velvet-dark opacity-90" />
        <div className="absolute inset-0 opacity-10">
          <img src="/banner.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <div className="inline-block border border-gold text-gold-dark text-xs tracking-widest uppercase px-4 py-1.5 mb-6">
            Insights & Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Real Estate</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gold-dark mb-6">News & Insights</h1>
          <p className="text-gold-dark text-base mb-2">
            Expert insights, market trends, and the latest in Dubai real estate
          </p>
          <p className="text-velvet/50 text-sm max-w-lg mx-auto">
            Stay informed with our comprehensive guides, investment tips, and market analysis
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gold-dark mb-8">
          <Link href="/" className="hover:text-gold-dark transition-colors">Home</Link>
          <span className="text-velvet/50">/</span>
          <span className="text-velvet/70">Insights</span>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setPage(1); }}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gold text-white"
                  : "bg-pearl border border-gold/40 text-gold-dark hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Latest Posts heading */}
        <h2 className="text-white text-2xl font-bold mb-6">Latest Posts</h2>

        {/* Grid */}
        {paginated.length === 0 ? (
          <p className="text-gold-dark text-center py-20">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {paginated.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.slug}`}
                className="bg-pearl border border-gold/40 rounded-lg overflow-hidden hover:border-gold transition-colors group block"
              >
                {/* Image */}
                <div className="aspect-video bg-pearl flex items-center justify-center overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 opacity-20">
                      <svg className="w-10 h-10 fill-gold-dark" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                      <span className="text-velvet/50 text-xs">No Image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="inline-block bg-gold/10 border border-gold/30 text-gold-dark text-[10px] px-2 py-0.5 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-velvet font-medium text-sm leading-snug mb-2 group-hover:text-gold-dark transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-velvet/50 text-xs">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border border-gold/40 text-gold-dark text-sm disabled:opacity-30 hover:border-gold transition-colors"
            >
              ← Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                  page === p
                    ? "bg-gold text-white"
                    : "border border-gold/40 text-gold-dark hover:border-gold"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border border-gold/40 text-gold-dark text-sm disabled:opacity-30 hover:border-gold transition-colors"
            >
              Next →
            </button>
          </div>
        )}

        {/* View All Posts button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setActiveCategory("All")}
            className="border-2 border-gold text-gold-dark hover:bg-gold hover:text-white px-8 py-3 text-sm font-semibold tracking-wide transition-all rounded"
          >
            View All Posts
          </button>
        </div>
      </div>
    </div>
  );
}
