import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
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
