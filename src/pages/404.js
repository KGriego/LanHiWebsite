import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Grid, Header, Item } from "semantic-ui-react";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Grid centered style={{ margin: 70 }}>
      <Grid.Row>
        <Item>
          <Item.Content>
            <Item.Header>
              <Header>404: Not Found</Header>
            </Item.Header>
            <Item.Description>
              <p>You just hit a link that doesn&#39;t exist... the sadness.</p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default NotFoundPage;
