import 'cross-fetch/polyfill';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import Head from '../components/head';
import App from 'next/app';
import Layout from '../components/layout';

class CustomApp extends App {
  render() {
    const { Component, pageProps, graphql } = this.props;
    return (
      <GraphQLProvider graphql={graphql}>
        <Head title="Home" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GraphQLProvider>
    );
  }
}

export default withGraphQLApp(CustomApp);
