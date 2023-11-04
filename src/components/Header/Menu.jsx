import React, { useState } from 'react'

export default function Menu() {
    const [isFeature, setIsFeature] = useState(false);
    const [isUsecase, setIsUsecase] = useState(false);
  return (
    <div className="menu-links">
    <a
      href="/"
      aria-current="page"
      className="nav-item__link is-navbar top-nav w-inline-block w--current"
    >
      <div className="nav-item-logo-wrapper is-nav upper">
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
    <div
      data-hover="true"
      data-delay={200}
      data-w-id="86cd0d78-6723-d58c-16e2-04e3b004776b"
      className="dropdown-nav w-dropdown"
      style={{}}
    >
      <div
        className="nav-item__link is-navbar top-nav w-dropdown-toggle"
        id="w-dropdown-toggle-0"
        aria-controls="w-dropdown-list-0"
        aria-haspopup="menu"
        aria-expanded="false"
        role="button"
        tabIndex={0}
        onMouseEnter={() => setIsFeature(true)}
        onMouseLeave={() => setIsFeature(false)}
      >
        <div className="nav-item-logo-wrapper is-nav upper">
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
        <div className="nav-link-text">Features </div>
        <div style={{marginLeft: 4,  transform: "rotate(90deg)"}}>{`>`}</div>
      </div>
      <nav
        className={`dropdown-list w-dropdown-list ${isFeature? "w--open" : ""}`}
        style={{ opacity: isFeature? 1: 0 }}
        id="w-dropdown-list-0"
        aria-labelledby="w-dropdown-toggle-0"
        onMouseEnter={() => setIsFeature(true)}
        onMouseLeave={() => setIsFeature(false)}
      >
        <div className="dropdown-top-wrapper">
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
          <div className="nav-link-text">Features</div>
        </div>
        <a
          href="/generate-creatives"
          className="dropdown-link w-dropdown-link"
          tabIndex={0}
        >
          Generate Creatives
        </a>
        <a
          href="/generate-texts-headlines"
          className="dropdown-link w-dropdown-link"
          tabIndex={0}
        >
          Generate Texts &amp; Headlines
        </a>
        <a
          href="/creative-insights"
          className="dropdown-link w-dropdown-link"
          tabIndex={0}
        >
          Creative Insights﻿
        </a>
        <a
          href="/generate-social-post-creatives"
          className="dropdown-link w-dropdown-link"
          tabIndex={0}
        >
          Generate Social Posts
        </a>
        <a
          href="#"
          className="dropdown-link last-one w-dropdown-link"
          tabIndex={0}
        >
          Generate Creatives
        </a>
        <a
          href="/complete-ad-package"
          className="dropdown-link w-dropdown-link"
          tabIndex={0}
        >
          Complete Ad Package
        </a>
        <a
          href="/competitor-insights-ai"
          className="dropdown-link w-dropdown-link"
          tabIndex={0}
        >
          Competitor Insights AI
        </a>
      </nav>
    </div>
    <div
      data-hover="true"
      data-delay={200}
      data-w-id="86cd0d78-6723-d58c-16e2-04e3b004777e"
      className="dropdown-nav w-dropdown"
      style={{}}
      onMouseEnter={() => setIsUsecase(true)}
        onMouseLeave={() => setIsUsecase(false)}
    >
      <div
        className="nav-item__link is-navbar top-nav w-dropdown-toggle"
        id="w-dropdown-toggle-1"
        aria-controls="w-dropdown-list-1"
        aria-haspopup="menu"
        aria-expanded="false"
        role="button"
        tabIndex={0}
      >
        <div className="nav-item-logo-wrapper is-nav upper">
          <div className="embed-icon w-embed">
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
        <div style={{marginLeft: 4,  transform: "rotate(90deg)"}}>{`>`}</div>
      </div>
      <nav
        className={`dropdown-list w-dropdown-list ${isUsecase? "w--open" : ""}`}
        style={{ opacity: isUsecase? 1: 0, willChange: "opacity" }}
        id="w-dropdown-list-1"
        aria-labelledby="w-dropdown-toggle-1"
      >
        <div className="dropdown-top-wrapper">
          <div className="embed-icon w-embed">
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
          <div className="nav-link-text">Features</div>
        </div>
        <a
          href="/start-up"
          className="dropdown-link w-inline-block"
          tabIndex={0}
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
          <div>Startups</div>
        </a>
        <a
          href="/e-commerce"
          className="dropdown-link w-inline-block"
          tabIndex={0}
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
          <div>E-commerce</div>
        </a>
        <a
          href="/agencies"
          className="dropdown-link w-inline-block"
          tabIndex={0}
        >
          <div className="dropdown-embed w-embed">
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
          <div>Agencies</div>
        </a>
        <a
          href="/enterprise"
          className="dropdown-link w-inline-block"
          tabIndex={0}
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
          <div>Enterprise</div>
        </a>
      </nav>
    </div>
    <a
      href="#pricing-section"
      id="pricing-link"
      className="nav-item__link is-navbar top-nav w-inline-block"
    >
      <div className="nav-item-logo-wrapper is-nav upper">
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
      href="/blog"
      className="nav-item__link is-navbar top-nav w-inline-block"
    >
      <div className="nav-item-logo-wrapper is-nav upper">
        <div className="embed-icon w-embed">
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
  </div>
  )
}
