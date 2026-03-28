import "./ApplicationsSection.css";

const apps = [
  {
    id: 1,
    img: "./public/img/our1.png",
    title: "Predictive Power",
    desc: "Harness Neuros's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions.",
    tags: ["Finance", "Retail", "E-commerce"],
  },
  {
    id: 2,
    img: "./public/img/our2.png",
    title: "Connect with Ease",
    desc: "Integrate Neuros with your existing tools and platforms for a unified analytics experience. From CRMs to ERPs, we've got you covered.",
    tags: ["Tech", "Healthcare", "Manufacturing"],
  },
  {
    id: 3,
    img: "./public/img/our3.png",
    title: "Visualize Your Success",
    desc: "Craft bespoke dashboards that resonate with your brand's goals. With drag-and-drop functionalities, visualizing your data has never been easier.",
    tags: ["Marketing", "Sales", "Operations"],
  },
  {
    id: 4,
    img: "./public/img/our4.png",
    title: "Stay Updated, Always",
    desc: "With Neuros's real-time data processing, you're always in the know. Make decisions based on the latest data and trends.",
    tags: ["E-commerce", "Logistics", "Supply Chain"],
  },
  {
    id: 5,
    img: "./public/img/our5.png",
    title: "Your Data's Safe Haven",
    desc: "Rest easy knowing your data is protected with Neuros's top-tier security protocols. From encryption to access controls, we've got you covered.",
    tags: ["Finance", "Healthcare", "Legal"],
  },
  {
    id: 6,
    img: "./public/img/our6.png",
    title: "Collaborate and Conquer",
    desc: "Work together seamlessly with Neuros's collaborative features. Share insights, annotate charts, and drive collective growth.",
    tags: ["Design", "Development", "Project Management"],
  },
  {
    id: 7,
    img: "./public/img/our7.png",
    title: "Simplicity Meets Power",
    desc: "Neuros offers an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more time acting on insights.",
    tags: ["All Industries"],
  },
  {
    id: 8,
    img: "./public/img/our8.png",
    title: "Let AI Do the Heavy Lifting",
    desc: "Receive automated insights and recommendations tailored to your business needs. Let Neuros's AI guide your strategy.",
    tags: ["Retail", "Finance", "Enterprise"],
  },
  {
    id: 9,
    img: "./public/img/our9.png",
    title: "Scale with Confidence",
    desc: "Whether you're a startup or an enterprise, Neuros scales with you. Experience robust analytics solutions that grow as your business grows.",
    tags: ["Startup", "SMB", "Enterprise"],
  },
];

export default function ApplicationsSection() {
  return (
    <div className="ap-wrapper">
      {/* Badge */}
      <div className="ap-badge">✦ Applications</div>

      {/* Header */}
      <h2 className="ap-title">Insights and predictions made easy</h2>
      <p className="ap-subtitle">
        Advanced business intelligence tools enhance efficiency across your
        entire operation. By predicting future revenue and dissecting marketing
        effectiveness, these tools provide you with the critical insights needed
        for informed decision-making.
      </p>

      {/* Grid */}
      <div className="ap-grid">
        {apps.map((app) => (
          <div key={app.id} className="ap-card">
            <div className="ap-card-icon">
              <img className="ddd" src={app.img} alt="" />
            </div>
            <div className="ap-card-title">{app.title}</div>
            <div className="ap-card-desc">{app.desc}</div>
            <div className="ap-card-tags">
              {app.tags.map((tag, i) => (
                <span key={i} className="ap-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="ap-btn">Explore more application</button>
    </div>
  );
}
