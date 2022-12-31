import React from "react";

function About() {
  return (
    <section id="about" className="front-page-section">
      <div className="section-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>About</h3>
            </div>
            <div className="col-sm-10 col-sm-offset-1">
              <div className="section-description">
                It is an amazng one-page theme with great features that offers
                an incredible experience. It is easy to install, make changes,
                adapt for your business. A modern design with clean lines and
                styling for a wide variety of content, exactly how a business
                design should be. You can add as many images as you want to the
                main header area and turn them into slider.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container">
          <div className="row">
            <div
              id="illdy_skill-2"
              className="col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 col-lg-4 col-lg-offset-0 widget_illdy_skill"
            >
              <div
                className="skill"
                data-skill-progress-bar-width="60"
                data-skill-color="#f18b6d"
              >
                <div className="skill-top clearfix">
                  <div
                    className="skill-progress-bar ui-progressbar ui-corner-all ui-widget ui-widget-content"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={60}
                  >
                    <div
                      className="ui-progressbar-value ui-corner-left ui-widget-header skill-widget-2"
                    >
                      <span
                        className="ui-progressbar-value-circle skill-circle-2"
                      ></span>
                      <span
                        className="ui-progressbar-value-top skill-top-2"
                      >
                        60%
                        <span
                          className="ui-progressbar-value skill-value-2"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="skill-bottom bottom-2" 
                >
                  <i className="fa fa-font"></i>
                  <span>Typography</span>
                </div>
              </div>
            </div>
            <div
              id="illdy_skill-3"
              className="col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 col-lg-4 col-lg-offset-0 widget_illdy_skill"
            >
              <div
                className="skill"
                data-skill-progress-bar-width="82"
                data-skill-color="#f1d204"
              >
                <div className="skill-top clearfix">
                  <div
                    className="skill-progress-bar ui-progressbar ui-corner-all ui-widget ui-widget-content"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={82}
                  >
                    <div
                      className="ui-progressbar-value ui-corner-left ui-widget-header skill-widget-3"
                    >
                      <span
                        className="ui-progressbar-value-circle skill-circle-3"
                      ></span>
                      <span
                        className="ui-progressbar-value-top skill-top-3"
                      >
                        82%
                        <span
                          className="ui-progressbar-value-triangle skill-value-3"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="skill-bottom bottom-3" 
                >
                  <i className="fa fa-pencil"></i>
                  <span>Design</span>
                </div>
              </div>
            </div>
            <div
              id="illdy_skill-4"
              className="col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 col-lg-4 col-lg-offset-0 widget_illdy_skill"
            >
              <div
                className="skill"
                data-skill-progress-bar-width="87"
                data-skill-color="#6a4d8a"
              >
                <div className="skill-top clearfix">
                  <div
                    className="skill-progress-bar ui-progressbar ui-corner-all ui-widget ui-widget-content"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={87}
                  >
                    <div
                      className="ui-progressbar-value ui-corner-left ui-widget-header skill-widget-4"
                    >
                      <span
                        className="ui-progressbar-value-circle skill-circle-4"
                      ></span>
                      <span
                        className="ui-progressbar-value-top skill-top-4"
                      >
                        87%
                        <span
                          className="ui-progressbar-value-triangle skill-value-4"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="skill-bottom bottom-4" 
                >
                  <i className="fa fa-code"></i>
                  <span>Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
