import React from "react";

function Contact() {
  return (
    <section id="contact-us" className="front-page-section">
      <div className="section-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Contact us</h3>
            </div>
            <div className="col-sm-10 col-sm-offset-1">
              <div className="section-description">
                And we will get in touch as soon as possible.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row" 
            //   style="margin-bottom: 45px;"
              >
                <div className="col-sm-4">
                  <div className="contact-us-box">
                    <div
                      className="box-left"
                      data-customizer="box-left-address-title"
                    >
                      Address
                    </div>
                    <div className="box-right">
                      <span
                        className="box-right-row"
                        data-customizer="contact-us-address-1"
                      >
                        Street 221B Baker Street,
                      </span>
                      <span
                        className="box-right-row"
                        data-customizer="contact-us-address-2"
                      >
                        London, UK
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="contact-us-box">
                    <div
                      className="box-left"
                      data-customizer="box-left-customer-support-title"
                    >
                      Customer Support
                    </div>
                    <div className="box-right">
                      <span className="box-right-row">
                        E-mail
                        <a
                          href="mailto:<?php echo esc_attr( $email ); ?>"
                          title="<?php echo esc_attr( $email ); ?>"
                        >
                          contact@site.com
                        </a>
                      </span>
                      <span
                        className="box-right-row"
                        data-customizer="contact-us-phone"
                      >
                        (555) 555-5555
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="contact-us-social">
                    <a
                      href=""
                      title="<?php _e( 'Twitter', 'illdy' ); ?>"
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="<?php echo esc_url( $contact_bar_facebook_url ); ?>"
                      title="<?php _e( 'Facebook', 'illdy' ); ?>"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="<?php echo esc_url( $contact_bar_linkedin_url ); ?>"
                      title="<?php _e( 'LinkedIn', 'illdy' ); ?>"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                      href="<?php echo esc_url( $contact_bar_googlep_url ); ?>"
                      title="<?php _e( 'Google+', 'illdy' ); ?>"
                      target="_blank"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a
                      href="<?php echo esc_url( $contact_bar_pinterest_url ); ?>"
                      title="<?php _e( 'Pinterest', 'illdy' ); ?>"
                      target="_blank"
                    >
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a
                      href="<?php echo esc_url( $contact_bar_instagram_url ); ?>"
                      title="<?php _e( 'Instagram', 'illdy' ); ?>"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      href="<?php echo esc_url( $contact_bar_youtube_url ); ?>"
                      title="<?php _e( 'YouTube', 'illdy' ); ?>"
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                    <a
                      href="<?php echo esc_url( $contact_bar_vimeo_url ); ?>"
                      title="<?php _e( 'Vimeo', 'illdy' ); ?>"
                      target="_blank"
                    >
                      <i className="fa fa-vimeo"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div
                role="form"
                className="wpcf7"
                id="wpcf7-f128-o1"
                lang="en-Us"
                dir="1tr"
              >
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true"></p>
                  <ul></ul>
                </div>
                <form
                  action="/illdy/#wpcf7-f128-o1"
                  method="post"
                  className="wpcf7-form init"
                  novalidate="novalidate"
                  data-status="init"
                >
                  <div 
                //   style={"display: none;"}
                >
                    <input type="hidden" name="_wpcf7" value="128" />
                    <input type="hidden" name="_wpcf7_version" value="5.6.4" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      value="wpcf7-f128-o1"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      value="0"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_posted_data_hash"
                      value=""
                    />
                  </div>
                  <p>
                    <label>
                      Your Name (required) <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="your-name"
                      >
                        <input
                          type="text"
                          name="your-name"
                          value
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </span>
                    </label>
                  </p>
                  <p>
                    <label>
                      Your Email (required) <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="your-email"
                      >
                        <input
                          type="email"
                          name="your-email"
                          value
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </span>
                    </label>
                  </p>
                  <p>
                    <label>
                      Subject <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="your-subject"
                      >
                        <input
                          type="text"
                          name="your-subject"
                          value
                          size="40"
                          className="wpcf7-form-control wpcf7-text"
                          aria-invalid="false"
                        />
                      </span>
                    </label>
                  </p>
                  <p>
                    <label>
                      Your Message <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="your-message"
                      >
                        <textarea
                          name="your-message"
                          cols="40"
                          rows="10"
                          className="wpcf7-form-control wpcf7-textarea"
                          aria-invalid="false"
                        ></textarea>
                      </span>
                    </label>
                  </p>
                  <p>
                    <input
                      type="submit"
                      value="Send"
                      class="wpcf7-form-control has-spinner wpcf7-submit"
                    />
                    <span className="wpcf7-spinner"></span>
                  </p>
                  <div
                    className="wpcf7-response-output"
                    aria-hidden="true"
                  ></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;