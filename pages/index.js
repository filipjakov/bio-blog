import Image from 'next/image';

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
} from '../src/components/icons';
import { Link } from '../src/components/Link/Link';
import { Social } from '../src/components/Social/Social';
import { container, grid, intro } from './index.module.css';

function HomePage() {
  return (
    <article className={container}>
      <div className={intro}>
        <div>
          <h1 className="squishy-text">
            <span style="font-size: 1rem;">
              Hello, I am
            </span>
            <br />
            <span style="font-size: 2.5rem;">
              Filip J. Bulić
            </span>
            <br />
            <span style="font-size: 1.5rem;">
              Full-stack Developer
            </span>
            <br />

            <span style="font-size: 1.5rem;">
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
          alt="Picture of me"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>

      <section>
        <h2 className="squishy-text">
          Technologies or frameworks I worked with:
        </h2>
        <ul className={grid} style={{ marginTop: '5vmin' }}>
          <li>
            <a href="https://en.wikipedia.org/wiki/HTML5">
              <Html5 />
            </a>
          </li>
          <li data-favorite>
            <a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3">
              <Css3 />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <Js />
            </a>
          </li>
          <li data-rip>
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
            <a href="https://www.apollographql.com/">
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
  );
}

export default HomePage;
