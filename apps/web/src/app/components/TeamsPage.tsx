"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    id: 1,
    name: "Mr. Ahmed Al Rashid",
    role: "Managing Director",
    department: "Management",
    languages: ["English", "Arabic"],
    image: null,
  },
  {
    id: 2,
    name: "Ms. Fatima Khan",
    role: "Senior Real Estate Advisor",
    department: "Sales",
    languages: ["English", "Urdu", "Hindi"],
    image: null,
  },
  {
    id: 3,
    name: "Mr. Ravi Sharma",
    role: "Financial Consultant",
    department: "Finance",
    languages: ["English", "Hindi"],
    image: null,
  },
  {
    id: 4,
    name: "Ms. Sara Mohammed",
    role: "Property Specialist",
    department: "Sales",
    languages: ["English", "Arabic"],
    image: null,
  },
  {
    id: 5,
    name: "Mr. John Williams",
    role: "Investment Advisor",
    department: "Finance",
    languages: ["English"],
    image: null,
  },
  {
    id: 6,
    name: "Ms. Priya Nair",
    role: "HR Manager",
    department: "HR",
    languages: ["English", "Malayalam", "Hindi"],
    image: null,
  },
  {
    id: 7,
    name: "Mr. Khalid Hassan",
    role: "Marketing Manager",
    department: "Media",
    languages: ["English", "Arabic", "Urdu"],
    image: null,
  },
  {
    id: 8,
    name: "Ms. Aisha Patel",
    role: "Sales Executive",
    department: "Sales",
    languages: ["English", "Hindi", "Gujarati"],
    image: null,
  },
];

const departments = ["All", "Management", "Sales", "Finance", "HR", "Media"];
const roles = ["All", "Managing Director", "Senior Real Estate Advisor", "Financial Consultant", "Property Specialist", "Investment Advisor", "HR Manager", "Marketing Manager", "Sales Executive"];
const languages = ["All", "English", "Arabic", "Urdu", "Hindi", "Malayalam", "Gujarati"];
const sortOptions = ["Order", "Name A-Z", "Name Z-A"];

export default function TeamsPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [langFilter, setLangFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Order");

  const deptCounts: Record<string, number> = { All: teams.length };
  departments.slice(1).forEach((d) => {
    deptCounts[d] = teams.filter((t) => t.department === d).length;
  });

  let filtered = teams.filter((t) => {
    const matchDept = activeDept === "All" || t.department === activeDept;
    const matchRole = roleFilter === "All" || t.role === roleFilter;
    const matchLang = langFilter === "All" || t.languages.includes(langFilter);
    return matchDept && matchRole && matchLang;
  });

  if (sortBy === "Name A-Z") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "Name Z-A") filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));

  return (
    <div className="min-h-screen bg-pearl">
      {/* Hero */}
      <div className="relative min-h-[340px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-velvet-dark opacity-90" />
        <div className="absolute inset-0 opacity-10">
          <img src="/banner.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <div className="inline-block border border-gold text-gold-dark text-xs tracking-widest uppercase px-4 py-1.5 mb-6">
            Meet Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Your Trusted
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gold-dark mb-6">
            Real Estate Experts
          </h1>
          <p className="text-gold-dark text-base mb-3 italic">
            Where expertise meets dedication & service meets excellence
          </p>
          <p className="text-velvet/60 text-sm max-w-lg mx-auto">
            Connect with our experienced team of real estate professionals ready to help you find your dream property
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gold-dark mb-8">
          <Link href="/" className="hover:text-gold-dark transition-colors">Home</Link>
          <span className="text-velvet/50">/</span>
          <span className="text-velvet/70">Teams</span>
        </div>

        {/* Department filter */}
        <p className="text-gold-dark text-sm font-medium mb-3">Filter by Department</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeDept === dept
                  ? "bg-gold text-white"
                  : "bg-pearl border border-gold/40 text-gold-dark hover:border-gold"
              }`}
            >
              {dept} ({deptCounts[dept] ?? 0})
            </button>
          ))}
        </div>

        {/* Role / Language / Sort filters */}
        <div className="flex flex-wrap gap-4 mb-10 items-center">
          <div className="flex items-center gap-2">
            <label className="text-gold-dark text-sm">Role</label>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="bg-pearl border border-gold/40 text-velvet/70 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-gold"
            >
              {roles.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-gold-dark text-sm">Language</label>
            <select
              value={langFilter}
              onChange={(e) => setLangFilter(e.target.value)}
              className="bg-pearl border border-gold/40 text-velvet/70 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-gold"
            >
              {languages.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-gold-dark text-sm">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-pearl border border-gold/40 text-velvet/70 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-gold"
            >
              {sortOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Team Grid */}
        {filtered.length === 0 ? (
          <p className="text-gold-dark text-center py-20">No team members found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((member) => (
              <div
                key={member.id}
                className="bg-pearl border border-gold/40 rounded-lg overflow-hidden hover:border-gold transition-colors group"
              >
                {/* Photo */}
                <div className="aspect-[3/4] bg-pearl flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 opacity-30">
                      <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center">
                        <svg className="w-8 h-8 fill-gold-dark" viewBox="0 0 24 24">
                          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                        </svg>
                      </div>
                      <span className="text-velvet/50 text-xs">No Photo</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  <p className="text-velvet font-medium text-sm mb-0.5">{member.name}</p>
                  <p className="text-gold-dark text-xs mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.languages.map((lang) => (
                      <span
                        key={lang}
                        className="bg-gold/10 border border-gold/40 text-gold-dark text-[10px] px-2 py-0.5 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
