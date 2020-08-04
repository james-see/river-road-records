import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
<div class='ripple-background'>
  <div class='circle xxlarge shade1'></div>
  <div class='circle xlarge shade2'></div>
  <div class='circle large shade3'></div>
  <div class='circle mediun shade4'></div>
  <div class='circle small shade5'></div>
</div>
    <SEO title="Home" />
    <code>Hi music people</code>
    <div style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <code>1. <Link to="/page-2/">List of artists represented</Link></code> <br />
    <code>2. <Link to="https://www.redbubble.com/shop/ap/54112901">Schwagggg</Link></code>
  </Layout>
)


export default IndexPage
