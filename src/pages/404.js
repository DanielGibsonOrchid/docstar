import React from "react"
import HeaderScripts from "../components/header-scripts"
import HeaderMenu from "../components/header-menu"
import FooterLight from "../components/footer-light"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <HeaderScripts />

    {/* PAGE CONTENT ============================================= */}
    <div id="page" className="page">

      <HeaderMenu />

      {/* CONTACT PAGE HERO ============================================= */}
      <section id="hero-23" className="bg-scroll page-hero-section division">
        <div className="container">
          <div className="row">
            <SEO title="404: Not found" />
            <h2 className="h2-xl-white">404: NOT FOUND</h2>
            <p className="p-hero-white">You just hit a page that doesn&#39;t exist.</p>
          </div>
        </div>
      </section>
      <FooterLight />
    </div>
  </div>
)

export default NotFoundPage
