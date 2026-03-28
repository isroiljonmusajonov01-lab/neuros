import { useState } from "react";
import "./Faqsection.css";

const faqs = [
  {
    id: 1,
    question: "What is Neuros and how does it differ from other analytics platforms?",
    answer:
      "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.",
  },
  {
    id: 2,
    question: "How does the AI-driven predictive analytics feature work?",
    answer:
      "Our AI analyzes your historical data and identifies patterns to forecast future trends. It continuously learns from new data, improving its predictions over time to help you make smarter business decisions.",
  },
  {
    id: 3,
    question: "Is my data secure with Neuros?",
    answer:
      "Absolutely. Neuros uses industry-leading encryption and security protocols to ensure your data is always protected. We are compliant with major data protection regulations including GDPR and SOC 2.",
  },
  {
    id: 4,
    question: "Can I integrate Neuros with other tools and platforms I currently use?",
    answer:
      "Yes! Neuros integrates seamlessly with a wide range of tools including CRMs, ERPs, marketing platforms, and more. Our open API also allows custom integrations tailored to your workflow.",
  },
  {
    id: 5,
    question: "How is the pricing structured for Neuros? Are there any hidden fees?",
    answer:
      "Neuros offers transparent, tiered pricing based on your usage and team size. There are no hidden fees — what you see is what you pay. You can start with a free trial and upgrade at any time.",
  },
  {
    id: 6,
    question: "I'm new to business analytics. Does Neuros offer any support or tutorials?",
    answer:
      "Definitely! Neuros provides onboarding support, a comprehensive knowledge base, video tutorials, and a dedicated support team ready to help you every step of the way.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-wrapper">
      {/* Chap tomon */}
      <div className="faq-left">
        <div className="faq-badge">✦ FAQ</div>
        <h2 className="faq-title">Frequently asked questions</h2>
        <p className="faq-subtitle">
          Explore our frequently asked questions to learn more about Neuros's
          features, security, integration capabilities, and more.
        </p>
      </div>

      {/* O'ng tomon */}
      <div className="faq-right">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${openId === faq.id ? "faq-item--open" : ""}`}
          >
            <button className="faq-question" onClick={() => toggle(faq.id)}>
              <div className="faq-question-left">
                <span className="faq-bar" />
                <span className="faq-question-text">{faq.question}</span>
              </div>
              <span className="faq-icon">{openId === faq.id ? "∧" : "∨"}</span>
            </button>

            {openId === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
