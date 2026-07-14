"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Search, Phone, Mail, MessageCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    category: "General",
    question: "What services does AKR Group UAE offer?",
    answer:
      "AKR Group UAE provides a full spectrum of real estate and financial advisory services including property acquisition, investment consulting, mortgage advisory, off-plan property guidance, and portfolio management across the UAE.",
  },
  {
    id: 2,
    category: "General",
    question: "Is AKR Group UAE licensed to operate in Dubai?",
    answer:
      "Yes. AKR Realty LLC is licensed by RERA (Real Estate Regulatory Agency) and AKR Financial & Real Estate LLC is licensed by the UAE Central Bank and Insurance Authority for financial advisory services.",
  },
  {
    id: 3,
    category: "General",
    question: "How do I get started with AKR Group UAE?",
    answer:
      "Simply contact us via phone, email, or WhatsApp. Our advisors will schedule a consultation to understand your investment goals and guide you through the best available opportunities.",
  },
  {
    id: 4,
    category: "General",
    question: "Do you work with international investors?",
    answer:
      "Absolutely. We specialize in guiding international clients through UAE property regulations, ownership structures, and investment pathways including freehold zones and golden visa-eligible properties.",
  },
  {
    id: 5,
    category: "General",
    question: "Where is AKR Group UAE located?",
    answer:
      "Our office is located at Office 911/908, 9th Floor, Clover Bay Tower, Business Bay, Dubai, UAE. We also offer virtual consultations for international clients.",
  },
  {
    id: 6,
    category: "Investment",
    question: "Can I get a mortgage for property in Dubai?",
    answer:
      "Yes, home loans are available for both ready and selected off-plan properties, subject to bank approval and eligibility. We will assist you in connecting with reliable banks and help you through the mortgage process.",
  },
  {
    id: 7,
    category: "Investment",
    question: "Why should I invest in off-plan property in Dubai?",
    answer:
      "Off-plan properties typically offer lower entry prices, flexible payment plans, and higher capital appreciation by completion. Dubai's regulatory framework through RERA also ensures developer accountability.",
  },
  {
    id: 8,
    category: "Investment",
    question: "Is there any risk in buying off-plan property in Dubai?",
    answer:
      "As with any investment, there are risks such as construction delays or market fluctuations. However, RERA regulations, escrow account requirements, and our thorough due diligence process significantly mitigate these risks.",
  },
  {
    id: 9,
    category: "Investment",
    question: "What are the payment options for off-plan property?",
    answer:
      "Most off-plan developers offer structured payment plans such as 60/40 or 70/30 (during construction vs. on handover). Some offer post-handover payment plans stretching up to 5 years.",
  },
  {
    id: 10,
    category: "Investment",
    question: "Is off-plan property cheaper than ready property?",
    answer:
      "Generally yes. Off-plan properties are priced lower at launch compared to ready properties in the same area. This price gap often results in strong capital gains by the time of handover.",
  },
  {
    id: 11,
    category: "Investment",
    question: "What is the minimum investment for a UAE Golden Visa through property?",
    answer:
      "To qualify for the UAE Golden Visa through real estate, you need a minimum property investment of AED 2 million. Our team can guide you to eligible properties that meet this threshold.",
  },
  {
    id: 12,
    category: "Investment",
    question: "Do ready properties generate rental income immediately?",
    answer:
      "Yes. Ready properties can be rented out immediately upon transfer. Dubai offers some of the highest rental yields globally, ranging from 5% to 9% annually depending on location and property type.",
  },
];

const ITEMS_PER_PAGE = 10;

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(1);
  const [page, setPage] = useState(1);

  const categories = ["All", "General", "Investment"];

  const filtered = faqs.filter((f) => {
    const matchCat = activeCategory === "All" || f.category === activeCategory;
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const counts: Record<string, number> = {
    All: faqs.length,
    General: faqs.filter((f) => f.category === "General").length,
    Investment: faqs.filter((f) => f.category === "Investment").length,
  };

  return (
    <div className="min-h-screen bg-pearl">
      {/* Hero */}
      <div className="bg-linear-to-b from-velvet to-velvet-dark py-20 text-center px-4">
        <p className="text-gold-light text-sm tracking-widest uppercase mb-3">Support</p>
        <h1 className="text-5xl font-bold text-white mb-2">
          Frequently Asked
        </h1>
        <h1 className="text-5xl font-bold text-gold-light mb-6">Questions</h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Everything you need to know about investing in real estate with AKR Group UAE
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-2 text-sm text-gold">
        <Link href="/" className="hover:text-gold-dark transition-colors">Home</Link>
        <span className="text-gold/50">/</span>
        <span className="text-velvet">FAQ</span>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-20">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full bg-white border border-gold/40 text-velvet placeholder-velvet/40 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setPage(1); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gold text-white"
                  : "bg-white border border-gold/40 text-velvet hover:border-gold"
              }`}
            >
              {cat} ({counts[cat]})
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-8">
          {paginated.length === 0 && (
            <p className="text-gold text-center py-12">No FAQs found matching your search.</p>
          )}
          {paginated.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gold/30 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
              >
                <div>
                  <span className="inline-block bg-gold text-white text-xs font-semibold px-2 py-0.5 rounded mb-2">
                    {faq.category}
                  </span>
                  <p className="text-velvet font-medium text-sm leading-snug">{faq.question}</p>
                </div>
                <div className="flex-shrink-0 mt-1">
                  {openId === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gold-dark" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gold" />
                  )}
                </div>
              </button>
              {openId === faq.id && (
                <div className="px-5 pb-5 border-t border-gold/30 pt-4">
                  <p className="text-velvet/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border border-gold/40 text-velvet text-sm disabled:opacity-30 hover:border-gold transition-colors"
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
                    : "border border-gold/40 text-velvet hover:border-gold"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border border-gold/40 text-velvet text-sm disabled:opacity-30 hover:border-gold transition-colors"
            >
              Next →
            </button>
          </div>
        )}
        <p className="text-center text-velvet/50 text-xs mb-16">
          Showing {Math.min((page - 1) * ITEMS_PER_PAGE + 1, filtered.length)}–
          {Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} FAQs
        </p>

        {/* Still have questions */}
        <div className="bg-white border border-gold/30 rounded-xl p-8 text-center">
          <h2 className="text-velvet text-2xl font-bold mb-2">Still have questions?</h2>
          <p className="text-velvet/70 text-sm mb-8">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="tel:+971558847365"
              className="bg-white border border-gold/30 rounded-lg p-6 flex flex-col items-center gap-3 hover:border-gold transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-gold-dark" />
              </div>
              <div>
                <p className="text-velvet font-medium text-sm">Call Us</p>
                <p className="text-gold-dark text-xs mt-1">+971 55 884 7365</p>
              </div>
            </a>
            <a
              href="mailto:info@akrgroupuae.com"
              className="bg-white border border-gold/30 rounded-lg p-6 flex flex-col items-center gap-3 hover:border-gold transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gold-dark" />
              </div>
              <div>
                <p className="text-velvet font-medium text-sm">Email Us</p>
                <p className="text-gold-dark text-xs mt-1">Get support</p>
              </div>
            </a>
            <a
              href="https://wa.me/971507772751"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gold/30 rounded-lg p-6 flex flex-col items-center gap-3 hover:border-gold transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-velvet font-medium text-sm">Chat with us</p>
                <p className="text-gold-dark text-xs mt-1">WhatsApp support</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
