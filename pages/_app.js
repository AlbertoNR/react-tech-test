import "cross-fetch/polyfill";
import { GraphQLProvider } from "graphql-react";
import { withGraphQLApp } from "next-graphql-react";
import App from "next/app";
import Layout from '../components/layout';


class CustomApp extends App {
  render() {
    const { Component, router, pageProps, graphql } = this.props;
    return (
      
      <GraphQLProvider graphql={graphql}>
          <Layout>
          
            <Component {...pageProps} />

          </Layout>
      </GraphQLProvider>
      
    );
  }
}

export default withGraphQLApp(CustomApp);
