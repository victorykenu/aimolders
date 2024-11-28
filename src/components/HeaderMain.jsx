import logo from '../assets/icons/ICM-logo-fsa.svg'

export default function HeaderMain() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-default position-static">
              <div
                id="navbar"
                className="d-flex navbar-collapse navbar-collapse--style justify-content-between"
              >
                <div className="logo">
                  <a id="navigation_regulator_2" href="/">
                    <img
                      className="fsa-logo"
                      src={logo}
                      width="172"
                      height="43"
                      alt="IC Markets Logo"
                    />
                  </a>
                </div>

                <div className="header-nav nav navbar-nav scroll-menu navbar-list">
                  <div className="d-flex d-md-none nav-tag">
                    <a
                      href="https://www.icmarkets.com/global"
                      className="hamburg-logo"
                    >
                      <img
                        className="fsa-logo-hamg"
                        src={logo}
                        width="172"
                        height="43"
                        alt="IC Trading Logo"
                      />
                    </a>
                    <div className="menubar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <ul>
                    <li className="dropdown navbar-list__item--style">
                      <a
                        id="navigation_quickstart_2"
                        href="index.html#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-hover="dropdown"
                        data-delay="0"
                        data-close-others="false"
                      >
                        Quickstart
                      </a>
                      <div className="expand-arrow d-block d-md-none">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="dropdown-list-container dropdown-menu dropdown-menu--style">
                        <div className="container">
                          <div className="row icm-navbar-dropdown-container">
                            <div className="col-md-4 col-lg-4 d-none d-md-block">
                              <div className="navbar-cta-block pt-5">
                                <h3 className="navbar-cta-block__heading">
                                  Trade with a high-performance trading platform{" "}
                                </h3>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-primary-md me-3"
                                    id="navbar_cta_live_registration"
                                    href="open-trading-account/live"
                                  >
                                    Start Trading
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-8 col-lg-8">
                              <div className="row">
                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">
                                    {" "}
                                    Introduction
                                  </h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_why_us"
                                        href="company/why-us"
                                      >
                                        Why IC Markets Global{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_markets_range_of_markets"
                                        href="trading-markets/range-of-markets"
                                      >
                                        What you can trade{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_pricing_spreads_2"
                                        href="trading-pricing/spreads"
                                      >
                                        Simple Pricing{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_introduction_forex_trading"
                                        href="introduction/forex-trading"
                                      >
                                        Forex Trading{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_raw_trader_plus"
                                        href="introduction/raw-trader-plus"
                                      >
                                        Raw Trader Plus{" "}
                                        <span className="new">NEW</span>
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">
                                    Your Account
                                  </h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    ></li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_live_registration"
                                        href="open-trading-account/live"
                                      >
                                        Live Accounts{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_accounts_funding"
                                        href="trading-accounts/funding"
                                      >
                                        How to deposit{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_accounts_withdrawal"
                                        href="trading-accounts/withdrawal"
                                      >
                                        How to withdraw{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a href="introduction/icmarkets-mobile-app">
                                        IC Markets Global Mobile App{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">
                                    Trading Platform
                                  </h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_metatrader4"
                                        href="forex-trading-platform-metatrader/metatrader-4"
                                      >
                                        MetaTrader{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_tradingview"
                                        href="tradingview"
                                      >
                                        TradingView{" "}
                                        <span className="new">NEW</span>
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ctrader_windows"
                                        href="forex-trading-platform-ctrader/ctrader-windows"
                                      >
                                        cTrader{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_webtrader"
                                        href="https://webtrader-sc.icmarkets.com"
                                        target="_blank"
                                      >
                                        WebTrader
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_social_trading"
                                        href="social-trading-tools/social-trading-mobile-app"
                                      >
                                        IC Social{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_myfxbook_autotrade"
                                        href="forex-trading-platform/signal-start"
                                      >
                                        Signal Start{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_zulutrade"
                                        href="zulutrade"
                                      >
                                        ZuluTrade{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown navbar-list__item--style">
                      <a
                        id="navigation_trading_2"
                        href="index.html#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-hover="dropdown"
                        data-delay="0"
                        data-close-others="false"
                      >
                        Trading
                      </a>
                      <div className="expand-arrow d-block d-md-none">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="dropdown-list-container dropdown-menu dropdown-menu--style">
                        <div className="container">
                          <div className="row icm-navbar-dropdown-container">
                            <div className="col-md-4 col-lg-4 d-none d-md-block">
                              <div className="navbar-cta-block pt-5">
                                <h3 className="navbar-cta-block__heading">
                                  Access Global Markets with a Multi-Asset
                                  Trading Platform&nbsp;&nbsp;
                                </h3>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-primary-md me-3"
                                    id="navbar_cta_live_registration"
                                    href="open-trading-account/live"
                                  >
                                    Start Trading
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-8 col-lg-8">
                              <div className="row">
                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">
                                    {" "}
                                    Trading Accounts
                                  </h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_accounts_overview"
                                        href="trading-accounts/overview"
                                      >
                                        Accounts Overview{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_accounts_raw_spread_account"
                                        href="trading-accounts/raw-spread-account"
                                      >
                                        Raw Spread{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_ctrader_raw"
                                        href="trading-accounts/ctrader-raw"
                                      >
                                        cTrader Raw Spread{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_accounts_standard_account"
                                        href="trading-accounts/standard-account"
                                      >
                                        Standard{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_accounts_islamic"
                                        href="trading-accounts/islamic-account"
                                      >
                                        Islamic{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_accounts_funding_2"
                                        href="trading-accounts/funding"
                                      >
                                        How to deposit{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_accounts_withdrawal_2"
                                        href="trading-accounts/withdrawal"
                                      >
                                        How to withdraw{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">Products</h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_markets_range_of_markets_2"
                                        href="trading-markets/range-of-markets"
                                      >
                                        Range of Products{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_markets_forex"
                                        href="trading-markets/forex"
                                      >
                                        Forex CFDs{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_markets_commodities"
                                        href="trading-markets/commodities"
                                      >
                                        Commodities CFDs{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_markets_indices"
                                        href="trading-markets/indices"
                                      >
                                        Indices CFDs{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_markets_bonds"
                                        href="trading-markets/bonds"
                                      >
                                        Bonds CFDs{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_markets_digitalcurrency"
                                        href="trading-markets/digitalcurrency"
                                      >
                                        Digital currencies{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_markets_stocks"
                                        href="trading-markets/stocks"
                                      >
                                        Stocks CFDs{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_markets_futures"
                                        href="trading-markets/futures"
                                      >
                                        Futures CFDs{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">Pricing</h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_pricing_trading_conditions"
                                        href="trading-pricing/trading-conditions"
                                      >
                                        Trading Conditions{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_pricing_spreads_3"
                                        href="trading-pricing/spreads"
                                      >
                                        Spreads{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_hours"
                                        href="trading-pricing/trading-hours"
                                      >
                                        Trading Hours{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_pricing_swap_rates"
                                        href="trading-pricing/swap-rates"
                                      >
                                        Swap Rates{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="dropdown navbar-list__item--style">
                      <a
                        id="navigation_platforms_2"
                        href="index.html#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-hover="dropdown"
                        data-delay="0"
                        data-close-others="false"
                      >
                        Platforms
                      </a>
                      <div className="expand-arrow d-block d-md-none">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="dropdown-list-container dropdown-menu dropdown-menu--style ">
                        <div className="container">
                          <div className="row icm-navbar-dropdown-container">
                            <div className="col-md-4 col-lg-4 d-none d-md-block">
                              <div className="navbar-cta-block pt-5">
                                <h3 className="navbar-cta-block__heading">
                                  Trade from anywhere, on any device, at any
                                  time
                                </h3>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-primary-md me-3"
                                    id="navbar_cta_live_registration"
                                    href="open-trading-account/live"
                                  >
                                    Start Trading
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-8 col-lg-8">
                              <div className="row">
                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">
                                    {" "}
                                    MetaTrader 5 & 4{" "}
                                  </h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_metatrader5"
                                        href="forex-trading-platform-metatrader/metatrader-5"
                                      >
                                        MetaTrader 5{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                        <span className="new px-2 ms-1">
                                          RECOMMENDED
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_metatrader4_2"
                                        href="forex-trading-platform-metatrader/metatrader-4"
                                      >
                                        MetaTrader 4{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_mtwebtrader"
                                        href="forex-trading-platform-metatrader/web-trader"
                                      >
                                        MetaTrader WebTrader{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_mtiphoneipad"
                                        href="forex-trading-platform-metatrader/iphone"
                                      >
                                        MetaTrader iPhone/iPad{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_mtandroid"
                                        href="forex-trading-platform-metatrader/android"
                                      >
                                        MetaTrader Android{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_atmac"
                                        href="forex-trading-platform-metatrader/apple-mac"
                                      >
                                        MetaTrader Mac{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">cTrader</h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ctrader_windows_2"
                                        href="forex-trading-platform-ctrader/ctrader-windows"
                                      >
                                        cTrader{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ctrader_web"
                                        href="forex-trading-platform-ctrader/ctrader-web"
                                      >
                                        cTrader Web{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ctrader_iphone"
                                        href="forex-trading-platform-ctrader/ctrader-iphone"
                                      >
                                        cTrader iPhone/iPad{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ctrader_web"
                                        href="forex-trading-platform-ctrader/ctrader-imac"
                                      >
                                        cTrader iMac{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ctrader_android"
                                        href="forex-trading-platform-ctrader/ctrader-android"
                                      >
                                        cTrader Android{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ctrader_calgo"
                                        href="forex-trading-platform-ctrader/calgo"
                                      >
                                        cTrader Automate{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ctrader_copy_trading"
                                        href="forex-trading-platform-ctrader/ctrader-copy-trading"
                                      >
                                        cTrader Copy Trading{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">
                                    TradingView
                                  </h5>
                                  <ul className="dropdown-list-container___list mb-md-5">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_tradingview"
                                        href="tradingview"
                                      >
                                        TradingView{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>

                                  <h5 className="dropdown-heading">
                                    Trading Tools
                                  </h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_forex_trading_tools_virtual_private_server"
                                        href="forex-trading-tools/virtual-private-server"
                                      >
                                        Virtual Private Server{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_forex_trading_tools_trading_servers"
                                        href="forex-trading-tools/trading-servers"
                                      >
                                        Trading Servers{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_forex_trading_tools_mt4_advanced"
                                        href="forex-trading-tools/mt4-advanced-trading-tools"
                                      >
                                        MetaTrader 4 Advanced Trading Tools{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_ic_insights"
                                        href="ic-insights"
                                      >
                                        IC Insights{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading-central"
                                        href="trading-central"
                                      >
                                        Trading Central{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="dropdown navbar-list__item--style dots-after">
                      <a
                        id="navigation_more_2"
                        href="index.html#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-hover="dropdown"
                        data-delay="0"
                        data-close-others="false"
                      >
                        More
                      </a>
                      <div className="expand-arrow d-block d-md-none">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="dropdown-list-container dropdown-menu dropdown-menu--style">
                        <div className="container">
                          <div className="row icm-navbar-dropdown-container">
                            <div className="col-md-4 col-lg-4 d-none d-md-block">
                              <div className="navbar-cta-block pt-5">
                                <h3 className="navbar-cta-block__heading">
                                  Trade with a high-performance trading platform{" "}
                                </h3>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-primary-md me-3"
                                    id="navbar_cta_live_registration"
                                    href="open-trading-account/live"
                                  >
                                    Start Trading
                                  </a>
                                </div>
                              </div>

                              {/* <navbar-cta-block :navbarCTA="$t('tradewiththeworldslargesttrue_1')">
                                                        </navbar-cta-block> */}
                            </div>
                            <div className="col-xs-12 col-md-8 col-lg-8">
                              <div className="row">
                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading"> Company</h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_platforms"
                                        href="company/about-us"
                                      >
                                        About IC Markets Global{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_why_us_3"
                                        href="company/why-us"
                                      >
                                        Why IC Markets Global{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_contact_us_2"
                                        href="company/contact-us"
                                      >
                                        Contact Us{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_regulation"
                                        href="company/regulation"
                                      >
                                        Regulation{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_white_label"
                                        href="/global/en/partnerships/white-label-partnerships"
                                      >
                                        White Label{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_trading_api"
                                        href="/global/en/partnerships/trading-api"
                                      >
                                        Trading API{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_liquidity_provision"
                                        href="/global/en/partnerships/liquidity-provision"
                                      >
                                        Liquidity Provision{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_company_insurance"
                                        href="company/insurance"
                                      >
                                        Insurance{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_company_careers"
                                        href="company/careers"
                                      >
                                        Careers{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">
                                    Education
                                  </h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_education_overview"
                                        href="education/education-overview"
                                      >
                                        Education Overview{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_education_advantages"
                                        href="education/advantages-of-forex"
                                      >
                                        Advantages of Forex{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_education_advantages_of_cfds"
                                        href="education/advantages-of-cfds"
                                      >
                                        Advantages of CFDs{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_education_web_tv"
                                        href="education/web-tv"
                                      >
                                        Web TV{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_webinar"
                                        target="_blank"
                                        href="https://www.icmarkets.com/go/webinars/upcoming/"
                                      >
                                        Webinar{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_podcast"
                                        target="_blank"
                                        href="https://www.icmarkets.com/go/landing-pages/icyourtrade5/"
                                      >
                                        Podcast{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                                        <span className="new">NEW</span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_video_tutorials"
                                        href="education/video-tutorials"
                                      >
                                        Getting Started Tutorial Videos{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-xs-12 col-md-4">
                                  <h5 className="dropdown-heading">
                                    Help & Resources
                                  </h5>
                                  <ul className="dropdown-list-container___list">
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_help_center"
                                        href="help-resources/help-centre"
                                      >
                                        Help Centre{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_blog"
                                        className="cursor-pointer"
                                        href="https://www.icmarkets.com/blog"
                                        target="_blank"
                                      >
                                        <span className="icm-blogmarker">
                                          IC Markets Global Blog
                                        </span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_forex_calculators"
                                        href="help-resources/forex-calculators"
                                      >
                                        Forex Calculators{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_economic_calendar"
                                        href="help-resources/economic-calendar"
                                      >
                                        Economic Calendar{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_forex_glossary"
                                        href="help-resources/forex-glossary"
                                      >
                                        Forex Glossary{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_teamviewer"
                                        href="help-resources/teamviewer"
                                      >
                                        TeamViewer{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>

                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_teamviewer"
                                        href="help-resources/trading-scams"
                                      >
                                        Cybersecurity and Scams{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                    <li
                                      className="dropdown-list-container__list-item"
                                      data-target=".navbar-collapse.in"
                                    >
                                      <a
                                        id="navigation_teamviewer"
                                        href="help-resources/protecting-your-account"
                                      >
                                        Protecting Your Account{" "}
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="client-login-block">
                  <a
                    className="btn btn-outline-primary-sm client-login-button"
                    id="navigation_clientArea_2"
                    href="/login"
                    target="_blank"
                  >
                    Client Login
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
