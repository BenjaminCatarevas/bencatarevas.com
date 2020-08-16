import React from "react"
import { Link } from "gatsby"
import links from "../utils/links"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          {links.map(link => {
            return (
              <Link
                key={link.name}
                to={link.link}
                style={{
                  display: "inline-block",
                  marginRight: "1rem",
                }}
              >
                {link.name}
              </Link>
            )
          })}
        </ul>
      </h3>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{ color: "grey" }}>
          © {new Date().getFullYear()} Nothing else to see here, buster. Move
          along.
        </footer>
      </div>
    )
  }
}

export default Layout
