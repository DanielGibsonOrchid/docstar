import React from "react"
// import { Link } from "gatsby"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import FooterDark from "../components/footer-dark"

import image550x720 from "../images/image-01.png"
import image550x740 from "../images/image-02.png"
import image700x700 from "../images/portfolio/construct-700x700.jpg"
import imageTeamPlus from "../images/team-6.jpg"
import image300x200 from "../images/brand-300x200.jpg"


const About = () => ( 
  <div>			

    <HeaderScripts />

    {/* PAGE CONTENT ============================================= */}	
    <div id="page" className="page">
      
      <HeaderMenu />

      {/* ABOUT PAGE HERO ============================================= */}	
      <section id="about-hero" className="bg-scroll page-hero-section division">
        <div className="container">	
          <div className="row">
            
            {/* HERO TEXT */}
            <div className="col-md-10 offset-md-1">
              <div className="hero-txt text-center white-color">
                
                {/* Title */}
                <h2 className="h2-xl">About PERGO.</h2>
                
                {/* Text */}
                <p className="p-hero">Semper lacus cursus porta, feugiat primis ultrice ligula risus auctor rhoncus purus
                  ipsum primis in cubilia vitae laoreet augue
                </p>
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
                <img className="img-fluid" src={image550x720} alt="about-image" />
              </div>
            </div>
            
            {/* ABOUT TEXT */}
            <div className="col-md-6 col-lg-6">
              <div className="about-txt ind-45">
                
                {/* Section ID */}	
                <span className="section-id">
                  About Us
                </span>
                
                {/* Title */}	
                <h3 className="h3-xl txt-600">
                  We use design and innovations  
                </h3>
                
                {/* Text */}
                <p className="p-lg grey-color">
                  Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia augue luctus magna 
                </p> 
                
                {/* Text */}
                <p>
                  An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae
                  auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus ligula
                  congue vitae auctor eros erat magna morbi
                </p> 
                
                {/* SMALL STATISTIC */}
                <div className="small-statistic m-top-40">
                  <div className="row">	
                    
                    {/* STATISTIC BLOCK #1 */}
                    <div className="col-sm-6">							
                      <div className="statistic-block">							
                        <div className="statistic-number rose-color txt-700">1154</div>
                        <h5 className="h5-sm">Happy Clients</h5>							
                      </div>								
                    </div>
                    
                    {/* STATISTIC BLOCK #2 */}
                    <div className="col-sm-6">									
                      <div className="statistic-block">								
                        <div className="statistic-number rose-color txt-700">409</div>
                        <h5 className="h5-sm">Tickets Closed</h5>	
                      </div>							
                    </div>
                  </div>	
                </div>	{/* END SMALL STATISTIC */}
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
                  Digital Solutions
                </span>
                
                {/* Title */}	
                <h3 className="h3-xl txt-600">
                  We are making design better for everyone 
                </h3>
                
                {/* Text */}
                <p className="p-lg grey-color">
                  Justo integer odio velna vitae auctor integer congue magna at pretium purus ligula rutrum luctus
                </p> 
                
                {/* Text */}
                <p>
                  An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae
                  auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus ligula
                  congue vitae auctor eros erat magna morbi pretium neque
                </p> 
                
                {/* Technologies Icons */}
                <div className="technologies">
                  
                  {/* Text */}	
                  <p>Technologies we use:</p>
                  
                  {/* Icons */}
                  <span className="html-ico"><i className="fab fa-html5" /></span>
                  <span className="css-ico"><i className="fab fa-css3-alt" /></span>
                  <span className="javascript-ico"><i className="fab fa-js-square" /></span>
                  <span className="php-ico"><i className="fab fa-php" /></span>
                  <span className="wp-ico"><i className="fab fa-wordpress" /></span>									
                  <span className="sass-ico"><i className="fab fa-sass" /></span>
                  {/*
                    <span class="git-ico"><i class="fab fa-git-square"></i></span>
                    <span class="less-ico"><i class="fab fa-less"></i></span>	
                    <span class="linux-ico"><i class="fab fa-linux"></i></span>
                    <span class="angular-ico"><i class="fab fa-angular"></i></span>
                    <span class="node-ico"><i class="fab fa-node"></i></span>
                    */}
                </div>
              </div>
            </div>	  {/* END CONTENT TEXT */}
            
            {/* CONTENT IMAGE */}
            <div className="col-md-6 col-lg-5 offset-lg-1">
              <div className="content-img">
                <img className="img-fluid" src={image550x740} alt="content-image" />
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
              <h3 className="h3-xl txt-600">A design experience like never before </h3>
              
              {/* Text */}
              <p className="grey-color">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, 
                tempor posuere ligula varius augue luctus donec sapien
              </p>
            </div>		
          </div> 	 {/* END SECTION TITLE */}	
          
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                
                {/* SERVICE BOX #1 */}
                <div className="col-md-6">
                  <div className="sbox-1 box-icon-md grey-icon">
                    
                    {/* Icon */}
                    <span className="flaticon-wireless-internet" />
                    
                    {/* Text */}
                    <div className="sbox-1-txt">
                      <h5 className="h5-md">Market Research</h5>
                      <p className="grey-color">Maecenas laoreet augue egestas laoreet augue egestas, congue gestas
                        volutpat posuere cubilia congue ipsum mauris lectus laoreet gestas neque volutpat and
                        gestas posuere congue ipsum
                      </p>
                    </div>	
                  </div>							
                </div>
                
                {/* SERVICE BOX #2 */}
                <div className="col-md-6">
                  <div className="sbox-1 box-icon-md grey-icon">
                  
                    {/* Icon */}
                    <span className="flaticon-users" />
                  
                    {/* Text */}
                    <div className="sbox-1-txt">
                      <h5 className="h5-md">User Experience</h5>
                      <p className="grey-color">Maecenas laoreet augue egestas laoreet augue egestas, congue gestas
                        volutpat posuere cubilia congue ipsum mauris lectus laoreet gestas neque volutpat and
                        gestas posuere congue ipsum
                      </p>
                    </div>						
                  </div>							
                </div>
                
                {/* SERVICE BOX #3 */}
                <div className="col-md-6">
                  <div className="sbox-1 box-icon-md grey-icon">
                  
                    {/* Icon */}
                    <span className="flaticon-settings-6" />
                    
                    {/* Text */}
                    <div className="sbox-1-txt">	
                      <h5 className="h5-md">Web Development</h5>
                      <p className="grey-color">Maecenas laoreet augue egestas laoreet augue egestas, congue gestas
                        volutpat posuere cubilia congue ipsum mauris lectus laoreet gestas neque volutpat and
                        gestas posuere congue ipsum
                      </p>
                    </div>						
                  </div>							
                </div>
                
                {/* SERVICE BOX #4 */}
                <div className="col-md-6">
                  <div className="sbox-1 box-icon-md grey-icon">
                    
                    {/* Icon */}
                    <span className="flaticon-help" />
                    
                    {/* Text */}
                    <div className="sbox-1-txt">
                      <h5 className="h5-md">Free Consultations</h5>
                      <p className="grey-color">Maecenas laoreet augue egestas laoreet augue egestas, congue gestas
                        volutpat posuere cubilia congue ipsum mauris lectus laoreet gestas neque volutpat and
                        gestas posuere congue ipsum
                      </p>
                    </div>	
                  </div>							
                </div>	
              </div>	
            </div>		
          </div>	   {/* End row */}	
        </div>	   {/* End container */}		
      </section>	{/* END SERVICES-1 */}
      
      {/* ABOUT-2 ============================================= */}
      <section id="about-2" className="bg-scroll bg-dark wide-60 about-section division">
        <div className="container white-color">
          <div className="row d-flex align-items-center">
            
            {/* ABOUT TEXT */}
            <div className="col-md-6">
              <div className="about-txt ind-30">
                
                {/* Section ID */}	
                <span className="section-id">
                  Our Skills
                </span>
                
                {/* Title */}	
                <h3 className="h3-sm txt-600">
                  We're the stand out experts in business 
                </h3>
                
                {/* Text */}
                <p>
                  An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae
                  auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus ligula
                  congue vitae auctor eros erat magna morbi
                </p>
              </div>
            </div>	  {/* END ABOUT TEXT */}
            
            {/* ABOUT SKILLS */}
            <div className="col-md-6">
              <div className="about-skills ind-30">
                
                {/* SKILLS */}	
                <div className="skills rose-progress m-top-30">
                  <div className="barWrapper">	
                    <p>Coding Knowledge</p>
                    <span className="skill-percent">97%</span> 
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={97} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="barWrapper">	
                    <p>Digital Marketing</p>
                    <span className="skill-percent">92%</span> 
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="barWrapper">	
                    <p>Front End Development</p>
                    <span className="skill-percent">85%</span> 
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="barWrapper">	
                    <p>WordPress</p>
                    <span className="skill-percent">94%</span> 
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={94} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>	{/* END SKILLS */}	
              </div>
            </div>
          </div>	   {/* End row */}	
        </div>	   {/* End container */}		
      </section>	{/* END ABOUT-2 */}
      
      {/* TEAM-1 ============================================= */}
      <section id="team-1" className="wide-70 team-section division">
        <div className="container">
          
          {/* SECTION TITLE */}	
          <div className="row">	
            <div className="col-lg-10 offset-lg-1 section-title">		
              
              {/* Title 	*/}	
              <h2 className="h2-xs">Our Creative Team</h2>	
              
              {/* Text */}
              <p>Our team and staff is presented here, we do what we love. Who we are, what we do and our social
                networks, connect with us.
              </p>
            </div> 
          </div>	 {/* END SECTION TITLE */}	
          
          <div className="row">
            
            {/* TEAM MEMBER #1 */}
            <div className="col-md-6 col-lg-4">
              <div className="team-member white-color">								
              
                {/* Team Member Photo */}
                <img className="img-fluid" src={image700x700} alt="team-member-foto" />
                <div className="tm-overlay" />
                
                {/* Team Member Meta */}		
                <div className="tm-meta">
                  <h5 className="h5-sm">Jonathan Barnes</h5>
                  <span className="rose-color">Founder</span>
                  
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">																			
                      <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#" className="ico-twitter"><i className="fab fa-twitter" /></a></li>											
                      {/*
                        <li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>		
                        <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>										
                        <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>
                        <li><a href="#" class="ico-google-plus"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a></li>
                        <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>*/}		
                    </ul>									
                  </div>	
                </div>	
              </div>								
            </div>	{/* END TEAM MEMBER #1 */}
            
            {/* TEAM MEMBER #2 */}
            <div className="col-md-6 col-lg-4">
              <div className="team-member white-color">	
                
                {/* Team Member Photo */}
                <img className="img-fluid" src={image700x700} alt="team-member-foto" />
                <div className="tm-overlay" />
                
                {/* Team Member Meta */}		
                <div className="tm-meta">
                  <h5 className="h5-sm">Hannah Harper</h5>
                  <span className="rose-color">Market Researcher</span>
                  
                  {/* Social Icons */}
                  <div className="tm-social">
                    <ul className="text-center clearfix">																			
                      <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#" className="ico-twitter"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></a></li>											
                      {/*
                        <li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>		
                        <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>										
                        <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>									
                        <li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a></li>
                        <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>*/}		
                    </ul>									
                  </div>	
                </div>	
              </div>					
            </div>	{/* END TEAM MEMBER #2 */}
            
            {/* TEAM MEMBER #3 */}
            <div className="col-md-6 col-lg-4">
              <div className="team-member white-color">	
                
                {/* Team Member Photo */}
                <img className="img-fluid" src={image700x700} alt="team-member-foto" />
                <div className="tm-overlay" />
                
                {/* Team Member Meta */}		
                <div className="tm-meta">
                  <h5 className="h5-sm">Matthew Anderson</h5>
                  <span className="rose-color">Market Analysis Expert</span>
                  
                  {/* Social Icons */}
                  <div className="tm-social">
                    <ul className="text-center clearfix">																			
                      <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#" className="ico-twitter"><i className="fab fa-twitter" /></a></li>										
                      {/*
                        <li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>		
                        <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>										
                        <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>
                        <li><a href="#" class="ico-google-plus"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a></li>
                        <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>*/}		
                    </ul>									
                  </div>	
                </div>	
              </div>			
            </div>	{/* END TEAM MEMBER #3 */}
            
            {/* TEAM MEMBER #4 */}
            <div className="col-md-6 col-lg-4">
              <div className="team-member white-color">	
              
                {/* Team Member Photo */}
                <img className="img-fluid" src={image700x700} alt="team-member-foto" />
                <div className="tm-overlay" />
                
                {/* Team Member Meta */}		
                <div className="tm-meta">
                  <h5 className="h5-sm">Megan Coleman</h5>
                  <span className="rose-color">Senior UX/UI Designer</span>
                  
                  {/* Social Icons */}
                  <div className="tm-social">
                    <ul className="text-center clearfix">																			
                      <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>										
                      <li><a href="#" className="ico-dribbble"><i className="fab fa-dribbble" /></a></li>	
                      {/*
                        <li><a href="#" class="ico-twitter"><i class="fab fa-twitter"></i></a></li>	
                        <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>										
                        <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>
                        <li><a href="#" class="ico-google-plus"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a></li>
                        <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>*/}		
                    </ul>									
                  </div>	
                </div>	
              </div>			
            </div>	{/* END TEAM MEMBER #4 */}
            
            {/* TEAM MEMBER #5 */}
            <div className="col-md-6 col-lg-4">
              <div className="team-member white-color">	
                
                {/* Team Member Photo */}
                <img className="img-fluid" src={image700x700} alt="team-member-foto" />
                <div className="tm-overlay" />
                
                {/* Team Member Meta */}		
                <div className="tm-meta">
                  <h5 className="h5-sm">Robert Peterson</h5>
                  <span className="rose-color">Graphic Designer</span>
                  
                  {/* Social Icons */}
                  <div className="tm-social">
                    <ul className="text-center clearfix">																			
                      <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>									
                      <li><a href="#" className="ico-dribbble"><i className="fab fa-dribbble" /></a></li>
                      <li><a href="#" className="ico-pinterest"><i className="fab fa-pinterest-p" /></a></li>	
                      {/*
                        <li><a href="#" class="ico-twitter"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>										
                        <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#" class="ico-google-plus"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a></li>
                        <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>*/}		
                    </ul>									
                  </div>	
                </div>
              </div>			
            </div>	{/* END TEAM MEMBER #5 */}
            
            {/* TEAM MEMBER #6 */}
            <div className="col-md-6 col-lg-4">
              <div className="team-member">	
              
                {/* Team Member Photo */}						
                <img className="img-fluid" src={imageTeamPlus} alt="team-member-foto" />										
                {/* Team Member Meta */}			
                <div className="tm-hiring">	
                  <h5 className="h5-sm">We Are Hiring!</h5>
                  <a className="rose-color" href="#">Become part of our team</a>	
                </div>
              </div>	
            </div>	{/* END TEAM MEMBER #6 */}
          </div>	    {/* End row */}
        </div>	   {/* End container */}
      </section>	{/* END TEAM-1 */}
      
      {/* BRANDS-2 ============================================= */}
      <div id="brands-2" className="bg-scroll bg-image wide-70 brands-section division">
        <div className="container">
          
          {/* BRANDS TITLE */}
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="brands-title white-color">
                
                {/* Title */}
                <h3 className="h3-xl txt-600">Trusted by thousands of companies</h3>
                
                {/* Text */}
                <p className="p-md grey-color">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                  libero tempus, tempor posuere ligula varius augue luctus donec volutpat sapien
                </p>
              </div>	
            </div>
          </div>
          
          {/* BRANDS IMAGES */}
          <div className="row">
            
            {/* BRAND LOGO IMAGE */}
            <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div>
            
            {/* BRAND LOGO IMAGE */}
            <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div>
            
            {/* BRAND LOGO IMAGE */}
            <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div>
            {/* BRAND LOGO IMAGE */}
            <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div>
            
            {/* BRAND LOGO IMAGE */}
            <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div>
            
            {/* BRAND LOGO IMAGE */}
            <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div>
            
            {/* BRAND LOGO IMAGE */}
            <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div>
            
            {/* BRAND LOGO IMAGE */}
            <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div>
          </div>	{/* END BRANDS IMAGES */}
        </div>	 {/* End container */}
      </div>	  {/* END BRANDS-2 */}

      <FooterDark />
      
    </div>	{/* END PAGE CONTENT */}
    
  </div>
)
export default About