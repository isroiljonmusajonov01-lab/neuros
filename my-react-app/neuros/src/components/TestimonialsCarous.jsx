import { useState, useEffect, useRef } from "react";
import "./TestimonialsCarous.css";

const testimonials = [
  {
    id: 1,
    text: "Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.",
    name: "Nathan D. Hall",
    role: "Project Lead",
    avatar: "NH",
  },
  {
    id: 2,
    text: "Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    name: "Naomi K. Johnson",
    role: "Product Manager",
    avatar: "NJ",
  },
  {
    id: 3,
    text: "Real-time data processing with Neuros has changed how we make decisions. It's a must-have tool for modern businesses.",
    name: "Michael O. Lopez",
    role: "Operations Director",
    avatar: "ML",
  },
  {
    id: 4,
    text: "Since switching to Neuros, our team productivity has increased significantly. The analytics are clear and actionable.",
    name: "Sara T. Williams",
    role: "CEO",
    avatar: "SW",
  },
  {
    id: 5,
    text: "Neuros gives us insights we never had before. It's transformed how we approach our business strategy every day.",
    name: "James R. Kim",
    role: "Data Analyst",
    avatar: "JK",
  },
];

const VISIBLE_CARDS = 3;

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const total = testimonials.length;

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 400);
  };

  const next = () => goTo((current + 1) % total);
  const prev = () => goTo((current - 1 + total) % total);

  useEffect(() => {
    intervalRef.current = setInterval(next, 3500);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const getVisibleIndexes = () => {
    const indexes = [];
    for (let i = 0; i < VISIBLE_CARDS; i++) {
      indexes.push((current + i) % total);
    }
    return indexes;
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <div className="tc-wrapper">
      <div className="tc-header">
        <h2 className="tc-title">The Neuros Experience</h2>
        <p className="tc-subtitle">
          At Neuros, we pride ourselves on delivering top-notch AI-driven
          business analytics. But don't just take our word for it. Hear what our
          satisfied users have to say.
        </p>
      </div>

      <div className="tc-carousel">
        <button className="tc-arrow" onClick={prev} aria-label="Previous">
          &#8592;
        </button>

        <div className="tc-cards-container">
          {visibleIndexes.map((idx, pos) => {
            const t = testimonials[idx];
            return (
              <div
                key={`${idx}-${current}`}
                className={`tc-card ${animating ? "tc-card--animating" : ""}`}
                style={{ transitionDelay: `${pos * 0.06}s` }}
              >
                <p className="tc-card-text">"{t.text}"</p>
                <div className="tc-card-footer">
                  <div className="tc-avatar">{t.avatar}</div>
                  <div>
                    <div className="tc-name">{t.name}</div>
                    <div className="tc-role">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="tc-arrow" onClick={next} aria-label="Next">
          &#8594;
        </button>
      </div>

      <div className="tc-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`tc-dot ${i === current ? "tc-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
