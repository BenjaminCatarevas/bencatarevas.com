import React, { Component } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export class About extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        links={[
          { name: "About", link: "about" },
          { name: "Articles", link: "articles" },
          { name: "Contact", link: "contact" },
        ]}
      >
        <h1> About Me</h1>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
