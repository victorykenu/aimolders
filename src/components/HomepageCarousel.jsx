import React from 'react';

const HomepageCarousel = () => {
  return (
    <section id="homepagecarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel indicators per regulator */}
      <div className="carousel-indicators com-host">
        <button
          type="button"
          data-bs-target="#homepagecarousel"
          data-bs-slide-to="30"
          className="active"
          aria-label="Slide 30"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#homepagecarousel"
          data-bs-slide-to="32"
          aria-label="Slide 32"
        ></button>
        <button
          type="button"
          data-bs-target="#homepagecarousel"
          data-bs-slide-to="24"
          aria-label="Slide 24"
        ></button>
      </div>

      {/* Carousel inner content per regulator */}
      <div className="carousel-inner">
        <div className="carousel-item active item-30 fsa">
          <div className="carousel-caption">
            <h1>Volatility to <br />Opportunities</h1>
            <h4 className="text-white mb-4">Explore Gold, Oil, and Forex.</h4>
            <a href="open-trading-account/live" className="btn btn-primary">
              Start Trading
            </a>
          </div>
        </div>

        <div className="carousel-item item-32">
          <div className="carousel-caption">
            <img src="../../assets/images/icmarket-bloomberg-fsa.png" alt="" />
            <h1>
              ICYour<b>Trade<span>5</span></b>
            </h1>
            <h4 className="text-white mb-4">
              Explore the latest season of ICYT with leading experts.
            </h4>
            <a href="https://www.icmarkets.com/go/landing-pages/icyourtrade5/" className="btn btn-primary">
              Watch Now
            </a>
          </div>
        </div>

        <div className="carousel-item item-24">
          <div className="carousel-caption">
            <span className="px-5 px-md-0">
              <img
                className="img-fluid mb-3 mb-lg-5"
                src="../../assets/images/tradingview-logo.webp"
                alt=""
              />
            </span>
            <img
              className="img-fluid tradingIcon_Img mb-2 mb-lg-5"
              src="../../assets/images/tradingview-icon.webp"
              alt=""
            />
            <h1 className="mb-2 mb-md-5">Chart, Connect, and Trade</h1>
            <a href="tradingview" className="btn btn-primary">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageCarousel;
