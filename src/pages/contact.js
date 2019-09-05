import React, { Component } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export class Contact extends Component {
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
        <h1>Contact Information</h1>
        <ul>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/BenjaminCatarevas">BenjaminCatarevas</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/BenjaminCatarevas">
              BenjaminCatarevas
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:bcatarevas@gmail.com">bcatarevas@gmail.com</a>
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
