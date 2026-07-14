const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Understanding your financial and investment objectives in depth",
  },
  {
    num: "02",
    title: "Strategy Design",
    desc: "Tailored real estate & financial structuring built around your goals",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Seamless coordination with full compliance and transparency",
  },
  {
    num: "04",
    title: "Ongoing Advisory",
    desc: "Long-term relationship and portfolio optimization over time",
  },
];

const bars = [100, 75, 50, 25];

export function ProcessSection() {
  return (
   <section className="relative py-20 px-10 overflow-hidden bg-pearl">
  <div className="absolute inset-0">
    <img src="/texture-bg.png" alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 " />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-18">
      <span className="inline-block border border-gold bg-gold/10 text-gold text-xs tracking-widest px-4 py-1.5 uppercase mb-5">
        How We Work
      </span>
      <h2 className="text-4xl font-bold text-velvet font-serif mb-3">
        Our <span className="text-gold-dark">Consulting</span> Process
      </h2>
      <div className="w-14 h-0.5 bg-gold mx-auto" />
    </div>

    {/* Steps */}
    <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-16">
      <div className="hidden lg:block absolute top-11 left-[calc(12.5%+44px)] right-[calc(12.5%+44px)] h-px bg-gold/30" />
      {steps.map((step, i) => (
        <div key={step.num} className="flex flex-col items-center text-center z-10">
          <div className={`w-[88px] h-[88px] border-2 flex flex-col items-center justify-center mb-7 transition-colors ${
            i === 0
              ? "border-gold bg-gold"
              : "border-gold/40 bg-white hover:border-gold"
          }`}>
            <span className={`text-xs font-bold tracking-widest mb-0.5 ${i === 0 ? "text-white" : "text-gold-dark"}`}>
              {step.num}
            </span>
          </div>
          <h3 className="text-base font-bold text-velvet font-serif mb-2">{step.title}</h3>
          <p className="text-xs text-velvet/70 leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>

    {/* Bottom */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gold/15">
      <div className="bg-white p-10 border-l-4 border-gold">
        <div className="text-gold-dark text-xs tracking-widest uppercase mb-4">Our Promise</div>
        <p className="font-serif italic text-lg text-velvet leading-relaxed mb-4">
          "From first conversation to long-term partnership — we are with you at every stage."
        </p>
        <p className="text-xs text-velvet/70 leading-relaxed">
          Every step is designed to protect your interests, maximize outcomes, and build a lasting advisory relationship rooted in trust.
        </p>
      </div>
      <div className="bg-white p-10 flex flex-col justify-center gap-4">
        {steps.map((step, i) => (
          <div key={step.num} className="flex items-center gap-4 px-4 py-3 border border-gold/30 bg-gold/[0.04]">
            <span className="text-gold-dark text-xs font-bold tracking-wider min-w-[24px]">{step.num}</span>
            <span className="text-velvet text-sm font-semibold">{step.title}</span>
            <div className="ml-auto w-16 h-0.5 bg-gold/25">
              <div className="h-full bg-gold" style={{ width: `${bars[i]}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section> );
}
