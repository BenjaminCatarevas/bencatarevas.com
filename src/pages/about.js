import React, { Component } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import links from "../utils/links"

export class About extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} links={links}>
        <h1> About Me</h1>
        <p>
          I'm Ben. I'm a software engineer who likes to write about topics that
          have nothing to do with software. It's nothing personal, it's not
          about making up for not lashing out against my parents when I was
          younger, I just have an interest in dry humor topics rather than talk
          about why JavaScript is a high-level single-threaded garbage-collected
          interpreted language whose prototype-based object oriented design
          model lends itself to a hierarchy not found in other languages...for
          example.
        </p>
        <p>
          In the 'Posts' section, you'll find articles ranging from how
          divergent my intersts and career path is compared to my family, to
          mundane stories about my mundane life.
        </p>
        <p>
          Beyond my faux abhorrence for writing computer science articles, I
          love fashion (a passion for fashion, if you will), nutrition, and
          classic rock, <i>because I was born in the wrong generation.</i>{" "}
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
