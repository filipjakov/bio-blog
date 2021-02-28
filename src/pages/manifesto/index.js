import {
  container,
  sticky,
  navigation
} from './manifesto.module.css';
import { Link } from '../../components/Link/Link';
import NextLink from 'next/link';

export default function Agenda({ dependencies }) {
  // Sticky navigaton on wide screens, content on right
  // TODO: Explainer on how the site is made: a11y, min js, libs, stack, ...

  console.log(dependencies);
  return (
    <main>
      <article className={container}>
        {/* TODO: a11y secondary navigation */}
        <nav className={sticky + ' ' + navigation}>
          <h1>What is this site about?</h1>
          <NextLink href="/manifesto#background" passHref>
            <Link>Background</Link>
          </NextLink>
          <NextLink href="/manifesto#stack" passHref>
            <Link>Stack</Link>
          </NextLink>
        </nav>
        <div style="max-width: 40ch;">
          <h2 id="stack">Stack</h2>
          <pre style="overflow-y: auto;">
            <code>
              {JSON.stringify(dependencies, null, 2)}
            </code>
          </pre>
        </div>
      </article>
    </main>
  );
}

export async function getStaticProps(context) {
  const dependencies = (
    await import('../../../package.json')
  ).default.dependencies;

  // Will be passed to the page component as props
  return {
    props: {
      dependencies
    }
  };
}
