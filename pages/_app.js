import '../src/styles/global.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/til">TIL</a>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}
