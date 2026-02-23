import React from "react";
import {
    ShieldCheck,
    Users,
    LineChart
} from "lucide-react";

interface BenefitProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitProps) => (
    <div className="why-card">
        <div className="why-card__icon-wrapper">
            {icon}
        </div>
        <h3 className="why-card__title">{title}</h3>
        <p className="why-card__description">{description}</p>
    </div>
);

const benefits = [
    {
        icon: <ShieldCheck size={28} />,
        title: "Licensed & Regulated",
        description: "Fully compliant with UAE regulatory authorities including RERA and Central Bank",
    },
    {
        icon: <Users size={28} />,
        title: "Expert Advisors",
        description: "Experienced professionals dedicated to your financial success",
    },
    {
        icon: <LineChart size={28} />,
        title: "Data-Driven Insights",
        description: "Advanced analytics and calculators to inform your investment decisions",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="why-choose" id="why-choose">
            <div className="why-choose__container">
                <div className="why-choose__header">
                    <h2 className="why-choose__title">Why Choose AKR Group UAE?</h2>
                </div>
                <div className="why-choose__grid">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
}
