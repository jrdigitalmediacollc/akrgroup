import Image from "next/image";

const services = [
  {
    sector: "Sector A",
    title: "Real Estate Advisory",
    location: "Dubai — AKR Realty LLC",
    overview: "End-to-end property advisory aligned with Dubai's regulatory standards.",
    image: "/realestate.jpg",
    items: [
      { label: "Buy | Sell ", desc: "Residential & Commercial" },
      { label: "Off-Plan Investment Opportunities" },
      { label: "Distress Property Solutions" },
      { label: "Portfolio Structuring" },
    ],
    compliance: "Regulated by Real Estate Regulatory Agency & Dubai Land Department",
  },
  {
    sector: "Sector B",
    title: "Financial & Insurance Advisory",
    location: "Sharjah — SHAMS Licensed",
    overview: "Structured financial solutions supporting asset growth and protection.",
    image: "/financial.jpg",
    subSections: [
      { title: "Banking Advisory", items: ["Mortgage Loans", "Personal Loans & Credit Cards"] },
      { title: "Insurance Advisory", items: ["Life, Medical, Motor & Home Insurance", "Mortgage Protection"] },
      { title: "Investment Support", items: ["Mutual Fund Analysis", "Risk Assessment & Financial Structuring"] },
    ],
    compliance: "Licensed under Sharjah Media City — Non-custodial advisory services",
  },
  {
    sector: "Sector C",
    title: "Marketing & Business Solutions",
    location: "UAE-Wide Coverage",
    overview: "Driving visibility, engagement, and revenue growth for businesses across the UAE.",
    image: "/marketing.jpg",
    items: [
      { label: "Events Production & Brand Activation" },
      { label: "Marketing Campaigns & Promotions" },
      { label: "Digital & Social Media Marketing" },
      { label: "Direct & Email Marketing" },
    ],
    compliance: "Strategic growth partner for businesses & high-net-worth individuals",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 px-10" style={{ background: "#2a0a05" }}>
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block border border-amber-600 bg-amber-900/20 text-amber-400 text-xs tracking-widest px-4 py-1.5 uppercase mb-5">
          What We Offer
        </span>
        <h2 className="text-4xl font-bold text-amber-100 font-serif mb-3">
          Our <span className="text-amber-400">Premium</span> Services
        </h2>
        <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-4" />
        <p className="text-amber-800 text-sm max-w-lg mx-auto leading-relaxed">
          Three powerful pillars of advisory — unified under one trusted partner across the UAE.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-amber-700/20">
        {services.map((s) => (
          <div key={s.sector} className="bg-[#3a0f08] hover:bg-[#4a1810] transition-colors flex flex-col">
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image src={s.image} alt={s.title} fill className="object-cover brightness-75" />
            </div>
            {/* Amber accent line */}
            <div className="h-0.5 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />
            {/* Body */}
            <div className="p-7 flex flex-col flex-1">
              <span className="text-amber-500 text-xs tracking-widest uppercase mb-2">{s.sector}</span>
              <h3 className="text-xl font-bold text-amber-100 font-serif mb-1">{s.title}</h3>
              <p className="text-amber-600 text-xs tracking-wide mb-3">{s.location}</p>
              <p className="text-amber-200/60 text-sm leading-relaxed mb-5">{s.overview}</p>

              {/* Simple items */}
              {s.items && (
                <ul className="flex flex-col gap-2 mb-5">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-amber-200/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      {item.label}{item.desc ? ` — ${item.desc}` : ""}
                    </li>
                  ))}
                </ul>
              )}

              {/* Sub-sections (Finance card) */}
              {s.subSections && s.subSections.map((sub) => (
                <div key={sub.title} className="mb-4">
                  <div className="text-amber-500 text-xs tracking-widest uppercase border-b border-amber-700/30 pb-1.5 mb-2">
                    {sub.title}
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {sub.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-amber-200/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Compliance */}
              <div className="mt-auto pt-4 border-l-2 border-amber-600 pl-3 bg-amber-500/5 py-2 text-xs text-amber-700 leading-relaxed">
                <span className="text-amber-600 font-semibold">Note: </span>{s.compliance}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div className="max-w-6xl mx-auto mt-0.5 border border-amber-700/25 bg-amber-500/5 px-10 py-7 flex items-center justify-between gap-6">
        <p className="font-serif text-lg text-amber-100 italic">
          Ready to explore our services? <span className="text-amber-400">Let's build your strategy.</span>
        </p>
        <button className="bg-amber-600 hover:bg-amber-500 text-white text-xs tracking-widest uppercase px-8 py-3 transition-colors whitespace-nowrap">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
