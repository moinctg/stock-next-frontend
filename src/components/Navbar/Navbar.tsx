
// import Logo from "/public/assets/img/logo.png";
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () =>{
  return (
    <>
    <header className="header-section clearfix">
		<div className="container-fluid">
			<a href="index.html" className="site-logo">
      <Image src="/assets/img/logo.png" width={146} height={120} alt='logo'/>
			</a>
			<div className="responsive-bar"><i className="fa fa-bars"></i></div>
			<a href="" className="user"><i className="fa fa-user"></i></a>
			 <Link href="/auth/signin" className="site-btn">Admin Login</Link>
			<nav className="main-menu ">
      <ul className="menu-list">
   <li><Link href="#home">Home</Link></li> 
   <li><Link  href="#features">Features </Link></li>
   <li><Link href="#team">Team</Link></li>
   <li><Link href="#about">About</Link></li>
   <li><Link href="#contact">Contact</Link></li>
 </ul>
			</nav>
		</div>
	</header>
    
    
    </>
  
     )
}

export default Navbar





// <div>
// <header className="header-section clearfix">
// <div className="container-fluid">
//   <Link href="/home" className="site-logo">
  


//   </Link>
//   <div className="responsive-bar">
//     <i className="fa fa-bars"></i>
//   </div>
//   <a href="#" className="user">
//     <i className="fa fa-user"></i>
//   </a>
//   <Link href="/auth/signin" className="site-btn">Admin Login</Link>
//   <nav className="main-menu">
//     <ul className="menu-list">
   
//       <li><Link href="#home">Home</Link></li> 
//       <li><Link  href="#features">Features </Link></li>
//       <li><Link href="#team">Team</Link></li>
//       <li><Link href="#about">About</Link></li>
//       <li><Link href="#contact">Contact</Link></li>
//     </ul>
//   </nav>
// </div>
// </header>
// </div>