import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Post">
			<p>My cool blog posts</p>
			<ul>
				{data.allFile.nodes.map((node) => (
					<li>{node.name}</li>
				))}
			</ul>
		</Layout>
	);
};

export const query = graphql`
	query {
		allFile {
			nodes {
				name
			}
		}
	}
`;

export default BlogPage;
