import React from "react"
import { Link } from "gatsby"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import Footer from "../components/footer"

import image550x750 from "../images/image-11-550x750.jpg"
import image800x600 from "../images/image-20-800x600.jpg"
import image800x800 from "../images/image-21-800x800.jpg"
import image700x700 from "../images/portfolio/construct-700x700.jpg"
import image300x200 from "../images/brand-300x200.jpg"
import image120x120 from "../images/review-author-120x120.jpg"

import headerImage from "../images/DocStar-Images/Homepage-header@2x.jpg"
import whyChooseImage from "../images/DocStar-Images/Why-Choose-image@2x.jpg"
import OMImage from "../images/DocStar-Images/O&M-image@2x.jpg"
import CADImage from "../images/DocStar-Images/CAD-image@2x.jpg"
import BIMImage from "../images/DocStar-Images/BIM-image@2x.jpg"


const Home = () => (
  <div>

    <HeaderScripts />

    {/* PAGE CONTENT ============================================= */}
    <div id="page" className="page">

      <HeaderMenu />

      {/* HERO-23
			============================================= */}
      <section id="hero-23" className="bg-scroll hero-section division">
        <div className="container">
          <div className="row">
            {/* HERO TEXT */}
            <div className="col-lg-12">
              <div className="hero-txt white-color text-center">
                {/* Title */}
                <h2>PROFESSIONAL.<br />EFFICIENT.<br />ECONOMICAL.</h2>
                {/* Text */}
                <p className="p-hero">We're here to help make building documentation simpler - and leave you time to focus on getting the job done.</p>
                {/* Button */}
                <div className="hero-btns">
                  <a href="/services/" className="btn btn-lg btn-yellow tra-hover btn-arrow">
                    <span>Find Out More <i className="fas fa-angle-double-right" /></span>
                  </a>
                </div>
              </div>
            </div>	{/*END  HERO TEXT */}
          </div>	 {/* End row */}
        </div>	 {/* End container */}
      </section>	{/* END HERO-23 */}
      {/* CONTENT-1
			============================================= */}
      <section id="content-1" className="wide-60 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* CONTENT TEXT */}
            <div className="col-md-6 col-lg-6">
              <div className="content-txt">
                {/* Section ID */}
                <span className="section-id">Why Choose Docstar</span>
                {/* Title */}
                <h3 className="h3-sm">We specialize in building documentation</h3>
                {/* Text */}
                <p className="p-lg grey-color">Our purpose is to assist contractors in construction</p>
                {/* Text */}
                <p>We understand that the end of a project can be hectic – we’ve been there and experienced it ourselves. So, we’re here to make the documentation part simpler. And leave you to focus on the building part.</p>
                {/* List */}
                {/* <ul className="content-list m-bottom-20">
                  <li>
                    Feugiat primis ultrice ligula risus auctor rhoncus purus ipsum primis  in cubilia augue vitae
                    laoreet augue in cubilia
              </li>
                  <li>
                    An augue in cubilia laoreet magna suscipit egestas magna ipsum vitae purus ipsum primis in cubilia
                    laoreet augue ultrice ligula egestas
              </li>
                </ul> */}
              </div>
            </div>	  {/* END CONTENT TEXT */}
            {/* CONTENT IMAGE */}
            <div className="col-md-6 col-lg-5 offset-lg-1">
              <div className="content-img">
                <img className="img-fluid" src= {whyChooseImage} alt="content-image" />
              </div>
            </div>
          </div>	   {/* End row */}
        </div>	   {/* End container */}
      </section>	{/* END CONTENT-1 */}
      {/* ABOUT-4
			============================================= */}
      <section id="about-4" className="bg-lightgrey wide-100 about-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              <h2 className="h2-xs">Docstar Services</h2>
              {/* Text */}
              <p>We can offer the following</p>
            </div>
          </div>	 {/* END SECTION TITLE */}
          {/* ABOUT BOX #1 */}
          <div className="row d-flex align-items-center bg-white">
            {/* Image */}
            <div className="col-md-6 a4-img">
              <div className="about-img">
                <img src={OMImage} className="img-fluid" alt="content-image" />
              </div>
            </div>
            {/* Text */}
            <div className="col-md-6">
              <div id="a4-1" className="abox-4">
                {/* Title */}
                <h5 className="h5-lg">Digital Operating & Maintenance (O&M)</h5>
                {/* Text */}
                <p>Docster provides a professional, functional and accurate O&M manual service, creating building documentation you will be proud to hand over to your client</p>
                {/* Button */}
                <a href="pricing.html" className="btn btn-yellow btn-arrow">
                  <span>Read More <i className="fas fa-angle-double-right" /></span>
                </a>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            {/* ABOUT BOX #2 */}
            <div className="col-lg-6 bg-yellow">
              <div className="row d-flex align-items-center">
                {/* Image */}
                <div className="col-md-6 a4-img">
                  <div className="about-img">
                    <img className="img-fluid" src={CADImage} alt="content-image" />
                  </div>
                </div>
                {/* Text */}
                <div className="col-md-6">
                  <div id="a4-2" className="abox-4">
                    <h5 className="h5-lg">CAD As Built</h5>
                    <p>Drawing modifications to satisfy project handover requirements</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ABOUT BOX #3 */}
            <div className="col-lg-6 bg-dark white-color">
              <div className="row d-flex align-items-center">
                {/* Image */}
                <div className="col-md-6 a4-img">
                  <div className="about-img">
                    <img className="img-fluid" src={BIMImage} alt="content-image" />
                  </div>
                </div>
                {/* Text */}
                <div className="col-md-6">
                  <div id="a4-3" className="abox-4">
                    <h5 className="h5-lg">BIM</h5>
                    <p>Modelling and coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>	   {/* End container */}
      </section>	{/* END ABOUT-4 */}
      {/* PORTFOLIO-1
			============================================= */}
      <section id="portfolio-1" className="wide-80 portfolio-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              <h2 className="h2-xs">Our Project Portfolio</h2>
              {/* Text */}
              <p>Take a look at some of our previous work below</p>
            </div>
          </div>	 {/* END SECTION TITLE */}
          {/* PORTFOLIO FILTERING BUTTONS */}
          {/* <div className="row">
            <div className="col-md-12 text-center">
              <div className="portfolio-filter yellow-btngroup">
                <div className="btn-toolbar">
                  <button data-filter="*" className="is-checked">All</button>
                  <button data-filter=".architecture">Architecture</button>
                  <button data-filter=".construction">Construction</button>
                  <button data-filter=".interior">Interior Design</button>
                </div>
              </div>
            </div>
          </div> */}
          {/* PORTFOLIO IMAGES HOLDER */}
          <div className="row">
            <div className="col-md-12 portfolio-items-list ind-5">
              <div className="masonry-wrap grid-loaded">
                {/* IMAGE #1 */}
                <div className="portfolio-item architecture">
                  <div className="hover-overlay">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={image700x700} alt="project-image" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Architecture</span>
                        {/* Project Titlek */}
                        <h5 className="h5-sm">Project Preview</h5>
                      </div>
                    </Link>
                  </div>
                </div>	{/* END IMAGE #1 */}
                {/* IMAGE #2 */}
                <div className="portfolio-item construction">
                  <div className="hover-overlay">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={image700x700} alt="project-image" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Construction</span>
                        {/* Project Titlek */}
                        <h5 className="h5-sm">Project Preview</h5>
                      </div>
                    </Link>
                  </div>
                </div>	{/* END IMAGE #2 */}
                {/* IMAGE #3 */}
                <div className="portfolio-item interior">
                  <div className="hover-overlay">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={image700x700} alt="project-image" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Interior Design</span>
                        {/* Project Titlek */}
                        <h5 className="h5-sm">Project Preview</h5>
                      </div>
                    </Link>
                  </div>
                </div>	{/* END IMAGE #3 */}
              </div>
            </div>
          </div>	 {/* END PORTFOLIO IMAGES HOLDER */}
        </div>	    {/* End container */}
      </section>	{/* END PORTFOLIO-1 */}
      {/* STATISTIC-1
			============================================= */}
      {/* <div id="statistic-1" className="bg-scroll bg-yellow statistic-section division">
        <div className="container">
          <div className="row"> */}
            {/* STATISTIC BLOCK #1 */}
            {/* <div className="col-md-3">
              <div className="statistic-block text-center">
                <div className="statistic-number txt-700">409</div>
                <h5 className="h5-sm">Finished Projectss</h5>
                <p className="p-sm">Viverra sem magna egestas</p>
              </div>
            </div> */}
            {/* STATISTIC BLOCK #2 */}
            {/* <div className="col-md-3">
              <div className="statistic-block text-center">
                <div className="statistic-number txt-700">1639</div>
                <h5 className="h5-sm">Happy Clients</h5>
                <p className="p-sm">Donec enim ipsum porta justo</p>
              </div>
            </div> */}
            {/* STATISTIC BLOCK #3 */}
            {/* <div className="col-md-3">
              <div className="statistic-block text-center">
                <div className="statistic-number txt-700">869</div>
                <h5 className="h5-sm">Followers</h5>
                <p className="p-sm">Velna iaculis odio auctor</p>
              </div>
            </div> */}
            {/* STATISTIC BLOCK #4 */}
            {/* <div className="col-md-3">
              <div className="statistic-block text-center">
                <div className="statistic-number txt-700">901</div>
                <h5 className="h5-sm">Cups of Coffee</h5>
                <p className="p-sm">Integer congue impedit magna</p>
              </div>
            </div> */}
          {/* </div>	End row */}
        {/* </div>	 End container */}
      {/* </div>	END STATISTIC-1 */}
      {/* BRANDS-2
			============================================= */}
      {/* <div id="brands-2" className="bg-scroll wide-70 brands-section division">
        <div className="container"> */}
          {/* BRANDS TITLE */}
          {/* <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="brands-title"> */}
                {/* Title */}
                {/* <h3 className="h3-sm">Trusted by thousands of companies</h3> */}
                {/* Text */}
                {/* <p className="p-md grey-color">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                  libero tempus, tempor posuere ligula varius augue luctus donec volutpat sapien
            </p>
              </div>
            </div>
          </div> */}
          {/* BRANDS IMAGES */}
          {/* <div className="row"> */}
            {/* BRAND LOGO IMAGE */}
            {/* <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div> */}
            {/* BRAND LOGO IMAGE */}
            {/* <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div> */}
            {/* BRAND LOGO IMAGE */}
            {/* <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div> */}
            {/* BRAND LOGO IMAGE */}
            {/* <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div> */}
            {/* BRAND LOGO IMAGE */}
            {/* <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div> */}
            {/* BRAND LOGO IMAGE */}
            {/* <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div> */}
            {/* BRAND LOGO IMAGE */}
            {/* <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div> */}
            {/* BRAND LOGO IMAGE */}
            {/* <div className="col-sm-4 col-md-3 brand-logo">
              <img className="img-fluid" src={image300x200} alt="brand-logo" />
            </div> */}
          {/* </div>	END BRANDS IMAGES */}
        {/* </div>	 End container */}
      {/* </div>	  END BRANDS-2 */}
      {/* TESTIMONIALS-1
			============================================= */}
      <section id="reviews-1" className="wide-100 bg-lightgrey reviews-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              <h2 className="h2-xs">Client Reviews</h2>
              {/* Text */}
              <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus,
                tempor posuere ligula varius impedit enim tempor sapien
          </p>
            </div>
          </div>	 {/* END SECTION TITLE */}
          {/* TESTIMONIALS CAROUSEL */}
          <div className="reviews-carousel">
            <div className="center slider">
              {/* TESTIMONIAL #1 */}
              <div className="review-1">
                {/* Testimonial Text */}
                <div className="review-txt">
                  <p>Etiam sapien sem at sagittis congue augue massa varius egestas magna suscipit magna tempus aliquet
                    porta rutrum sodales auctor integer risus auctor rutrum
              </p>
                </div>
                {/* Testimonial Author Avatar */}
                <div className="testimonial-avatar text-center">
                  <img src={image120x120} alt="review-author-avatar" />
                  <p className="testimonial-autor">pebz13</p>
                  <span>Programmer</span>
                </div>
              </div>	{/* END TESTIMONIAL #1 */}
              {/* TESTIMONIAL #2 */}
              <div className="review-1">
                {/* Testimonial Text */}
                <div className="review-txt">
                  <p>At sagittis congue augue egestas egestas magna ipsum vitae purus ipsum primis in cubilia laoreet
                    augue egestas luctus donec diam ociis ultrice ligula magna suscipit lectus gestas augue in cubilia
                    laoreet
              </p>
                </div>
                {/* Testimonial Author Avatar */}
                <div className="testimonial-avatar clearfix">
                  <img src={image120x120} alt="review-author-avatar" />
                  <p className="testimonial-autor">Evelyn Martinez</p>
                  <span>Housewife</span>
                </div>
              </div>	{/* END TESTIMONIAL #2 */}
              {/* TESTIMONIAL #3 */}
              <div className="review-1">
                {/* Testimonial Text */}
                <div className="review-txt">
                  <p>Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue augue egestas et ultrice
                    ligula egestas magna suscipit lectus gestas magna suscipit luctus undo
              </p>
                </div>
                {/* Testimonial Author Avatar */}
                <div className="testimonial-avatar clearfix">
                  <img src={image120x120} alt="review-author-avatar" />
                  <p className="testimonial-autor">Robert Peterson</p>
                  <span>SEO Manager</span>
                </div>
              </div>	{/* END TESTIMONIAL #3 */}
            </div>
          </div>	{/* TESTIMONIALS CAROUSEL */}
        </div>	   {/* End container */}
      </section>	{/* END TESTIMONIALS-1 */}
      
      <Footer />

    </div>	{/* END PAGE CONTENT */}
  </div>
)
export default Home