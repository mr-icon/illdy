import React from "react";

function Latest() {
  return (
    <section id="latest-news" class="front-page-section">
      <div class="section-header">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h3>Latest News</h3>
            </div>
            <div class="col-sm-10 col-sm-offset-1">
              <div class="section-description">
                If you are interested in the latest articles in the industry,
                take a sneak peek at our blog. You have got nothing to loose!
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href=" " class="latest-news-button">
        <i class="fa fa-chevron-circle-right"></i>See blog
      </a>
      <div class="section-content">
        <div class="container">
          <div class="row blog-carousel">
            <div class="illdy-blog-post col-md-4 col-sm-6 col-xs-12">
              <div class="post">
                <div class="post-image card-post-1"></div>
                <h5>
                  <a href="" class="post-title">
                    We Have Made Illdy Theme SEO Friendly
                  </a>
                </h5>
                <div class="post-entry">
                  " Illdy One Page WordPress theme is fully SEO friendly and is
                  ready to help you to achieve the highest rankings... "
                </div>
                <a href="" class="post-button">
                  <i class="fa fa-chevron-circle-right"></i>Read more
                </a>
              </div>
            </div>
            <div class="illdy-blog-post col-md-4 col-sm-6 col-xs-12">
              <div class="post">
                <div class="post-image card-post-2"></div>
                <h5>
                  <a href="" class="post-title">
                    We Have Made Illdy Theme SEO Friendly
                  </a>
                </h5>
                <div class="post-entry">
                  " Illdy One Page WordPress theme is fully SEO friendly and is
                  ready to help you to achieve the highest rankings... "
                </div>
                <a href="" class="post-button">
                  <i class="fa fa-chevron-circle-right"></i>Read more
                </a>
              </div>
            </div>
            <div class="illdy-blog-post col-md-4 col-sm-6 col-xs-12">
              <div class="post">
                <div class="post-image card-post-3"></div>
                <h5>
                  <a href="" class="post-title">
                    We Have Made Illdy Theme SEO Friendly
                  </a>
                </h5>
                <div class="post-entry">
                  " Illdy One Page WordPress theme is fully SEO friendly and is
                  ready to help you to achieve the highest rankings... "
                </div>
                <a href="" class="post-button">
                  <i class="fa fa-chevron-circle-right"></i>Read more
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
