import React from "react"
// import { Link } from "gatsby"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import Footer from "../components/footer"

import aboutImage550x720 from "../images/DocStar-Images/About-image1@2x.jpg"
import aboutImage550x740 from "../images/DocStar-Images/About-Image2@2x.jpg"
import profileImage from "../images/DocStar-Images/DH-profile1.jpg"


const About = () => ( 
  <div>			

    <HeaderScripts />

    {/* PAGE CONTENT ============================================= */}	
    <div id="page" className="page">
      
      <HeaderMenu />

      {/* ABOUT PAGE HERO ============================================= */}	
      <section id="about-hero" className="bg-scroll page-hero-section content-about-text1 division">
        <div className="container">	
          <div className="row">
            
            {/* HERO TEXT */}
            <div className="col-md-10 offset-md-1">
              <div className="hero-txt text-center white-color">
                
                {/* Title */}
                <h2 className="h2-xl">About Docstar</h2>
                
                {/* Text */}
                <p className="p-hero">A company founded from a realisation that many of today's construction and building-related challenges are being solved using yesterday's solutions</p>
              </div>
            </div>	{/* END HERO TEXT */}
          </div>	  {/* End row */}
        </div>	   {/* End container */} 	
      </section>	{/* END ABOUT PAGE HERO */}
      
      {/* ABOUT-1 ============================================= */}
      <section id="about-1" className="wide-60 about-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            
            {/* ABOUT IMAGE */}
            <div className="col-md-6 col-lg-6">
              <div className="about-img ind-20">
                <img className="img-fluid" src={aboutImage550x720} alt="about-image" />
              </div>
            </div>
            
            {/* ABOUT TEXT */}
            <div className="col-md-6 col-lg-6">
              <div className="about-txt ind-45">
                
                {/* Section ID */}	
                <span className="section-id">
                  what we are about
                </span>
                
                {/* Title */}	
                <h3 className="h3-sm txt-700">
                  Wouldn’t you rather focus on the job than the paperwork?  
                </h3>
                
                {/* Text */}
                <p className="p-lg grey-color">
                  That's where Docstar comes in 
                </p> 
                
                {/* Text */}
                <p>
                Technology adoption in construction is lagging behind other sectors, with potential to increase profit and productivity. <br /> Docstar have created a tried and tested system to help with all your building documentation in a professional, efficient and economical way.
                </p> 
                
                {/* SMALL STATISTIC */}
                {/* <div className="small-statistic m-top-40">
                  <div className="row">	 */}
                    
                    {/* STATISTIC BLOCK #1 */}
                    {/* <div className="col-sm-6">							
                      <div className="statistic-block">							
                        <div className="statistic-number rose-color txt-700">1154</div>
                        <h5 className="h5-sm">Happy Clients</h5>							
                      </div>								
                    </div> */}
                    
                    {/* STATISTIC BLOCK #2 */}
                    {/* <div className="col-sm-6">									
                      <div className="statistic-block">								
                        <div className="statistic-number rose-color txt-700">409</div>
                        <h5 className="h5-sm">Tickets Closed</h5>	
                      </div>							
                    </div>
                  </div>	 */}
                {/* </div>	END SMALL STATISTIC */}
              </div>
            </div>	  {/* END ABOUT TEXT */}
          </div>	   {/* End row */}	
        </div>	   {/* End container */}		
      </section>	{/* END ABOUT-1 */}
      
      {/* CONTENT-1 ============================================= */}
      <section id="content-1" className="bg-lightgrey wide-60 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            
            {/* CONTENT TEXT */}
            <div className="col-md-6 col-lg-6">
              <div className="content-txt ind-30">
                
                {/* Section ID */}	
                <span className="section-id">
                  the docstar solution
                </span>
                
                {/* Title */}	
                <h3 className="h3-sm txt-700">
                  Dont let your documentation get left behind. 
                </h3>
                
                {/* Text */}
                <p className="p-lg grey-color">
                  The main contractor is pushing to complete the work, the quantity surveyor is trying to wrap up any final claims, and the client wants to occupy their new space in perfect condition!
                </p> 
                
                {/* Text */}
                <p>
                Our experience has shown that the completion and handover of a construction project is often the busiest and most stressful period. Let Docstar take care of the Operating & Maintenance requirements in parallel with the completion of the project. <br />
                You can focus on finishing the physical work, and let us focus on finishing your paperwork.
                </p> 
                
                {/* Technologies Icons */}
                {/* <div className="technologies"> */}
                  
                  {/* Text */}	
                  {/* <p>Technologies we use:</p> */}
                  
                  {/* Icons */}
                  {/* <span className="html-ico"><i className="fab fa-html5" /></span>
                  <span className="css-ico"><i className="fab fa-css3-alt" /></span>
                  <span className="javascript-ico"><i className="fab fa-js-square" /></span>
                  <span className="php-ico"><i className="fab fa-php" /></span>
                  <span className="wp-ico"><i className="fab fa-wordpress" /></span>									
                  <span className="sass-ico"><i className="fab fa-sass" /></span> */}
                  {/*
                    <span class="git-ico"><i class="fab fa-git-square"></i></span>
                    <span class="less-ico"><i class="fab fa-less"></i></span>	
                    <span class="linux-ico"><i class="fab fa-linux"></i></span>
                    <span class="angular-ico"><i class="fab fa-angular"></i></span>
                    <span class="node-ico"><i class="fab fa-node"></i></span>
                    */}
                {/* </div> */}
              </div>
            </div>	  {/* END CONTENT TEXT */}
            
            {/* CONTENT IMAGE */}
            <div className="col-md-6 col-lg-5 offset-lg-1">
              <div className="content-img">
                <img className="img-fluid" src={aboutImage550x740} alt="content-image" />
              </div>
            </div>
          </div>	   {/* End row */}		
        </div>	   {/* End container */}
      </section>	{/* END CONTENT-1 */}
      
      {/* SERVICES-1 ============================================= */}
      <section id="services-1" className="wide-40 services-section division">
        <div className="container">
          
          {/* SECTION TITLE 	*/}	
          <div className="row">	
            <div className="col-lg-10 offset-lg-1 section-title">	
              
              {/* Title 	*/}	
              <h3 className="h3-xl txt-700">Meet Our Founder</h3>
              
              {/* Text */}
              <p className="grey-color">Docstar's managing director, Daniel Heynen, has almost 15 years' experience in the New Zealand construction industry, primarily in the building services field, with a natural ability for problem-solving and effective communication.
              </p>
            </div>		
          </div> 	 {/* END SECTION TITLE */}
        </div>	   {/* End container */}	
        
        <div className="blue-section">
        <div className="container">
          <div className="row content-about-founder-row">
            
            <div className="about-founder-image">
              <img className="img-fluid" src={profileImage} alt="about-image" />
            </div>
            <div className="about-founder-text">
              <p>Daniel is a Chartered Professional Engineer (CPEng), a Chartered Member of Engineering New Zealand (CMEngNZ), and has a Bachelor of Engineering (Mechanical) degree from the University of Auckland. With practical on-site experience, Danial understands both the physical and theoretical aspects of a project.</p>
            </div>

          </div>	
        </div>
        </div>
      </section>	{/* END SERVICES-1 */}

      <Footer />
      
    </div>	{/* END PAGE CONTENT */}
    
  </div>
)
export default About