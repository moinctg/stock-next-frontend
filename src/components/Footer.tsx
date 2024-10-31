
import  Image from 'next/image'
export default function Footer ()  {
    return (

      <>
      <div>
      <footer className="footer-section">
        <div className="container">
          <div className="row spad">
            {/* Footer widget - Logo and description */}
            <div className="col-md-6 col-lg-3 footer-widget">
              <Image src="/assets/img/logo.png" className="mb-4" alt="Logo" />
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.
              </p>
              <span>
                Copyright &copy; {new Date().getFullYear()} All rights reserved |
              
            
                  Moinuddin Kamal 
                  ID:006-40-08 
               
              </span>
            </div>
  
            {/* Footer widget - Resources */}
            <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
              <h5 className="widget-title">Resources</h5>
              <ul>
                <li>
                  <a href="#">How to Buy Coin</a>
                </li>
                <li>
                  <a href="#">Coin Overview</a>
                </li>
                <li>
                  <a href="#">Blog News</a>
                </li>
                <li>
                  <a href="#">How to Sell Coin</a>
                </li>
                <li>
                  <a href="#">Purchase Theme</a>
                </li>
              </ul>
            </div>
  
            {/* Footer widget - Quick Links */}
            <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
              <h5 className="widget-title">Quick Links</h5>
              <ul>
                <li>
                  <a href="#">Network Stats</a>
                </li>
                <li>
                  <a href="#">Block Explorers</a>
                </li>
                <li>
                  <a href="#">Governance</a>
                </li>
                <li>
                  <a href="#">Exchange Markets</a>
                </li>
                <li>
                  <a href="#">Get Theme</a>
                </li>
              </ul>
            </div>
  
            {/* Footer widget - Social Media */}
            <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
              <h5 className="widget-title">Follow Us</h5>
              <div className="social">
                <a href="#" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="google">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer bottom */}
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
                <a href="#">
                  <Image src="/assets/img/appstore.png" alt="App Store" className="mr-2" />
                </a>
                <a href="#">
                  <Image src="/assets/img/playstore.png" alt="Play Store" />
                </a>
              </div>
              <div className="col-lg-8 text-center text-lg-right">
                <ul className="footer-nav">
                  <li>
                    <a href="#">DPA</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="mailto:support@company.com">support@company.com</a>
                  </li>
                  <li>
                    <a href="tel:(123)456-7890">(123) 456-7890</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
      
      </>

    )
}
