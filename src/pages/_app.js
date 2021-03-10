import '../styles/global.css';

import { footer } from './_app.module.css';
import { Social } from '../components/Social/Social';
import { Header } from '../components/Header/Header';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer className={footer}>
        <span>
          ©Filip Jakov Bulic, {new Date().getFullYear()}
        </span>
        <Social />
      </footer>
    </>
  );
}
