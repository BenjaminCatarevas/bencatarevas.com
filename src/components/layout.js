import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className="nav-container">
          <div className="name-container">
            <h1
              style={{
                ...scale(0.25),
                marginBottom: rhythm(1.5),
                marginTop: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: "#333",
                }}
                to={`/`}
              >
                {title}
              </Link>
              <ul style={{ listStyle: "none", float: "right" }}>
                {this.props.links.map(link => {
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
            </h1>
          </div>
        </div>
      )
    } else {
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
            {this.props.links.map(link => {
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
    }
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
