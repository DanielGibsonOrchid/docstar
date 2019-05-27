import React from "react"
import { Link } from "gatsby"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import FooterDark from "../components/footer-dark"

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
            <div className="col-md-6 col-lg-4">
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
            <div className="col-md-6 col-lg-4">
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
            <div className="col-md-6 col-lg-4">
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
            <div className="col-md-6 col-lg-4">
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
            <div className="col-md-6 col-lg-4">
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
            <div className="col-md-6 col-lg-4">
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
                <span className="section-id">
                  Digital Solutions
                </span>
                {/* Title */}	
                <h3 className="h3-xl txt-600">
                  We use design and innovations 
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
                <img className="img-fluid" src={image550x750} alt="content-image" />
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
              <h3 className="h3-xl txt-600">
                Our success is measured by result 
              </h3>
              {/* Text  */}	
              <p className="p-lg">
                Donec enim ipsum porta justo integer at velna vitae auctor integer congue magna at risus auctor
                purus unt pretium ligula rutrum sapien ultrice eros dolor
              </p>
              {/* VIDEO PREVIEW */}	
              <div className="video-preview">
                {/* Change the link HERE!!! */}						
                <a className="video-popup2" href="https://www.youtube.com/watch?v=7e90gBu4pas"> 
                  {/* Play Icon */}									
                  <div className="video-btn-sm">	
                    <div className="video-block-wrapper">
                      <div className="play-icon-rose"><div className="ico-bkg" />
                        <i className="fas fa-play-circle" />
                      </div>
                    </div>
                  </div>
                  {/* Preview Image */}
                  <img className="img-fluid" src={video1000x565} alt="video-preview" />
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
            <div className="col-md-3">							
              <div className="statistic-block text-center">							
                <div className="statistic-number white-color txt-700">1154</div>
                <h5 className="h5-sm white-color">Happy Clients</h5>							
                <p className="p-sm lightgrey-color">Viverra sem magna egestas</p>
              </div>								
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div className="col-md-3">									
              <div className="statistic-block text-center">								
                <div className="statistic-number white-color txt-700">409</div>
                <h5 className="h5-sm white-color">Tickets Closed</h5>	
                <p className="p-sm lightgrey-color">Donec enim ipsum porta justo</p>
              </div>							
            </div>
            {/* STATISTIC BLOCK #3 */}
            <div className="col-md-3">							
              <div className="statistic-block text-center">								
                <div className="statistic-number white-color txt-700">869</div>
                <h5 className="h5-sm white-color">Followers</h5>	
                <p className="p-sm lightgrey-color">Velna iaculis odio auctor</p>
              </div>						
            </div>
            {/* STATISTIC BLOCK #4 */}
            <div className="col-md-3">							
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
                    <img src={image120x120} alt="testimonial-avatar" />
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
                    <img src={image120x120} alt="testimonial-avatar" />
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
                    <img src={image120x120} alt="testimonial-avatar" />
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
                    <img src={image120x120} alt="testimonial-avatar" />
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
                    <img src={image120x120} alt="testimonial-avatar" />
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

      <FooterDark />

    </div>	{/* END PAGE CONTENT */}

  </div>

)

export default Services