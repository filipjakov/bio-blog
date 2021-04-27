import Image from 'next/image';
import Head from 'next/head';
import {
  Angular,
  Css3,
  Graphql,
  Html5,
  Js,
  Nestjs,
  Nextjs,
  Node,
  Postcss,
  React as ReactIcon,
  Rxjs,
  Sass,
  Styled,
  Typescript,
  Webpack
} from '../components/icons';
import { Link } from '../components/Link/Link';
import { Social } from '../components/Social/Social';
import { Layout } from '../components/Layout/Layout';
import {
  grid,
  intro,
  clippedGradient
} from './index.module.css';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FJB | Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <Layout>
        <article>
          <section
            className={intro}
            style={{ marginTop: '2rem' }}
          >
            <div>
              <h1 className="squishy-text">
                <span style="font-size: 1rem; line-height: 1.3;">
                  Hello, I am
                </span>
                <br />
                <span
                  className={clippedGradient}
                  style="font-size: 2.5rem; line-height: 1.2;"
                >
                  Filip J. Bulić
                </span>
                <br />
                <span style="font-size: 1.5rem; line-height: 1.3;">
                  Full-stack Developer
                </span>
                <br />

                <span style="font-size: 1.5rem; line-height: 1.3;">
                  Currently working at{' '}
                  <Link href="https://infinum.com/">
                    Infinum
                  </Link>
                </span>
              </h1>

              <Social style={{ marginTop: '1rem' }} />
            </div>

            <Image
              src="/images/fjb.png"
              alt="Picture of Filip Jakov Bulić"
              layout="responsive"
              width={200}
              height={200}
            />
          </section>

          <section style={{ marginTop: '3rem' }}>
            <h2 className="squishy-text">
              Technologies and frameworks I worked with:
            </h2>
            <ul
              className={grid}
              style={{ marginTop: '2rem' }}
            >
              <li>
                <a href="https://en.wikipedia.org/wiki/HTML5">
                  <Html5 />
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3">
                  <Css3 />
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <Js />
                </a>
              </li>
              <li>
                <a href="https://angular.io/">
                  <Angular />
                </a>
              </li>
              <li>
                <a href="https://rxjs-dev.firebaseapp.com/">
                  <Rxjs />
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/">
                  <Typescript />
                </a>
              </li>
              <li>
                <a href="https://reactjs.org/">
                  <ReactIcon />
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/">
                  <Nextjs />
                </a>
              </li>
              <li>
                <a href="https://styled-components.com/">
                  <Styled />
                </a>
              </li>
              <li>
                <a href="https://sass-lang.com/">
                  <Sass />
                </a>
              </li>
              <li>
                <a href="https://postcss.org/">
                  <Postcss />
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/en/">
                  <Node />
                </a>
              </li>
              <li>
                <a href="https://www.apollographql.com/">
                  <Graphql />
                </a>
              </li>
              <li>
                <a href="https://webpack.js.org/">
                  <Webpack />
                </a>
              </li>
              <li>
                <a href="https://nestjs.com/">
                  <Nestjs />
                </a>
              </li>
            </ul>
          </section>
        </article>
      </Layout>
    </>
  );
}
