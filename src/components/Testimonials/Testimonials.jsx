import React, { useState } from "react";

export default function Testimonials() {
    const listTesti = [
        {
            img: "https://assets-global.website-files.com/62d901050b694cd462d2879c/62f3c7c9523cfa5823870041_testimonial-2.webp",
            content:  <div className="div-block">
            <div className="testimonial-name">
              Partha Bhattacharya
            </div>
            <p className="testimonial-title">
              Vidbazaar.com Founder
            </p>
            <div className="testimonial-text">
              Vidbazaar.com Founder
            </div>
            <a href="#" className="_22-text is-white wrap-open">
              I guess this will be the way forward for many ad
              platforms. You guys can rightly claim as the
              torchbearer for this. All the best!
            </a>
            <img
              loading="lazy"
              width="Auto"
              alt=""
              src="https://assets-global.website-files.com/62d901050b694cd462d2879c/64c67b1f62db2b29aea5f33d_500rew.svg"
              className="testimonial-review"
            />
          </div>
        },
        {
            img: "https://assets-global.website-files.com/62d901050b694cd462d2879c/62d9013383d7a466b1dd002f_testimonial-image.webp",
            content: <div className="div-block">
            <div className="testimonial-name">David N.</div>
            <p className="testimonial-title">
              VP Digital Marketing
            </p>
            <div className="testimonial-text">
              VP Digital Marketing
            </div>
            <a href="#" className="_22-text is-white wrap-open">
              …I love having both data and AI involved in making our
              ads and overall testing process easier. I think our
              designers will love it too since we will need even
              less of their time.
            </a>
            <img
              loading="lazy"
              width="Auto"
              alt=""
              src="https://assets-global.website-files.com/62d901050b694cd462d2879c/64c67b1f62db2b29aea5f33d_500rew.svg"
              className="testimonial-review"
            />
          </div>
        },
        {
            img: "https://assets-global.website-files.com/62d901050b694cd462d2879c/62f3c7de5ec74f0b7342337c_testimonial-3.webp",
            content: <div className="div-block">
            <div className="testimonial-name">Matthew W.</div>
            <p className="testimonial-title">
              Founder &amp; CEO at Rapid Alpha
            </p>
            <div className="testimonial-text">
              Founder &amp; CEO at Rapid Alpha
            </div>
            <a href="#" className="_22-text is-white wrap-open">
              …I am usually not impressed with .ai-based products,
              but Adcreative.ai has been a pleasant and already
              financially rewarding experience.
            </a>
            <img
              loading="lazy"
              width="Auto"
              alt=""
              src="https://assets-global.website-files.com/62d901050b694cd462d2879c/64c67b1f62db2b29aea5f33d_500rew.svg"
              className="testimonial-review"
            />
          </div>
        },
       
    ]
    const [number, setNumber] = useState(2)
  return (
    <div className="section is-testimonials">
      <div className="container testimonials">
        <div className="heading-wrapper_testimonials">
          <h2 className="heading gradient-span">Testimonials</h2>
          <p>
            See why our users love us! AdCreative.ai is the most popular and
            loved product on G2 in 2023. We're top in Creative Management and AI
            categories, and ranked as the second best product in the world by
            Product Hunt.
          </p>
        </div>
        <div className="w-embed">
          <style dangerouslySetInnerHTML={{ __html: "\n\n\n" }} />
        </div>
        <div className="testimonial-swiper-wrapper">
          <div className="swiper is-photos w-dyn-list swiper-flip swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress">
            <div
              role="list"
              className="swiper-wrapper is-photos w-dyn-items"
              id="swiper-wrapper-3f7e97a10918c71b5"
              aria-live="polite"
              style={{ transitionDuration: "0ms" }}
            >
              <div
                role="group"
                className="swiper-slide is-photos w-dyn-item swiper-slide-duplicate swiper-slide-prev"
                data-swiper-slide-index={5}
                style={{
                //   width: 921,
                  transitionDuration: "0ms",
                  zIndex: 7,
                  transform:
                    "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(-180deg)",
                }}
                aria-label="6 / 6"
              >
                <div className="testimonial-wrapper">
                  <div className="testimonial-insider">
                    <div className="testimonial-image">
                      <img
                        alt=""
                        loading="lazy"
                        src={listTesti[number]?.img}
                        className="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
          <a
            // href="#"
            className="arrow is-left w-inline-block"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-3f7e97a10918c71b5"
            onClick={()=>{
                setNumber(pre=>{
                    console.log("pre", pre)
                    if (pre <= 0) {
                        return listTesti.length -1
                    } else if (pre > listTesti.length -1) {
                        return 0
                    } else {
                        return pre - 1
                    }
                })
            }}
          >
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62d90af20b694c03b0d2ecfa_arrow-testimonial.svg"
              loading="lazy"
              alt=""
            />
          </a>
          <a
            // href="#"
            className="arrow is-right w-inline-block"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-3f7e97a10918c71b5"
            onClick={()=>{
                setNumber(pre=>{
                    console.log("pre", pre)
                    if (pre >= listTesti.length -1) {
                        return 0
                    } else {
                        return pre +1
                    }
                })
            }}
          >
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62d90af20b694c03b0d2ecfa_arrow-testimonial.svg"
              loading="lazy"
              alt=""
            />
          </a>
          <div className="swiper-contents">
            <div className="swiper is-content w-dyn-list swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
              <div
                role="list"
                className="swiper-wrapper is-content w-dyn-items"
                id="swiper-wrapper-10a7cd8e7eee5301e"
                aria-live="polite"
                style={{ transitionDuration: "0ms" }}
              >
                <div
                  role="group"
                  className="swiper-slide is-content w-dyn-item swiper-slide-duplicate swiper-slide-prev"
                  data-swiper-slide-index={5}
                  style={{
                    // width: 921,
                    transitionDuration: "0ms",
                    opacity: 1,
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                  aria-label="6 / 6"
                >
                  {listTesti[number]?.content}
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
        </div>
        <div className="content-narrow">
          <div className="ready-to-start-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dbc6a6ee175f2af88d2d94_team-image.webp"
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 495.9942932128906px, (max-width: 1919px) 35vw, 671.9957275390625px"
              srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dbc6a6ee175f2af88d2d94_team-image-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dbc6a6ee175f2af88d2d94_team-image-p-800.webp 800w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dbc6a6ee175f2af88d2d94_team-image-p-1080.webp 1080w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dbc6a6ee175f2af88d2d94_team-image.webp 1318w"
              alt="Team Image"
              className="team-image"
            />
            <div className="_30-text is-soft-purple bottom-margin-14">
              READY TO START?
            </div>
            <h2 className="is-white is-cta">
              <span className="text-span-8">
                Bring your ad creative game
                <br />
              </span>
              <span className="_44-text">
                to the next level with AdCreative.ai!
              </span>
            </h2>
            <div className="button-and-text-wrapper horizontal">
              <a
                data-ps="target"
                href="https://app.adcreative.ai/Identity/Account/Register"
                target="_blank"
                className="main-button white-purple-h w-inline-block"
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
              <p className="white-cancel">
                Try 100% free for 7 days.{" "}
                <span className="text-gradient-purple-yellow">
                  <strong>Cancel Anytime</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="content-centered">
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62dd6dd9b127ce9022db306a_product-of-the-day.svg"
            loading="lazy"
            alt="Product of the day 2nd"
            className="product-of-the-day"
          />
        </div>
        <div className="background-svg-shape-bottom testimonial-area">
          <div className="svg-shape-bottom w-embed">
            <svg
              id="Group_11950"
              data-name="Group 11950"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 609.134"
            >
              <path
                id="Path_25274"
                data-name="Path 25274"
                d="M1920.5.5V184.967L1147.169,549.973a361.471,361.471,0,0,1-372.572,0L.5,184.506V.5Z"
                transform="translate(-0.5 6.961)"
                fill="#f5f5ff"
                opacity="0.1"
              />
              <path
                id="Path_25273"
                data-name="Path 25273"
                d="M1920.5.5V135.942L1147.169,549.973a361.471,361.471,0,0,1-372.572,0L.5,135.48V.5Z"
                transform="translate(-0.5 6.961)"
                fill="#f5f5ff"
                opacity="0.1"
              />
              <path
                id="Path_25272"
                data-name="Path 25272"
                d="M.5,310.5v91.915L774.6,867.938a361.466,361.466,0,0,0,372.572,0L1920.5,402.88V310.5Z"
                transform="translate(-0.5 -310.504)"
                fill="#f5f5ff"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
