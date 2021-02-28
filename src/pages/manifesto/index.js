import {
  container,
  sticky,
  navigation
} from './manifesto.module.css';
import { Link } from '../../components/Link/Link';
import NextLink from 'next/link';

export default function Agenda({
  dependencies,
  devDependencies
}) {
  // Sticky navigaton on wide screens, content on right
  // TODO: Explainer on how the site is made: a11y, min js, libs, stack, ...
  return (
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
              <NextLink href="/manifesto#stack" passHref>
                <Link>Stack</Link>
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
          </ol>
        </nav>
        <div style="max-width: 40ch;">
          <section>
            <h2 id="background">Background</h2>
            <p>TODO!</p>
          </section>
          <section>
            <h2 id="stack">Stack</h2>
            <p>TODO!</p>

            <h3>Dependencies</h3>
            <pre style="overflow-y: auto;">
              <code>
                {JSON.stringify(dependencies, null, 2)}
              </code>
            </pre>
            <h3>Dev Dependencies</h3>
            <pre style="overflow-y: auto;">
              <code>
                {JSON.stringify(devDependencies, null, 2)}
              </code>
            </pre>
          </section>
          <section>
            <h2 id="principles">Principles</h2>
            <p>TODO!</p>
          </section>
        </div>
      </article>
    </main>
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
