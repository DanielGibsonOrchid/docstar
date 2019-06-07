import React from "react"
import { Link } from "gatsby"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import Footer from "../components/footer"

import image550x750 from "../images/image-11-550x750.jpg"
import video1000x565 from "../images/video-3-img.png"
import image300x200 from "../images/brand-300x200.jpg"
import image120x120 from "../images/review-author-120x120.jpg"



const Services = () => (
  <div>
  
    <HeaderScripts />

    {/* PAGE CONTENT ============================================= */}	
    <div id="page" className="page">
      
      <HeaderMenu /> 
      
      {/* SERVICES PAGE HERO
        ============================================= */}	
      <section id="services-hero" className="bg-scroll page-hero-section division">
        <div className="container">	
          <div className="row">
            {/* HERO TEXT */}
            <div className="col-md-10 offset-md-1">
              <div className="hero-txt text-center white-color">
                {/* Title */}
                <h2 className="h2-xl">Our Core Services</h2>
                {/* Text */}
                <p className="p-hero">Docstar provide prompt service and a personalised approach to projects and clients. Our services are as follows:
                </p>
              </div>
            </div>	{/* END HERO TEXT */}
          </div>	  {/* End row */}
        </div>	   {/* End container */} 	
      </section>	{/* END SERVICES PAGE HERO */}	
      {/* SERVICES-3
        ============================================= */}
      <section id="services-3" className="wide-50-1 services-section division">
        <div className="container">
          <div className="row">
            {/* SERVICE BOX #1 */}
            <div className="col-md-6 col-lg-4">
              <div className="sbox-3 box-icon grey-icon content-box-width-300">
                {/* Icon */}
                {/* <span className="flaticon-idea" /> */}
                {/* Text */}
                <div className="sbox-3-txt">
                  <h5 className="h5-md">Building Services Operating & Maintenance (O&M) manual compilation</h5>
                  <p className="grey-color">Hydraulic, mechanical, electrical, security, fire protection, communications. We use the building services specification and construction drawings along with your equipment information, commissioning results, as built drawings and manufacturer's literature to compile a project-specific Operating & Maintenance manual to satisfy your practical completion requirements.
                  </p>
                </div>	
              </div>							
            </div>
            {/* SERVICE BOX #2 */}
            <div className="col-md-6 col-lg-4">
              <div className="sbox-3 box-icon grey-icon content-box-width-300">
                {/* Icon */}
                {/* <span className="flaticon-share-2" /> */}
                {/* Text */}
                <div className="sbox-3-txt">
                  <h5 className="h5-md">Construction / main contractor Operating & Maintenance (O&M) manual compilation</h5>
                  <p className="grey-color">Sometimes referred to as the 'Builder's O&M manual', we use the project specification and construction drawings along with your equipment information and manufacturer's literature to create a project-specific manual to satisfy your practical completion requirements based on the requirements of the main contract specification.
                  </p>
                </div>	
              </div>							
            </div>
            {/* SERVICE BOX #3 */}
            <div className="col-md-6 col-lg-4">
              <div className="sbox-3 box-icon grey-icon content-box-width-300">
                {/* Icon */}
                {/* <span className="flaticon-fingerprint" /> */}
                {/* Text */}
                <div className="sbox-3-txt">
                  <h5 className="h5-md">Quality Assurance documentation &#40;compilation, template creation&#41;</h5>
                  <p className="grey-color">Provide us with your Quality Assurance (QA) records (photos, checklists, certificates, etc.) and we'll compile these into a format ready for submission. Or if you have a repetitive QA process, we can set up templates for you to modify and use as necessary.
                  </p>
                </div>	
              </div>							
            </div>
            {/* SERVICE BOX #4 */}
            <div className="col-md-6 col-lg-4">
              <div className="sbox-3 box-icon grey-icon content-box-width-300">
                {/* Icon */}
                {/* <span className="flaticon-settings-2" /> */}
                {/* Text */}
                <div className="sbox-3-txt">
                  <h5 className="h5-md">As built drawing modifications &#40;AutoCAD&#41;</h5>
                  <p className="grey-color">Provide us with the latest CAD files (either from the consultant or the latest shop drawings) and a set of marked-up plans, and we'll modify them ready for submission as 'As Built' drawings to satisfy your practical completion requirements.
                  </p>
                </div>	
              </div>							
            </div>
            {/* SERVICE BOX #5 */}
            <div className="col-md-6 col-lg-4">
              <div className="sbox-3 box-icon grey-icon content-box-width-300">
                {/* Icon */}
                {/* <span className="flaticon-price-tag" /> */}
                {/* Text */}
                <div className="sbox-3-txt">
                  <h5 className="h5-md">BIM Services</h5>
                  <p className="grey-color">We utilise Autodesk Revit to assist with BIM requirements including updating the construction model to reflect the actual installation, clash detection and coordination with other trades, and input of metadata for operating & maintenance purposes.
                  </p>
                </div>	
              </div>							
            </div>
            {/* SERVICE BOX #6 */}
            <div className="col-md-6 col-lg-4">
              <div className="sbox-3 box-icon grey-icon content-box-width-300">
                {/* Icon */}
                {/* <span className="flaticon-price-tag" /> */}
                {/* Text */}
                <div className="sbox-3-txt">
                  <h5 className="h5-md">Miscellaneous construction documentation requirements</h5>
                  <p className="grey-color">Do you have any other specific construction documentation requirements? Contact us so we can discuss how we can help you.
                  </p>
                </div>	
              </div>							
            </div>
          </div>	   {/* End row */}	
        </div>	   {/* End container */}		
      </section>	{/* END SERVICES-3 */}

      <Footer />

    </div>	{/* END PAGE CONTENT */}

  </div>

)

export default Services