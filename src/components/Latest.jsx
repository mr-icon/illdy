import React from "react";

function Latest() {
  return (
    <section id="latest-news" className="front-page-section">
      <div className="section-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Latest News</h3>
            </div>
            <div className="col-sm-10 col-sm-offset-1">
              <div className="section-description">
                If you are interested in the latest articles in the industry,
                take a sneak peek at our blog. You have got nothing to loose!
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href=" " className="latest-news-button">
        <i className="fa fa-chevron-circle-right"></i>See blog
      </a>
      <div className="section-content">
        <div className="container">
          <div className="row blog-carousel">
            <div className="illdy-blog-post col-md-4 col-sm-6 col-xs-12">
              <div className="post">
                <div className="post-image card-post-1"></div>
                <h5>
                  <a href="" className="post-title">
                    We Have Made Illdy Theme SEO Friendly
                  </a>
                </h5>
                <div className="post-entry">
                  Illdy One Page WordPress theme is fully SEO friendly and is
                  ready to help you to achieve the highest rankings... 
                </div>
                <a href="" className="post-button">
                  <i className="fa fa-chevron-circle-right"></i>Read more
                </a>
              </div>
            </div>
            <div className="illdy-blog-post col-md-4 col-sm-6 col-xs-12">
              <div className="post">
                <div className="post-image card-post-2"></div>
                <h5>
                  <a href="" className="post-title">
                    Stunning One Page WordPress Theme For Masses
                  </a>
                </h5>
                <div className="post-entry">
                  This theme is not just free, it is free for private and commercial use since it is licensed under GPL...
                </div>
                <a href="" className="post-button">
                  <i className="fa fa-chevron-circle-right"></i>Read more
                </a>
              </div>
            </div>
            <div className="illdy-blog-post col-md-4 col-sm-6 col-xs-12">
              <div className="post">
                <div className="post-image card-post-3"></div>
                <h5>
                  <a href="" className="post-title">
                    Hello World!
                  </a>
                </h5>
                <div className="post-entry">
                  Welcome to colorlib.com. This our first post around illdy WordPress theme. Now show that you can make out of it...
                </div>
                <a href="" className="post-button">
                  <i className="fa fa-chevron-circle-right"></i>Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latest;
