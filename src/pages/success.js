import React, { Component } from "react"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import FooterLight from "../components/footer-light"

const Success = () => (

  <div>

    <HeaderScripts />

    {/* PAGE CONTENT ============================================= */}
    <div id="page" className="page">

      <HeaderMenu />

      {/* CONTACT PAGE HERO ============================================= */}
      <section id="contact-hero" className="bg-scroll page-hero-section division">
        <div className="container">
          <div className="row">

            {/* HERO TEXT */}
            <div className="col-md-10 offset-md-1">
              <div className="hero-txt text-center white-color">

                {/* Title */}
                <h2 className="h2-xl">Say Hello!</h2>

                {/* Text */}
                <p className="p-hero">How can we help you today?</p>
              </div>
            </div>	{/* END HERO TEXT */}
          </div>	  {/* End row */}
        </div>	   {/* End container */}
      </section>	{/* END CONTACT PAGE HERO */}

      {/* CONTACTS-3 ============================================= */}
      <section id="contacts-3" className="bg-clouds wide-60 contacts-section division">
        <div className="container">
          {/* SECTION TITLE 	*/}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              {/* <h2 className="h2-xs">Need Help? Say Hello</h2> */}
              {/* Text */}
              <p className="grey-color">Thanks for contacting us! We will get in touch with you shortly.</p>
            </div>
          </div> 	 {/* END SECTION TITLE */}

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">

                {/* CONTACTS INFO */}
                <div className="col-md-4">

                  {/* LOCATION */}
                  <div className="contact-box">
                    <h5 className="h5-sm">Postal Address</h5>
                    <p className="grey-color">PO Box 56054, Dominion Rd, <br /> Auckland 1446</p>
                  </div>

                  {/* PHONES */}
                  <div className="contact-box">
                    <h5 className="h5-sm">Let’s Talk</h5>
                    <a href="tel:+64272295108" className="grey-color">DDI: +64 27 229 5108</a>
                  </div>

                  {/* WORKING HOURS */}
                  <div className="contact-box">
                    <h5 className="h5-sm">Follow Us</h5>
                    <a href="https://www.linkedin.com/in/daniel-heynen/" target="_blank" className="grey-color">LinkedIn</a>
                  </div>
                </div>	{/* END CONTACTS INFO */}
              </div>
            </div>
          </div>	{/* End row */}
        </div>	   {/* End container */}
      </section>	{/* END CONTACTS-3 */}

      <FooterLight />

    </div>	{/* END PAGE CONTENT */}

  </div>

)

export default Success