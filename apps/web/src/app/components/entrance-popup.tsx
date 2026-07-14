"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function EntrancePopup() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Don't show again if already seen this session
    if (sessionStorage.getItem("akr_entered")) {
      setVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("akr_entered", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-velvet-dark">
      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img src="/banner.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Corner decorations */}
      {["top-5 left-5 border-t border-l", "top-5 right-5 border-t border-r", "bottom-5 left-5 border-b border-l", "bottom-5 right-5 border-b border-r"].map((pos, i) => (
        <div key={i} className={`absolute w-14 h-14 border-gold ${pos}`} />
      ))}

      {/* Card */}
      <div className="relative z-10 w-[480px] border border-gold/30 bg-velvet text-center overflow-hidden mx-4">
        <div className="h-0.5 bg-gold w-full" />

        <div className="px-12 py-12">
          {/* Logo */}
        {/* Logo */}
<div className="w-20 h-20    flex items-center justify-center mx-auto mb-5">
  <img
    src="/logonew.png"
    alt="AKR Group UAE Logo"
    width={80}
    height={80}
    className="object-cover rounded-full"
  />
</div>

          <div className="text-gold-light text-xs tracking-[4px] uppercase mb-1">AKR Group UAE</div>
          <div className="text-white/70 text-xs tracking-[2px] uppercase mb-7">Financial & Real Estate Advisory</div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gold/25" />
            <div className="w-1.5 h-1.5 bg-gold rotate-45" />
            <div className="flex-1 h-px bg-gold/25" />
          </div>

          <h2 className="text-2xl font-bold text-pearl font-serif mb-2">
            Welcome to<br /><span className="text-gold-light">AKR Group UAE</span>
          </h2>
          <p className="text-xs text-white/70 leading-relaxed mb-8 max-w-xs mx-auto">
            Your trusted partner for premium real estate, financial, and investment advisory services across the UAE.
          </p>

          {/* Progress */}
          <div className="mb-2">
            <div className="w-full h-0.5 bg-gold/20 mb-2">
              <div className="h-full bg-gold transition-all duration-75" style={{ width: `${progress}%` }} />
            </div>
            <div className="text-xs text-white/70 tracking-widest uppercase mb-7">
              {progress < 100 ? `${progress}%` : "Ready to Enter"}
            </div>
          </div>

          {/* Enter button */}
          <button
            onClick={handleEnter}
            disabled={progress < 100}
            className="w-full bg-velvet-light hover:bg-gold disabled:opacity-40 disabled:cursor-not-allowed text-white hover:text-velvet text-xs font-bold tracking-[3px] uppercase py-4 transition-colors mb-3 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            Enter Website
          </button>

          <button onClick={handleEnter} className="text-xs text-white/70 hover:text-gold-light tracking-widest uppercase transition-colors">
            Skip Intro
          </button>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-5 px-8 py-3 border-t border-gold/15 bg-black/20">
          {["RERA", "DLD", "SHAMS", "25+ Years"].map((b) => (
            <div key={b} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-gold" />
              <span className="text-xs text-white/70 tracking-wider uppercase">{b}</span>
            </div>
          ))}
        </div>
        <div className="h-0.5 bg-gold/25" />
      </div>
    </div>
  );
}
