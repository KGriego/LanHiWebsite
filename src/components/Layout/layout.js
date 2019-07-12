import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header";
import Footer from "../Footer";
import "./layout.css";
import "./globals.css";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      console.log(
        "Find me on GitHub. @Midlu Kevin Griego or at my email: Kev.Gri32@gmail.com"
      );
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer siteTitle={data.site.siteMetadata.title} />
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
