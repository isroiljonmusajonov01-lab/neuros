import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar-wrapper">

      {/* TOP NAV */}
      <div className="top-nav">
        <div className="top-left">
          <span>English ▼</span>
          <span>Support</span>
        </div>

        <div className="top-right">
          <span>Blog</span>
          <span>About us ▼</span>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="navbar">
        <div className="navbar-left">
          <h2 className="logo">Neuros  <img className="uch" src="./img/logo.png" alt="" /></h2>

          <ul className="nav-links">
            <li>Features ▼</li>
            <li>Case Studies ▼</li>
            <li>Pricing</li>
            <li>Applications</li>
          </ul>
        </div>

        <div className="navbar-right">
          <button className="demo-btn">Get a demo</button>
          <button className="trial-btn">Start your free trial</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar