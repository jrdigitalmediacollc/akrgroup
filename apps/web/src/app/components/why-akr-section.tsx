const advantages = [
  {
    num: "01",
    title: "Integrated Real Estate + Financial Advisory",
    desc: "A rare unified platform where property and finance expertise converge — eliminating the need for multiple advisors.",
  },
  {
    num: "02",
    title: "25+ Years Combined Expertise",
    desc: "Decades of deep market knowledge across real estate, banking, insurance, and strategic business advisory.",
  },
  {
    num: "03",
    title: "UAE Market Specialization",
    desc: "Rooted in the UAE ecosystem — Dubai, Sharjah, and beyond — with on-the-ground regulatory and market intelligence.",
  },
  {
    num: "04",
    title: "Confidential & Relationship-Driven",
    desc: "Every client engagement is handled with the utmost discretion, trust, and a long-term partnership mindset.",
  },
  {
    num: "05",
    title: "Access to Exclusive Opportunities",
    desc: "Off-market properties, priority investment pipelines, and curated financial products unavailable through conventional channels.",
  },
  {
    num: "06",
    title: "Compliance-Focused Advisory",
    desc: "Fully aligned with RERA, DLD, Central Bank, and SHAMS regulations — protecting your interests at every step.",
  },
];

export function WhyAkrSection() {
  return (
    <section className="py-20 px-10" style={{ background: "#1a0603" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block border border-amber-600 bg-amber-900/15 text-amber-400 text-xs tracking-widest px-4 py-1.5 uppercase mb-5">
            Our Distinction
          </span>
          <h2 className="text-4xl font-bold text-amber-100 font-serif mb-3">
            Why <span className="text-amber-400">AKR Group UAE</span>
          </h2>
          <div className="w-14 h-0.5 bg-amber-600 mx-auto mb-5" />
          <p className="text-amber-800 text-sm max-w-md mx-auto leading-relaxed">
            A value proposition built for high-net-worth individuals, investors, and business leaders who demand more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-amber-700/15 mb-px">
          {advantages.map((a) => (
            <div
              key={a.num}
              className="bg-[#2a0a05] hover:bg-[#3a0f08] transition-colors p-9 group relative"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-amber-600 transition-colors" />
              <div className="text-5xl font-bold font-serif text-amber-600/15 mb-4 tracking-tight">{a.num}</div>
              <div className="w-10 h-10 border border-amber-700/40 bg-amber-700/10 flex items-center justify-center mb-4">
                <span className="text-amber-600 text-sm font-bold">{a.title[0]}</span>
              </div>
              <h3 className="text-base font-bold text-amber-100 font-serif mb-3 leading-snug">{a.title}</h3>
              <p className="text-xs text-amber-900 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Luxury strip */}
        <div className="bg-amber-600 px-12 py-9 flex items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-0.5 h-12 bg-white/40 shrink-0" />
            <div>
              <div className="text-white/70 text-xs tracking-widest uppercase mb-1.5">Our Philosophy</div>
              <div className="text-white text-xl font-serif italic">
                We don't sell services — we structure outcomes.
              </div>
            </div>
          </div>
          <button className="border border-amber-200/40 bg-[#1a0603] text-amber-400 text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-[#2a0a05] transition-colors whitespace-nowrap">
            Start a Conversation
          </button>
        </div>

      </div>
    </section>
  );
}