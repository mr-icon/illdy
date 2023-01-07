import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="text-5" className="widget widget_text">
              <div className="widget-title">
                <h5>PRODUCTS</h5>
              </div>
              <div className="textwidget">
                <ul>
                  <li>
                    <a href="#" title="Our Work">
                      Our work
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Club">
                      Club
                    </a>
                  </li>
                  <li>
                    <a href="#" title="News">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Announcement">
                      Announcement
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="text-5" className="widget widget_text">
              <div className="widget-title">
                <h5>INFORMATION</h5>
              </div>
              <div className="textwidget">
                <ul>
                  <li>
                    <a href="#" title="Pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Terms">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Affiliates">
                      Affiliates
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="text-5" className="widget widget_text">
              <div className="widget-title">
                <h5>SUPPORT</h5>
              </div>
              <div className="textwidget">
                <ul>
                  <li>
                    <a href="#" title="Documentation">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" title="FAQs">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Forums">
                      Forums
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <p className="copyright">
            <span>
              Theme:{" "}
              <a
                href="https://colorlib.com/wp/themes/illdy"
                title="Illdy"
                target="_blank"
              >
                MR-ICON
              </a>
            </span>
            <span
              className="bottom-copyright"
              data-customizer="copyright-credit"
            >
              @Copyright 2023. All Rights Reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
