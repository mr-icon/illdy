import React from "react";

function Service() {
  return (
    <section id="services" className="front-page-section">
      <div className="section-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Services</h3>
              <div className="col-sm-10 col-sm-offset-1">
                <div className="section-description">
                  In order to help you grow your business, our carefully
                  selected experts can advise you in in the following areas:
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container">
          <div className="row inline-columns">
            <div id="illdy_service-2" className="col-sm-4 wdiget_illdy_service">
              <div className="service" data-service-color="#f18b6d">
                <div
                  className="service-icon"
                >
                  <i className="fa fa-pencil"></i>
                </div>
                <div
                  className="service-title"
                >
                  <h5 className="service-title-1">Web Design</h5>
                </div>
                <div className="service-entry">
                  Consectetur adipiscing elit. Praesent molestie urna hendrerit
                  erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non
                  augue dapibus porttitor at in mauris. Pellentesque commodo...
                </div>
              </div>
            </div>
            <div id="illdy_service-3" className="col-sm-4 wdiget_illdy_service">
              <div className="service" data-service-color="#f1d204">
                <div
                  className="service-icon"
                >
                  <i className="fa fa-code"></i>
                </div>
                <div
                  className="service-title"
                >
                  <h5 className="service-title-2">Web Development</h5>
                </div>
                <div className="service-entry">
                  Consectetur adipiscing elit. Praesent molestie urna hendrerit
                  erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non
                  augue dapibus porttitor at in mauris. Pellentesque commodo...
                </div>
              </div>
            </div>
            <div id="illdy_service-4" className="col-sm-4 wdiget_illdy_service">
              <div className="service" data-service-color="#6a4d8a">
                <div
                  className="service-icon"
                >
                  <i className="fa fa-search"></i>
                </div>
                <div
                  className="service-title"
                >
                  <h5 className="service-title-3">SEO Analisys</h5>
                </div>
                <div className="service-entry">
                  Consectetur adipiscing elit. Praesent molestie urna hendrerit
                  erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non
                  augue dapibus porttitor at in mauris. Pellentesque commodo...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
