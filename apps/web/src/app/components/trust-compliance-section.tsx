const regulations = [
  {
    authority: "Dubai Real Estate",
    title: "RERA & DLD Regulated",
    desc: "AKR Realty LLC operates in full compliance with the Real Estate Regulatory Agency and Dubai Land Department — the UAE's foremost property authorities.",
    pill: "License Verified",
  },
  {
    authority: "Sharjah Entity",
    title: "SHAMS Licensed",
    desc: "Our Sharjah-based financial and insurance advisory arm is officially licensed under Sharjah Media City, providing non-custodial advisory services.",
    pill: "SHAMS Approved",
  },
];

const principles = [
  {
    title: "Transparent Advisory",
    desc: "All advisory practices are honest, ethical, and non-misleading — ensuring clients receive clear and accurate guidance at every stage.",
  },
  {
    title: "Data-Driven, Not Speculative",
    desc: "We never guarantee returns. Every insight is grounded in real market data, rigorous analysis, and expert professional judgment.",
  },
  {
    title: "Client-First Approach",
    desc: "Your interests come first — always. Our advice is tailored, independent, and free from third-party sales pressure or conflicts of interest.",
  },
  {
    title: "Full Regulatory Alignment",
    desc: "Operating across Dubai and Sharjah with licenses and registrations maintained in good standing with all relevant UAE authorities.",
  },
];

export function TrustComplianceSection() {
  return (
    <section className="py-20 px-10" style={{ background: "#120402" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block border border-amber-600 bg-amber-900/10 text-amber-400 text-xs tracking-widest px-4 py-1.5 uppercase mb-5">
            Regulatory Alignment
          </span>
          <h2 className="text-4xl font-bold text-amber-100 font-serif mb-3">
            Trust &amp; <span className="text-amber-400">Compliance</span>
          </h2>
          <div className="w-14 h-0.5 bg-amber-600 mx-auto" />
        </div>

        {/* Regulation cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-amber-700/10 mb-px">
          {regulations.map((r) => (
            <div key={r.title} className="bg-[#1a0603] hover:bg-[#220804] transition-colors p-10 flex gap-6">
              <div className="w-14 h-14 border border-amber-600 bg-amber-600/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 fill-amber-600" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <div>
                <div className="text-amber-600 text-xs tracking-widest uppercase mb-1.5">{r.authority}</div>
                <h3 className="text-lg font-bold text-amber-100 font-serif mb-2">{r.title}</h3>
                <p className="text-xs text-amber-900 leading-relaxed mb-3">{r.desc}</p>
                <span className="inline-block border border-amber-700/40 bg-amber-600/10 text-amber-600 text-xs tracking-widest px-3 py-1 uppercase">
                  {r.pill}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-amber-700/10 mb-px">
          {principles.map((p) => (
            <div key={p.title} className="bg-[#1a0603] hover:bg-[#220804] transition-colors p-7 flex gap-4">
              <div className="w-7 h-7 border border-amber-700/40 bg-amber-600/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 fill-amber-600" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-amber-100 mb-1.5">{p.title}</div>
                <div className="text-xs text-amber-900 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border border-amber-700/20 border-t-2 border-t-amber-600 bg-[#0e0302] px-8 py-5 flex gap-4 items-start">
          <svg className="w-5 h-5 fill-amber-600 shrink-0 mt-0.5" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <p className="text-xs text-amber-900 leading-relaxed">
            <span className="text-amber-600 font-semibold">Important Disclaimer: </span>
            All calculators and estimates provided are for advisory purposes only and do not constitute financial advice. Results are indicative and subject to approval by relevant financial institutions. Past performance does not guarantee future results. This platform does not facilitate direct transactions between clients and property listings.
          </p>
        </div>

      </div>
    </section>
  );
}