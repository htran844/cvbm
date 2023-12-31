import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function WhySticky() {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  return (
    <div className="section sticky">
      <div className="container">
        <div className="content-narrow">
          <div className="sticky-content-wrapper">
            <div className="sticky-heading">
              <h2 className="bottom-margin-14">
                <span className="span-medium-purple">
                  Why
                  <br />
                </span>
                <span className="gradient-span">AdCreative.ai?</span>
              </h2>
              <p className="bottom-margin-20">
                Let our artificial intelligence generate creatives that convert,{" "}
                <strong>so you can save time and money to scale</strong>. Check
                out why and how you should use Adcreative.ai
              </p>
              <div className="button-and-text-wrapper left-aligned">
                <a
                  data-ps="target"
                  href="/signup"
                  target="_blank"
                  className="main-button is-general w-inline-block"
                >
                  <div className="button-text">Generate Ad Creatives</div>
                  <div className="purple-logo-small w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 23.229 23.228"
                    >
                      <g id="layers" transform="translate(0 -0.009)">
                        <g
                          id="Group_11749"
                          data-name="Group 11749"
                          transform="translate(0 10.005)"
                        >
                          <g
                            id="Group_11748"
                            data-name="Group 11748"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_25232"
                              data-name="Path 25232"
                              d="M22.864,206.585a.813.813,0,0,0-.073-.043l-1.648-.888L12,210.494a.829.829,0,0,1-.776,0l-9.141-4.84-1.648.888a.821.821,0,0,0-.34,1.11.834.834,0,0,0,.043.073L11.614,213.8l11.475-6.075A.821.821,0,0,0,22.864,206.585Z"
                              transform="translate(0 -205.654)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_11751"
                          data-name="Group 11751"
                          transform="translate(0 14.982)"
                        >
                          <g id="Group_11750" data-name="Group 11750">
                            <path
                              id="Path_25233"
                              data-name="Path 25233"
                              d="M23.142,309.278a.83.83,0,0,0-.336-.336l-1.648-.888-9.141,4.84a.829.829,0,0,1-.776,0L2.1,308.054l-1.648.888a.83.83,0,0,0,0,1.46l10.785,5.807a.83.83,0,0,0,.786,0L22.806,310.4A.83.83,0,0,0,23.142,309.278Z"
                              transform="translate(-0.014 -308.054)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_11753"
                          data-name="Group 11753"
                          transform="translate(0 0.009)"
                        >
                          <g
                            id="Group_11752"
                            data-name="Group 11752"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_25234"
                              data-name="Path 25234"
                              d="M22.864,5.958a.822.822,0,0,0-.073-.043L12.007.108a.829.829,0,0,0-.786,0L.436,5.915A.821.821,0,0,0,.139,7.1l11.475,6.075L23.089,7.1A.821.821,0,0,0,22.864,5.958Z"
                              transform="translate(0 -0.009)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
                <p className="top-margin-30">
                  Try 100% free for 7 days.{" "}
                  <span className="gradient-span cancel-anytime-text">
                    <strong>Cancel Anytime</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="sticky-content_informations is-home">
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3>Trained A.I.</h3>
                <p className="paragraph">
                  Our machine learning model is learning every day and provides
                  up-to-date creatives with a sole purpose: conversion.
                </p>
              </div>
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac129e465da58e612a967_feature-2.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3>Better Conversions</h3>
                <p className="paragraph">
                  Up to 14x better conversion rates than ad creatives designed
                  with no data-driven approach.
                </p>
              </div>
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac1282336593fabc4dbfb_feature-3.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3>Super Scalable</h3>
                <p className="paragraph">
                  1 creative or 10,000 creatives a month, AdCreative.ai is
                  designed to match your ad creative/banner needs.
                </p>
              </div>
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac12810bbd1e03bef4ecd_feature-4.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3>Seemless Designs</h3>
                <p className="paragraph">
                  Our unique A.I. understands your brandcolors and font to
                  create seamless designs that fit your branding.
                </p>
              </div>
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac1281c1521060036efc6_feature-5.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3>Platform Integrations</h3>
                <p className="paragraph">
                  AdCreative.ai can integrate with Google, Facebook, ADYOUNEED
                  and Zapier to help you make the most of AdCreative.ai.
                </p>
              </div>
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac1291a5f7bf974d1659c_feature-6.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3>Created for Collaborations</h3>
                <p className="paragraph">
                  Invite up to 25 users to AdCreative.ai and let them generate
                  creatives simultaneously under one main account.
                </p>
              </div>
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac12984a645d650318f23_feature-7.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3>Text Generator</h3>
                <p className="paragraph">
                  Generate results bringing texts for your ads within
                  AdCreative.ai
                </p>
              </div>
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac129233659e9cfc4dbfc_feature-8.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3>See Insights</h3>
                <p className="paragraph">
                  See which creatives perform the best on your ad accounts.
                </p>
              </div>
              <div className="sticky-content__feature" data-aos="fade-left" style={{ opacity: 1 }}>
                <div className="sticky-content__feature-icon-wrapper">
                  <div className="logo-white-wrapperr is-red with-shadow">
                    <div className="login-text hidden-mobile">Login</div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg"
                      loading="lazy"
                      alt=""
                      className="image-3"
                    />
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg"
                  loading="lazy"
                  alt="arrow right"
                  className="arrow-right"
                />
                <h3 className="heading-8">Whitelabel Ready</h3>
                <p className="paragraph">
                  Change the logo and URL of AdCreative.ai, make it truly yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
