import NextLink from 'next/link';
import { Link } from '../Link/Link';
import { header } from './header.module.css';
import { Logo } from '../Logo/Logo';
import { Hamburger, Close } from '../icons/index';
import { useLayoutEffect } from 'react';

export const Header = ({ className, ...rest }) => {
  useLayoutEffect(() => {
    // TODO: move as server check
    if (typeof window === 'undefined') {
      return;
    }

    const onHashChange = () => {
      const isOpen = document.location.hash === '#nav-open';

      document.body.classList.toggle('lock', isOpen);

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

  // Removes or readds the body lock
  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

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
