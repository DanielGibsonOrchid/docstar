import React from "react"

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

const Services = () => (
<div>
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
              <li className="nav-item nl-simple"><a className="nav-link" href="about.html">About</a></li>
              <li className="nav-item nl-simple"><a className="nav-link" href="demo-1.html#portfolio-2">Our Projects</a></li>
              <li className="nav-item nl-simple"><a className="nav-link" href="pricing.html">Pricing &amp; Packages</a></li>
              {/* Dropdown Link */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#about.html">About</a>
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
              <p className="p-hero">Semper lacus cursus porta, feugiat primis ultrice ligula risus auctor rhoncus purus
                ipsum primis in cubilia vitae laoreet augue
              </p>
            </div>
          </div>	{/* END HERO TEXT */}
        </div>	  {/* End row */}
      </div>	   {/* End container */} 	
    </section>	{/* END SERVICES PAGE HERO */}	
    {/* SERVICES-3
			============================================= */}
    <section id="services-3" className="wide-50 services-section division">
      <div className="container">
        <div className="row">
          {/* SERVICE BOX #1 */}
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={400}>
            <div className="sbox-3 box-icon grey-icon">
              {/* Icon */}
              <span className="flaticon-idea" />
              {/* Text */}
              <div className="sbox-3-txt">
                <h5 className="h5-md">Concept &amp; Idea</h5>
                <p className="grey-color">Semper lacus cursus porta, feugiat primis in ultrice ligula risus tempus
                  auctor cubilia congue ipsum ipsum mauris lectus laoreet
                </p>
              </div>	
            </div>							
          </div>
          {/* SERVICE BOX #2 */}
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={500}>
            <div className="sbox-3 box-icon grey-icon">
              {/* Icon */}
              <span className="flaticon-share-2" />
              {/* Text */}
              <div className="sbox-3-txt">
                <h5 className="h5-md">Keyword Research</h5>
                <p className="grey-color">Semper lacus cursus porta, feugiat primis in ultrice ligula risus tempus
                  auctor cubilia congue ipsum ipsum mauris lectus laoreet
                </p>
              </div>	
            </div>							
          </div>
          {/* SERVICE BOX #3 */}
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={600}>
            <div className="sbox-3 box-icon grey-icon">
              {/* Icon */}
              <span className="flaticon-fingerprint" />
              {/* Text */}
              <div className="sbox-3-txt">
                <h5 className="h5-md">User Experience</h5>
                <p className="grey-color">Semper lacus cursus porta, feugiat primis in ultrice ligula risus tempus
                  auctor cubilia congue ipsum ipsum mauris lectus laoreet
                </p>
              </div>	
            </div>							
          </div>
          {/* SERVICE BOX #4 */}
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={700}>
            <div className="sbox-3 box-icon grey-icon">
              {/* Icon */}
              <span className="flaticon-settings-2" />
              {/* Text */}
              <div className="sbox-3-txt">
                <h5 className="h5-md">Web Development</h5>
                <p className="grey-color">Semper lacus cursus porta, feugiat primis in ultrice ligula risus tempus
                  auctor cubilia congue ipsum ipsum mauris lectus laoreet
                </p>
              </div>	
            </div>							
          </div>
          {/* SERVICE BOX #5 */}
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={800}>
            <div className="sbox-3 box-icon grey-icon">
              {/* Icon */}
              <span className="flaticon-price-tag" />
              {/* Text */}
              <div className="sbox-3-txt">
                <h5 className="h5-md">Brand Identity</h5>
                <p className="grey-color">Semper lacus cursus porta, feugiat primis in ultrice ligula risus tempus
                  auctor cubilia congue ipsum ipsum mauris lectus laoreet
                </p>
              </div>	
            </div>							
          </div>
          {/* SERVICE BOX #6 */}
          <div className="col-md-6 col-lg-4 animated" data-animation="fadeInUp" data-animation-delay={900}>
            <div className="sbox-3 box-icon grey-icon">
              {/* Icon */}
              <span className="flaticon-worldwide" />
              {/* Text */}
              <div className="sbox-3-txt">
                <h5 className="h5-md">SEO &amp; SMM Services</h5>
                <p className="grey-color">Semper lacus cursus porta, feugiat primis in ultrice ligula risus tempus
                  auctor cubilia congue ipsum ipsum mauris lectus laoreet
                </p>
              </div>	
            </div>							
          </div>
        </div>	   {/* End row */}	
      </div>	   {/* End container */}		
    </section>	{/* END SERVICES-3 */}
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
                We use design and innovations 
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
    {/* VIDEO-3
			============================================= */}
    <section id="video-3" className="bg-scroll wide-100 video-section division">
      <div className="container">
        <div className="row">
          {/* VIDEO TEXT */}	
          <div className="col-md-10 col-lg-10 offset-md-1 offset-lg-1 text-center">
            {/* Title */}	
            <h3 className="h3-xl txt-600 animated" data-animation="fadeInUp" data-animation-delay={300}>
              Our success is measured by result 
            </h3>
            {/* Text  */}	
            <p className="p-lg animated" data-animation="fadeInUp" data-animation-delay={400}>
              Donec enim ipsum porta justo integer at velna vitae auctor integer congue magna at risus auctor
              purus unt pretium ligula rutrum sapien ultrice eros dolor
            </p>
            {/* VIDEO PREVIEW */}	
            <div className="video-preview animated" data-animation="fadeInUp" data-animation-delay={500}>
              {/* Change the link HERE!!! */}						
              <a className="video-popup2" href="https://www.youtube.com/watch?v=7e90gBu4pas"> 
                {/* Play Icon */}									
                <div className="video-btn-sm animated" data-animation="fadeInUp" data-animation-delay={700}>	
                  <div className="video-block-wrapper">
                    <div className="play-icon-rose"><div className="ico-bkg" />
                      <i className="fas fa-play-circle" />
                    </div>
                  </div>
                </div>
                {/* Preview Image */}
                <img className="img-fluid" src="images/video-3-img.png" alt="video-preview" />
              </a>
            </div>
          </div>	{/* END VIDEO TEXT */}	
        </div>	   {/* End row */}		
      </div>	   {/* End container */}		
    </section>	{/* END VIDEO-3 */}
    {/* STATISTIC-2
			============================================= */}
    <div id="statistic-2" className="bg-scroll bg-image wide-70 statistic-section division">
      <div className="container">
        {/* STATISTIC TITLE */}
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="statistic-title white-color">
              {/* Title */}
              <h3 className="h3-xl txt-600">Our success is measured by result</h3>
              {/* Text */}
              <p className="p-md grey-color">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                libero tempus, tempor posuere ligula varius augue luctus donec volutpat sapien
              </p>
            </div>	
          </div>
        </div>
        {/* STATISTIC DATA */}
        <div className="row">
          {/* STATISTIC BLOCK #1 */}
          <div className="col-md-3 animated" data-animation="fadeInUp" data-animation-delay={300}>							
            <div className="statistic-block text-center">							
              <div className="statistic-number white-color txt-700">1154</div>
              <h5 className="h5-sm white-color">Happy Clients</h5>							
              <p className="p-sm lightgrey-color">Viverra sem magna egestas</p>
            </div>								
          </div>
          {/* STATISTIC BLOCK #2 */}
          <div className="col-md-3 animated" data-animation="fadeInUp" data-animation-delay={400}>									
            <div className="statistic-block text-center">								
              <div className="statistic-number white-color txt-700">409</div>
              <h5 className="h5-sm white-color">Tickets Closed</h5>	
              <p className="p-sm lightgrey-color">Donec enim ipsum porta justo</p>
            </div>							
          </div>
          {/* STATISTIC BLOCK #3 */}
          <div className="col-md-3 animated" data-animation="fadeInUp" data-animation-delay={500}>							
            <div className="statistic-block text-center">								
              <div className="statistic-number white-color txt-700">869</div>
              <h5 className="h5-sm white-color">Followers</h5>	
              <p className="p-sm lightgrey-color">Velna iaculis odio auctor</p>
            </div>						
          </div>
          {/* STATISTIC BLOCK #4 */}
          <div className="col-md-3 animated" data-animation="fadeInUp" data-animation-delay={600}>							
            <div className="statistic-block text-center">					
              <div className="statistic-number white-color txt-700">901</div>	
              <h5 className="h5-sm white-color">Cups of Coffee</h5>
              <p className="p-sm lightgrey-color">Integer congue impedit magna</p>
            </div>						
          </div>
        </div>	{/* END STATISTIC DATA */}
      </div>	 {/* End container */}		
    </div>	{/* END STATISTIC-2 */}
    {/* BRANDS-2
			============================================= */}
    <div id="brands-2" className="bg-scroll wide-70 brands-section division">
      <div className="container">
        {/* BRANDS TITLE */}
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="brands-title">
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
    {/* TESTIMONIALS-2
			============================================= */}
    <div id="reviews-2" className="bg-scroll bg-image wide-100 reviews-section division">
      <div className="container white-color">
        <div className="row">
          <div className="col-lg-12 testimonials text-center">	
            {/* TRANSPARENT QUOTE ICON */}
            <div className="quote-icon" />
            {/* TESTIMONIALS CONTENT */}
            <div className="flexslider purple-nav">											
              <ul className="slides">
                {/* TESTIMONIAL #1 */}
                <li className="review-2">
                  {/* Testimonial Text */}
                  <div className="review-txt">
                    <p>" Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor
                      egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque "
                    </p>
                  </div>	
                  {/* Testimonial Author Avatar */}
                  <img src="images/review-author-1.jpg" alt="testimonial-avatar" />
                  {/* Testimonial Author */}
                  <div className="review-author">
                    <p className="testimonial-autor">pebz13</p>	
                    <span className="rose-color">Programmer</span>									
                  </div>											
                </li>
                {/* TESTIMONIAL #2 */}
                <li className="review-2">
                  {/* Testimonial Text */}
                  <div className="review-txt">
                    <p>" At sagittis congue augue egestas egestas magna ipsum vitae purus ipsum primis in cubilia
                      laoreet augue egestas luctus donec diam ociis nullam tempor sapien, eget orci gravida porta " 
                    </p>
                  </div>	
                  {/* Testimonial Author Avatar */}
                  <img src="images/review-author-2.jpg" alt="testimonial-avatar" />
                  {/* Testimonial Author */}
                  <div className="review-author">
                    <p className="testimonial-autor">Evelyn Martinez</p>
                    <span className="rose-color">Housewife</span>										
                  </div>											
                </li>
                {/* TESTIMONIAL #3 */}
                <li className="review-2">
                  {/* Testimonial Text */}
                  <div className="review-txt">
                    <p>" Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue augue. An orci nullam
                      tempor sapien, eget orci gravida donec enim ipsum porta justo integer at odio velna auctor "
                    </p>
                  </div>
                  {/* Testimonial Author Avatar */}
                  <img src="images/review-author-3.jpg" alt="testimonial-avatar" />
                  {/* Testimonial Author */}
                  <div className="review-author">
                    <p className="testimonial-autor">Robert Peterson</p>
                    <span className="rose-color">SEO Manager</span>				
                  </div>												
                </li>
                {/* TESTIMONIAL #4 */}
                <li className="review-2">
                  {/* Testimonial Text */}
                  <div className="review-txt">
                    <p>" An orci nullam tempor sapien, eget orci gravida donec enim ipsum porta justo integer at
                      odio velna auctor. Egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue "
                    </p>
                  </div>
                  {/* Testimonial Author Avatar */}
                  <img src="images/review-author-4.jpg" alt="testimonial-avatar" />
                  {/* Testimonial Author */}
                  <div className="review-author">
                    <p className="testimonial-autor">Leslie Serpas</p>
                    <span className="rose-color">Internet Surfer</span>										
                  </div>												
                </li>
                {/* TESTIMONIAL #5 */}
                <li className="review-2">
                  {/* Testimonial Text */}
                  <div className="review-txt">
                    <p>" Egestas egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue
                      egestas luctus donec ociis vitae purus diam integer congue magna undo impedit lacus dolor " 
                    </p>
                  </div>	
                  {/* Testimonial Author Avatar */}
                  <img src="images/review-author-5.jpg" alt="testimonial-avatar" />
                  {/* Testimonial Author */}
                  <div className="review-author">
                    <p className="testimonial-autor">Marisol19</p>	
                    <span className="rose-color">Graphic Designer</span>									
                  </div>											
                </li>
              </ul>
            </div>
          </div>
        </div>	{/* End row */}
      </div>	   {/* End container */}
    </div>	{/* END TESTIMONIALS-2 */}
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

export default Services