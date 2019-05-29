import React from 'react'
import { Link } from "gatsby"

import docstarLogo from "../images/DocStar-Images/footer-DOCSTAR-logo-no-words@2x.jpg"

const FooterLight = () => (
  <div className="footerBoxLight">
  <div className="container">
  <div className="footerContainer">
    <div className="footerTextLight">
      <p className="footer-text-1">Building Documentation.</p>
    </div>

    <div className="footerLogo">
      <Link to="/">
        <img src={docstarLogo} alt="Docstar site logo" className="footerImg" />
      </Link>
    </div>

    {/* FOOTER COPYRIGHT */}
    <div className="row bottom-footer">
      <div className="col-md-12">
        <div className="footer-copyright-light">
          <p className="m-bottom-0">© 2019 <span>DocStar</span> All Rights Reserved</p>
        </div>
      </div>
    </div>	{/* END FOOTER COPYRIGHT */}
    </div>
    </div>
  </div>

)

export default FooterLight