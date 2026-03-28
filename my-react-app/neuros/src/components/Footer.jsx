import "./Footer.css";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.013 8.333 0 8.741 0 12c0 3.259.013 3.667.072 4.947.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.987 8.741 24 12 24s3.667-.013 4.947-.072c1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.085-1.856-.601-3.698-1.942-5.039C20.645.673 18.803.157 16.947.072 15.667.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const footerLinks = [
  {
    title: "About Neuros",
    links: ["Company Overview", "Careers", "Press & Media", "Testimonials"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Webinars & Events", "Case Studies"],
  },
  {
    title: "Support & Contact",
    links: ["Contact Us", "Technical Support", "Feedback", "Community Forum"],
  },
];

const socials = [
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <TwitterIcon />, label: "Twitter / X" },
  { icon: <LinkedinIcon />, label: "Linkedin" },
];

export default function Footer() {
  return (
    <footer className="ft-wrapper">
      {/* Yuqori: logo + chiziq */}
      <div className="ft-top">
        <div className="ft-logo">
          Neuros <span className="ft-logo-star">✦</span>
        </div>
        <div className="ft-divider-top" />
      </div>

      {/* Links */}
      <div className="ft-links-row">
        {footerLinks.map((col) => (
          <div key={col.title} className="ft-col">
            <div className="ft-col-title">{col.title}</div>
            <ul className="ft-col-list">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="ft-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Connect */}
        <div className="ft-col">
          <div className="ft-col-title">Connect</div>
          <ul className="ft-col-list">
            {socials.map((s) => (
              <li key={s.label} className="ft-social-item">
                <span className="ft-social-icon">{s.icon}</span>
                <a href="#" className="ft-link">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pastki */}
      <div className="ft-divider-bottom" />
      <div className="ft-bottom">
        <span className="ft-copy">©2023 NIMBUS · All rights reserved.</span>
        <div className="ft-bottom-links">
          <a href="#" className="ft-bottom-link">Term of use</a>
          <a href="#" className="ft-bottom-link">Privacy policy</a>
          <a href="#" className="ft-bottom-link">Security</a>
        </div>
      </div>
    </footer>
  );
}
