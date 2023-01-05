import React from "react";

function Project() {
  return (
    <section id="projects" className="front-page-section">
      <div className="section-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Projects</h3>
            </div>
            <div class="col-sm-10 col-sm-offset-1">
              <div className="section-description">
                You'll love our work. Check it out!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container-fluid">
          <div className="row inline-columns">
            <div
              id="illdy_project-3"
              className="col-sm-3 col-xs-6 no-padding widget_illdy_project"
            >
              <a
                href="https://google.com"
                className="project project-3"
                data-fancybox="gallery"
              >
                <span className="project-overlay"></span>
              </a>
            </div>
            <div
              id="illdy_project-4"
              className="col-sm-3 col-xs-6 no-padding widget_illdy_project"
            >
              <a
                href="https://google.com"
                className="project project-4"
                data-fancybox="gallery"
              >
                <span className="project-overlay"></span>
              </a>
            </div>
            <div
              id="illdy_project-5"
              className="col-sm-3 col-xs-6 no-padding widget_illdy_project"
            >
              <a
                href="https://google.com"
                className="project project-5"
                data-fancybox="gallery"
              >
                <span className="project-overlay"></span>
              </a>
            </div>
            <div
              id="illdy_project-6"
              className="col-sm-3 col-xs-6 no-padding widget_illdy_project"
            >
              <a
                href="https://google.com"
                className="project project-6"
                data-fancybox="gallery"
              >
                <span className="project-overlay"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
