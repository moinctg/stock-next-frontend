import Headers from '@/components/Headers/Headers'
export default function Review (){
    return(

 

<>
<Headers/>
<section className="review-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 push-8">
            <img src="/assets/img/quote.png" alt="Quote" className="quote mb-5" />
            <div className="review-text-slider owl-carousel">
              <div className="review-text">
                <p>
                ``Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that
                  you don’t have to be physically in the same place and, of course, for large transactions, currency can
                  get pretty inconvenient``
                </p>
              </div>
              <div className="review-text">
                <p>
                ``Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that
                  you don’t have to be physically in the same place and, of course, for large transactions, currency can
                  get pretty inconvenient``
                </p>
              </div>
              <div className="review-text">
                <p>
                  ``Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that
                  you don’t have to be physically in the same place and, of course, for large transactions, currency can
                  get pretty inconvenient``
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pr-0 pull-3">
            <div className="review-meta-slider owl-carousel pt-5">
              <div className="author-meta">
                <div className="author-avatar set-bg" style={{ backgroundImage: `url('/assets/img/review/1.jpg')` }}></div>
                <div className="author-name">
                  <h4>Aaron Ballance</h4>
                  <p>Ceo Bitcoin</p>
                </div>
              </div>
              <div className="author-meta">
                <div className="author-avatar set-bg" style={{ backgroundImage: `url('/assets/img/review/2.jpg')` }}></div>
                <div className="author-name">
                  <h4>Jackson Nash</h4>
                  <p>Head of Design</p>
                </div>
              </div>
              <div className="author-meta">
                <div className="author-avatar set-bg" style={{ backgroundImage: `url('/assets/img/review/3.jpg')` }}></div>
                <div className="author-name">
                  <h4>Katy Abrams</h4>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="newsletter-section gradient-bg">
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-7 newsletter-text">
            <h2>Subscribe to our Newsletter</h2>
            <p>Sign up for our weekly industry updates, insider perspectives and in-depth market analysis.</p>
          </div>
          <div className="col-lg-5 col-md-8 offset-lg-0 offset-md-2">
            <form className="newsletter-form">
              <input type="text" placeholder="Enter your email" />
              <button>Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="blog-section spad">
      <div className="container">
        <div className="section-title text-center">
          <h2>Latest News</h2>
          <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
        </div>
        <div className="row">
          {/* Blog item */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="/assets/img/blog/1.jpg" alt="Blog" />
              </figure>
              <div className="blog-text">
                <div className="post-date">03 jan 2018</div>
                <h4 className="blog-title">
                  <a href="#">Coinbase to Reopen the GDAX Bitcoin Cash-Euro Order Book</a>
                </h4>
                <div className="post-meta">
                  <a href="#">
                    <span>by</span> Admin
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o"></i> 234 Likes
                  </a>
                  <a href="#">
                    <i className="fa fa-comments-o"></i> 08 comments
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Blog item */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="/assets/img/blog/2.jpg" alt="Blog" />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 dec 2018</div>
                <h4 className="blog-title">
                  <a href="#">Blockchain Rolls Out Trading Feature for 22 States in the U.S</a>
                </h4>
                <div className="post-meta">
                  <a href="#">
                    <span>by</span> Admin
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o"></i> 234 Likes
                  </a>
                  <a href="#">
                    <i className="fa fa-comments-o"></i> 08 comments
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Blog item */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="/assets/img/blog/3.jpg" alt="Blog" />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 aug 2018</div>
                <h4 className="blog-title">
                  <a href="#">This Week in Bitcoin: Up, Down and Sideways</a>
                </h4>
                <div className="post-meta">
                  <a href="#">
                    <span>by</span> Admin
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o"></i> 234 Likes
                  </a>
                  <a href="#">
                    <i className="fa fa-comments-o"></i> 08 comments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
       );
}