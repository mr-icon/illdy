import React from "react";

function Nav() {
  return (
    <header id="header" className="header-front-page">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-8">
              <img src="footer-logo.png" alt="" />
            </div>
            <div className="col-sm-8 col-xs-4">
              <nav className="header-navigation">
                <ul id="menu-illdy-main" className="clearfix">
                  <li
                    id="menu-item-16"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-16"
                  >
                    About
                  </li>
                  <li
                    id="menu-item-17"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-17"
                  >
                    Portfolio
                  </li>
                  <li
                    id="menu-item-18"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-18"
                  >
                    Testimonials
                  </li>
                  <li
                    id="menu-item-19"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-19"
                  >
                    Services
                  </li>
                  <li
                    id="menu-item-20"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-20"
                  >
                    Blog
                  </li>
                  <li
                    id="menu-item-22"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-22"
                  >
                    Our Team
                  </li>
                  <li
                    id="menu-item-23"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-23"
                  >
                    Contact Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
