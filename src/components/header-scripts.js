import { withPrefix } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
// import PropTypes from "prop-types"

import favicon from "../images/favicon.ico"
import shareLogo from "../images/DocStar-Images/DOCSTAR-share-logo.jpg"

const HeaderScripts = () => (
  <div>
    <Helmet>
      {/* <script src={withPrefix('bootstrap.min.js')} type="text/javascript" /> */}
      <script src={withPrefix('fontawesome-all.js')} type="text/javascript" />
      <script src={withPrefix('modernizr.custom.js')} type="text/javascript" />
      <script src={withPrefix('retina.js')} type="text/javascript" />
      <script src={withPrefix('imagesloaded.pkgd.min.js')} type="text/javascript" />
      <script src={withPrefix('isotope.pkgd.min.js')} type="text/javascript" />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="Docstar" />
      <meta name="description" content="Docstar - We're here to help make building documentation simpler - and leave you time to focus on getting the job done." />
      <meta name="keywords" content="Docstar, building documentation, construction, Digital operating & Maintenance (O&M), CAD as built, BIM" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Image sharing of website */}
      <meta property="og:title" content="Docstar" />
      <meta property="og:description" content="We're here to help make building documentation simpler - and leave you time to focus on getting the job done." />
      <meta property="og:image" content={shareLogo} />
      <meta property="og:url" content="http://docstar.co.nz/" />
      <meta name="twitter:card" content={shareLogo} />
      

      {/* SITE TITLE */}
      <title>Docstar</title>

      {/* FAVICON AND TOUCH ICONS */}
      {/* link={[
      { rel: "icon", type: "image/ico", sizes: "16x16", href: `${favicon16}` },
      { rel: "icon", type: "image/png", sizes: "76x76", href: `${favicon76}` },
      { rel: "shortcut icon", type: "image/ico", href: `${favicon16}` },
      { rel: "icon", type: "image/png", sizes: "120x120", href: `${favicon120}` },
      { rel: "icon", type: "image/png", sizes: "152x152", href: `${favicon152}` },
    ]} */}
      <link rel="shortcut icon" href={favicon} type="image/ico" />
      <link rel="icon" href={favicon} type="image/ico" />
      {/* <link rel="apple-touch-icon" sizes="152x152" href="images/apple-touch-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="images/apple-touch-icon-120x120.png" />    
    <link rel="apple-touch-icon" sizes="76x76" href="images/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png" /> */}

      {/* GOOGLE FONTS */}
      {/* <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" /> 		 */}
      {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900" rel="stylesheet" />  */}

      {/* BOOTSTRAP CSS */}
      {/* <link href="css/bootstrap.min.css" rel="stylesheet" /> */}

      {/* FONT ICONS */}
      {/* <link href="css/fa-svg-with-js.css" rel="stylesheet" />	
    <link href="css/flaticon.css" rel="stylesheet" /> */}

      {/* PLUGINS STYLESHEET */}
      {/* <link href="css/magnific-popup.css" rel="stylesheet" />
    <link href="css/flexslider.css" rel="stylesheet" />
    <link href="css/slick.css" rel="stylesheet" />
    <link href="css/slick-theme.css" rel="stylesheet" /> */}

      {/* On Scroll Animations */}
      {/* <link href="css/animate.css" rel="stylesheet" /> */}

      {/* TEMPLATE CSS */}
      {/* <link href="css/style.css" rel="stylesheet" /> 	 */}

      {/* RESPONSIVE CSS */}
      {/* <link href="css/responsive.css" rel="stylesheet" />  */}

    </Helmet>
  </div>
)

// Header1.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header1.defaultProps = {
//   siteTitle: ``,
// }

export default HeaderScripts
