import React, { useEffect, useState } from "react";

export default function FAQ() {
  const arr = [
    {
      title: "What is a “Credit”",
      id: 1,
      status: false,
      content: `Credits are what you use to download each creative or banner
  that you generate on AdCreative.ai. Depending on the package
  you select, you will have a set number of credits available to
  you each month. These credits renew every month and can be
  used to download your generated creatives.`,
    },
    {
      title: "What are “Brands”?",
      id: 2,
      status: false,
      content: `Brands are the foundation of your creatives on AdCreative.ai.
      By creating a brand, you can upload your logo, brand colors,
      brand descriptions, and connect your ad accounts. This allows
      our machine-learning model to tailor your creative designs and
      predictions to your brand, ensuring the highest quality
      output.`,
    },
    {
      title: "What do you mean by “Unlimited Generations”?",
      id: 3,
      status: false,
      content: `With AdCreative.ai, you have the freedom to generate as many
      creatives as you want, regardless of whether you have used all
      your credits or not. You will only use your credits when you
      choose to download your generated creatives.`,
    },
    {
      title: "What are “Integrations”?",
      id: 4,
      status: false,
      content: `Integrations allow you to connect your ad accounts to your
      brands on AdCreative.ai. This helps to fine-tune our
      machine-learning model for you, ensuring that the creative
      designs and predictions you see are specifically tailored to
      your brand.`,
    },
    {
      title: "What is “Unlimited Free Stock Images”?",
      id: 5,
      status: false,
      content: `With AdCreative.ai, you have access to over 100 million free
      stock images to use in your ad creatives. These images are
      included with every package, and you will not be charged any
      additional fees for their use.`,
    },
    {
      title: "What is “Text Generator AI”?",
      id: 6,
      status: false,
      content: `Our Text Generator AI feature allows you to generate
      high-converting ad texts and headlines using a variety of
      copywriting methodologies. This feature is included in every
      package at no additional cost.`,
    },
    {
      title: "What is “Creative Insights Pro”?",
      id: 7,
      status: false,
      content: `By connecting your ad accounts, our AI can analyze your
      creatives and provide you with insights that you won’t find
      anywhere else. These insights can include your average CTR in
      your brand category, your best-performing colors and
      creatives, and much more.`,
    },
    {
      title: "What is the “Number of Users”?",
      id: 8,
      status: false,
      content: `AdCreative.ai believes that teamwork makes the dream work.
      That’s why we allow you to invite users to your account,
      collaborate on projects, and work together seamlessly to
      achieve your creative goals.`,
    },
    {
      title: "What is your refund policy?",
      id: 9,
      status: false,
      content: `At AdCreative.ai, we have a 100% refund policy! If something
      goes wrong, simply log in to our application and speak with
      our support team in the live support chat. In most cases, we
      process refunds on the same day. However, please keep in mind
      that depending on your country and bank, it may take a week or
      two for the refunded amount to appear in your account.`,
    },
  ];
  const [num, setnum] = useState(1);
  const ClickFAQ = (number)=>{
    console.log(number)
    if(number == num){
        setnum(0)
    } else{
        setnum(number)
    }
  }

  return (
    <div id="FAQ" className="section overflow-hidden">
      <div className="container">
        <div className="before-faq">
          <h2>
            <span>FAQ</span>
          </h2>
          <p className="bottom-margin-20">
            Improved <strong>conversion rates,</strong> included
            <strong> copy-writer </strong>and <strong>beautiful designs</strong>{" "}
            <br />— <strong>just a few things our clients love!</strong>
          </p>
        </div>
        <div className="faq-div">
          <div className="faq-contents">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`faq-wrapper ${item.id == num ? "is-open" : ""}`}
                >
                  <div
                    className={`faq-question ${
                      item.id == num ? "" : "is-close"
                    }`}
                  >
                    <h3
                      className={`faq-heading ${
                        item.id == num ? "" : "is-close"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div
                      className="faq-plus-wrap"
                      style={ item.id == num
                        ? {
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }
                        : {
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                      onClick={() => {
                        console.log("setnum", num);
                        ClickFAQ(index + 1);
                      }}
                    >
                        {
                            item.id == num ? <div></div> : <div
                            className="faq-plus-l"
                            style={{}}
                          />
                        }
                      
                      <div className="faq-plus" />
                    </div>
                  </div>
                  <div
                    className="faq-answer"
                    style={item.id == num ? {} : { height: 0 }}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            id="w-node-_65c81cc4-4014-baa9-ec6c-10e33a505382-3a505311"
            className="lightbox-wrapper"
          >
            <a
              href="#"
              className="lightbox with-faq w-inline-block w-lightbox"
              aria-label="open lightbox"
              aria-haspopup="dialog"
            >
              <div className="lightbox-transparent-item">
                <div className="lightbox-image-wrapper with-faq">
                  <img
                    src="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c76fc202485166f6e73f90_V4-Thumbnail.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 569.8224487304688px, (max-width: 991px) 569.2755737304688px, (max-width: 1279px) 57vw, (max-width: 1919px) 58vw, 1103.99853515625px"
                    srcSet="https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c76fc202485166f6e73f90_V4-Thumbnail-p-500.webp 500w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c76fc202485166f6e73f90_V4-Thumbnail-p-800.webp 800w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c76fc202485166f6e73f90_V4-Thumbnail-p-1080.webp 1080w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c76fc202485166f6e73f90_V4-Thumbnail-p-1600.webp 1600w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c76fc202485166f6e73f90_V4-Thumbnail-p-2000.webp 2000w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c76fc202485166f6e73f90_V4-Thumbnail-p-2600.webp 2600w, https://assets-global.website-files.com/62d52b6d074c2e318f479724/64c76fc202485166f6e73f90_V4-Thumbnail.webp 2988w"
                    alt="Adcreative Video Thumbnail"
                    className="image-video"
                  />
                </div>
              </div>
              <div className="_3-circle-horizontal w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 54 14"
                >
                  <g
                    id="Group_12137"
                    data-name="Group 12137"
                    transform="translate(411.804 -1783.844) rotate(90)"
                  >
                    <circle
                      id="Ellipse_1280"
                      data-name="Ellipse 1280"
                      cx={7}
                      cy={7}
                      r={7}
                      transform="translate(1783.844 357.804)"
                      fill="#ebe7fa"
                    />
                    <circle
                      id="Ellipse_1281"
                      data-name="Ellipse 1281"
                      cx={7}
                      cy={7}
                      r={7}
                      transform="translate(1783.844 377.804)"
                      fill="#ebe7fa"
                    />
                    <circle
                      id="Ellipse_1282"
                      data-name="Ellipse 1282"
                      cx={7}
                      cy={7}
                      r={7}
                      transform="translate(1783.844 397.804)"
                      fill="#ebe7fa"
                    />
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
