import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="rtl">
        <Head>
          <link
            rel="preload"
            href="/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16x16.png"
          />
          <link rel="manifest" href="site.webmanifest" />
          <link
            rel="mask-icon"
            href="safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta
            name="msapplication-TileColor"
            content="#da532c"
          />
          {/* TODO: not working */}
          <meta name="theme-color" content="#f96a58" />
          {/* To run web application in full-screen*/}
          <meta
            name="apple-mobile-web-app-capable"
            content="yes"
          />

          {/* Status Bar Style (see Supported Meta Tags below for available values) */}
          {/* Has no effect unless you have the previous meta tag*/}
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* https://stackoverflow.com/questions/57401976/css-transition-flash-on-page-load-with-nextjs-production-build#answer-57401977 */}
          <script> </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
