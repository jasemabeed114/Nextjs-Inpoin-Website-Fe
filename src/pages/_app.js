/* eslint-disable max-len */
/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { IMAGES } from '../configs';
import 'swiper/swiper-bundle.min.css';
import '../components/elements/Swiper/swiper.css';
import '../components/pages/WebTour/WebTour.css';
import '../components/pages/Register/Register.css';
import '../components/pages/Home/MF_Home.css';
import '../components/pages/ProductServices/ProductServices.css';
import '../components/pages/Community/Community.css';
import '../components/pages/ContactUs/ContactUs.css';

function MyApp({ Component, pageProps })  {

  const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>inpoin</title>
        <meta charSet="utf-8" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          name="viewport"
        />
        {/* PWA primary color */}
        <meta content={'#ED2B2E'} name="theme-color"/>
        <link
          href={IMAGES.INPOIN_LOGO}
          rel="icon"
          type="image/svg"
        />
        { GA_MEASUREMENT_ID &&
          <>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_MEASUREMENT_ID}', {  page_path: window.location.pathname,});`,
              }}
            />
          </>
        }
      </Head>

      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.elementType]).isRequired,
  pageProps: PropTypes.object.isRequired,
};


export default MyApp;