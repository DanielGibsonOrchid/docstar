import { Link } from "gatsby"
import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import docstarLogo from "../images/DocStar-Images/TopNAV-DOCSTAR-logo.jpg"

const HeaderMenu = () => (
	<div>
		{/* HEADER ============================================= */}
		<header id="header" className="header">
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-tra">
				<div className="container">
				
					{/* LOGO IMAGE */}
					{/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 284 x 72 pixels)*/}
					<Link to="/" className="navbar-brand logo-white">
						<img src={docstarLogo} width={131} height={56} alt="header-logo" />
					</Link>
					
					{/* Responsive Menu Button */}
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					
					{/* Navigation Menu */}
					<div id="navbarSupportedContent" className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item nl-simple">
								<Link to="/about/" className="nav-link">About</Link>
							</li>
							<li className="nav-item nl-simple">
								<Link to="/services/" className="nav-link">Services</Link>
							</li>
							<li className="nav-item nl-simple">
								{/* <Link to="/portfolio/" className="nav-link">Portfolio</Link> */}
								<AnchorLink href='#portfolio-1' className="nav-link">Portfolio</AnchorLink>
							</li>
							<li className="nav-item nl-simple">
								<Link to="/contact/" className="nav-link">Contact</Link>
							</li>
							{/* Header Phone Number */}	
							<span className="navbar-text phone-number yellow-color"><a href="tel:+64272295108" target="_blank" className="phone-header">DDI: +64 27 229 5108</a>
							</span>
						
						</ul>
					</div>	{/* End Navigation Menu */}
				</div>	  {/* End container */}
			</nav>	   {/* End navbar */}
		</header>	{/* END HEADER */}
	</div>
)


export default HeaderMenu
