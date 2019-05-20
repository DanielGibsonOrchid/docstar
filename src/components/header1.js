import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header1 = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>



    {/*<!DOCTYPE html>*/}
{/*<!-- Pergo - A Multipurpose Landing Pages Pack for Startups, Creatives and Freelancers design by DSAThemes (http://www.dsathemes.com) -->*/}
{/*<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->*/}
{/*<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->*/}
{/*<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->*/}
{/*<!--[if (gte IE 9)|!(IE)]><!-->*/}
{/*<html lang="en">*/}



		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="author" content="DSAThemes"/>	
		<meta name="description" content="Pergo - A Multipurpose Landing Pages Pack for Startups, Creatives and Freelancers"/>
		<meta name="keywords" content="Responsive, HTML5 template, DSAThemes, One Page, Landing, Startup, Business, Company, Corporate, Creative, Freelancers" />	
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				
  		{/*<!-- SITE TITLE -->*/}
		<title>Pergo - A Multipurpose Landing Pages Pack for Startups, Creatives and Freelancers</title>
							
		{/*<!-- FAVICON AND TOUCH ICONS  -->*/}
		<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
		<link rel="icon" href="images/favicon.ico" type="image/x-icon" />
		<link rel="apple-touch-icon" sizes="152x152" href="images/apple-touch-icon-152x152.png" />
		<link rel="apple-touch-icon" sizes="120x120" href="images/apple-touch-icon-120x120.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="images/apple-touch-icon-76x76.png" />
		<link rel="apple-touch-icon" href="images/apple-touch-icon.png" />

		{/*<!-- GOOGLE FONTS -->*/}
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" /> 		
		<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900" rel="stylesheet" /> 

		{/*<!-- BOOTSTRAP CSS -->*/}
		<link href="css/bootstrap.min.css" rel="stylesheet" />
				
		{/*<!-- FONT ICONS -->*/}
		<link href="css/fa-svg-with-js.css" rel="stylesheet" />	
		<link href="css/flaticon.css" rel="stylesheet" />

		{/*<!-- PLUGINS STYLESHEET -->*/}
		<link href="css/magnific-popup.css" rel="stylesheet" />
		<link href="css/flexslider.css" rel="stylesheet" />
		<link href="css/slick.css" rel="stylesheet" />
		<link href="css/slick-theme.css" rel="stylesheet" />

		{/*<!-- On Scroll Animations -->*/}
		<link href="css/animate.css" rel="stylesheet" />
				
		{/*<!-- TEMPLATE CSS -->*/}
		<link href="css/style.css" rel="stylesheet" /> 	

		{/*<!-- RESPONSIVE CSS -->*/}
		<link href="css/responsive.css" rel="stylesheet" /> 


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header1
