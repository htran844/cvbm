import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isShowMenu, setShowMenu] = useState(false);
  const [isShowMenuFeature, setShowMenuFeature] = useState(false);
  const [isShowMenuUsecase, setShowMenuUsecase] = useState(false);
  const [number, setNumber] = useState(0);
  const listHeroItem = [
    {
        id:1,
        content: <div
        className="hero_item is--1 active"
        style={{ opacity: 1 }}
      >
        <div className="hero-visual-top">
          <div
            id="w-node-aec86962-c603-e087-3187-4a1b1b069dc6-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div className="card-upper-text">Brand</div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62d7dc1652a03e5deb010378_tesla-logo.svg"
              loading="lazy"
              alt="tesla-logo"
              width="51.5"
              className="tesla-logo"
            />
          </div>
          <div
            id="w-node-cf829446-96b4-ebe0-8471-7849fe6de7a1-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div className="card-upper-text">Size</div>
            </div>
            <div className="card-information">
              Post Size
              <br />
              <span className="text-span">(1080x1080)</span>
            </div>
          </div>
          <div
            id="w-node-cf2e8de1-02e8-8fbc-35e2-cd7a53367f5b-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div className="card-upper-text">Text</div>
            </div>
            <div className="card-information is-2">
              <span className="text-span-7">
                Tesla Model S Plaid
              </span>
              <br />
              ORDER NOW
              <span className="text-span" />
            </div>
          </div>
          <div
            id="w-node-_2dd5d586-50be-6e3d-3729-080814c6c9b4-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div className="card-upper-text">Image</div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c645e7e4ad5109a7e5a4a1_1154171.webp"
              loading="lazy"
              alt=""
              className="brand-image"
            />
          </div>
          <div
            id="w-node-fb8b40c8-6ab2-1b2e-ecbb-18f9dd80034f-f148ae1e"
            className="hero-arrow w-embed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 13 52.063"
            >
              <g
                id="Group_13230"
                data-name="Group 13230"
                transform="translate(-954 -297.845)"
              >
                <path
                  id="Path_25264"
                  data-name="Path 25264"
                  d="M144.012,12H94.95"
                  transform="translate(948.5 443.357) rotate(-90)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={3}
                  strokeDasharray="1 10"
                />
                <path
                  id="Polygon_51"
                  data-name="Polygon 51"
                  d="M5.662,1.29a1,1,0,0,1,1.677,0L12,8.455A1,1,0,0,1,11.157,10H1.843A1,1,0,0,1,1,8.455Z"
                  transform="translate(967 327) rotate(180)"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="hero-item-rotate"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(7.3028deg) rotateY(15.9968deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="hero-images" />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c51dfd534786a2758e25c8_Group%2021065.webp"
            loading="lazy"
            alt=""
            className="image-small flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c51dfe96fa168ec5a8fe3f_Group%2021307.webp"
            loading="lazy"
            alt=""
            className="image-medium flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c51dff8bcb07f304ca404e_Group%2021308.webp"
            loading="lazy"
            alt=""
            height=""
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 16vw, 300px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c51dff8bcb07f304ca404e_Group%2021308-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c51dff8bcb07f304ca404e_Group%2021308.webp 600w"
            className="image-big flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c51dfe13235e3b217e1b12_Group%2021309.webp"
            loading="lazy"
            alt=""
            className="image-medium is-right flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c51dfeba83e11a926d16f0_Group%2021310.webp"
            loading="lazy"
            alt=""
            className="image-small is-right flip"
            style={{ opacity: "0.9469" }}
          />
        </div>
        <img
          src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c78fb0c49f41a64f34d79a_hero-tesla.webp"
          loading="lazy"
          height={320}
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 499.9999694824219px, (max-width: 991px) 620.95166015625px, 100vw"
          alt=""
          srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c78fb0c49f41a64f34d79a_hero-tesla-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c78fb0c49f41a64f34d79a_hero-tesla-p-800.webp 800w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c78fb0c49f41a64f34d79a_hero-tesla-p-1080.webp 1080w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c78fb0c49f41a64f34d79a_hero-tesla-p-1600.webp 1600w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c78fb0c49f41a64f34d79a_hero-tesla-p-2000.webp 2000w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c78fb0c49f41a64f34d79a_hero-tesla-p-2600.webp 2600w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c78fb0c49f41a64f34d79a_hero-tesla.webp 3619w"
          className="mobile-tesla"
        />
      </div>
    },
    {
        id:2,
        content:  <div className="hero_item" style={{ opacity: 1 }}>
        <div className="hero-visual-top">
          <div
            id="w-node-c77e899e-c707-4595-841f-a516ce2bef50-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Brand</div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/633960aead6a6dfa2a03c1f7_ua-logo.svg"
              loading="lazy"
              alt="UA Logo"
              className="tesla-logo"
            />
          </div>
          <div
            id="w-node-c77e899e-c707-4595-841f-a516ce2bef55-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Size</div>
            </div>
            <div className="card-information">
              Vertical Size
              <br />‍
              <span className="text-span">(1080x1350)</span>
            </div>
          </div>
          <div
            id="w-node-c77e899e-c707-4595-841f-a516ce2bef5e-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Text</div>
            </div>
            <div className="card-information is-2">
              Reach your ideal custom..
              <br />
            </div>
          </div>
          <div
            id="w-node-c77e899e-c707-4595-841f-a516ce2bef68-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Image</div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c645a7faaf8c07c784cec1_iScreen%20Shoter%20-%2020230709190222343.webp"
              loading="lazy"
              alt=""
              className="brand-image"
            />
          </div>
          <div
            id="w-node-c77e899e-c707-4595-841f-a516ce2bef6d-f148ae1e"
            className="hero-arrow w-embed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 13 52.063"
            >
              <g
                id="Group_13230"
                data-name="Group 13230"
                transform="translate(-954 -297.845)"
              >
                <path
                  id="Path_25264"
                  data-name="Path 25264"
                  d="M144.012,12H94.95"
                  transform="translate(948.5 443.357) rotate(-90)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={3}
                  strokeDasharray="1 10"
                />
                <path
                  id="Polygon_51"
                  data-name="Polygon 51"
                  d="M5.662,1.29a1,1,0,0,1,1.677,0L12,8.455A1,1,0,0,1,11.157,10H1.843A1,1,0,0,1,1,8.455Z"
                  transform="translate(967 327) rotate(180)"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="hero-item-rotate"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(7.3028deg) rotateY(15.9968deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="hero-images" />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a6239c7da1bfd605e_Group%2021323.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 10vw, 192.9971466064453px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a6239c7da1bfd605e_Group%2021323-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a6239c7da1bfd605e_Group%2021323.webp 580w"
            alt=""
            className="image-small flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490ab5d3e5b85de62117_Group%2021324.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 12vw, 229.99998474121094px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490ab5d3e5b85de62117_Group%2021324-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490ab5d3e5b85de62117_Group%2021324.webp 694w"
            alt=""
            className="image-medium flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a6239c7da1bfd605e_Group%2021323.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 16vw, 300px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a6239c7da1bfd605e_Group%2021323-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a6239c7da1bfd605e_Group%2021323.webp 580w"
            alt=""
            className="image-big flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a8034e6797135ad49_Group%2021325.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 12vw, 229.99998474121094px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a8034e6797135ad49_Group%2021325-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a8034e6797135ad49_Group%2021325-p-800.webp 800w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a8034e6797135ad49_Group%2021325.webp 901w"
            alt=""
            className="image-medium is-right flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a62db2b29ae79f470_Group%2013100.webp"
            loading="lazy"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a62db2b29ae79f470_Group%2013100-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a62db2b29ae79f470_Group%2013100.webp 577w"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 10vw, 192.9971466064453px"
            alt=""
            className="image-small is-right flip"
            style={{ opacity: "0.9469" }}
          />
        </div>
      </div>
    },
    {
        id:3,
        content: <div className="hero_item" style={{ opacity: 1 }}>
        <div className="hero-visual-top">
          <div
            id="w-node-b558ac4a-b15d-75eb-eeb0-55f8eeddf16b-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Brand</div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62f55fa974adcf7d879ff234_wework-logo.svg"
              loading="lazy"
              alt="wework-logo"
              className="tesla-logo"
            />
          </div>
          <div
            id="w-node-b558ac4a-b15d-75eb-eeb0-55f8eeddf170-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Size</div>
            </div>
            <div className="card-information">
              Landscape
              <br />
              (1200x628)
            </div>
          </div>
          <div
            id="w-node-b558ac4a-b15d-75eb-eeb0-55f8eeddf17a-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Text</div>
            </div>
            <div className="card-information is-2">
              Much more than an offic..
              <br />
            </div>
          </div>
          <div
            id="w-node-b558ac4a-b15d-75eb-eeb0-55f8eeddf181-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Image</div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c645a7ca5f6f1712e972b7_add.webp"
              loading="lazy"
              alt=""
              className="brand-image"
            />
          </div>
          <div
            id="w-node-b558ac4a-b15d-75eb-eeb0-55f8eeddf186-f148ae1e"
            className="hero-arrow w-embed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 13 52.063"
            >
              <g
                id="Group_13230"
                data-name="Group 13230"
                transform="translate(-954 -297.845)"
              >
                <path
                  id="Path_25264"
                  data-name="Path 25264"
                  d="M144.012,12H94.95"
                  transform="translate(948.5 443.357) rotate(-90)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={3}
                  strokeDasharray="1 10"
                />
                <path
                  id="Polygon_51"
                  data-name="Polygon 51"
                  d="M5.662,1.29a1,1,0,0,1,1.677,0L12,8.455A1,1,0,0,1,11.157,10H1.843A1,1,0,0,1,1,8.455Z"
                  transform="translate(967 327) rotate(180)"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="hero-item-rotate"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(7.3028deg) rotateY(15.9968deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="hero-images" />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a2cff33c4e44db0e4_Group%2021326.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 19vw, 370.9942932128906px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a2cff33c4e44db0e4_Group%2021326-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a2cff33c4e44db0e4_Group%2021326-p-800.webp 800w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a2cff33c4e44db0e4_Group%2021326-p-1080.webp 1080w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a2cff33c4e44db0e4_Group%2021326.webp 1114w"
            alt=""
            className="image-medium flip is-we-work"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a4ec02a6c5a2f8bf3_Group%2021327.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 23vw, 448.9985656738281px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a4ec02a6c5a2f8bf3_Group%2021327-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a4ec02a6c5a2f8bf3_Group%2021327-p-800.webp 800w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a4ec02a6c5a2f8bf3_Group%2021327-p-1080.webp 1080w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a4ec02a6c5a2f8bf3_Group%2021327.webp 1350w"
            alt=""
            className="image-big flip is-work"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a646a08f93355c3c1_Group%2019372.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 19vw, 370.9942932128906px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a646a08f93355c3c1_Group%2019372-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a646a08f93355c3c1_Group%2019372-p-800.webp 800w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c6490a646a08f93355c3c1_Group%2019372.webp 1114w"
            alt=""
            className="image-medium is-right flip is-we-work"
            style={{ opacity: "0.9469" }}
          />
        </div>
      </div>
    },
    {
        id:4,
        content:  <div className="hero_item" style={{ opacity: 1 }}>
        <div className="hero-visual-top">
          <div
            id="w-node-c20467d3-41e8-be18-5d2a-b11dae4d37c2-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Brand</div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64bf831e3cd7d03f315ec621_lk-log.svg"
              loading="lazy"
              alt=""
              className="tesla-logo"
            />
          </div>
          <div
            id="w-node-c20467d3-41e8-be18-5d2a-b11dae4d37c7-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Size</div>
            </div>
            <div className="card-information">
              Vertical Size
              <br />‍
              <span className="text-span">(1080x1350)</span>
            </div>
          </div>
          <div
            id="w-node-c20467d3-41e8-be18-5d2a-b11dae4d37d1-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Text</div>
            </div>
            <div className="card-information is-2">
              Reach your ideal custom..
              <br />
            </div>
          </div>
          <div
            id="w-node-c20467d3-41e8-be18-5d2a-b11dae4d37d8-f148ae1e"
            className="hero-top-card flip"
            style={{ opacity: "0.9469" }}
          >
            <div className="card-feature">
              <div>Image</div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64bf831f2cb97e10ce6e453c_lk-icn.webp"
              loading="lazy"
              alt=""
              className="brand-image"
            />
          </div>
          <div
            id="w-node-c20467d3-41e8-be18-5d2a-b11dae4d37dd-f148ae1e"
            className="hero-arrow w-embed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 13 52.063"
            >
              <g
                id="Group_13230"
                data-name="Group 13230"
                transform="translate(-954 -297.845)"
              >
                <path
                  id="Path_25264"
                  data-name="Path 25264"
                  d="M144.012,12H94.95"
                  transform="translate(948.5 443.357) rotate(-90)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={3}
                  strokeDasharray="1 10"
                />
                <path
                  id="Polygon_51"
                  data-name="Polygon 51"
                  d="M5.662,1.29a1,1,0,0,1,1.677,0L12,8.455A1,1,0,0,1,11.157,10H1.843A1,1,0,0,1,1,8.455Z"
                  transform="translate(967 327) rotate(180)"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="hero-item-rotate"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(7.3028deg) rotateY(15.9968deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="hero-images" />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2eb5d3e5b85de70fbd_Group%2021325.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 16vw, 300px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2eb5d3e5b85de70fbd_Group%2021325-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2eb5d3e5b85de70fbd_Group%2021325-p-800.webp 800w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2eb5d3e5b85de70fbd_Group%2021325.webp 902w"
            alt=""
            className="image-big flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2ee4ad5109a7e8e651_Group%2021327.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 10vw, 192.9971466064453px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2ee4ad5109a7e8e651_Group%2021327-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2ee4ad5109a7e8e651_Group%2021327.webp 580w"
            alt=""
            className="image-small flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2eca5f6f1712ed3d2d_Group%2021326.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 12vw, 229.99998474121094px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2eca5f6f1712ed3d2d_Group%2021326-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2eca5f6f1712ed3d2d_Group%2021326.webp 694w"
            alt=""
            className="image-medium flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2f4e8053b433663dc1_Group%2021324.webp"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 12vw, 229.99998474121094px"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2f4e8053b433663dc1_Group%2021324-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2f4e8053b433663dc1_Group%2021324.webp 694w"
            alt=""
            className="image-medium is-right flip"
            style={{ opacity: "0.9469" }}
          />
          <img
            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2efaaf8c07c7887eda_Group%2021323.webp"
            loading="lazy"
            srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2efaaf8c07c7887eda_Group%2021323-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c64a2efaaf8c07c7887eda_Group%2021323.webp 577w"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 10vw, 192.9971466064453px"
            alt=""
            className="image-small is-right flip"
            style={{ opacity: "0.9469" }}
          />
        </div>
      </div>
    },
  ]
  useEffect(()=>{
    setInterval(() => {
        setNumber(pre=>{
            if (pre == listHeroItem.length -1) {
                return 0
            } else {
                return pre +1
            }
        })
    }, 3000);
  }, [])
  return (
    <div className="section is-hero is-home">
      <div className="hero-content">
        <div
          data-w-id="2cb24bce-31b1-45f8-8add-6149932ce2c3"
          className="mobile-nav"
          onClick={() => {
            setShowMenu((pre) => !pre);
          }}
        >
          <div className="nav-inside">
            <div className="close-icon w-embed" style={isShowMenu? {display: "none"}: {}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 16 14"
              >
                <g
                  id="Group_13368"
                  data-name="Group 13368"
                  transform="translate(-312 -48)"
                >
                  <rect
                    id="Rectangle_7049"
                    data-name="Rectangle 7049"
                    width={10}
                    height={2}
                    rx={1}
                    transform="translate(318 48)"
                    fill="currentColor"
                  />
                  <rect
                    id="Rectangle_7050"
                    data-name="Rectangle 7050"
                    width={16}
                    height={2}
                    rx={1}
                    transform="translate(312 54)"
                    fill="currentColor"
                  />
                  <rect
                    id="Rectangle_7051"
                    data-name="Rectangle 7051"
                    width={16}
                    height={2}
                    rx={1}
                    transform="translate(312 60)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
            <div className="ioen-icon w-embed" style={isShowMenu?{display: "flex"}:{}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 12.729 12.729"
              >
                <g
                  id="Group_13368"
                  data-name="Group 13368"
                  transform="translate(-313.999 -48)"
                >
                  <rect
                    id="Rectangle_7049"
                    data-name="Rectangle 7049"
                    width={2}
                    height={2}
                    rx={1}
                    transform="translate(319 48)"
                    fill="#1e1541"
                    opacity={0}
                  />
                  <rect
                    id="Rectangle_7050"
                    data-name="Rectangle 7050"
                    width={16}
                    height={2}
                    rx={1}
                    transform="translate(315.415 48) rotate(45)"
                    fill="cuurentColor"
                  />
                  <rect
                    id="Rectangle_7051"
                    data-name="Rectangle 7051"
                    width={16}
                    height={2}
                    rx={1}
                    transform="translate(313.999 59.315) rotate(-45)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-content__right">
          <div className="content-wrapper-hero">
            <a
              href="/"
              aria-current="page"
              className="w-inline-block w--current"
            >
              <img
                src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62d534b643bd69a6d3ca1002_AdCreative-logo-hero.svg"
                loading="lazy"
                alt="ad-creative-logo"
                className="hero-logo"
              />
            </a>
            <h1 className="heading-hero">
              #1 most used
              <br />
              AI tool for advertising
            </h1>
            <div className="space-small" />
            <h2 className="before-heading-text">
              <strong>
                Generate ad creatives that outperform your competitors.
              </strong>
              <a
                href="/signup"
                target="_blank"
              >
                <strong>
                  <br />
                </strong>
              </a>
            </h2>
            <div className="space-medium" />
            <a
              data-ps="target"
              href="/signup"
              target="_blank"
              className="main-button is-hero w-inline-block"
            >
              <div className="button-text">Try For Free Now</div>
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
          </div>
          <div className="hero-visual is-home">
            {listHeroItem[number].content}
          </div>
        </div>
        <div
          className="hero-content__left"
          style={
            isShowMenu
              ? { display: "flex", width: "100%", height: "795.388px" }
              : {}
          }
        >
          <a
            href="/"
            aria-current="page"
            className="hero-content__logo-wrapper full w-inline-block w--current"
          >
            <div className="logo-white-wrapper">
              <img
                src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62d5364443bd69032aca1a2b_adc-icon.svg"
                loading="lazy"
                alt=""
                className="hero-icon is-hidden"
              />
              <div
                className="hero-icon is-lottie"
                data-w-id="93d0a688-0bfd-1e36-82a3-1593cdc8fb59"
                data-animation-type="lottie"
                data-src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62ebcdd2df1bb89be4ee04bc_AdcreativeLogoBodymovinc.json"
                data-loop={1}
                data-direction={1}
                data-autoplay={1}
                data-is-ix2-target={0}
                data-renderer="svg"
                data-default-duration="2.85"
                data-duration={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 521 504"
                  width={521}
                  height={504}
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                    contentVisibility: "visible",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_13">
                      <rect width={521} height={504} x={0} y={0} />
                    </clipPath>
                    <filter id="__lottie_element_18">
                      <feColorMatrix
                        type="matrix"
                        colorInterpolationFilters="sRGB"
                        values="0 0 0 0 1 0 0 0 0 0.07058823853731155 0 0 0 0 0.5411764979362488 0 0 0 1 0"
                        result="filter_result_0"
                      />
                    </filter>
                    <filter id="__lottie_element_20">
                      <feColorMatrix
                        type="matrix"
                        colorInterpolationFilters="sRGB"
                        values="0 0 0 0 0.38823533058166504 0 0 0 0 0 0 0 0 0 0.6078431606292725 0 0 0 1 0"
                        result="filter_result_0"
                      />
                    </filter>
                    <filter id="__lottie_element_23">
                      <feColorMatrix
                        type="matrix"
                        colorInterpolationFilters="sRGB"
                        values="0 0 0 0 0.6078431606292725 0 0 0 0 0 0 0 0 0 0.6039215922355652 0 0 0 1 0"
                        result="filter_result_0"
                      />
                    </filter>
                    <filter id="__lottie_element_26">
                      <feColorMatrix
                        type="matrix"
                        colorInterpolationFilters="sRGB"
                        values="0 0 0 0 0.7764706611633301 0 0 0 0 0 0 0 0 0 0.5490196347236633 0 0 0 1 0"
                        result="filter_result_0"
                      />
                    </filter>
                    <filter id="__lottie_element_201">
                      <feColorMatrix
                        type="matrix"
                        colorInterpolationFilters="sRGB"
                        values="0 0 0 0 1 0 0 0 0 0.07058823853731155 0 0 0 0 0.5411764979362488 0 0 0 1 0"
                        result="filter_result_0"
                      />
                    </filter>
                    <filter id="__lottie_element_203">
                      <feColorMatrix
                        type="matrix"
                        colorInterpolationFilters="sRGB"
                        values="0 0 0 0 0.38823533058166504 0 0 0 0 0 0 0 0 0 0.6078431606292725 0 0 0 1 0"
                        result="filter_result_0"
                      />
                    </filter>
                    <filter id="__lottie_element_206">
                      <feColorMatrix
                        type="matrix"
                        colorInterpolationFilters="sRGB"
                        values="0 0 0 0 0.6078431606292725 0 0 0 0 0 0 0 0 0 0.6039215922355652 0 0 0 1 0"
                        result="filter_result_0"
                      />
                    </filter>
                    <filter id="__lottie_element_209">
                      <feColorMatrix
                        type="matrix"
                        colorInterpolationFilters="sRGB"
                        values="0 0 0 0 0.7764706611633301 0 0 0 0 0 0 0 0 0 0.5490196347236633 0 0 0 1 0"
                        result="filter_result_0"
                      />
                    </filter>
                  </defs>
                  <g clipPath="url(#__lottie_element_13)">
                    <g
                      filter="url(#__lottie_element_20)"
                      transform="matrix(1,0,0,1,26,-625.031982421875)"
                      opacity={1}
                      style={{ display: "none" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,235.01300048828125,946.8829956054688)"
                      >
                        <path
                          fill="rgb(127,127,127)"
                          fillOpacity={1}
                          d=" M226.06399536132812,16.750999450683594 C226.06399536132812,16.750999450683594 27.7810001373291,121.13999938964844 27.7810001373291,121.13999938964844 C10.390999794006348,130.2949981689453 -10.392000198364258,130.2949981689453 -27.781999588012695,121.13999938964844 C-27.781999588012695,121.13999938964844 -226.06399536132812,16.750999450683594 -226.06399536132812,16.750999450683594 C-238.20199584960938,10.359999656677246 -237.93699645996094,-7.111000061035156 -225.61099243164062,-13.130000114440918 C-225.61099243164062,-13.130000114440918 0,-123.29499816894531 0,-123.29499816894531 C0,-123.29499816894531 2.364000082015991,-122.14099884033203 2.364000082015991,-122.14099884033203 C2.364000082015991,-122.14099884033203 225.61099243164062,-13.130000114440918 225.61099243164062,-13.130000114440918 C237.93699645996094,-7.111000061035156 238.20199584960938,10.359999656677246 226.06399536132812,16.750999450683594z"
                        />
                      </g>
                    </g>
                    <g
                      filter="url(#__lottie_element_23)"
                      transform="matrix(1,0,0,1,26,-416.9770202636719)"
                      opacity={1}
                      style={{ display: "none" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,235.01300048828125,674.344970703125)"
                      >
                        <path
                          fill="rgb(127,127,127)"
                          fillOpacity={1}
                          d=" M226.06399536132812,13.25100040435791 C226.06399536132812,13.25100040435791 27.7810001373291,117.63999938964844 27.7810001373291,117.63999938964844 C10.390999794006348,126.79499816894531 -10.392000198364258,126.79499816894531 -27.781999588012695,117.63999938964844 C-27.781999588012695,117.63999938964844 -226.06399536132812,13.25100040435791 -226.06399536132812,13.25100040435791 C-238.20199584960938,6.861000061035156 -237.93699645996094,-10.609000205993652 -225.61099243164062,-16.628000259399414 C-225.61099243164062,-16.628000259399414 0,-121.79499816894531 0,-121.79499816894531 C0,-121.79499816894531 1.9769999980926514,-120.87300109863281 1.9769999980926514,-120.87300109863281 C1.9769999980926514,-120.87300109863281 225.61099243164062,-16.628000259399414 225.61099243164062,-16.628000259399414 C237.93699645996094,-10.609000205993652 238.20199584960938,6.861000061035156 226.06399536132812,13.25100040435791z"
                        />
                      </g>
                    </g>
                    <g
                      filter="url(#__lottie_element_26)"
                      transform="matrix(1,0,0,1,26,-202.64602661132812)"
                      opacity={1}
                      style={{ display: "none" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,235.01300048828125,393.1860046386719)"
                      >
                        <path
                          fill="rgb(127,127,127)"
                          fillOpacity={1}
                          d=" M226.06399536132812,13.25100040435791 C226.06399536132812,13.25100040435791 27.7810001373291,117.63899993896484 27.7810001373291,117.63899993896484 C10.390999794006348,126.79399871826172 -10.392000198364258,126.79399871826172 -27.781999588012695,117.63899993896484 C-27.781999588012695,117.63899993896484 -226.06399536132812,13.25100040435791 -226.06399536132812,13.25100040435791 C-238.20199584960938,6.861000061035156 -237.93699645996094,-10.611000061035156 -225.61099243164062,-16.628999710083008 C-225.61099243164062,-16.628999710083008 -0.5,-119.29499816894531 -0.5,-119.29499816894531 C-0.5,-119.29499816894531 2.441999912261963,-117.95899963378906 2.441999912261963,-117.95899963378906 C2.441999912261963,-117.95899963378906 225.61099243164062,-16.628999710083008 225.61099243164062,-16.628999710083008 C237.93699645996094,-10.611000061035156 238.20199584960938,6.861000061035156 226.06399536132812,13.25100040435791z"
                        />
                      </g>
                    </g>
                    <g
                      filter="url(#__lottie_element_18)"
                      transform="matrix(1,0,0,1,26,3.135986328125)"
                      opacity="0.99359"
                      style={{ display: "none" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,235.01300048828125,122.4219970703125)"
                      >
                        <path
                          fill="rgb(127,127,127)"
                          fillOpacity={1}
                          d=" M226.06399536132812,10.894000053405762 C226.06399536132812,10.894000053405762 27.7810001373291,115.28299713134766 27.7810001373291,115.28299713134766 C10.390999794006348,124.43699645996094 -10.392000198364258,124.43699645996094 -27.781999588012695,115.28299713134766 C-27.781999588012695,115.28299713134766 -226.06399536132812,10.894000053405762 -226.06399536132812,10.894000053405762 C-238.20199584960938,4.504000186920166 -237.93699645996094,-12.967000007629395 -225.61099243164062,-18.986000061035156 C-225.61099243164062,-18.986000061035156 -26.167999267578125,-116.3740005493164 -26.167999267578125,-116.3740005493164 C-9.654000282287598,-124.43699645996094 9.654999732971191,-124.43699645996094 26.167999267578125,-116.3740005493164 C26.167999267578125,-116.3740005493164 225.61099243164062,-18.986000061035156 225.61099243164062,-18.986000061035156 C237.93699645996094,-12.967000007629395 238.20199584960938,4.504000186920166 226.06399536132812,10.894000053405762z"
                        />
                      </g>
                    </g>
                    <g
                      filter="url(#__lottie_element_203)"
                      transform="matrix(-1,0,0,1,494.68878173828125,-700.465087890625)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,235.01300048828125,946.8829956054688)"
                      >
                        <path
                          fill="rgb(127,127,127)"
                          fillOpacity={1}
                          d=" M222.17242431640625,12.315034866333008 C222.17242431640625,12.315034866333008 36.85411834716797,125.69764709472656 36.85411834716797,125.69764709472656 C20.601160049438477,136.02349853515625 -0.25735896825790405,137.45790100097656 -18.279760360717773,128.90150451660156 C-18.279760360717773,128.90150451660156 -219.416259765625,31.33795166015625 -219.416259765625,31.33795166015625 C-232.53005981445312,25.364826202392578 -233.71681213378906,7.601752758026123 -222.1967315673828,0.20686066150665283 C-222.1967315673828,0.20686066150665283 -11.337263107299805,-118.57408905029297 -11.337263107299805,-118.57408905029297 C-11.337263107299805,-120.3435287475586 -7.693421363830566,-120.69939422607422 -5.923978805541992,-120.69939422607422 C-5.923978805541992,-120.69939422607422 218.54519653320312,-18.816057205200195 218.54519653320312,-18.816057205200195 C231.83470153808594,-13.190608024597168 233.51678466796875,4.572465896606445 222.17242431640625,12.315034866333008z"
                        />
                      </g>
                    </g>
                    <g
                      filter="url(#__lottie_element_206)"
                      transform="matrix(-1,0,0,1,494.68878173828125,-465.35919189453125)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,235.01300048828125,674.344970703125)"
                      >
                        <path
                          fill="rgb(127,127,127)"
                          fillOpacity={1}
                          d=" M222.17237854003906,8.959233283996582 C222.17237854003906,8.959233283996582 36.85424041748047,122.34197998046875 36.85424041748047,122.34197998046875 C20.601266860961914,132.66783142089844 -0.2572987973690033,134.10227966308594 -18.279699325561523,125.54586029052734 C-18.279699325561523,125.54586029052734 -219.4161376953125,27.982349395751953 -219.4161376953125,27.982349395751953 C-232.5299530029297,22.010154724121094 -233.7166748046875,4.2480316162109375 -222.1966552734375,-3.1468617916107178 C-222.1966552734375,-3.1468617916107178 -11.337348937988281,-117.2567138671875 -11.337348937988281,-117.2567138671875 C-11.337348937988281,-119.02619934082031 -8.055245399475098,-119.59890747070312 -6.28575325012207,-119.59890747070312 C-6.28575325012207,-119.59890747070312 218.54513549804688,-22.1700439453125 218.54513549804688,-22.1700439453125 C231.83465576171875,-16.54457664489746 233.51669311523438,1.217612624168396 222.17237854003906,8.959233283996582z"
                        />
                      </g>
                    </g>
                    <g
                      filter="url(#__lottie_element_209)"
                      transform="matrix(-1,0,0,1,494.68878173828125,-224.8386993408203)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,235.01300048828125,393.1860046386719)"
                      >
                        <path
                          fill="rgb(127,127,127)"
                          fillOpacity={1}
                          d=" M222.17001342773438,9.152237892150879 C222.17001342773438,9.152237892150879 36.859737396240234,122.53955078125 36.859737396240234,122.53955078125 C20.60748291015625,132.86611938476562 -0.2510834038257599,134.30142211914062 -18.273876190185547,125.7453842163086 C-18.273876190185547,125.7453842163086 -219.4121551513672,28.187000274658203 -219.4121551513672,28.187000274658203 C-232.52655029296875,22.21506690979004 -233.7141876220703,4.450878143310547 -222.1946258544922,-2.9439311027526855 C-222.1946258544922,-2.9439311027526855 -11.81157112121582,-114.7219009399414 -11.81157112121582,-114.7219009399414 C-11.81157112121582,-116.49244689941406 -7.6267523765563965,-116.67915344238281 -5.8562140464782715,-116.67915344238281 C-5.8562140464782715,-116.67915344238281 218.5408172607422,-21.97869300842285 218.5408172607422,-21.97869300842285 C231.8309326171875,-16.35442352294922 233.51388549804688,1.409766674041748 222.17001342773438,9.152237892150879z"
                        />
                      </g>
                    </g>
                    <g
                      filter="url(#__lottie_element_201)"
                      transform="matrix(-1,0,0,1,494.93878173828125,3.1360015869140625)"
                      opacity="0.99359"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,235.01300048828125,122.4219970703125)"
                      >
                        <path
                          fill="rgb(127,127,127)"
                          fillOpacity={1}
                          d=" M222.16851806640625,7.784533500671387 C222.16851806640625,7.784533500671387 36.85823440551758,121.17277526855469 36.85823440551758,121.17277526855469 C20.60597801208496,131.4984130859375 -0.2525881826877594,132.9337158203125 -18.275381088256836,124.37861633300781 C-18.275381088256836,124.37861633300781 -219.41358947753906,26.81929588317871 -219.41358947753906,26.81929588317871 C-232.5279998779297,20.847362518310547 -233.71563720703125,3.0841081142425537 -222.19606018066406,-4.311635494232178 C-222.19606018066406,-4.311635494232178 -35.801673889160156,-111.15692138671875 -35.801673889160156,-111.15692138671875 C-20.368106842041016,-120.46293640136719 -0.887104332447052,-121.89823913574219 16.31606674194336,-114.36276245117188 C16.31606674194336,-114.36276245117188 218.539306640625,-23.346397399902344 218.539306640625,-23.346397399902344 C231.8294219970703,-17.721193313598633 233.5123748779297,0.04206211864948273 222.16851806640625,7.784533500671387z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62d5690f32024baee024e4a4_AdCreativetext.svg"
              loading="lazy"
              alt="AdCreative text that redirects to the home."
              className="adc-text"
            />
          </a>
          <div className="hero-content__nav-items">
            <a
              href="/"
              aria-current="page"
              className="nav-item__link w-inline-block w--current"
            >
              <div className="nav-item-logo-wrapper">
                <div className="embed-icon w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 22.216 21.629"
                  >
                    <g
                      id="Group_12165"
                      data-name="Group 12165"
                      transform="translate(0 0)"
                    >
                      <g
                        id="Group_12167"
                        data-name="Group 12167"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_25452"
                          data-name="Path 25452"
                          d="M20.144,5.406l-6.9-4.84a4.306,4.306,0,0,0-4.338.04L2.139,5.369A4.286,4.286,0,0,0,0,9.067v8.289a4.277,4.277,0,0,0,4.273,4.273H6.165a1.183,1.183,0,0,0,1.183-1.183v-5.1a1.393,1.393,0,0,1,1.393-1.392h4.734a1.392,1.392,0,0,1,1.392,1.392v5.1a1.184,1.184,0,0,0,1.184,1.183h1.892a4.277,4.277,0,0,0,4.273-4.273V9.067a4.245,4.245,0,0,0-2.072-3.661"
                          transform="translate(0 0)"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="nav-link-text">Homepage</div>
            </a>
            <a
              id="features"
              data-w-id="3f05ebd0-29cc-ca81-ddf2-081e6c7015a6"
              href="#"
              className="nav-item__link w-inline-block"
              onClick={()=>{setShowMenuFeature(pre=>!pre)}}
            >
              <div className="nav-item-logo-wrapper">
                <div className="embed-icon w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 23.002 22.998"
                  >
                    <path
                      id="Subtraction_43"
                      data-name="Subtraction 43"
                      d="M14371-8857h-11a6.007,6.007,0,0,1-6-6v-11a6.007,6.007,0,0,1,6-6h11a6.007,6.007,0,0,1,6,6v11A6.007,6.007,0,0,1,14371-8857Zm-5.457-7.391a.141.141,0,0,1,.066.016l2.619,1.379a.945.945,0,0,0,.455.111.986.986,0,0,0,.75-.35.964.964,0,0,0,.217-.8l-.5-2.919a.139.139,0,0,1,.04-.122l2.121-2.067a.978.978,0,0,0,.246-1.007.978.978,0,0,0-.794-.671l-2.927-.423a.145.145,0,0,1-.108-.079l-1.31-2.652a.978.978,0,0,0-.88-.548.978.978,0,0,0-.881.548l-1.31,2.652a.139.139,0,0,1-.1.079l-2.927.426a.965.965,0,0,0-.793.668.967.967,0,0,0,.245,1.007l2.118,2.067a.139.139,0,0,1,.043.126l-.5,2.915a1,1,0,0,0,.39.96.98.98,0,0,0,.581.188.959.959,0,0,0,.455-.111l2.619-1.379A.166.166,0,0,1,14365.544-8864.392Z"
                      transform="translate(-14353.999 8879.999)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="nav-link-text">Features</div>
              <div className="html-embed-12 w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 4.561 8"
                >
                  <path
                    id="Polygon_125"
                    data-name="Polygon 125"
                    d="M3.248.857a1,1,0,0,1,1.5,0L6.544,2.9A1,1,0,0,1,5.793,4.56H2.207A1,1,0,0,1,1.456,2.9Z"
                    transform="translate(4.561) rotate(90)"
                    fill="#3b2a82"
                  />
                </svg>
              </div>
            </a>
            <a
              id="use-cases"
              data-w-id="3f05ebd0-29cc-ca81-ddf2-081e6c7015ac"
              href="#"
              className="nav-item__link w-inline-block"
              onClick={()=>{setShowMenuUsecase(pre=>!pre)}}
            >
              <div className="nav-item-logo-wrapper">
                <div className="embed-icon is-agencies w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 27.255 20.752"
                  >
                    <path
                      id="people"
                      d="M21.32,79.928H5.935a.879.879,0,0,1-.879-.879v-2.6a3.15,3.15,0,0,1,1.864-2.873c3.293-1.47,3.113-1.421,3.369-1.421h1.045a.879.879,0,0,1,.854.669,1.485,1.485,0,0,0,2.881,0,.879.879,0,0,1,.854-.669c1.125,0,1.182-.022,1.4.076l3.011,1.344A3.15,3.15,0,0,1,22.2,76.445v2.6a.879.879,0,0,1-.879.879ZM13.649,59.176a5.37,5.37,0,1,0,5.37,5.37,5.376,5.376,0,0,0-5.37-5.37ZM5.177,64.92A3.381,3.381,0,1,0,8.559,68.3,3.385,3.385,0,0,0,5.177,64.92Zm16.9,0A3.381,3.381,0,1,0,25.459,68.3,3.385,3.385,0,0,0,22.078,64.92Zm3.908,8.054c-1.829-.817-1.786-.825-2.036-.825-1.31,0-2.166-.009-2.746-.012a.549.549,0,0,0-.256,1.037,3.158,3.158,0,0,1,.973.734,3.8,3.8,0,0,1,.961,2.8.549.549,0,0,0,.549.549h2.945a.879.879,0,0,0,.879-.879v-1.45A2.146,2.146,0,0,0,25.986,72.975Zm-22.68-.825c-.249,0-.2.005-2.036.825A2.146,2.146,0,0,0,0,74.931v1.45a.879.879,0,0,0,.879.879H3.824a.549.549,0,0,0,.549-.55,3.785,3.785,0,0,1,.961-2.8,3.167,3.167,0,0,1,.964-.73.549.549,0,0,0-.254-1.037c-.583,0-1.44.008-2.739.008Z"
                      transform="translate(0 -59.176)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="nav-link-text">Use Cases</div>
              <div className="html-embed-12 w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 4.561 8"
                >
                  <path
                    id="Polygon_125"
                    data-name="Polygon 125"
                    d="M3.248.857a1,1,0,0,1,1.5,0L6.544,2.9A1,1,0,0,1,5.793,4.56H2.207A1,1,0,0,1,1.456,2.9Z"
                    transform="translate(4.561) rotate(90)"
                    fill="#3b2a82"
                  />
                </svg>
              </div>
            </a>
            
            <a
              href="#"
              data-w-id="3f05ebd0-29cc-ca81-ddf2-081e6c7015b2"
              className="nav-item__link w-inline-block"
            >
              <div className="nav-item-logo-wrapper">
                <div className="embed-icon w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 22.641 22.633"
                  >
                    <g id="label" transform="translate(0 -0.064)">
                      <g
                        id="Group_12168"
                        data-name="Group 12168"
                        transform="translate(0 0.064)"
                      >
                        <path
                          id="Path_25455"
                          data-name="Path 25455"
                          d="M21.9.836A2.584,2.584,0,0,0,20.1.064L12.61.093h-.029a4.907,4.907,0,0,0-3.058,1.4L.75,10.209a2.6,2.6,0,0,0,0,3.658l8.087,8.087A2.589,2.589,0,0,0,10.7,22.7a2.335,2.335,0,0,0,1.8-.772l8.688-8.688a4.728,4.728,0,0,0,1.429-3.058v-.029l.029-7.459A2.589,2.589,0,0,0,21.9.836Zm-7.573,9.745a2.229,2.229,0,1,1,2.229-2.229A2.232,2.232,0,0,1,14.325,10.581Z"
                          transform="translate(0 -0.064)"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="nav-link-text">Pricing</div>
            </a>
            <a
              data-w-id="3f05ebd0-29cc-ca81-ddf2-081e6c7015b7"
              href="/blog"
              className="nav-item__link w-inline-block"
            >
              <div className="nav-item-logo-wrapper">
                <div className="embed-icon is-blog w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 21.001 21.001"
                  >
                    <path
                      id="Subtraction_44"
                      data-name="Subtraction 44"
                      d="M14369-8859h-9a6.007,6.007,0,0,1-6-6v-9a6.007,6.007,0,0,1,6-6h9a6.007,6.007,0,0,1,6,6v9A6.007,6.007,0,0,1,14369-8859Zm-6.825-6.364v.971h4.8v-.971h-1.62v-8.272h2.536v1.418h1.27v-2.389h-9.268v2.389h1.263v-1.418h2.6v8.272Z"
                      transform="translate(-14354 8880.001)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="nav-link-text">Blog</div>
            </a>
            <div
              className="hero-content__step-second"
              style={{
                transform:
                  `translate3d(${isShowMenuFeature? "0%": "-100%"}, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: "preserve-3d",
                opacity: isShowMenuFeature ? 1 : 0,
                display: isShowMenuFeature ? "flex" : "none",
              }}
            >
              <a
                data-w-id="3f05ebd0-29cc-ca81-ddf2-081e6c7015bd"
                href="#"
                className="turn-back-link w-inline-block"
                onClick={()=>{setShowMenuFeature(pre=>!pre)}}
              >
                <div className="nav-item-logo-go-back">
                  <div className="embed-icon is-menu w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 18.586 15.818"
                    >
                      <g
                        id="Group_13224"
                        data-name="Group 13224"
                        transform="translate(-111.207 -665.383)"
                      >
                        <g
                          id="right-arrow"
                          transform="translate(111.207 665.383)"
                        >
                          <g id="Group_11952" data-name="Group 11952">
                            <path
                              id="Path_25276"
                              data-name="Path 25276"
                              d="M101.73,7.292,108.769.253a.867.867,0,0,1,1.224,0l.518.518a.866.866,0,0,1,0,1.224L104.6,7.906l5.917,5.917a.867.867,0,0,1,0,1.224l-.518.518a.867.867,0,0,1-1.224,0L101.73,8.52a.873.873,0,0,1,0-1.228Z"
                              transform="translate(-101.478 0)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                        <g
                          id="right-arrow-2"
                          data-name="right-arrow"
                          transform="translate(120.5 665.383)"
                        >
                          <g id="Group_11952-2" data-name="Group 11952">
                            <path
                              id="Path_25276-2"
                              data-name="Path 25276"
                              d="M101.73,7.292,108.769.253a.867.867,0,0,1,1.224,0l.518.518a.866.866,0,0,1,0,1.224L104.6,7.906l5.917,5.917a.867.867,0,0,1,0,1.224l-.518.518a.867.867,0,0,1-1.224,0L101.73,8.52a.873.873,0,0,1,0-1.228Z"
                              transform="translate(-101.478 0)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="nav-link-text">Features</div>
                <div className="arrow-nav w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={8}
                    height="4.56"
                    viewBox="0 0 8 4.56"
                  >
                    <path
                      id="Polygon_65"
                      data-name="Polygon 65"
                      d="M3.248.857a1,1,0,0,1,1.5,0L6.544,2.9A1,1,0,0,1,5.793,4.56H2.207A1,1,0,0,1,1.456,2.9Z"
                      transform="translate(8 4.56) rotate(180)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="/generate-creatives"
                className="step-second__link w-inline-block"
              >
                <p>
                  <strong>Generate Creatives</strong>
                </p>
              </a>
              <a
                href="/generate-texts-headlines"
                className="step-second__link w-inline-block"
              >
                <p>
                  <strong>Generate Texts &amp; Headlines</strong>
                </p>
              </a>
              <a
                href="/creative-insights"
                className="step-second__link w-inline-block"
              >
                <p>
                  <strong>See Creative Insights﻿</strong>
                </p>
              </a>
              <a
                href="/generate-social-post-creatives"
                className="step-second__link w-inline-block"
              >
                <p>
                  <strong>Generate Social Posts</strong>
                </p>
              </a>
              <a
                href="/complete-ad-package"
                className="step-second__link w-inline-block"
              >
                <p>
                  <strong>Complete Ad Package</strong>
                </p>
              </a>
              <a
                href="/competitor-insights-ai"
                className="step-second__link w-inline-block"
              >
                <p>
                  <strong>Competitor Insights AI</strong>
                </p>
              </a>
              <div className="step-second__link no-click is-hidden">
                <p>
                  <strong>Creative Scoring</strong>
                </p>
                <img
                  src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/62fa700556f771b9ad4361b1_coming-soon.svg"
                  loading="lazy"
                  alt="Coming Soon text.
  "
                  className="coming0s"
                />
              </div>
            </div>
            <div
              className="hero-content__step-second-use-case"
              style={{
                transform:
                  `translate3d(${isShowMenuUsecase? "0%": "-100%"}, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: "preserve-3d",
                opacity: isShowMenuUsecase ? 1 : 0,
                display: isShowMenuUsecase ? "flex" : "none",
              }}
            >
              <a
                data-w-id="3f05ebd0-29cc-ca81-ddf2-081e6c7015d4"
                href="#"
                className="turn-back-link w-inline-block"
                onClick={()=>{setShowMenuUsecase(pre=>!pre)}}
              >
                <div className="nav-item-logo-go-back">
                  <div className="embed-icon is-menu w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 18.586 15.818"
                    >
                      <g
                        id="Group_13224"
                        data-name="Group 13224"
                        transform="translate(-111.207 -665.383)"
                      >
                        <g
                          id="right-arrow"
                          transform="translate(111.207 665.383)"
                        >
                          <g id="Group_11952" data-name="Group 11952">
                            <path
                              id="Path_25276"
                              data-name="Path 25276"
                              d="M101.73,7.292,108.769.253a.867.867,0,0,1,1.224,0l.518.518a.866.866,0,0,1,0,1.224L104.6,7.906l5.917,5.917a.867.867,0,0,1,0,1.224l-.518.518a.867.867,0,0,1-1.224,0L101.73,8.52a.873.873,0,0,1,0-1.228Z"
                              transform="translate(-101.478 0)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                        <g
                          id="right-arrow-2"
                          data-name="right-arrow"
                          transform="translate(120.5 665.383)"
                        >
                          <g id="Group_11952-2" data-name="Group 11952">
                            <path
                              id="Path_25276-2"
                              data-name="Path 25276"
                              d="M101.73,7.292,108.769.253a.867.867,0,0,1,1.224,0l.518.518a.866.866,0,0,1,0,1.224L104.6,7.906l5.917,5.917a.867.867,0,0,1,0,1.224l-.518.518a.867.867,0,0,1-1.224,0L101.73,8.52a.873.873,0,0,1,0-1.228Z"
                              transform="translate(-101.478 0)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="nav-link-text">Use Cases</div>
                <div className="arrow-nav w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={8}
                    height="4.56"
                    viewBox="0 0 8 4.56"
                  >
                    <path
                      id="Polygon_65"
                      data-name="Polygon 65"
                      d="M3.248.857a1,1,0,0,1,1.5,0L6.544,2.9A1,1,0,0,1,5.793,4.56H2.207A1,1,0,0,1,1.456,2.9Z"
                      transform="translate(8 4.56) rotate(180)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="/start-up"
                className="step-second__link is-usecase w-inline-block"
              >
                <div className="dropdown-embed w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 13.528 18.641"
                  >
                    <path
                      id="rocket-3"
                      d="M7.8,17.135h5.922A5.515,5.515,0,0,1,10.764,20.1,5.515,5.515,0,0,1,7.8,17.135Zm8.034-4.392,1.691,1.918v1.629H4V14.66l1.691-1.918V7.834a6.871,6.871,0,0,1,5.073-6.379,6.871,6.871,0,0,1,5.073,6.379ZM10.764,9.525a1.691,1.691,0,1,0-1.2-.5A1.691,1.691,0,0,0,10.764,9.525Z"
                      transform="translate(-4 -1.455)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p>
                  <strong>Startups</strong>
                </p>
              </a>
              <a
                href="/e-commerce"
                className="step-second__link is-usecase w-inline-block"
              >
                <div className="dropdown-embed w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 15.841 16.161"
                  >
                    <path
                      id="shopping-bag"
                      d="M109.775,97.063h-1.6v-.048a5.048,5.048,0,1,0-10.1,0v.048h-1.6a1.277,1.277,0,0,0-1.245,1.562l1.744,7.618a2.426,2.426,0,0,0,2.365,1.885h7.559a2.426,2.426,0,0,0,2.365-1.885l1.744-7.618a1.277,1.277,0,0,0-1.245-1.562Zm-10.263-.048a3.619,3.619,0,1,1,7.238,0v.035H99.512Z"
                      transform="translate(-95.211 -91.967)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p>
                  <strong>E-commerce</strong>
                </p>
              </a>
              <a
                href="/agencies"
                className="step-second__link is-usecase w-inline-block"
              >
                <div className="dropdown-embed is-bigger w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 20.223 15.398"
                  >
                    <path
                      id="people"
                      d="M15.819,74.574H4.4a.652.652,0,0,1-.652-.652V71.99a2.338,2.338,0,0,1,1.383-2.132c2.443-1.091,2.31-1.054,2.5-1.054h.775a.652.652,0,0,1,.633.5,1.1,1.1,0,0,0,2.137,0,.652.652,0,0,1,.633-.5c.834,0,.877-.017,1.041.057l2.234,1a2.338,2.338,0,0,1,1.383,2.132v1.931a.652.652,0,0,1-.652.652Zm-5.692-15.4a3.985,3.985,0,1,0,3.985,3.985,3.989,3.989,0,0,0-3.985-3.985ZM3.841,63.438A2.509,2.509,0,1,0,6.35,65.947,2.512,2.512,0,0,0,3.841,63.438Zm12.54,0a2.509,2.509,0,1,0,2.509,2.509A2.512,2.512,0,0,0,16.381,63.438Zm2.9,5.976c-1.357-.606-1.325-.612-1.511-.612-.972,0-1.607-.007-2.037-.009a.408.408,0,0,0-.19.769,2.344,2.344,0,0,1,.722.545,2.822,2.822,0,0,1,.713,2.08.407.407,0,0,0,.408.407H19.57a.652.652,0,0,0,.652-.652V70.866A1.592,1.592,0,0,0,19.281,69.414ZM2.452,68.8c-.185,0-.148,0-1.511.612A1.592,1.592,0,0,0,0,70.866v1.076a.652.652,0,0,0,.652.652H2.837a.407.407,0,0,0,.408-.408,2.809,2.809,0,0,1,.713-2.08,2.35,2.35,0,0,1,.716-.542.408.408,0,0,0-.189-.769c-.433,0-1.068.006-2.033.006Z"
                      transform="translate(0 -59.176)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p>
                  <strong>Agencies</strong>
                </p>
              </a>
              <a
                href="/enterprise"
                className="step-second__link is-usecase w-inline-block"
              >
                <div className="dropdown-embed w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24.506 24.66"
                  >
                    <path
                      id="computer-worker"
                      d="M28.253,14.491c2.024,0,3.665,1.154,3.665,3.814s-1.641,4.817-3.665,4.817-3.665-2.157-3.665-4.817,1.641-3.814,3.665-3.814ZM16.511,36.7H39.995a.512.512,0,0,1,.511.511V38.64a.512.512,0,0,1-.511.511H16.511A.512.512,0,0,1,16,38.64V37.206A.512.512,0,0,1,16.511,36.7ZM33.756,35.47l.79-6.261a.1.1,0,0,0-.1-.115H22.063a.1.1,0,0,0-.1.115l.79,6.261Zm-5.5-3.952A1.173,1.173,0,1,1,27.08,32.69,1.173,1.173,0,0,1,28.253,31.518Zm-7.634,3.71a.512.512,0,0,1-.511-.511V27.829c0-1.813,1.619-2.826,3.451-3.3a18.863,18.863,0,0,1,9.387,0c1.837.456,3.451,1.485,3.451,3.3v6.888a.512.512,0,0,1-.511.511h-1.28l.746-5.917a.916.916,0,0,0-.91-1.034H22.063a.916.916,0,0,0-.91,1.034l.746,5.917Z"
                      transform="translate(-16 -14.491)"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <p>
                  <strong>Enterprise</strong>
                </p>
              </a>
            </div>
          </div>
          <div className="hero-content__logo-wrapper is-navbar">
            <a
              data-ps="target"
              href="https://app.adcreative.ai/Identity/Account/Login"
              target="_blank"
              className="logo-white-wrapperr is-red navbar-item w-inline-block"
            >
              <div className="login-text is-nav">Login</div>
              <div className="html-embed w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 21 21"
                >
                  <g id="_19" data-name={19} transform="translate(-2 -2)">
                    <path
                      id="Path_25456"
                      data-name="Path 25456"
                      d="M16.7,2H8.3A6.307,6.307,0,0,0,2,8.3v8.4A6.307,6.307,0,0,0,8.3,23h8.4A6.307,6.307,0,0,0,23,16.7V8.3A6.307,6.307,0,0,0,16.7,2Zm.84,11.13-3.15,4.2a1.05,1.05,0,1,1-1.68-1.259l1.89-2.52H8.2a1.056,1.056,0,0,1,0-2.1H14.6L12.71,8.93A1.05,1.05,0,1,1,14.39,7.67l3.15,4.2a1.049,1.049,0,0,1,0,1.259Z"
                      transform="translate(0 0)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="_3-circles w-embed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="100%"
            viewBox="0 0 18 74"
          >
            <g
              id="Group_11933"
              data-name="Group 11933"
              transform="translate(-1784 -358)"
            >
              <circle
                id="Ellipse_1280"
                data-name="Ellipse 1280"
                cx={9}
                cy={9}
                r={9}
                transform="translate(1784 358)"
                fill="#fff"
              />
              <circle
                id="Ellipse_1281"
                data-name="Ellipse 1281"
                cx={9}
                cy={9}
                r={9}
                transform="translate(1784 386)"
                fill="#fff"
              />
              <circle
                id="Ellipse_1282"
                data-name="Ellipse 1282"
                cx={9}
                cy={9}
                r={9}
                transform="translate(1784 414)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <div className="language-switcher is-home">
          <div
            data-w-id="0fd2cb6d-cb28-ee80-f911-d88cac749161"
            style={{ opacity: 1 }}
            className="wg-element-wrapper sw6"
          >
            <div
              data-hover="true"
              data-delay={300}
              data-w-id="0fd2cb6d-cb28-ee80-f911-d88cac749162"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              className="wg-dropdown-1 w-dropdown"
            >
              <div
                lang="en"
                className="wg-dd-1-togle w-dropdown-toggle"
                id="w-dropdown-toggle-4"
                aria-controls="w-dropdown-list-4"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="wg-selector-text-wrapper">
                  <div className="wg-flag is-top">
                    <div className="country-name">English </div>
                    <img
                      src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/640b1aac2e2b16824903e1b7_English%20Flag.svg"
                      width={30}
                      height={30}
                      alt=""
                      className="wg-flag-ico"
                    />
                  </div>
                </div>
              </div>
              <nav
                className="wg-dd-1-list wg-dropdown-link-flag w-dropdown-list"
                style={{ width: "100%", height: "0%" }}
                id="w-dropdown-list-4"
                aria-labelledby="w-dropdown-toggle-4"
              >
                <div className="language-wrapper w-form">
                  <form
                    id="email-form-2"
                    name="email-form-2"
                    data-name="Email Form 2"
                    method="get"
                    className="form"
                    data-wf-page-id="62fdfceae0d4c044f148ae1e"
                    data-wf-element-id="0fd2cb6d-cb28-ee80-f911-d88cac74916b"
                    aria-label="Email Form 2"
                    data-hs-cf-bound="true"
                  >
                    <input
                      type="text"
                      className="search-field w-input"
                      maxLength={256}
                      name="field"
                      data-name="Field"
                      placeholder="Search"
                      id="field"
                      required=""
                    />
                    <input
                      type="text"
                      className="search-field is-second w-input"
                      maxLength={256}
                      name="field-2"
                      data-name="Field 2"
                      placeholder="Search"
                      id="field-2"
                      required=""
                    />
                    <a
                      lang="fr"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">French</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493349d0cd236_fr.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="es"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">spanish</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb49314220cd234_es.svg"
                            width={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="pt"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Portugal</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493aacd0cd230_pt.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="de"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">German</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493be610cd22d_de.svg"
                            width={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="it"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Italian</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/640b1aacba7044ec764f9431_Italian%20Flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="sv"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Swedish</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/640b1aae87a187842a7c048e_Swedish%20Flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="nl"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Dutch</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/640b1aac84373f0eb858faa9_Dutch%20Flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="hi"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Hindu</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64117a11b1b54f754e481ad4_hindu-flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="bn"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Bengali</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64117a116a7d95164da40803_bengali-flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="id"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Indonesian</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64117a1147f8101c7e669fad_indonesian-flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="da"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Danish</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64117a115bbd6948cab6df69_danish-flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="no"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Norwegian</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/640b1aac42c9aa7c2dacc17b_Norwegian%20Flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="tr"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Turkish</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/640b1aae7c91e00efeaf029a_Turkish%20Flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="fi"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Finnish</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64117a1170ef3b7a5a29c296_finnish-flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="is"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Icelandic</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64117a11be2e2eba502593a4_icelandian-flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="ar"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Arabian</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64117a12265a1b4ffb90dd4e_arabic-flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="ta"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Tamıl</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64117a11b1b54f221a481ab8_tamil-flag.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="he"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Hebrew</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/6414b4f2ef8757ad36e3bfa0_hebrew.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                    <a
                      lang="ms"
                      href="#"
                      className="wg-dropdown-1-link w-inline-block"
                      tabIndex={0}
                    >
                      <div className="wg-selector-text-wrapper">
                        <div className="country-name">Malay</div>
                        <div className="wg-flag">
                          <img
                            src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/6414b4f2ec4078fd8a80790c_malay.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="wg-flag-ico"
                          />
                        </div>
                      </div>
                    </a>
                  </form>
                  <div
                    className="w-form-done"
                    tabIndex={-1}
                    role="region"
                    aria-label="Email Form 2 success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    className="w-form-fail"
                    tabIndex={-1}
                    role="region"
                    aria-label="Email Form 2 failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="w-embed">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n.country-name {\n  /* Set the maximum width of the element */\n  max-width: calc(7ch + 1em);\n  /* Add "..." at the end of the element */\n  text-overflow: ellipsis;\n  /* Ensure that the text is displayed on one line */\n  white-space: nowrap;\n  /* Hide any overflow text */\n  overflow: hidden;\n  /* Set display to inline-block to allow the element to respect its width and the ellipsis */\n  display: inline-block;\n}\n.#w-dropdown-list-2{\n\twidth:100%;\n}\n\n/* Show the scrollbar for specific elements */\n.wg-dd-1-list::-webkit-scrollbar {\n  display: none;\n}\n\n',
                }}
              />
            </div>
          </div>
          <div className="wg-code w-embed" />
        </div>
        <div className="w-embed" />
      </div>
      <div className="navbar-click-supporter" />
      <div className="hero-companies-wrapper">
        <div className="space-100" />
        <div className="space-small" />
        <h3 className="companies-brand">
          Millions of creatives generated every single day
        </h3>
        <p className="hero-p">
          Powering the world’s best advertisers, from startups led by solo
          founders to global enterprises.
        </p>
        <div className="space-large" />
        <div className="companies-wrapper">
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a82f610b05b41e6b79d_Amazon_logo.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a82d499190dab44a1a5_Microsoft_logo_(2012)%20(1).svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a821c42935c408180aa_redbull.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a8240a9a531d531a4a4_link.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a866610b93f5ed96f9c_TripAdvisor_Logo.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a86592916f9f835d961_Walmart_logo.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a834ce70f33621ec631_Reddit_logo.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a867a16c4c042df8ca6_siemens.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a83ebff9746ad157a3c_g10.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a8799f11fd48cffbe5a_renault-new-2021-seeklogo.com-1.svg"
              loading="lazy"
              alt=""
              className="company-icon is-renault"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a82329835c1abb85104_ad.svg"
              loading="lazy"
              alt=""
              className="company-icon is-adidas"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a834609b33a08f804a7_sb.svg"
              loading="lazy"
              alt=""
              className="company-icon is-starbucks"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a824609b33a08f8042d_g11.svg"
              loading="lazy"
              alt=""
              className="company-icon is-tiffany"
            />
          </div>
          <div className="company-wrapper">
            <img
              src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/65049a82ebff9746ad157942_layer1.svg"
              loading="lazy"
              alt=""
              className="company-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
