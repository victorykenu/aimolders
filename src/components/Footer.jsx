import React from 'react';
import icon from '../assets/icons/ICM-logo-fsa.svg'
import twitter from '../assets/images/footer/twitter.webp'
import instagram from '../assets/images/footer/instagram.webp'

export default function Footer() {
  return (
    <footer className="single-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3">
            <div className="footer-detail">
              <a id="footer_logo_image" className="f-logo" href="https://www.icmarkets.com/global">
                <img
                  src={icon}
                  alt="IC Markets Logo"
                  className="img-fluid footer-logo-fsa"
                />
              </a>
              <p>
                IC Markets Global mission is to create the best trading experience for retail and institutional clients alike, 
                allowing traders to focus more on their trading. Built by traders for traders, IC Markets Global is dedicated 
                to offering superior spreads, execution, and service.
              </p>
              <ul className="social">
                <li>
                  <a
                    id="footer_logo_twitter_1"
                    className="footer-logo-social-icon twitter"
                    href="https://twitter.com/IC_Markets"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src={twitter}
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a
                    id="footer_logo_instagram_1"
                    className="footer-logo-social-icon instagram"
                    href="https://www.instagram.com/icmarketsglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src={instagram}
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
              <a className="trading-view-btn" href="tradingview"></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <div className="footer-menu">
              <h5>Forex Trading</h5>
              <ul className="footer-menu-list">
                <li>
                  <a id="footer_trading_accounts_overview_1" href="trading-accounts/overview">
                    Accounts Overview
                  </a>
                </li>
                <li>
                  <a id="footer_trading_accounts_live_1" href="open-trading-account/live">
                    Open an Account
                  </a>
                </li>
                <li>
                  <a
                    id="footer_launchwebtrader_1"
                    href="https://webtrader-sc.icmarkets.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch Web Trader
                  </a>
                </li>
                <li>
                  <a
                    id="footer_cybersecurityandscams_1"
                    href="help-resources/trading-scams"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cybersecurity and Scams
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <div className="footer-menu">
              <h5>Trading Specifications</h5>
              <ul className="footer-menu-list">
                <li>
                  <a id="footer_trading_pricing_spreads_2" href="trading-pricing/spreads">
                    Spreads and Commissions
                  </a>
                </li>
                <li>
                  <a
                    id="footer_trading_markets_range_of_markets"
                    href="trading-markets/range-of-markets"
                  >
                    Range of Products
                  </a>
                </li>
                <li>
                  <a
                    id="footer_trading_pricing_trading_hours"
                    href="trading-pricing/trading-hours"
                  >
                    Trading Hours
                  </a>
                </li>
                <li>
                  <a id="footer_trading_accounts_funding" href="trading-accounts/funding">
                    Funding
                  </a>
                </li>
                <li>
                  <a id="footer_trading_accounts_withdrawal" href="trading-accounts/withdrawal">
                    Withdrawal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <div className="footer-menu">
              <h5>About IC Markets Global</h5>
              <ul className="footer-menu-list">
                <li>
                  <a
                    id="footer_company_helpcenter_1"
                    href="https://www.icmarkets.com/global/help-resources/help-centre"
                  >
                    Help Centre
                  </a>
                </li>
                <li>
                  <a id="footer_company_why_us_1" href="company/why-us">
                    Why IC Markets Global
                  </a>
                </li>
                <li>
                  <a id="footer_company_regulation_1" href="company/regulation">
                    Regulation
                  </a>
                </li>
                <li>
                  <a id="footer_company_legal_documents_1" href="company/legal-documents.html">
                    Legal Documents
                  </a>
                </li>
                <li>
                  <a id="footer_company_contact_us_1" href="company/contact-us">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="col-md-12">
            <div className="disclaimer">
              <div className="disclaimer-content">
                <p>
                  IC Markets Global is the trading name of Raw Trading Ltd, regulated by the Seychelles 
                  Financial Services Authority (FSA) with Securities Dealer’s license number SD018.
                </p>
                <p>
                  <strong>Risk Warning:</strong> Trading Forex and CFDs carries a high level of risk to 
                  your capital and you should only trade with money you can afford to lose. 
                  Please ensure you fully understand the risks and seek independent advice if necessary. 
                  Read our <a href="https://cdn.icmarkets.com/uploads/FSA/Risk_Disclosure_Notice_FSA.pdf" target="_blank" rel="noopener noreferrer">Risk Disclosure</a>.
                </p>
                <p>
                  <strong>Restricted Countries:</strong> Raw Trading Ltd does not provide services for 
                  residents of certain countries such as the USA, Canada, Brazil, Israel, New Zealand, 
                  Iran, and North Korea.
                </p>
              </div>
              <div className="disclaimer-links">
                <ul>
                  <li>
                    <a id="footer_company_legal_documents" href="company/legal-documents.html">
                      Legal Documents
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <p>© 2024 Raw Trading Ltd | All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
