import '../styles/global.css';
import NextLink from 'next/link';
import { Link } from '../components/Link/Link';
import { navigation, footer } from './_app.module.css';
import { Social } from '../components/Social/Social';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav className={navigation}>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Link>Blog</Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link>About me</Link>
          </NextLink>
          <NextLink href="/manifesto" passHref>
            <Link>Manifesto</Link>
          </NextLink>
        </nav>
      </header>
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
