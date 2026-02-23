import React from "react";
import {
    Calculator,
    Building2,
    Leaf,
    TrendingUp,
    ShieldCheck,
    Users
} from "lucide-react";

interface ServiceProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceProps) => (
    <div className="service-card">
        <div className="service-card__icon-wrapper">
            {icon}
        </div>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
    </div>
);

const services = [
    {
        icon: <Calculator size={24} />,
        title: "Advanced Calculators",
        description: "Mortgage, ROI, and investment calculators with XIRR analysis",
    },
    {
        icon: <Building2 size={24} />,
        title: "Real Estate Advisory",
        description: "Expert guidance on property investments and market insights",
    },
    {
        icon: <Leaf size={24} />, /* Used Leaf as a stand-in for the financial planning icon which looks like a leaf/growth */
        title: "Financial Planning",
        description: "Comprehensive financial advisory services tailored to your needs",
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Investment Analysis",
        description: "ROI calculations and portfolio performance tracking",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Regulatory Compliance",
        description: "Fully compliant with RERA, Central Bank, and Insurance Authority",
    },
    {
        icon: <Users size={24} />,
        title: "Expert Advisors",
        description: "Dedicated professionals to guide your investment decisions",
    },
];

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="services__container">
                <div className="services__header">
                    <h2 className="services__title">Our Services</h2>
                    <p className="services__subtitle">
                        Comprehensive advisory solutions for your financial goals
                    </p>
                </div>
                <div className="services__grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
