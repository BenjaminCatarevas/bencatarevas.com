/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import quips from "../utils/quips"

const Bio = () => {
  return (
    <div style={{ display: `flex` }}>
      <br />
      <hr
        style={{
          height: "2px",
          color: "#000000",
          backgroundColor: "#000000",
        }}
      ></hr>
      {quips[Math.floor(Math.random() * quips.length)]}
    </div>
  )
}

export default Bio
