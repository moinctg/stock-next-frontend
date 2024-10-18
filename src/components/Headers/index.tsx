 import Link from "next/link"

 const Headers = () => {

    return(
<div>
<div id="preloder">
        <div className="loader"></div>
      </div>

   
      <header className="header-section clearfix">
        <div className="container-fluid">
          <a href="index.html" className="site-logo">
            <img src="/assets/img/logo.png" alt="Logo" />
          </a>
          <div className="responsive-bar">
            <i className="fa fa-bars"></i>
          </div>
          <a href="#" className="user">
            <i className="fa fa-user"></i>
          </a>
          <Link href="/login" className="site-btn">Admin Login</Link>
          <nav className="main-menu">
            <ul className="menu-list">
            {/* <Link href="/posts/first-post">this page!</Link> */}
              <li><Link href="/">Home</Link></li> 
              <li><a href="/features">Features</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h2>
                Invest in <span>Bitcoin</span> <br />
                Bitcoin Trading
              </h2>
              <h4>Use modern progressive technologies of Bitcoin to earn money</h4>
              <form className="hero-subscribe-from">
                <input type="text" placeholder="Enter your email" />
                <button className="site-btn sb-gradients">Get Started</button>
              </form>
            </div>
            <div className="col-md-6">
              <img src="/assets/img/laptop.png" className="laptop-image" alt="Laptop" />
            </div>
          </div>
        </div>
      </section>


      </div>
    )
 }

 export default Headers