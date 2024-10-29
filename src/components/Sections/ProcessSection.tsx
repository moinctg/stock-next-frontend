export default function ProcessSecton() {
    return(
        <>
         <section className="process-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h2>Select Your Stocks of Interest</h2>
            <p>
            Start by choosing the stocks you want insights on. Search by company name or ticker symbol to focus on your preferred investments.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 process">
              <div className="process-step">
                <figure className="process-icon">
                  <img src="/assets/img/process-icons/1.png" alt="Process Step 1" />
                </figure>
                <h4>Customize Your Prediction Period</h4>
                <p>
                Define your prediction timeframe—whether you’re looking for short-term trends over 10 days or long-term insights spanning up to a year (365 days). Our flexible forecasting options fit your unique strategy
                </p>
              </div>
            </div>
            <div className="col-md-4 process">
              <div className="process-step">
                <figure className="process-icon">
                  <img src="/assets/img/process-icons/2.png" alt="Process Step 2" />
                </figure>
                <h4>Let AI Analyze the Market</h4>
                <p>
                Once you’ve set your preferences, our AI models go to work. Using powerful LSTM neural networks and hybrid algorithms, our app processes historical data, detects patterns, and generates highly accurate forecasts tailored to your selected timeframe                </p>
              </div>
            </div>
            <div className="col-md-4 process">
              <div className="process-step">
                <figure className="process-icon">
                  <img src="/assets/img/process-icons/3.png" alt="Process Step 3" />
                </figure>
                <h4> Track, Adjust, and Grow</h4>
                <p>
                As the market changes, so do our predictions. Track your chosen stocks in real time, refine your portfolio strategy with updated forecasts, and take control of your investments like never before
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}