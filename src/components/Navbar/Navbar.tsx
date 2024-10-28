import Link from 'next/link'
const Navbar = () =>{
  return (
    <div>
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
          <Link href="/auth/signin" className="site-btn">Admin Login</Link>
          <nav className="main-menu">
            <ul className="menu-list">
            {/* <Link href="/posts/first-post">this page!</Link> */}
              <li><Link href="#home">Home</Link></li> 
              <li><Link  href="#features">Features </Link></li>
              <li><Link href="#team">Team</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
     </div>
     )
}

export default Navbar