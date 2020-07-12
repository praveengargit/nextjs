import { AppProps } from 'next/app';
import { Router } from 'next/dist/client/router';
import {Client} from "../components/prismic";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from "react";
import Layout from '../components/Layouts';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
})

Router.events.on('routeChangeError', () => {
  NProgress.done();
})

function MyApp({ Component, pageProps, settings }) {
    // const { settings } = pageProps;
  return (
      <Layout settings={settings}>
        <Component {...pageProps} />
      </Layout>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  // if(!ctx.req) { return {} }
  const response = await Client().getSingle('settings');
  return { settings: response.data }
}

export default MyApp;
