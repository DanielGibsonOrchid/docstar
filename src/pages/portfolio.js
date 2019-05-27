import React from "react"
import { Link } from "gatsby"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import FooterDark from "../components/footer-dark"

import image700x700 from "../images/portfolio/construct-700x700.jpg"
import image550x740 from "../images/image-02.png"
import imageTeamPlus from "../images/team-6.jpg"

const Portfolio = () => (
  <div>

    <HeaderScripts />

    {/* PAGE CONTENT ============================================= */}
    <div id="page" className="page">

      <HeaderMenu />

      {/* TEAM PAGE HERO
			============================================= */}
      <section id="team-hero" className="bg-scroll page-hero-section division">
        <div className="container">
          <div className="row">
            {/* HERO TEXT */}
            <div className="col-md-10 offset-md-1">
              <div className="hero-txt text-center white-color">
                {/* Title */}
                <h2 className="h2-xl">Our Creative Team</h2>
                {/* Text */}
                <p className="p-hero">Semper lacus cursus porta, feugiat primis ultrice ligula risus auctor rhoncus purus
                  ipsum primis in cubilia vitae laoreet augue
            </p>
              </div>
            </div>	{/* END HERO TEXT */}
          </div>	  {/* End row */}
        </div>	   {/* End container */}
      </section>	{/* END TEAM PAGE HERO */}
      {/* TEAM-1
			============================================= */}
      <section id="team-1" className="wide-70 team-section division">
        <div className="container">
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
      {/* ABOUT-2
			============================================= */}
      <section id="about-2" className="bg-scroll bg-lightgrey wide-60 about-section division">
        <div className="container">
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
                  We're making design better for everyone
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
      {/* CONTENT-1
			============================================= */}
      <section id="content-1" className="wide-60 content-section division">
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
                <img className="img-fluid" src={image550x740} alt="content-image" />
              </div>
            </div>
          </div>	   {/* End row */}
        </div>	   {/* End container */}
      </section>	{/* END CONTENT-1 */}
      {/* CALL TO ACTION-3
			============================================= */}
      <section id="cta-3" className="bg-scroll wide-60 bg-image cta-section division">
        <div className="container white-color">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-md-7 col-lg-6">
              <div className="cta-txt m-bottom-40">
                {/* Title  */}
                <h2 className="h2-xs txt-500">
                  Start growing with <span>PERGO</span> today
            </h2>
                {/* Text */}
                <p className="p-lg">
                  Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus magna
            </p>
              </div>
            </div>	{/* END CALL TO ACTION TEXT */}
            {/* CALL TO ACTION BUTTON */}
            <div className="col-md-5 col-lg-6 text-right">
              <div className="cta-btn text-center m-bottom-40">
                {/* Text */}
                <p className="p-lg">Want to <span>Learn More?</span></p>
                {/* Button  */}
                <a href="pricing.html" className="btn btn-md btn-arrow tra-hover">
                  <span>Get Started Now <i className="fas fa-angle-double-right" /></span>
                </a>
              </div>
            </div>	{/* END CALL TO ACTION TEXT */}
          </div>	 {/* End row */}
        </div>	   {/* End container */}
      </section>	{/* END CALL TO ACTION-3 */}
      
      <FooterDark />

    </div> {/* END PAGE CONTENT */}

  </div>
)
    
export default Portfolio