import { Link } from "gatsby"
import React, { Component } from "react"
import scrollToElement from "scroll-to-element"

import docstarLogoWhite from "../images/DocStar-Images/TopNAV-DOCSTAR-logo-white@2x.png"
import docstarLogoBlue from "../images/DocStar-Images/DOCSTAR-logo-v2.png"

export default class HeaderMenu extends Component {
	constructor(props) {
		super(props)
		this.state = { show: 'is-active'}
	}

	_handleLinkClick = (e, target) => {
		if (typeof window !== undefined) {
			if (window.location.pathname === '/') {
				e.preventDefault()
				scrollToElement(target, {
					// offset: -95,
					duration: 1000,
				})
				this.setState({
					show: 'is-active'
				})
			}
		}
	}

	_handleMobileMenuClick = () => {
		if (this.state.show === '') {
			this.setState({
				show: 'is-active'
			})
		} else {
			this.setState({
				show: ''
			})
		}
	}

	_handleHomepageMobileMenuClick = () => {
		this.setState({
			show: 'is-active'
		})
	}

	render() {
		const mobileMenuShow = this.state.show ? 'is-active' : 'show';

		return (
			<div>
				{/* HEADER ============================================= */}
				<header id="header" className="header">
					<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-tra">
						<div className="container">

							{/* LOGO IMAGE */}
							{/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 284 x 72 pixels)*/}
							<div className="menu-logo">
								<Link to="/" className="navbar-brand logo-white logo-desktop">
									<img src={docstarLogoWhite} width={131} height={56} alt="header-logo" />
								</Link>

								<Link onClick={e => this._handleHomepageMobileMenuClick()} to="/" className="navbar-brand logo-mobile">
									<img src={docstarLogoBlue} width={131} height={56} alt="header-logo" />
								</Link>
							</div>

							{/* Responsive Menu Button */}
							<button onClick={e => this._handleMobileMenuClick()} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon" />
							</button>

							{/* Navigation Menu */}
							<div id="navbarSupportedContent" className={`collapse ${mobileMenuShow} navbar-collapse`}>
								<ul className="navbar-nav ml-auto">
									<li className="nav-item nl-simple">
										<Link 
											onClick={e => this._handleHomepageMobileMenuClick()}
											to="/" className="nav-link"
										>
											Home
										</Link>
									</li>
									<li className="nav-item nl-simple">
										<Link to="/about/" className="nav-link">About</Link>
									</li>
									<li className="nav-item nl-simple">
										<Link to="/services/" className="nav-link">Services</Link>
									</li>
									<li className="nav-item nl-simple">
										<Link
											onClick={e => this._handleLinkClick(e, '#portfolio-1')}
											to={'/#portfolio-1'}
											className="nav-link"
										>
											Portfolio
										</Link>
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
	}
}


