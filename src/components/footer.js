import React from 'react'

import docstarLogo from "../images/DocStar-Images/TopNAV-DOCSTAR-logo-white@2x.png"

const Footer = () => (
    <div>
    
    {/* CONTACTS-1============================================= */}
    <section id="contacts-1" className="wide-100 contacts-clouds contacts-section division" >
      <div className="container">
        {/* SECTION TITLE 	*/}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h2 className="h2-xs">Docstar is here to help</h2>
            {/* Text */}
            <p>We have experience in a number of construction sectors with various different trades. Trust Docstar to get your documentation sorted.</p>
          </div>
        </div> 	 {/* END SECTION TITLE */}
        {/* CONTACTS INFO */}
        <div className="row">
          {/* LOCATION */}
          <div className="col-sm-6 col-lg-3">
            <div className="contact-box">
              <i className="blue-color fas fa-map-marker-alt" />
              <h5 className="h5-sm">Postal Address</h5>
              <p className="grey-color">PO Box 56054, Dominion Rd,<br /> Auckland 1446</p>
            </div>
          </div>
          {/* PHONES */}
          <div className="col-sm-6 col-lg-3">
            <div className="contact-box">
              <i className="blue-color fas fa-phone-square" />
              <h5 className="h5-sm">Let's Talk</h5>
              <p className="grey-color">DDI: +64 27 229 5108</p>
            </div>
          </div>
          {/* EMAIL */}
          <div className="col-sm-6 col-lg-3">
            <div className="contact-box">
              <i className="blue-color far fa-envelope-open" />
              <h5 className="h5-sm">Drop A Line</h5>
              <p className="grey-color"><a href="mailto:yourdomain@mail.com">enquiries@docstar.co.nz</a></p>
            </div>
          </div>
          {/* WORKING HOURS */}
          <div className="col-sm-6 col-lg-3">
            <div className="contact-box">
              <i className="blue-color far fa-clock" />
              <h5 className="h5-sm">Follow Us</h5>
              <a href="#" className="grey-color">LinkedIn</a>
            </div>
          </div>
        </div>	{/* END CONTACTS INFO */}
      </div>	   {/* End container */}
    </section> {/* END CONTACTS-1 */}

    <div className="footerBox" >
      <div className="container">
        <div className="footerContainer">
          <div className="footerText">
            <p>Building Documentation.</p>
          </div>

          <div className="footerLogo">
            <img src={docstarLogo} alt="Docstar site logo" className="footerImg" />
          </div>

          {/* FOOTER COPYRIGHT */}
          <div className="row bottom-footer">
            <div className="col-md-12">
              <div className="footer-copyright">
                <p className="m-bottom-0">© 2019 <span>DocStar</span> All Rights Reserved</p>
              </div>
            </div>
          </div>	{/* END FOOTER COPYRIGHT */}
        </div> {/* END footerContainer */}
      </div> {/* END container */}
    </div>
    </div>
)

export default Footer