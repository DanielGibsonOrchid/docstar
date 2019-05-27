import React from "react"
import { Link } from "gatsby"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import FooterDark from "../components/footer-dark"
import GoogleMap from "../components/google-map"

const Contact = () => (
  <div>

    <HeaderScripts />

    {/* PAGE CONTENT ============================================= */}
    <div id="page" className="page">

      <HeaderMenu />

      {/* CONTACTS GOOGLE MAP
			============================================= */}
      <div id="contacts-map" className="division">
        <div className="row">
          <div className="col-md-12">
            <div id="gmap" className="gmap" />
          </div>
        </div>	{/* End row */}
      </div>	{/* END CONTACTS GOOGLE MAP */}

      {/* CONTACTS-3 ============================================= */}
      <section id="contacts-3" className="bg-clouds wide-60 contacts-section division">
        <div className="container">
          {/* SECTION TITLE 	*/}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              <h2 className="h2-xs">Need Help? Say Hello</h2>
              {/* Text */}
              <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, tempor posuere
                ligula varius impedit enim tempor sapien
          </p>
            </div>
          </div> 	 {/* END SECTION TITLE */}

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">

                {/* CONTACTS INFO */}
                <div className="col-md-4">

                  {/* LOCATION */}
                  <div className="contact-box animated" data-animation="fadeInUp" data-animation-delay={300}>
                    <h5 className="h5-sm">Our Location</h5>
                    <p className="grey-color">121 King Street, Melbourne, <br /> Victoria 3000 Australia</p>
                  </div>

                  {/* PHONES */}
                  <div className="contact-box animated" data-animation="fadeInUp" data-animation-delay={400}>
                    <h5 className="h5-sm">Contact Phones</h5>
                    <p className="grey-color">Phone : +12 3 3456 7890</p>
                    <p className="grey-color">Fax : +12 9 8765 4321</p>
                  </div>

                  {/* WORKING HOURS */}
                  <div className="contact-box animated" data-animation="fadeInUp" data-animation-delay={500}>
                    <h5 className="h5-sm">Working Hours</h5>
                    <p className="grey-color">Mon - Fri: 8:30am - 7:30pm</p>
                    <p className="grey-color">Sat: 8:30am - 3:30pm</p>
                  </div>
                </div>	{/* END CONTACTS INFO */}

                {/* CONTACT FORM */}
                <div className="col-md-8">
                  <div className="form-holder">
                    <form name="contactform" className="row contact-form">
                      
                      {/* Contact Form Input */}
                      <div id="input-name" className="col-lg-6">
                        <input type="text" name="name" className="form-control name" placeholder="Your Name" />
                      </div>
                      <div id="input-email" className="col-lg-6">
                        <input type="text" name="email" className="form-control email" placeholder="Email Address" />
                      </div>
                      <div id="input-subject" className="col-lg-12">
                        <input type="text" name="subject" className="form-control subject" placeholder="What's this about?" />
                      </div>
                      <div id="input-message" className="col-lg-12 input-message">
                        <textarea className="form-control message" name="message" rows={6} placeholder="Your Message ..." defaultValue={""} />
                      </div>

                      {/* Contact Form Button */}
                      <div className="col-lg-12 m-top-10 form-btn">
                        <button type="submit" className="btn btn-md submit btn-arrow">
                          <span>Send Message <i className="fas fa-angle-double-right" /></span>
                        </button>
                      </div>

                      {/* Contact Form Message */}
                      <div className="col-lg-12 contact-form-msg">
                        <span className="loading" />
                      </div>
                    </form>
                  </div>
                </div>	{/* END CONTACT FORM */}
              </div>
            </div>
          </div>	{/* End row */}
        </div>	   {/* End container */}
      </section>	{/* END CONTACTS-3 */}

      <FooterDark />

    </div>	{/* END PAGE CONTENT */}

    <GoogleMap />

  </div>
)

export default Contact