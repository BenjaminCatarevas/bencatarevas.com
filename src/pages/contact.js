import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import links from "../utils/links"

export class Contact extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle} links={links}>
        <h1>Contact Information</h1>
        <ul>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/BenjaminCatarevas"
            >
              BenjaminCatarevas
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/BenjaminCatarevas"
            >
              BenjaminCatarevas
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:bcatarevas@gmail.com"
            >
              bcatarevas@gmail.com
            </a>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
