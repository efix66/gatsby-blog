import React from "react";
import { graphql, Link } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout/Layout";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map((node) => (
				<article key={node.id}>
					<h2>
						<Link to={`./blog/${node.slug}`}>{node.frontmatter.title}</Link>
					</h2>
					<p>Posted: {node.frontmatter.date}</p>
				</article>
			))}
			<div
				className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInDown"
				data-wow-duration="2s"
				data-wow-delay="0.3s">
				<div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
					<div className="icon-bx-sm bg-primary m-b20">
						<Link to="#" className="icon-cell">
							<i className="flaticon-factory-1"></i>
						</Link>{" "}
					</div>
					<div className="icon-content p-l40">
						<h5 className="dlab-tilte">Institute of Packaging</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nibh
							euismod..
						</p>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className=" col-lg-offset-4 col-lg-8">
							<h1>aksdjgk</h1>
						</div>
					</div>
				</div>
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
