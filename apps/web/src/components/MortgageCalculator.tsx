"use client";

import { useState, useCallback } from "react";

function calculateEMI(
    principal: number,
    annualRate: number,
    tenureMonths: number
) {
    if (principal <= 0 || tenureMonths <= 0) return 0;
    if (annualRate <= 0) return principal / tenureMonths;
    const monthlyRate = annualRate / 12 / 100;
    const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return Math.round(emi);
}

function formatCurrency(value: number): string {
    return value.toLocaleString("en-AE");
}

export default function MortgageCalculator() {
    const [propertyValue, setPropertyValue] = useState(1000000);
    const [downPayment, setDownPayment] = useState(250000);
    const [interestRate, setInterestRate] = useState(4.5);
    const [tenure, setTenure] = useState(300);

    const loanAmount = Math.max(0, propertyValue - downPayment);
    const emi = calculateEMI(loanAmount, interestRate, tenure);

    const handleNumberInput = useCallback(
        (setter: (v: number) => void, allowFloat = false) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const val = e.target.value;
                if (val === "") {
                    setter(0);
                    return;
                }
                const parsed = allowFloat ? parseFloat(val) : parseInt(val, 10);
                if (!isNaN(parsed)) setter(parsed);
            },
        []
    );

    return (
        <section className="mortgage-calc">
            <div className="mortgage-calc__container">
                {/* Solid border wrapper */}
                <div className="mortgage-calc__card">
                    <div className="mortgage-calc__header">
                        <h2 className="mortgage-calc__title">Mortgage Calculator</h2>
                        <p className="mortgage-calc__subtitle">
                            Get an instant estimate of your monthly payments
                        </p>
                    </div>

                    <div className="mortgage-calc__body">
                        {/* Input Fields */}
                        <div className="mortgage-calc__inputs">
                            <div className="mortgage-calc__field">
                                <label className="mortgage-calc__label">
                                    Property Value (AED)
                                </label>
                                <input
                                    type="number"
                                    className="mortgage-calc__input"
                                    value={propertyValue || ""}
                                    onChange={handleNumberInput(setPropertyValue)}
                                    min={0}
                                    placeholder="Enter property value"
                                />
                            </div>

                            <div className="mortgage-calc__field">
                                <label className="mortgage-calc__label">
                                    Down Payment (AED)
                                </label>
                                <input
                                    type="number"
                                    className="mortgage-calc__input"
                                    value={downPayment || ""}
                                    onChange={handleNumberInput(setDownPayment)}
                                    min={0}
                                    max={propertyValue}
                                    placeholder="Enter down payment"
                                />
                            </div>

                            <div className="mortgage-calc__field">
                                <label className="mortgage-calc__label">
                                    Interest Rate (%)
                                </label>
                                <input
                                    type="number"
                                    className="mortgage-calc__input"
                                    value={interestRate || ""}
                                    onChange={handleNumberInput(setInterestRate, true)}
                                    min={0}
                                    step={0.1}
                                    placeholder="Enter interest rate"
                                />
                            </div>

                            <div className="mortgage-calc__field">
                                <label className="mortgage-calc__label">
                                    Loan Tenure (Months)
                                </label>
                                <input
                                    type="number"
                                    className="mortgage-calc__input"
                                    value={tenure || ""}
                                    onChange={handleNumberInput(setTenure)}
                                    min={1}
                                    placeholder="Enter loan tenure"
                                />
                            </div>
                        </div>

                        {/* Result Panel */}
                        <div className="mortgage-calc__result">
                            <div className="mortgage-calc__result-card">
                                <span className="mortgage-calc__result-label">
                                    Estimated Monthly EMI
                                </span>
                                <span className="mortgage-calc__result-amount">
                                    AED {formatCurrency(emi)}
                                </span>
                                <span className="mortgage-calc__result-loan">
                                    Loan Amount: AED {formatCurrency(loanAmount)}
                                </span>
                                <button className="mortgage-calc__result-btn" type="button">
                                    View Detailed Report
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="mortgage-calc__disclaimer">
                        * This is an indicative calculation. Final terms subject to lender
                        approval.
                    </p>
                </div>
            </div>
        </section>
    );
}
