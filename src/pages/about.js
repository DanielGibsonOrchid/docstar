import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

import "../css/animate.css"
import "../css/bootstrap.min.css"
import "../css/fa-svg-with-js.css"
import "../css/flaticon.css"
import "../css/flexslider.css"
import "../css/magnific-popup.css"
import "../css/responsive.css"
import "../css/slick-theme.css"
import "../css/slick.css"
import "../css/style.css" 			

const About = () => ( 
	<div>												
	<Helmet>        
    <script src={withPrefix('jquery-3.4.1.min.js')} type="text/javascript" /> 
    <script src={withPrefix('custom.js')} type="text/javascript" />
    <script src={withPrefix('bootstrap.min.js')} type="text/javascript" />
    <script src={withPrefix('fontawesome-all.js')} type="text/javascript" />
    <script src={withPrefix('modernizr.custom.js')} type="text/javascript" />
    <script src={withPrefix('jquery.easing.js')} type="text/javascript" />
    <script src={withPrefix('retina.js')} type="text/javascript" />
    <script src={withPrefix('jquery.stellar.min.js')} type="text/javascript" />
    <script src={withPrefix('jquery.scrollto.js')} type="text/javascript" />
    <script src={withPrefix('jquery.appear.js')} type="text/javascript" />
    <script src={withPrefix('jquery.superslides.js')} type="text/javascript" />
    <script src={withPrefix('jquery.vide.min.js')} type="text/javascript" />
    <script src={withPrefix('imagesloaded.pkgd.min.js')} type="text/javascript" />
    <script src={withPrefix('isotope.pkgd.min.js')} type="text/javascript" />
    <script src={withPrefix('jquery.flexslider.js')} type="text/javascript" />
    <script src={withPrefix('slick.min.js')} type="text/javascript" />
    <script src={withPrefix('jquery.magnific-popup.min.js')} type="text/javascript" />
    <script src={withPrefix('jquery.ajaxchimp.min.js')} type="text/javascript" />
    <script src={withPrefix('contact-form.js')} type="text/javascript" />
    <script src={withPrefix('quick-form.js')} type="text/javascript" />
    <script src={withPrefix('comment-form.js')} type="text/javascript" />
    <script src={withPrefix('register-form.js')} type="text/javascript" />
    <script src={withPrefix('jquery.validate.min.js')} type="text/javascript" />
	</Helmet>
  {/* Pergo - A Multipurpose Landing Pages Pack for Startups, Creatives and Freelancers design by DSAThemes (http://www.dsathemes.com) */}
  {/*[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]*/}
  {/*[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]*/}
  {/*[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]*/}
  {/*[if (gte IE 9)|!(IE)]><!*/}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="author" content="DSAThemes" />	
  <meta name="description" content="Pergo - A Multipurpose Landing Pages Pack for Startups, Creatives and Freelancers" />
  <meta name="keywords" content="Responsive, HTML5 template, DSAThemes, One Page, Landing, Startup, Business, Company, Corporate, Creative, Freelancers" />	
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* SITE TITLE */}
  <title>Pergo - A Multipurpose Landing Pages Pack for Startups, Creatives and Freelancers</title>
  {/* FAVICON AND TOUCH ICONS  */}
  <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
  <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" sizes="152x152" href="images/apple-touch-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="images/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="images/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
  {/* GOOGLE FONTS */}
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" /> 		
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900" rel="stylesheet" /> 
  {/* BOOTSTRAP CSS */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  {/* FONT ICONS */}
  <link href="css/fa-svg-with-js.css" rel="stylesheet" />	
  <link href="css/flaticon.css" rel="stylesheet" />
  {/* PLUGINS STYLESHEET */}
  <link href="css/magnific-popup.css" rel="stylesheet" />
  <link href="css/flexslider.css" rel="stylesheet" />
  <link href="css/slick.css" rel="stylesheet" />
  <link href="css/slick-theme.css" rel="stylesheet" />
  {/* On Scroll Animations */}
  <link href="css/animate.css" rel="stylesheet" />
  {/* TEMPLATE CSS */}
  <link href="css/style.css" rel="stylesheet" /> 	
  {/* RESPONSIVE CSS */}
  <link href="css/responsive.css" rel="stylesheet" /> 
  {/* PRELOADER
		============================================= */}		
  <div id="loader-wrapper">
    <div id="loader">
      <div className="cssload-spin-box" />
    </div>
  </div>
  {/* PAGE CONTENT
		============================================= */}	
  <div id="page" className="page">
    {/* HEADER
			============================================= */}
    <header id="header" className="header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-tra">
        <div className="container">
          {/* LOGO IMAGE */}
          {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 284 x 72 pixels) */}
          <a href="index.html" className="navbar-brand logo-white"><img src="images/logo-white.png" width={142} height={36} alt="header-logo" /></a>
          <a href="index.html" className="navbar-brand logo-black"><img src="images/logo.png" width={142} height={36} alt="header-logo" /></a>
          {/* Responsive Menu Button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navigation Menu */}
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nl-simple"><a className="nav-link" href="services.html">What We Do</a></li>
              <li className="nav-item nl-simple"><a className="nav-link" href="demo-1.html#portfolio-2">Our Projects</a></li>
              <li className="nav-item nl-simple"><a className="nav-link" href="pricing.html">Pricing &amp; Packages</a></li>
              {/* Dropdown Link */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#services.html">Services</a>
                  <a className="dropdown-item" href="#team.html">Team</a>
                  <a className="dropdown-item" href="#pricing.html">Pricing</a>
                  <a className="dropdown-item" href="#single-project.html">Single Project</a>
                  <a className="dropdown-item" href="#blog-listing.html">Blog Listing</a>
                  <a className="dropdown-item" href="#single-post.html">Single Post</a>
                  <a className="dropdown-item" href="#contacts.html">Contacts</a>
                </div>
              </li>
              {/* Button */}
              <li><a href="contacts.html" className="btn btn-arrow">
                  <span>Contact Us <i className="fas fa-angle-double-right" /></span>
                </a>
              </li> 
            </ul>
          </div>	{/* End Navigation Menu */}
        </div>	  {/* End container */}
      </nav>	   {/* End navbar */}
    </header>	{/* END HEADER */}
    {/* ABOUT PAGE HERO
			============================================= */}	
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
    {/* ABOUT-1
			============================================= */}
    <section id="about-1" className="wide-60 about-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* ABOUT IMAGE */}
          <div className="col-md-6 col-lg-6">
            <div className="about-img ind-20 animated" data-animation="fadeInRight" data-animation-delay={500}>
              <img className="img-fluid" src="images/image-01.png" alt="about-image" />
            </div>
          </div>
          {/* ABOUT TEXT */}
          <div className="col-md-6 col-lg-6">
            <div className="about-txt ind-45">
              {/* Section ID */}	
              <span className="section-id animated" data-animation="fadeInUp" data-animation-delay={400}>
                About Us
              </span>
              {/* Title */}	
              <h3 className="h3-xl txt-600 animated" data-animation="fadeInUp" data-animation-delay={400}>
                We use design and innovations  
              </h3>
              {/* Text */}
              <p className="p-lg grey-color animated" data-animation="fadeInUp" data-animation-delay={500}>
                Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia augue luctus magna 
              </p> 
              {/* Text */}
              <p className="animated" data-animation="fadeInUp" data-animation-delay={600}>
                An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae
                auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus ligula
                congue vitae auctor eros erat magna morbi
              </p> 
              {/* SMALL STATISTIC */}
              <div className="small-statistic m-top-40">
                <div className="row">	
                  {/* STATISTIC BLOCK #1 */}
                  <div className="col-sm-6 animated" data-animation="fadeInUp" data-animation-delay={700}>							
                    <div className="statistic-block">							
                      <div className="statistic-number rose-color txt-700">1154</div>
                      <h5 className="h5-sm">Happy Clients</h5>							
                    </div>								
                  </div>
                  {/* STATISTIC BLOCK #2 */}
                  <div className="col-sm-6 animated" data-animation="fadeInUp" data-animation-delay={800}>									
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
    {/* CONTENT-1
			============================================= */}
    <section id="content-1" className="bg-lightgrey wide-60 content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* CONTENT TEXT */}
          <div className="col-md-6 col-lg-6">
            <div className="content-txt ind-30">
              {/* Section ID */}	
              <span className="section-id animated" data-animation="fadeInUp" data-animation-delay={400}>
                Digital Solutions
              </span>
              {/* Title */}	
              <h3 className="h3-xl txt-600 animated" data-animation="fadeInUp" data-animation-delay={400}>
                We are making design better for everyone 
              </h3>
              {/* Text */}
              <p className="p-lg grey-color animated" data-animation="fadeInUp" data-animation-delay={500}>
                Justo integer odio velna vitae auctor integer congue magna at pretium purus ligula rutrum luctus
              </p> 
              {/* Text */}
              <p className="animated" data-animation="fadeInUp" data-animation-delay={600}>
                An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae
                auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus ligula
                congue vitae auctor eros erat magna morbi pretium neque
              </p> 
              {/* Technologies Icons */}
              <div className="technologies animated" data-animation="fadeInUp" data-animation-delay={800}>
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
          <div className="col-md-6 col-lg-5 offset-lg-1 animated" data-animation="fadeInLeft" data-animation-delay={500}>
            <div className="content-img">
              <img className="img-fluid" src="images/image-02.png" alt="content-image" />
            </div>
          </div>
        </div>	   {/* End row */}		
      </div>	   {/* End container */}
    </section>	{/* END CONTENT-1 */}
    {/* SERVICES-1
			============================================= */}
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
              <div className="col-md-6 animated" data-animation="fadeInUp" data-animation-delay={300}>
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
              <div className="col-md-6 animated" data-animation="fadeInUp" data-animation-delay={400}>
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
              <div className="col-md-6 animated" data-animation="fadeInUp" data-animation-delay={500}>
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
              <div className="col-md-6 animated" data-animation="fadeInUp" data-animation-delay={600}>
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
    {/* ABOUT-2
			============================================= */}
    <section id="about-2" className="bg-scroll bg-dark wide-60 about-section division">
      <div className="container white-color">
        <div className="row d-flex align-items-center">
          {/* ABOUT TEXT */}
          <div className="col-md-6">
            <div className="about-txt ind-30">
              {/* Section ID */}	
              <span className="section-id animated" data-animation="fadeInUp" data-animation-delay={400}>
                Our Skills
              </span>
              {/* Title */}	
              <h3 className="h3-sm txt-600 animated" data-animation="fadeInUp" data-animation-delay={400}>
                We're the stand out experts in business 
              </h3>
              {/* Text */}
              <p className="animated" data-animation="fadeInUp" data-animation-delay={500}>
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
                <div className="barWrapper animated" data-animation="fadeInUp" data-animation-delay={400}>	
                  <p>Coding Knowledge</p>
                  <span className="skill-percent">97%</span> 
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={97} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="barWrapper animated" data-animation="fadeInUp" data-animation-delay={600}>	
                  <p>Digital Marketing</p>
                  <span className="skill-percent">92%</span> 
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="barWrapper animated" data-animation="fadeInUp" data-animation-delay={800}>	
                  <p>Front End Development</p>
                  <span className="skill-percent">85%</span> 
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="barWrapper animated" data-animation="fadeInUp" data-animation-delay={1000}>	
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
    {/* TEAM-1
			============================================= */}
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
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={300}>
            <div className="team-member white-color">								
              {/* Team Member Photo */}
              <img className="img-fluid" src="images/team-1.jpg" alt="team-member-foto" />
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
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={400}>
            <div className="team-member white-color">	
              {/* Team Member Photo */}
              <img className="img-fluid" src="images/team-2.jpg" alt="team-member-foto" />
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
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={500}>
            <div className="team-member white-color">	
              {/* Team Member Photo */}
              <img className="img-fluid" src="images/team-3.jpg" alt="team-member-foto" />
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
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={600}>
            <div className="team-member white-color">	
              {/* Team Member Photo */}
              <img className="img-fluid" src="images/team-4.jpg" alt="team-member-foto" />
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
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={700}>
            <div className="team-member white-color">	
              {/* Team Member Photo */}
              <img className="img-fluid" src="images/team-5.jpg" alt="team-member-foto" />
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
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={800}>
            <div className="team-member">	
              {/* Team Member Photo */}						
              <img className="img-fluid" src="images/team-6.jpg" alt="team-member-foto" />										
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
    {/* BRANDS-2
			============================================= */}
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
          <div className="col-sm-4 col-md-3 brand-logo animated" data-animation="fadeInUp" data-animation-delay={300}>
            <img className="img-fluid" src="images/brand-1.png" alt="brand-logo" />
          </div>
          {/* BRAND LOGO IMAGE */}
          <div className="col-sm-4 col-md-3 brand-logo animated" data-animation="fadeInUp" data-animation-delay={400}>
            <img className="img-fluid" src="images/brand-2.png" alt="brand-logo" />
          </div>
          {/* BRAND LOGO IMAGE */}
          <div className="col-sm-4 col-md-3 brand-logo animated" data-animation="fadeInUp" data-animation-delay={500}>
            <img className="img-fluid" src="images/brand-3.png" alt="brand-logo" />
          </div>
          {/* BRAND LOGO IMAGE */}
          <div className="col-sm-4 col-md-3 brand-logo animated" data-animation="fadeInUp" data-animation-delay={600}>
            <img className="img-fluid" src="images/brand-4.png" alt="brand-logo" />
          </div>
          {/* BRAND LOGO IMAGE */}
          <div className="col-sm-4 col-md-3 brand-logo animated" data-animation="fadeInUp" data-animation-delay={700}>
            <img className="img-fluid" src="images/brand-5.png" alt="brand-logo" />
          </div>
          {/* BRAND LOGO IMAGE */}
          <div className="col-sm-4 col-md-3 brand-logo animated" data-animation="fadeInUp" data-animation-delay={800}>
            <img className="img-fluid" src="images/brand-6.png" alt="brand-logo" />
          </div>
          {/* BRAND LOGO IMAGE */}
          <div className="col-sm-4 col-md-3 brand-logo animated" data-animation="fadeInUp" data-animation-delay={900}>
            <img className="img-fluid" src="images/brand-7.png" alt="brand-logo" />
          </div>
          {/* BRAND LOGO IMAGE */}
          <div className="col-sm-4 col-md-3 brand-logo animated" data-animation="fadeInUp" data-animation-delay={1000}>
            <img className="img-fluid" src="images/brand-8.png" alt="brand-logo" />
          </div>
        </div>	{/* END BRANDS IMAGES */}
      </div>	 {/* End container */}
    </div>	  {/* END BRANDS-2 */}
    {/* FOOTER-3
			============================================= */}
    <footer id="footer-3" className="footer division">
      <div className="container">
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
                <li><a href="#">How It Works?</a></li>																	
                <li><a href="#">Community</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Site Map</a></li>							
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
                <li><a href="#">About Us</a></li>		
                <li><a href="#">Core Services</a></li>
                <li><a href="#">Pricing Plans</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
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
              <p className="m-bottom-0">© 2018 <span>Pergo.</span> All Rights Reserved</p>
            </div>
          </div>
        </div>	{/* END FOOTER COPYRIGHT */}
      </div>	   {/* End container */}										
    </footer>	{/* END FOOTER-3 */}	
  </div>	{/* END PAGE CONTENT */}
  {/* EXTERNAL SCRIPTS
		============================================= */}	
  {/* Custom Script */}		
  {/* HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. */}
  {/* [if lt IE 9]>
			
			
		<![endif] */}
  {/* Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. */}															
  {/*
		
		*/}
</div>


)


export default About