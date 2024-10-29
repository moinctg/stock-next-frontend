// components/sections/FeaturesSection.tsx
export default function FeaturesSection() {
    return (
        <>
      <section className="features-section spad gradient-bg">
        <div className="container text-white">
          <div className="section-title text-center">
            <h2>Our Features</h2>
            <p>Our platform harnesses the power of advanced machine learning models to bring you precise stock predictions and tailored insights. Whether you’re a beginner or a seasoned investor, we help you make informed, confident decisions with ease</p>
          </div>
          <div className="row">
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-mobile"></i>
              <div className="feature-content">
                <h4>Advanced Stock Prediction Models</h4>
                <p>
                Gain insights with cutting-edge AI models, including LSTM neural networks, tailored for time series forecasting. Our technology adapts to market trends to provide accurate, actionable predictions
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-shield"></i>
              <div className="feature-content">
                <h4>Interactive, User-Friendly Interface</h4>
                <p>
                From dynamic charts to custom prediction periods, our app is designed for intuitive navigation and deep data exploration, empowering you to analyze and act on market trends seamlessly
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-wallet"></i>
              <div className="feature-content">
                <h4> Customizable Prediction Periods</h4>
                <p>
                Choose from multiple prediction horizons—10, 15, 30, 45, or even 365 days—giving you the flexibility to plan for short-term gains or long-term growth.
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-headphone-alt"></i>
              <div className="feature-content">
                <h4>Built-in Reporting and Analysis</h4>
                <p>
                Choose from multiple prediction horizons—10, 15, 30, 45, or even 365 days—giving you the flexibility to plan for short-term gains or long-term growth.
                </p>
                <a href="#" className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-reload"></i>
              <div className="feature-content">
                <h4>Built-in Reporting and Analysis</h4>
                <p>
                Our platform automatically generates interactive reports and in-depth analysis on accuracy, performance, and prediction trends, helping you track and refine your strategy.
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
  