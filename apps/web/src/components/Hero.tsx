import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            {/* Top gold accent line */}
            <div className="hero-accent-line" />

            <div className="hero-content">
                <h1 className="hero-heading">
                    Premium Financial &amp;
                    <br />
                    Real Estate Advisory
                </h1>
                <p className="hero-subheading">
                    Expert guidance for your investment journey in the UAE
                </p>

                <div className="hero-cta-group">
                    <Link href="/calculators" className="hero-btn hero-btn--primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="hero-btn-icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM6 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-5 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Try Our Calculators
                    </Link>
                    <Link href="/properties" className="hero-btn hero-btn--outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="hero-btn-icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        View Properties
                    </Link>
                </div>
            </div>

            {/* Bottom gold accent line */}
            <div className="hero-accent-line" />
        </section>
    );
}
