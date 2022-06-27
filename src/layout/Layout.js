import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
} from "../components/layout.module.css";

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	console.log(data);
	return (
		<div className={container}>
			<title>
				{pageTitle} | {data.site.siteMetadata.title}
			</title>
			<header>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to="/" className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/About" className={navLinkText}>
							About
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
