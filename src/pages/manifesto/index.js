import {
  container,
  sticky,
  navigation,
  content
} from './manifesto.module.css';
import { Link } from '../../components/Link/Link';
import { CodeSnippet } from '../../components/CodeSnippet/CodeSnippet';

import NextLink from 'next/link';
import Head from 'next/head';

export default function Agenda({
  dependencies,
  devDependencies
}) {
  // Sticky navigaton on wide screens, content on right
  // TODO: Explainer on how the site is made: a11y, min js, libs, stack, ...
  return (
    <>
      <Head>
        <title>FJB | Manifesto</title>
        <meta name="description" content="Page manifesto" />
      </Head>
      <main>
        <article className={container}>
          {/* TODO: a11y secondary navigation */}
          <nav className={sticky + ' ' + navigation}>
            <h1>What is this site about?</h1>
            <ol>
              <li>
                <NextLink
                  href="/manifesto#background"
                  passHref
                >
                  <Link>Background</Link>
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/manifesto#principles"
                  passHref
                >
                  <Link>Principles</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/manifesto#stack" passHref>
                  <Link>Stack</Link>
                </NextLink>
              </li>
            </ol>
          </nav>
          <div className={content}>
            <section>
              <h2 id="background">Background</h2>
              <p>
                I've been working in Web Development for a
                couple of years now. There are quite an
                amount of resources that I've read on the
                subject so far, but rarely an opportunity to
                "solidify" that knowledge... By reading
                about certain development topics and not
                applying them in real life scenarios, one
                can never actually wrap his/her head around
                them.
              </p>
              <p>
                The idea of this site is to be my personal
                playground in trying the latest patterns,
                tricks, features and technologies that the
                web can provide me with... and ideally,{' '}
                <NextLink href="/blog" passHref>
                  <Link>write about them</Link>
                </NextLink>{' '}
                .
              </p>
            </section>

            <section>
              <h2 id="principles">Principles</h2>
              <ul>
                <li>
                  <b>CSS is a first class citizen here!</b>
                </li>
                <li>
                  <Link href="https://blog.hubspot.com/website/fluid-design">
                    Fluid design approach
                  </Link>
                </li>
                <li>
                  <Link href="https://archive.hankchizljaw.com/wrote/the-power-of-progressive-enhancement/">
                    Progressive Enhancement
                  </Link>
                </li>
                <li>
                  <Link href="https://www.matuzo.at/blog/writing-even-more-css-with-accessibility-in-mind-user-preferences/">
                    Respecting user preferences
                  </Link>
                </li>
                <li>
                  <Link href="https://www.a11yproject.com/">
                    a11y
                  </Link>{' '}
                  (or atleast I'll do my best)
                </li>
                <li>
                  SEO friendly (with RSS feed, sitemaps and
                  more!)
                </li>
                <li>
                  Minimal code footprint: optimized assets,
                  no unnecessary dependencies, build steps
                  or Javascript, no (client) analytics and
                  tracking
                </li>
                <li>Mobile-friendly</li>
                <li>
                  <Link href="https://github.com/filipjakov/bio-blog">
                    Open source
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 id="stack">Stack</h2>
              <p>
                Below you can find the exact dependencies
                used on the project.
              </p>

              <p>
                Since{' '}
                <Link href="https://nextjs.org/">
                  NextJs
                </Link>{' '}
                is being used with the{' '}
                <Link href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
                  SSG
                </Link>{' '}
                feature, these will update with every build
                (if the dependencies change).
              </p>

              <h3>Dependencies</h3>
              <CodeSnippet>
                {JSON.stringify(dependencies, null, 2)}
              </CodeSnippet>

              <h3>Dev Dependencies</h3>
              <CodeSnippet>
                {JSON.stringify(devDependencies, null, 2)}
              </CodeSnippet>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { dependencies, devDependencies } = (
    await import('../../../package.json')
  ).default;

  // Will be passed to the page component as props
  return {
    props: {
      dependencies,
      devDependencies
    }
  };
}
