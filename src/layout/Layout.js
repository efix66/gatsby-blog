import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  // navLinks,
  // navLinkItem,
  // navLinkText,
  siteTitle,
} from "../components/layout.module.css";
import NavBar from "../components/navBar/NavBar";

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
    <>
      <NavBar />
      <div className={container}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        {/* <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to='/' className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/About' className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/BlogPage' className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/TestFetch' className={navLinkText}>
                TestFetch
              </Link>
            </li>
          </ul>
        </nav> */}
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
