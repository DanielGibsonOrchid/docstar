import React from 'react'

import docstarLogo from "../images/DocStar-Images/TopNAV-DOCSTAR-logo-white@2x.png"

const Footer = () => (
  <div className="footerBox">
  <div className="container">
  <div className="footerContainer">
    <div className="footerText">
      <p>Building Documentation.</p>
    </div>

    <div className="footerLogo">
      <img src= {docstarLogo} alt="Docstar site logo" className="footerImg"/>
    </div>

    {/* FOOTER COPYRIGHT */}
    <div className="row bottom-footer">
      <div className="col-md-12">
        <div className="footer-copyright">
          <p className="m-bottom-0">© 2019 <span>DocStar</span> All Rights Reserved</p>
        </div>
      </div>
    </div>	{/* END FOOTER COPYRIGHT */}
    </div>
    </div>
  </div>

)

export default Footer