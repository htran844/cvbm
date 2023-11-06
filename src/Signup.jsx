import React, { useEffect } from "react";
import "./signup.css";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Signup() {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  return (
    <section className="container auth-container">
      <div className="login-layout">
        <div className="logo adc-logo-content">
          <img
            className="adc-logo"
            src="https://app.adcreative.ai/assets/svg/login/AdCreative-logo.svg"
          />
        </div>
        <div className="container-content">
          <div className="testimonial-group">
            <div className="testimonial large" data-aos="fade-right">
              <div className="testimonial--header">
                <div className="logo" style={{ backgroundColor: "#ef492d" }}>
                  <img
                    src="https://app.adcreative.ai/assets/svg/login/g2-logo.svg"
                    className="testimonial--logo"
                  />
                </div>
                <div className="info">
                  <div className="name">
                    <span className="testimonial--title">G2</span>
                    <img
                      src="https://app.adcreative.ai/assets/svg/login/blue-tick.svg"
                      alt="blue-tick"
                      className="verified-tick"
                    />
                  </div>
                </div>
              </div>
              <p className="testimonial--body">
                <span>
                  Out of more than 100,000 software products on G2,
                  AdCreative.ai secured the 3rd fastest growing product award in
                  2023 💪{" "}
                  <span className="tag"> #TimesSquare #BestSoftware </span>
                </span>
              </p>
              <div className="with-bg">
                <img src="https://app.adcreative.ai/assets/svg/login/new-york-times.webp" alt="" />
              </div>
              <p />
            </div>
            <div className="testimonial" data-aos="fade-right">
              <div className="testimonial--header">
                <div className="logo" style={{ backgroundColor: "#fff" }}>
                  <img
                    src="https://app.adcreative.ai/assets/svg/login/google-logo.svg"
                    className="testimonial--logo"
                  />
                </div>
                <div className="info">
                  <div className="name">
                    <span className="testimonial--title">Google Ads</span>
                    <img
                      src="https://app.adcreative.ai/assets/svg/login/yellow-tick.svg"
                      alt=""
                      className="verified-tick"
                    />
                  </div>
                </div>
              </div>
              <p className="testimonial--body">
                <span>
                  Were proud to recognise AdCreative.ai as a Premier Partner and
                  their excellence in digital marketing in five categories:
                </span>
                <span>
                  Brand Awareness, Lead Generation, App Growth, Online Sales,
                  International Growth and Workplace Excellence.
                </span>
              </p>
            </div>
          </div>
          <section className="login-form-wrapper relative">
            <header className="login-layout--header"></header>
            <section className="component">
              <section className="component-content">
                <div className="content">
                  <div id="templateTarget">
                    <form id="formSignup" method="post" noValidate="novalidate">
                      <div className="layout-card dynamic-height">
                        <div className="layout-card-head">
                          <h4 id="title">
                            #1 most used <br /> AI tool for advertising.
                          </h4>
                          <h2 id="sub-title">
                            Sign up &amp; Get 10 Free Credits
                          </h2>
                        </div>
                        <div className="sc-media-container">
                          <div className="sc-media-buttons">
                            <button
                              className="btn google-login"
                              type="button"
                              id="google_login"
                              onclick="googleLogin()"
                            >
                              <div className="media-text">
                                Sign-up with Google
                              </div>
                              <div className="media-icon">
                                <img
                                  src="https://app.adcreative.ai/assets/svg/login/google-icon-dark-blue.svg"
                                  alt=""
                                />
                              </div>
                            </button>
                            <button
                              className="btn microsoft-login"
                              type="button"
                              onclick="microsoftLogin()"
                            >
                              <div className="media-text">
                                Sign-up with Microsoft
                              </div>
                              <div className="media-icon">
                                <img
                                  src="https://app.adcreative.ai/assets/svg/login/microsoft-dark-blue.svg"
                                  alt=""
                                />
                              </div>
                            </button>
                          </div>
                          <div className="or-div">or</div>
                        </div>
                        <div className="layout-card-body">
                          <div className="input-control">
                            <input
                              placeholder="Full Name"
                              id="fullName"
                              autoComplete="name"
                              required=""
                              type="text"
                              data-val="true"
                              data-val-minlength="The full name cannot be less than 3 characters."
                              data-val-minlength-min={3}
                              data-val-required="The Full Name field is required."
                              name="Input.FullName"
                              defaultValue=""
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="Input.FullName"
                              data-valmsg-replace="true"
                            />
                          </div>
                          <div className="input-control">
                            <input
                              placeholder="Email"
                              id="email"
                              autoComplete="email"
                              onchange="return _checkEmailValidation(this)"
                              required=""
                              type="email"
                              data-val="true"
                              data-val-email="Invalid e-mail. Use valid emails only"
                              data-val-required="The Email field is required."
                              name="Input.Email"
                              defaultValue=""
                            />
                            <span className="email-suggestion" />
                            <div className="lottie">
                              <lottie-player
                                className="lottie--cancel d-none"
                                src="/assets/lottie/email-cancel.json"
                                background="transparent"
                                style={{ width: 50, height: 30 }}
                              />
                              <lottie-player
                                className="lottie--check d-none"
                                src="/assets/lottie/email-check.json"
                                background="transparent"
                                style={{ width: 50, height: 30 }}
                              />
                            </div>
                          </div>
                          <div className="input-control">
                            <input
                              placeholder="Password *"
                              id="password"
                              autoComplete="current-password"
                              required=""
                              type="password"
                              data-val="true"
                              data-val-length="The Password must be at least 4 and at max 30 characters long."
                              data-val-length-max={30}
                              data-val-length-min={4}
                              data-val-required="The Password field is required."
                              maxLength={30}
                              name="Input.Password"
                            />
                            {/* <div
                          className="toggle-password"
                          onclick="_togglePassword(this)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23.889"
                            height="18.521"
                            viewBox="0 0 23.889 18.521"
                          >
                            <g
                              id="visible_1_"
                              data-name="visible (1)"
                              transform="translate(-1.996 -4.25)"
                            >
                              <circle
                                id="Ellipse_1408"
                                data-name="Ellipse 1408"
                                cx="5.967"
                                cy="5.967"
                                r="5.967"
                                transform="translate(7.968 7.532)"
                                fill="#605880"
                              />
                              <path
                                id="Path_28517"
                                data-name="Path 28517"
                                d="M13.935,4.25c4.5,0,8.688,3.079,11.791,8.664a1.193,1.193,0,0,1,0,1.193c-3.1,5.585-7.292,8.664-11.791,8.664S5.259,19.693,2.156,14.107a1.193,1.193,0,0,1,0-1.193C5.259,7.329,9.436,4.25,13.935,4.25ZM5.581,13.5a8.354,8.354,0,1,0,8.354-8.354A8.354,8.354,0,0,0,5.581,13.5Z"
                                fill="#605880"
                                fillRule="evenodd"
                              />
                            </g>
                          </svg>
                        </div> */}
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="Input.Password"
                              data-valmsg-replace="true"
                            />
                          </div>
                          <div className="terms">
                            By registering you agree to our{" "}
                            <a
                              href="https://www.adcreative.ai/terms-and-conditions"
                              target="_blank"
                            >
                              terms of use
                            </a>
                            .
                          </div>
                        </div>
                      </div>
                      {/* <div className="promo-code--container d-none">
                    <span
                      classname="d-block btn-link cursor-pointer mb-0"
                      id="promoCodeBtn"
                    >
                      I have a code to apply.
                    </span>
                    <div id="promo-code--inner" className="d-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={34}
                        height={34}
                        className="crossicon-svg promo-code--close"
                        viewBox="0 0 34 34"
                      >
                        <g id="Group_4817" transform="translate(-1698 -494)">
                          <rect
                            id="Rectangle_168"
                            width={34}
                            height={34}
                            rx={10}
                            transform="translate(1698 494)"
                            fill="#ff3067"
                          />
                          <g
                            id="_001-add"
                            transform="translate(1715.473 524.406) rotate(-135)"
                          >
                            <g id="Group_4463">
                              <path
                                id="Path_3369"
                                d="M17.291,7.719H10.575v-6.7A1.011,1.011,0,0,0,9.577,0H8.717a1.012,1.012,0,0,0-1,1.013v6.7H1a1,1,0,0,0-1,1v.864a1,1,0,0,0,1,1H7.717v6.728a.992.992,0,0,0,1,.989h.859a.99.99,0,0,0,1-.989V10.577h6.716a1,1,0,0,0,1-1V8.717A1,1,0,0,0,17.291,7.719Z"
                                transform="translate(0 -0.002)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div> */}
                      <div className="btn-wrapper">
                        <button
                          id="form-button"
                          disabled=""
                          className="--data-ps-target submit-btn signup-btn"
                          data-ps="target"
                          type="submit"
                        >
                          <span>Sign up &amp; Get 10 Free Credits</span>
                        </button>
                      </div>
                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        defaultValue="CfDJ8D82nD2SabFLlr-sR_zQ7fU038SOw8UylEsE5OUUN0zJZG11E8BhDI8hBb4A7OUm7Lf2Urv6g7yrJADyS-eZSeTjC1AIqOizKpWgiDCcqIDQSDlJ717B8BM9FrwkFmKvSF04GolIWJI78lYTsK-cnAk"
                      />
                    </form>
                    <div className="layout-footer-info">
                      <p>
                        <span id="subtitle">Do you have an account?</span>
                        <span id="subtitleLink">
                          <a
                            href="/Identity/Account/Login"
                            className="auth-link"
                          >
                            Login
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </section>
          <div className="testimonial-group">
            <div className="testimonial" data-aos="fade-left">
              <div className="testimonial--header">
                <div className="logo" style={{ backgroundColor: "#FF5927" }}>
                  <img
                    src="https://app.adcreative.ai/assets/svg/login/semrush-logo.svg"
                    className="testimonial--logo"
                  />
                </div>
                <div className="info">
                  <div className="name">
                    <span className="testimonial--title">Semrush</span>
                    <img
                      src="https://app.adcreative.ai/assets/svg/login/yellow-tick.svg"
                      alt=""
                      className="verified-tick"
                    />
                  </div>
                </div>
              </div>
              <p className="testimonial--body">
                <span>
                  AdCreative.ai ranks as the #1 tool on our list of AI Tools for
                  Digital Marketers in 2023. However,
                </span>
                <span>
                  AdCreative.ai is more than just an AI company; they have one
                  of the largest high-conversion ad creative databases.
                </span>
              </p>
            </div>
            <div className="testimonial large" data-aos="fade-left">
              <div className="testimonial--header">
                <div className="logo" style={{ backgroundColor: "#e60000" }}>
                  <img
                    src="https://app.adcreative.ai/assets/svg/login/havas-logo.svg"
                    className="testimonial--logo"
                  />
                </div>
                <div className="info">
                  <span className="testimonial--title">Havas</span>
                </div>
              </div>
              <p className="testimonial--body">
                <span>
                  As an innovative startup in media and creativity,
                  AdCreative.ai is supported by the Havas Accelerator Program
                  with the mission to connect startups, agencies and brands to
                  pave the future of communication and advertising.
                </span>
                <span className="tag">
                  #havasstartupaccelerator #adcreative #paris
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="g2-testimonial">
          <div className="left">
            <img
              className="g2-logo"
              src="https://app.adcreative.ai/assets/svg/login/g2-dark-blue.svg"
              alt=""
            />
            <div className="testimonial-score">
              <div className="stars">
                <img
                  src="https://app.adcreative.ai/assets/svg/login/full-star.svg"
                  alt="Star"
                />
                <img
                  src="https://app.adcreative.ai/assets/svg/login/full-star.svg"
                  alt="Star"
                />
                <img
                  src="https://app.adcreative.ai/assets/svg/login/full-star.svg"
                  alt="Star"
                />
                <img
                  src="https://app.adcreative.ai/assets/svg/login/full-star.svg"
                  alt="Star"
                />
                <img
                  src="https://app.adcreative.ai/assets/svg/login/half-star.svg"
                  alt="Star"
                />
              </div>
              <span className="g2-testimonial--comment">497 comment</span>
            </div>
          </div>
          <div className="right">4,5</div>
        </div>
      </div>
    </section>
  );
}
