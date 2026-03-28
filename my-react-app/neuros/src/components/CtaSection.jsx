import "./CtaSection.css";

const features = [
  {
    id: 1,
    icon: "⚡",
    title: "Instant Access",
    desc: "Begin exploring Neuros's full suite of features immediately.",
  },
  {
    id: 2,
    icon: "🔒",
    title: "No Commitments",
    desc: "No credit card required, and you can cancel anytime.",
  },
  {
    id: 3,
    icon: "🎧",
    title: "Dedicated Support",
    desc: "Our team is here to assist you every step of the way during your trial.",
  },
];

export default function CtaSection() {
  return (
    <div className="cta-wrapper">
      {/* Fon chiziq effekti */}
      <div className="cta-bg-lines" />

      {/* Chap tomon */}
      <div className="cta-left">
        <h2 className="cta-title">
          Experience the Future of Business Analytics with Neuros
        </h2>
        <button className="cta-btn">
          Start your free trial <span className="cta-btn-icon">✦</span>
        </button>
      </div>

      {/* O'ng tomon */}
      <div className="cta-right">
        {features.map((f) => (
          <div key={f.id} className="cta-feature">
            <div className="cta-feature-icon">{f.icon}</div>
            <div>
              <div className="cta-feature-title">{f.title}</div>
              <div className="cta-feature-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
