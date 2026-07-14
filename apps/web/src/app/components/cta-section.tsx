"use client";

import { useRouter } from "next/navigation";

export function CTASection() {
  const router = useRouter();

  return (
  <section className="relative min-h-[480px] flex flex-col justify-center overflow-hidden bg-velvet">

  {/* Texture background */}
  <div className="absolute inset-0 z-0">
    <img src="/texture-bg.png" alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 " />
  </div>

  {/* Side accent bars */}
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold z-20" />
  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gold z-20" />

  {/* Content */}
  <div className="relative z-30 max-w-4xl mx-auto px-8 py-20 text-center">

    <span className="inline-block border border-gold/50 bg-gold/10 text-gold-light text-xs tracking-widest px-5 py-1.5 uppercase mb-7">
      Begin Your Journey
    </span>

    <h2 className="text-4xl md:text-5xl font-bold text-pearl font-serif leading-snug mb-3">
      Start Your Strategic Journey<br />
      with <span className="text-gold-light">AKR Group UAE</span>
    </h2>

    <div className="w-14 h-0.5 bg-gold mx-auto my-6" />

    <p className="text-base text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
      Connect with our advisory team for tailored solutions across real estate, finance, and investment planning.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      <button
        onClick={() => router.push("/contact")}
        className="bg-velvet hover:bg-velvet-light text-white text-xs font-bold tracking-widest uppercase px-10 py-4 transition-colors"
      >
        Book Private Consultation
      </button>
      <button
        onClick={() => router.push("/contact")}
        className="border border-gold text-pearl hover:border-gold-light hover:text-gold-light text-xs tracking-widest uppercase px-10 py-4 transition-colors"
      >
        Contact Us
      </button>
    </div>

    {/* Trust badges */}
    <div className="flex flex-wrap items-center justify-center gap-6">
      {["RERA Regulated", "SHAMS Licensed", "Guided by Vision - Led by 25+ Years of Expertise", "Confidential Advisory"].map((item, i, arr) => (
        <div key={item} className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs text-white tracking-widest uppercase">{item}</span>
          </div>
          {i < arr.length - 1 && (
            <div className="w-px h-4 bg-gold/30" />
          )}
        </div>
      ))}
    </div>

  </div>
</section>
  );
}
