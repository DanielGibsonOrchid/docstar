import React from "react"
import { Link } from "gatsby"

import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import Footer from "../components/footer"

import image700x700 from "../images/portfolio/construct-700x700.jpg"

import whyChooseImage from "../images/DocStar-Images/homepage-why-choose-laptop.jpg"
import OMImage from "../images/DocStar-Images/O&M-image@2x.jpg"
import CADImage from "../images/DocStar-Images/CAD-image@2x.jpg"
import BIMImage from "../images/DocStar-Images/BIM-image@2x.jpg"

import broadway from "../images/DocStar-Images/33-Broadway-700x900.jpg"
import armagh from "../images/DocStar-Images/Armagh-Apartments-700x700.jpg"
import fpBuilding from "../images/DocStar-Images/FP-Building-700x700.jpg"
import lesMills from "../images/DocStar-Images/Les-Mills-development-700x900.jpg"
import lifeApart from "../images/DocStar-Images/Life-apartments-700x700.jpg"
import longBay from "../images/DocStar-Images/Long-Bay-village-700x900.jpg"
import aoTawh from "../images/DocStar-Images/Ao-Tawhiti-700x700.jpg"
import building507 from "../images/DocStar-Images/Building-507-Park West-700x700.jpg"
import horizon from "../images/DocStar-Images/Horizon-Hotel-700x700.jpg"



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
                  {/* <a href="/services/" className="btn btn-lg btn-yellow tra-hover btn-arrow">
                    <span>Find Out More <i className="fas fa-angle-double-right" /></span>
                  </a> */}
                  <Link to="/about/" className="btn btn-lg btn-yellow tra-hover btn-arrow">
                    <span>Find Out More <i className="fas fa-angle-double-right" /></span>
                  </Link>
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
            <div className="col-md-6 col-lg-6 content-homepage-1">
              <div className="content-txt">
                {/* Section ID */}
                <span className="section-id">Why Choose Docstar</span>
                {/* Title */}
                <h3 className="h3-sm">We specialise in digital building documentation</h3>
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
                <h5 className="h5-lg">Digital Operating & Maintenance &#40;O&M&#41; manuals</h5>
                {/* Text */}
                <p>Docstar provides a professional, efficient and accurate O&M manual service, creating building documentation you will be proud to hand over to your client</p>
                {/* Button */}
                <Link to="/services/" className="btn btn-yellow btn-arrow">
                  <span>Read More <i className="fas fa-angle-double-right" /></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            {/* ABOUT BOX #2 */}
            <div className="col-lg-6 bg-docstarblue">
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
                    <h5 className="h5-lg white-text-content1">CAD As Built drawings</h5>
                    <p className="white-text-content2">Drawing modifications to reflect the As Built installation and satisfy project handover requirements</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ABOUT BOX #3 */}
            <div className="col-lg-6 bg-docstardarkblue white-color">
              <div className="row d-flex align-items-center">
                {/* Image */}
                <div className="col-md-6 a4-img">
                  <div className="about-img">
                    <img className="img-fluid" src={BIMImage} alt="content-image" />
                  </div>
                </div>
                {/* Text */}
                <div className="col-md-6">
                  <div id="a4-3" className="abox-4 home-BIM-box">
                    <h5 className="h5-lg">BIM</h5>
                    <p className="white-text-content2">Subcontractor modelling and coordination</p>
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
        <div className="container" onClick="void(0)">
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
              <div className="portfolio-item p1 interior">

                {/* Desktop view */}
                <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={horizon} alt="Horizon Hotel" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Horizon Hotel</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Electrical & Data O&M manual</h5>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={horizon} alt="Horizon Hotel" />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      {/* Project Meta */}
                      <span className="yellow-color">Horizon Hotel</span>
                      {/* Project Title */}
                      <h5 className="h5-sm">Electrical & Data O&M manual</h5>
                    </div>
                  </div>
                </div>	{/* END IMAGE #1 */}

                {/* IMAGE #2 */}
                <div className="portfolio-item p2 architecture">
                  
                  {/* Desktop view */}
                  <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={broadway} alt="33 Broadway" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">33 Broadway</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic & Mechanical<br /> O&M manual</h5>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={broadway} alt="33 Broadway" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">33 Broadway</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic & Mechanical<br /> O&M manual</h5>
                      </div>
                  </div>

                </div>	{/* END IMAGE #2 */}

                {/* IMAGE #3 */}
                <div className="portfolio-item p3 interior">

                  {/* Desktop view */}
                  <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={aoTawh} alt="Ao Tawhiti Unlimited Discovery" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Ao Tawhiti Unlimited Discovery</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic O&M manual</h5>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={aoTawh} alt="Ao Tawhiti Unlimited Discovery" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Ao Tawhiti Unlimited Discovery</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic O&M manual</h5>
                      </div>
                  </div>
                </div>	{/* END IMAGE #3 */}

                {/* IMAGE #4 */}
                <div className="portfolio-item p4 interior">

                  {/* Desktop view */}
                  <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={lesMills} alt="Les Mills development" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Les Mills development</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Mechanical O&M manual</h5>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={lesMills} alt="Les Mills development" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Les Mills development</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Mechanical O&M manual</h5>
                      </div>
                  </div>
                </div>	{/* END IMAGE #4 */}

                {/* IMAGE #5 */}
                <div className="portfolio-item p5 construction">
                
                  {/* Desktop view */}

                  <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={armagh} alt="Armagh Apartments" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Armagh Apartments</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic O&M</h5>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={armagh} alt="Armagh Apartments" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Armagh Apartments</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic O&M</h5>
                      </div>
                  </div>
                </div>	{/* END IMAGE #5 */}

                {/* IMAGE #6 */}
                <div className="portfolio-item p6 interior">

                  {/* Desktop view */}
                  <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={lifeApart} alt="Life Apartments" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Life Apartments</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic O&M</h5>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={lifeApart} alt="Life Apartments" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Life Apartments</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic O&M</h5>
                      </div>
                  </div>
                </div>	{/* END IMAGE #6 */}

                {/* IMAGE #7 */}
                <div className="portfolio-item p7 interior">

                  {/* Desktop view */}
                  <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={longBay} alt="Long Bay Village" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Long Bay Village</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic & Mechanical<br /> O&M manual</h5>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={longBay} alt="Long Bay Village" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Long Bay Village</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Hydraulic & Mechanical<br /> O&M manual</h5>
                      </div>
                  </div>
                </div>	{/* END IMAGE #7 */}

                {/* IMAGE #8 */}
                <div className="portfolio-item p8 interior">

                  {/* Desktop view */}
                  <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={building507} alt="Building 507 Park West" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Building 507 Park West</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Mechanical O&M</h5>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={building507} alt="Building 507 Park West" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">Building 507 Park West</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Mechanical O&M</h5>
                      </div>
                  </div>
                </div>	{/* END IMAGE #8 */}

                {/* IMAGE #9 */}
                <div className="portfolio-item p9 interior">

                  {/* Desktop view */}
                  <div className="hover-overlay link-desktop">
                    {/* Image Zoom */}
                    <Link to="/services/" className="image-link">
                      {/* Project Preview Image */}
                      <img className="img-fluid" src={fpBuilding} alt="F&P Healthcare" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">F&P Healthcare</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Electrical O&M</h5>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile & Tablet view */}
                  <div className="hover-overlay non-link-mobile">
                    {/* Image Zoom */}
                    {/* Project Preview Image */}
                    <img className="img-fluid" src={fpBuilding} alt="F&P Healthcare" />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        {/* Project Meta */}
                        <span className="yellow-color">F&P Healthcare</span>
                        {/* Project Title */}
                        <h5 className="h5-sm">Electrical O&M</h5>
                      </div>
                  </div>
                </div>	{/* END IMAGE #9 */}
              </div>
            </div>
          </div>	 {/* END PORTFOLIO IMAGES HOLDER */}
        </div>	    {/* End container */}
      </section>	{/* END PORTFOLIO-1 */}
      
      <Footer />

    </div>	{/* END PAGE CONTENT */}
  </div>
)
export default Home