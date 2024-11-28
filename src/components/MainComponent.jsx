import HomepageCarousel from "./HomepageCarousel";
import tradingView from "../assets/images/tradingview.webp";
import img4 from  "../assets/images/mt4.webp"
import ctraderWeb from "../assets/images/ctrader.webp";
import img5 from  "../assets/images/mt5.webp"
import spreadstep4 from "../assets/images/spread-step-04.webp";
import spreadstepmbl4 from "../assets/images/spread-step-mbl-04.webp";
import spreadstep5 from "../assets/images/spread-step-05.webp";
import spreadstepmbl5 from "../assets/images/spread-step-mbl-05.webp";
import visa from "../assets/images/visa-logo.webp";
import master from "../assets/images/mastercard-logo.webp";
import paypal from "../assets/images/paypal-logo.webp";
import neteller from "../assets/images/neteller-logo.webp";
import skrill from "../assets/images/skrill-logo.webp";
import wireTransfer from "../assets/images/wiretransfer-logo.webp";
import appStore from "../assets/images/app-store.webp";
import playStore from "../assets/images/play-store.webp";
import mobilCta from "../assets/images/mobile-cta-fsa.webp";


export default function MainComponent() {
  return (
    <>
      {" "}
      <main className="home-pg">
        <HomepageCarousel />
        <section className="counter-sec d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li>
                    <span>0.0</span>
                    Pip Spreads*
                  </li>
                  <li>
                    <span>
                      1:
                      <br />
                      1000
                    </span>
                    Leverage
                  </li>
                  <li>
                    <span>0.01</span>
                    Micro Lot Trading
                  </li>
                  <li>
                    <span>+2250</span>
                    Tradable Instruments
                  </li>
                  <li>
                    <span>24/7</span>
                    DEDICATED SUPPORT
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="raw-chart-sec">
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                <div
                  id="quotes-wrap"
                  className="d-none d-md-block mt-3 quotes-wrap"
                >
                  {[
                    {
                      id: "EURUSD",
                      format: "15",
                      className: "widget-1 format-1-5 price-up",
                      symbol: "EURUSD",
                      change: "+0.04%",
                      bid: ["1.16", "69", "2"],
                      ask: ["1.16", "69", "2"],
                      spread: "0.0",
                      buyId: "home_live_registration_3",
                      sellId: "home_live_registration_4",
                    },
                    {
                      id: "AUDUSD",
                      format: "15",
                      className: "widget-2 format-1-5 price-down",
                      symbol: "AUDUSD",
                      change: "+0.44%",
                      bid: ["0.75", "40", "0"],
                      ask: ["0.75", "40", "0"],
                      spread: "0.0",
                      buyId: "home_live_registration_5",
                      sellId: "home_live_registration_6",
                    },
                    {
                      id: "GBPUSD",
                      format: "15",
                      className: "widget-3 format-1-5 price-down",
                      symbol: "GBPUSD",
                      change: "+0.19%",
                      bid: ["1.32", "58", "4"],
                      ask: ["1.32", "59", "1"],
                      spread: "0.7",
                      buyId: "home_live_registration_7",
                      sellId: "home_live_registration_8",
                    },
                    {
                      id: "XAUUSD",
                      format: "42",
                      className: "widget-4 format-4-2 price-up",
                      symbol: "XAUUSD",
                      change: "+0.35%",
                      bid: ["1298.", "21", ""],
                      ask: ["1298.", "28", ""],
                      spread: "0.7",
                      buyId: "home_live_registration_9",
                      sellId: "home_live_registration_10",
                    },
                  ].map((widget) => (
                    <div
                      key={widget.id}
                      data-id={widget.id}
                      data-format={widget.format}
                      className={`quote-widget ${widget.className}`}
                    >
                      <div className="quote-widget__header">
                        <div className="quote-widget__header-symbol">
                          {widget.symbol}
                        </div>
                        <div className="quote-widget__header-change">
                          {widget.change}
                        </div>
                      </div>
                      <div className="quote-widget__content">
                        <div className="quote-widget__content-bid">
                          <div className="quote-widget__content-title">Bid</div>
                          <div className="quote-widget__content-price">
                            {widget.bid.map((price, index) => (
                              <span
                                key={index}
                                className={`price-${index + 1}`}
                              >
                                {price}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="quote-widget__content-ask">
                          <div className="quote-widget__content-title">Ask</div>
                          <div className="quote-widget__content-price">
                            {widget.ask.map((price, index) => (
                              <span
                                key={index}
                                className={`price-${index + 1}`}
                              >
                                {price}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="quote-widget__footer">
                        <div className="quote-widget__footer-spread">
                          <span className="spread-label">Spread</span>
                          <span className="spread-value">{widget.spread}</span>
                        </div>
                        <div className="quote-widget__footer-buttons">
                          <div className="f-btn buy">
                            <a
                              id={widget.buyId}
                              href="open-trading-account/live"
                            >
                              BUY
                            </a>
                          </div>
                          <div className="f-btn sell">
                            <a
                              id={widget.sellId}
                              href="open-trading-account/live"
                            >
                              SELL
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Column */}
              <div className="col-md-6">
                <h1 className="text-white mb-4">The Raw Spread Advantage</h1>
                <p className="fw-400 text-white-50 lead-3 mb-4">
                  Raw Spreads are the difference you have been waiting for.
                  Trade with spreads from 0.0 pips, no requotes, best possible
                  prices and no restrictions. IC Markets Global is the
                  multi-asset trading platform of choice for high volume
                  traders, scalpers and robots.
                  <br />
                  <br />
                  &nbsp;
                </p>
                <div className="btn-flex">
                  <a
                    className="btn btn-primary me-3"
                    href="open-trading-account/live"
                  >
                    Start Trading
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="spread-steps-sec">
          <div className="container">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-12">
                <div className="card steps-card pb-0 pb-md-4">
                  <h2>Spreads from 0.0 pips</h2>
                  <ul className="list">
                    <li>Raw spreads means really from 0.0 pips*</li>
                    <li>
                      Our diverse and proprietary liquidity mix keeps spreads
                      tight 24/5
                    </li>
                  </ul>
                  <a
                    className="btn btn-secondary"
                    id="home_trading_pricing_spreads_1"
                    href="trading-pricing/spreads"
                  >
                    Pricing Overview
                  </a>
                  <div className="card-img-block d-block d-md-none">
                    <img
                      className="img-fluid"
                      src="../../assets/images/spread-step-mbl-01.webp"
                      alt="Spread Steps Mobile"
                    />
                  </div>
                  <div className="card-right-bg">
                    <img
                      className="d-none d-md-block img-fluid"
                      src="../../assets/images/spread-step-01-fsa.webp"
                      alt="Spread Steps Desktop"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6">
                <div className="card steps-card">
                  <h2>Fast Order Execution</h2>
                  <ul className="list">
                    <li>Average execution speeds of under 40ms***</li>
                    <li>Low latency fibre optic and Equinix NY4 server</li>
                    <li>Free Low latency collocated VPS available</li>
                  </ul>
                  <a
                    className="btn btn-secondary"
                    id="home_trading_pricing_spreads_2"
                    href="forex-trading-tools/virtual-private-server"
                  >
                    Get your Free VPS
                  </a>
                  <div className="card-right-bg">
                    <img
                      className="img-fluid"
                      src="../../assets/images/spread-step-02.webp"
                      alt="Fast Order Execution"
                    />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6">
                <div className="card steps-card">
                  <h2>Institutional Grade Trading</h2>
                  <ul className="list">
                    <li>Real, deep and diverse liquidity you can trade on</li>
                    <li>Reduced slippage</li>
                    <li>Over 29 Billion USD in FX trades processed daily</li>
                  </ul>
                  <a
                    className="btn btn-secondary"
                    id="home_trading_pricing_spreads_3"
                    href="trading-pricing/spreads"
                  >
                    Raw Pricing Benefits
                  </a>
                  <div className="card-right-bg">
                    <img
                      className="img-fluid"
                      src="../../assets/images/spread-step-03.webp"
                      alt="Institutional Grade Trading"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="strength-sec">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column - Statistics */}
              <div className="col-md-6 order-1 order-md-0">
                <ul className="strength-list">
                  <li>
                    <h1>US$1.64 Trillion</h1>
                    <span>Trading Volume - April 2024</span>
                  </li>
                  <li>
                    <h1>200,000+</h1>
                    <span>Active Clients Worldwide</span>
                  </li>
                  <li>
                    <h1>Excellent 4.8/5</h1>
                    <span>Rating on TrustPilot</span>
                  </li>
                </ul>
              </div>

              {/* Right Column - Description */}
              <div className="col-md-6 pt-md-4 order-0 order-md-1">
                <h2 className="text-white mb-4">
                  Give your automated trading system the edge
                </h2>
                <p className="fw-400 text-white-50 lead-3 mb-4">
                  IC Markets Global is one of the top choices for automated
                  traders. Our order matching engine located in the New York
                  Equinix NY4 data centre processes over 500,000 trades per day
                  with over two-thirds of all trades coming from automated
                  trading systems.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="spread-steps-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* Card 1: Powerful Trading Terminals */}
                <div className="card steps-card mh-auto">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h2>Powerful Trading Terminals</h2>
                      <ul
                        className="logo-list"
                        style={{ maxWidth: "340px", gap: "20px 0" }}
                      >
                        <li>
                          <img
                            className="img-fluid"
                            src={img4}
                            alt="Meta Trader 4"
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid"
                            src={img5}
                            alt="Meta Trader 5"
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid"
                            src={ctraderWeb}
                            alt="cTrader"
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid"
                            src={tradingView}
                            alt="TradingView"
                          />
                        </li>
                      </ul>
                      <ul className="list list-inline">
                        <li className="w-lg-25">Windows</li>
                        <li className="w-lg-25">Web Browser</li>
                        <li className="w-lg-25">Android</li>
                        <li className="w-lg-25">MAC</li>
                        <li className="w-lg-25">iOS</li>
                      </ul>
                      <a
                        className="btn btn-secondary"
                        id="home_metatrader_5"
                        href="forex-trading-platform-metatrader/metatrader-5"
                      >
                        Platforms
                      </a>
                    </div>
                    <div className="col-md-6">
                      <figure className="mt-4 mt-md-0 d-none d-md-block">
                        <img
                          className="img-fluid"
                          src={spreadstep4}
                          alt="Spread Step Desktop"
                        />
                      </figure>
                      <figure className="mt-4 mt-md-0 d-block d-md-none">
                        <img
                          className="img-fluid"
                          src={spreadstepmbl4}
                          alt="Spread Step Mobile"
                        />
                      </figure>
                    </div>
                  </div>
                </div>

                {/* Card 2: Global Markets */}
                <div className="card steps-card mh-auto mb-0">
                  <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-lg-0">
                      <figure className="mt-4 mt-md-0 d-none d-md-block">
                        <img
                          src={spreadstep5}
                          alt="Spread Step Desktop"
                          className="img-fluid"
                        />
                      </figure>
                      <figure className="mt-4 mt-md-0 d-block d-md-none">
                        <img
                          src={spreadstepmbl5}
                          alt="Spread Step Mobile"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div className="col-md-6">
                      <h2>
                        Global Markets at
                        <br className="d-none d-md-block" />
                        Your Fingertips
                      </h2>
                      <ul className="list list-inline mb-4">
                        <li className="w-lg-25 fw-700">
                          Forex CFDs <span>61 products</span>
                        </li>
                        <li className="w-lg-25 fw-700">
                          Commodities CFDs <span>24 products</span>
                        </li>
                        <li className="w-lg-25 fw-700">
                          Stocks CFDs <span>+2100 products</span>
                        </li>
                        <li className="w-lg-25 fw-700">
                          Index CFDs <span>25 products</span>
                        </li>
                        <li className="w-lg-25 fw-700">
                          Bond CFDs <span>9 products</span>
                        </li>
                      </ul>
                      <a
                        className="btn btn-secondary"
                        id="home_trading_markets_range_of_markets"
                        href="trading-markets/range-of-markets"
                      >
                        Range of Markets
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="strength-sec before-bg-right">
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6 pe-md-3">
                <h2 className="text-white mb-4">
                  Our strength is in the numbers
                </h2>
                <p className="fw-400 text-white lead-3 mb-4">
                  IC Markets Global is one of the largest Forex CFD providers in
                  the world by trading volume.
                </p>
                <div className="btn-flex">
                  <a
                    className="btn btn-primary me-3"
                    href="open-trading-account/live"
                  >
                    Start Trading
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <ul className="strength-list">
                  <li>
                    <h1>500,000</h1>
                    <span>Trades Per Day</span>
                  </li>
                  <li>
                    <h1>Equinix NY4</h1>
                    <span>Trading Hub at New York</span>
                  </li>
                  <li>
                    <h1>60%</h1>
                    <span>Algo trades (% of all trades)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="spread-steps-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card steps-card mh-auto mb-0">
                  <div className="row">
                    {/* Left Column */}
                    <div className="col-md-6">
                      <h2>Your money, your way</h2>
                      <ul className="list list-inline mb-2">
                        <li>Instant Deposit</li>
                        <li>Fast Withdrawal</li>
                        <li>0% Commission</li>
                      </ul>
                      <a
                        className="btn btn-secondary mb-3"
                        id="home_trading_accounts_funding"
                        href="trading-accounts/funding"
                      >
                        Payment methods
                      </a>
                      <p className="footnote text-nowrap">
                        For more information on deposits, withdrawals, and how
                        to fund your trading account,{" "}
                        <a
                          className="dark-link"
                          href="trading-accounts/funding"
                        >
                          Go here
                        </a>
                      </p>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                      <div className="row">
                        <span className="col-4 funding">
                          <img className="img-fluid" src={visa} alt="Visa" />
                        </span>
                        <span className="col-4 funding">
                          <img
                            className="img-fluid"
                            src={master}
                            alt="MasterCard"
                          />
                        </span>
                        <span className="col-4 funding">
                          <img
                            className="img-fluid"
                            src={paypal}
                            alt="PayPal"
                          />
                        </span>
                      </div>
                      <div className="row">
                        <span className="col-4 funding">
                          <img
                            className="img-fluid"
                            src={neteller}
                            alt="Neteller"
                          />
                        </span>
                        <span className="col-4 funding">
                          <img
                            className="img-fluid"
                            src={skrill}
                            alt="Skrill"
                          />
                        </span>
                        <span className="col-4 funding">
                          <img className="img-fluid" src={wireTransfer} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="regsteps-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center">
                  Open an account in 4 simple steps
                </h2>
                <div className="reg-card-list">
                  {/* Step 1 */}
                  <div className="card">
                    <span className="counter">1</span>
                    <h4>Register</h4>
                    <p className="lead-4">
                      Choose an account type and complete our fast and secure
                      application form
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="card">
                    <span className="counter">2</span>
                    <h4>Verify</h4>
                    <p className="lead-4">
                      Use our digital onboarding system for fast verification
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="card">
                    <span className="counter">3</span>
                    <h4>Fund</h4>
                    <p className="lead-4">
                      Fund your trading account using a wide range of funding
                      methods
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="card">
                    <span className="counter">4</span>
                    <h4>Trade</h4>
                    <p className="lead-4">
                      Start trading on your live account and access +2,100
                      instruments
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <a
                    href="open-trading-account/live"
                    className="btn btn-primary"
                  >
                    Open an account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mobile-cta-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card mobile-cta-card">
                  {/* Heading */}
                  <h2 className="w-50">
                    Trade on the go with IC Markets Global mobile app
                  </h2>

                  {/* Features List */}
                  <ul className="list list-inline">
                    <li>Easy monitoring</li>
                    <li>24/7 Support</li>
                    <li>Multiple payment methods</li>
                  </ul>

                  {/* App Store Links */}
                  <div className="mbl-btn-links">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://apps.apple.com/au/app/ic-markets/id1552875348"
                    >
                      <img
                        className="img-fluid"
                        src={appStore}
                        alt="Download on the App Store"
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.icmarkets.mobileapp"
                    >
                      <img
                        className="img-fluid"
                        src={playStore}
                        alt="Get it on Google Play"
                      />
                    </a>
                  </div>

                  {/* Mobile Image */}
                  <div className="mobile-image">
                    <img
                      src={mobilCta}
                      alt="Mobile App Preview"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="webinars-cta">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="webinar-card">
                  {/* Heading */}
                  <h4>Skill up with weekly IC Markets Global WEBINARS</h4>

                  {/* Button Link */}
                  <a
                    className="btn btn-outline-primary"
                    id="home_webinars_upcoming"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.icmarkets.com/go/webinars/upcoming/"
                  >
                    Upcoming Webinars
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-cta-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                {/* Heading */}
                <h2>Instant account opening & funding</h2>
                <h5>Trade within minutes!</h5>

                {/* Button */}
                <div className="btn-flex">
                  <a
                    className="btn btn-primary me-0 me-md-3"
                    id="home_live_registration_11"
                    href="open-trading-account/live"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
