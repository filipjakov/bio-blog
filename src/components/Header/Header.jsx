import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Close, Hamburger } from '../icons/index';
import { Link } from '../Link/Link';
import { Logo } from '../Logo/Logo';
import { header, overlay, show } from './header.module.css';

export const Header = ({ className, ...rest }) => {
  const router = useRouter();

  useEffect(() => {
    const onHashChange = () => {
      const isOpen = document.location.hash === '#nav-open';

      document.body.classList.toggle('lock', isOpen);
      document
        .querySelector('div[data-overlay]')
        .classList.toggle(show, isOpen);

      isOpen
        ? document.querySelector('a[href="#_"]').focus()
        : document
            .querySelector('a[href="#nav-open"]')
            .focus();
    };

    window.addEventListener('hashchange', onHashChange, {
      passive: true
    });

    onHashChange();

    return () =>
      window.removeEventListener(
        'hashchange',
        onHashChange
      );
  }, []);

  // Removes or reads the body lock
  useEffect(() => {
    const onScreenMatch = ({ matches }) =>
      document.body.classList.toggle(
        'lock',
        document.location.hash === '#nav-open' && matches
      );

    const mediaQueryList = window.matchMedia(
      '(max-width: 48em)'
    );

    mediaQueryList.addListener(onScreenMatch);

    onScreenMatch({ matches: mediaQueryList.matches });

    return () =>
      mediaQueryList.removeListener(onScreenMatch);
  }, []);

  // Nextjs router is fucking weird, neeed to do this manually
  useEffect(() => {
    const onRouteChange = () =>
      (document.location.hash = '');
    router.events.on('routeChangeStart', onRouteChange);
    return () =>
      router.events.off('routeChangeStart', onRouteChange);
  }, []);

  // TODO: focus traps
  return (
    <header className={header + ' ' + className} {...rest}>
      <a
        href="#nav-open"
        title="Open Menu"
        aria-label="Open Menu"
        style={{ position: 'absolute' }}
      >
        <Hamburger height="calc(2px + 2ex + 2px)" />
      </a>

      <NextLink href="/" passHref>
        <Logo height="calc(2px + 2ex + 2px)" />
      </NextLink>

      <div
        className={overlay}
        data-overlay
        onClick={() => (document.location.hash = '#_')}
      ></div>

      <nav id="nav-open">
        <a
          href="#_"
          title="Close Menu"
          aria-label="Close Menu"
        >
          <Close height="calc(2px + 2ex + 2px)" />
        </a>

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
  );
};
