import React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import ResourcesLayout from "../components/ResourcesLayout";

const Resources = () => (
  <Layout>
    <SEO title="Resources" keywords={[`resources`, `law`]} />
    <ResourcesLayout />
  </Layout>
);

export default Resources;
