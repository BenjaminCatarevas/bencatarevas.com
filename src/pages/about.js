import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export class About extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1> About Me</h1>
        <p>
          I'm Ben. I'm a software engineer who likes to write about topics that
          more often than not have nothing to do with software. It's nothing
          personal, I just have an interest in dry humor topics rather than talk
          about why JavaScript is a high-level single-threaded garbage-collected
          interpreted language whose prototype-based object oriented design
          model lends itself to a hierarchy not found in other languages...for
          example.
        </p>
        <p>
          In the 'Posts' section, you'll find articles ranging from how
          divergent my interests and career path is compared to my family, to
          mundane stories about my mundane life.
        </p>
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
