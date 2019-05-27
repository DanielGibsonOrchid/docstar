import React from "react"
import { Link } from "gatsby"

const FooterDark = () => (
  <div>
    {/* FOOTER-3 ============================================= */}
    <footer id="footer-3" className="bg-dark footer division">
      <div className="container white-color">

        {/* FOOTER CONTENT */}
        <div className="row">

          {/* FOOTER INFO */}
          <div className="col-md-10 col-lg-4">
            <div className="footer-info m-bottom-40">

              {/* Title */}
              <h4 className="h4-lg">PERGO.</h4>

              {/* Text */}
              <p>Aliquam orci nullam tempor sapien orci gravida donec enim ipsum porta justo integer at
                velna vitae auctor integer congue magna
                </p>

              {/* Social Icons */}
              <div className="footer-socials-links">
                <ul className="foo-links text-center clearfix">
                  <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#" className="ico-twitter"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></a></li>
                  <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr" /></a></li>
                  {/*
                      <li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>		
                      <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>										
                      <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>		
                      <li><a href="#" class="ico-google-plus"><i class="fab fa-google-plus-g"></i></a></li>									
                      <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>
                      <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>*/}
                </ul>
              </div>
            </div>
          </div>

          {/* FOOTER PRODUCTS LINKS */}
          <div className="col-md-3 col-lg-2">
            <div className="footer-links m-bottom-40">
              {/* Title */}
              <h5 className="h5-sm">Products</h5>
              {/* Footer List */}
              <ul className="clearfix">
                <li><Link to="/services/">Services</Link></li>
              </ul>
            </div>
          </div>

          {/* FOOTER COMPANY LINKS */}
          <div className="col-md-3 col-lg-2">
            <div className="footer-links m-bottom-40">

              {/* Title */}
              <h5 className="h5-sm">Company</h5>

              {/* Footer Links */}
              <ul className="clearfix">
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/team/">Team</Link></li>
                <li><Link to="/contact/">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* FOOTER NEWSLETTER FORM */}
          <div className="col-md-6 col-lg-4">
            <div className="footer-form m-bottom-20">
              {/* Title */}
              <h5 className="h5-sm">Subscribe Us:</h5>
              <p className="p-sm m-bottom-20">We don’t share your personal information with anyone. Check out our
                Privacy Policy for more information
                </p>

              {/* Newsletter Form Input */}
              <form className="newsletter-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Email Address" required id="s-email" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn">
                      <i className="far fa-envelope" />
                    </button>
                  </span>
                </div>

                {/* Newsletter Form Notification */}
                <label htmlFor="s-email" className="form-notification" />
              </form>
            </div>
          </div>	{/* END FOOTER NEWSLETTER FORM */}
        </div>	  {/* END FOOTER CONTENT */}

        {/* FOOTER COPYRIGHT */}
        <div className="row bottom-footer">
          <div className="col-md-12">
            <div className="footer-copyright">
              <p className="m-bottom-0">© 2019 <span>DocStar</span> All Rights Reserved</p>
            </div>
          </div>
        </div>	{/* END FOOTER COPYRIGHT */}
      </div>	   {/* End container */}
    </footer>	{/* END FOOTER-3 */}
    
    {/* EXTERNAL SCRIPTS ============================================= */}
    {/* Custom Script */}
    {/* HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. */}
    {/* [if lt IE 9]>
        
        
      <![endif] */}
    {/* Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. */}

  </div>
)

export default FooterDark
