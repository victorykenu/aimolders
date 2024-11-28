import React from 'react';

const TopBar = () => {
  const handleLanguageChange = (url) => {
    window.location.href = url;
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3">
            <div className="top-left-bar">
              <ul>
                <li>
                  <a href="https://www.icmarkets.com/global" className="current">CLIENT</a>
                </li>
                <li>
                  <a href="https://www.icmarketspartners.com/" target="_blank" className="to-go" rel="noopener noreferrer">
                    PARTNERS
                  </a>
                </li>
                <li>
                  <a id="navigation_blog" href="https://www.icmarkets.com/blog" target="_blank" className="to-go" rel="noopener noreferrer">
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-9">
            <div className="top-right-bar">
              <ul>
                <li>
                  <a id="top_socialapp" href="social-trading-tools/social-trading-mobile-app" className="top-item">
                    <span className="new">NEW</span>IC Social
                  </a>
                </li>
                <li>
                  <a id="top_webtrader" href="https://webtrader-sc.icmarkets.com" target="_blank" className="top-item" rel="noopener noreferrer">
                    WebTrader
                  </a>
                </li>
                <li>
                  <a id="top_live_registration" href="open-trading-account/live" className="top-item">
                    Start Trading
                  </a>
                </li>
                <li>
                  <a id="top_contact_us" href="company/contact-us" className="top-item">
                    Contact Us
                  </a>
                </li>
                <li className="lang-list d-block">
                  <div className="language-select language-select--style">
                    <div className="lang_selector dropdown navbar-list__item--style navbar-list__item--locale">
                      <a
                        href="#"
                        id="lang_selector_dropdown"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                      >
                        <span className="lang_display">
                          <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 7.52856C0 11.5103 3.25991 14.7916 7.27848 14.7916C11.2375 14.7916 14.5 11.5103 14.5 7.52856C14.5 3.4869 11.2375 0.208252 7.27848 0.208252C3.25991 0.208252 0 3.4869 0 7.52856ZM7.27848 1.26294C8.26758 1.26294 8.90972 3.42961 9.08321 4.24992H5.41419C5.59026 3.42961 6.22982 1.26294 7.27848 1.26294ZM9.43276 7.52856C9.43276 8.23169 9.37579 8.9921 9.31624 9.69523H5.24071C5.12419 8.9921 5.06723 8.23169 5.06723 7.52856C5.06723 6.76815 5.12419 6.06502 5.24071 5.302H9.31624C9.37579 6.06502 9.43276 6.76815 9.43276 7.52856ZM13.1018 5.42179C13.3918 6.06502 13.5083 6.76815 13.5083 7.53117C13.5083 8.29419 13.3348 8.93742 13.1018 9.69783H10.3053C10.4219 8.99471 10.4788 8.23429 10.4788 7.53117C10.4788 6.77075 10.4219 6.06763 10.3053 5.30461H13.1018V5.42179ZM7.27848 13.7968C6.22982 13.7968 5.59026 11.5702 5.41419 10.7499H9.08321C8.90972 11.5702 8.27017 13.7968 7.27848 13.7968ZM4.19205 9.69523H1.39821V9.57804C1.16518 8.93481 1.04866 8.23169 1.04866 7.52856C1.04866 6.70825 1.16518 6.06502 1.39821 5.302H4.19205C4.07553 6.06242 4.01857 6.76554 4.01857 7.52856C4.01857 8.23169 4.07553 8.99471 4.19205 9.69523ZM1.92125 10.7499H4.36812C4.60116 11.8046 4.83419 12.5077 5.35723 13.5025C3.72598 12.8593 2.91035 12.2135 1.92125 10.7499ZM10.1319 10.7499H12.5787L12.4622 10.9843C11.5896 12.2734 10.5979 12.9166 9.19972 13.5025C9.66579 12.5077 9.89883 11.8046 10.1319 10.7499ZM12.5787 4.24992H10.1319C9.89883 3.19523 9.66579 2.49211 9.19972 1.55721C10.774 2.20044 11.6466 2.78638 12.5787 4.24992ZM4.36812 4.24992H1.92125C2.85339 2.78638 3.72598 2.20044 5.35723 1.55721C4.83419 2.43481 4.60116 3.25252 4.36812 4.24992Z"
                            />
                          </svg>
                          <span>en</span>
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu--locale" role="menu">
                        <ul className="dropdown-list-container___list">
                          {[
                            { id: 'en', label: 'English', url: '/global/en/' },
                            { id: 'cn', label: '简体中文', url: '/global/cn/' },
                            { id: 'th', label: 'ไทย', url: '/global/th/' },
                          ].map((lang) => (
                            <li
                              key={lang.id}
                              id={`lang_selector_option_${lang.id}`}
                              className="dropdown-list-container__list-item"
                              onClick={() => handleLanguageChange(lang.url)}
                            >
                              <span>{lang.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="ms-4 d-block d-md-none">
                  <div className="menubar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
