import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Bands listed" />
    <p><code>Twinklie-doo...</code></p>
    <ul>
      <li><a href="https://goldforlions.bandcamp.com/releases">Goldforlions</a></li>
      <li><a href="https://soundcloud.com/josh-campbell">Josh Campbell</a> (latest <a href="https://soundcloud.com/josh-campbell/god-damned-miracle-demo">Failure Cross</a>)</li>
      <li></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
