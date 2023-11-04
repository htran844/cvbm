import React from 'react'

export default function MenuLoginRegister() {
  return (
<div className="menu-login-and-register">
  <a
    href="https://app.adcreative.ai/Identity/Account/Login"
    className="nav-item__link is-navbar top-nav is-pink w-inline-block"
  >
    <div className="nav-item-logo-wrapper is-nav upper" />
    <div className="nav-link-text">Login</div>
  </a>
  <div className="menu-buttons">
    <div className="hero-content__logo-wrapper is-top-navbar">
      <a
        data-ps="target"
        href="https://app.adcreative.ai/Identity/Account/Register"
        target="_blank"
        className="logo-white-wrapperr is-red is-top-navbar w-inline-block"
      >
        <div className="login-text is-topnav">REGISTER </div>
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
</div>

  )
}
