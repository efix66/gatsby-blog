import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <p style={{ textAlign: "center" }}>My cool blog posts</p>
      {/* <ul>
        {data.allFile.nodes.map((node) => (
          <li>{node.name}</li>
        ))}
      </ul> */}
      <div style={{ display: "flex", gap: 25 }}>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))}
      </div>
    </Layout>
  );
};

// export const query = graphql`
// 	query {
// 		allFile {
// 			nodes {
// 				name
// 			}
// 		}
// 	}
// `;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
