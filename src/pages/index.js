import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const IndexPage = ({ data }) => {
  return (
    <MDXProvider>
      <div style={{ margin: "0 auto", maxWidth: 1000, padding: 10 }}>
        <MDXRenderer>{data.post.body}</MDXRenderer>
      </div>
    </MDXProvider>
  )
}

export const query = graphql`
  query IndexQuery {
    post: mdx {
      body
    }
  }
`

export default IndexPage
