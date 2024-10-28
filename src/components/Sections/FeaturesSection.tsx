// components/sections/FeaturesSection.tsx
export default function FeaturesSection() {
    return (
        <>
      <section className="features-section spad gradient-bg">
        <div className="container text-white">
          <div className="section-title text-center">
            <h2>Our Features</h2>
            <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
          </div>
          <div className="row">
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-mobile"></i>
              <div className="feature-content">
                <h4>Mobile Apps</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-shield"></i>
              <div className="feature-content">
                <h4>Safe & Secure</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-wallet"></i>
              <div className="feature-content">
                <h4>Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-headphone-alt"></i>
              <div className="feature-content">
                <h4>Experts Support</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-reload"></i>
              <div className="feature-content">
                <h4>Instant Exchange</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-panel"></i>
              <div className="feature-content">
                <h4>Recurring Buys</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
<section className="fact-section gradient-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>60</h2>
              <p>Support <br /> Countries</p>
              <i className="ti-basketball"></i>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>12K</h2>
              <p>Transactions <br /> per hour</p>
              <i className="ti-panel"></i>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>5B</h2>
              <p>Largest <br /> Transactions</p>
              <i className="ti-stats-up"></i>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>240</h2>
              <p>Years <br /> of Experience</p>
              <i className="ti-user"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  
       
      </>
    );
  }
  