import {
  Angular,
  Node,
  React as ReactIcon,
  Typescript,
  Rxjs,
  Nextjs,
  Graphql,
  Styled,
  Sass,
  Postcss,
  Html5,
  Css3,
  Js,
  Webpack,
  Nestjs,
  Codepen,
  Linkedin,
  Gmail,
  Twitter
} from '../src/components/icons';

import Image from 'next/image';
import css from './index.module.css';

function HomePage() {
  return (
    <article>
      <div className={css.intro}>
        <div>
          <h1 style={{ lineHeight: 1.2 }}>
            <span style={{ fontSize: '1rem' }}>
              Hello, I am
            </span>
            <br />
            <span
              style={{
                fontSize: '3rem'
              }}
            >
              Filip J. Bulić
            </span>
            <br />
            <span
              style={{
                fontSize: '1.5rem'
              }}
            >
              Full-stack Developer
            </span>
          </h1>
          <ul
            className={css.social}
            style={{ margin: '1rem 0 2rem' }}
          >
            <li>
              <a href="https://www.linkedin.com/in/filip-jakov-buli%C4%87-239b991a5/">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bulicjakov">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="mailto:filipjakov.bulic@gmail.com">
                <Gmail />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/filipjakov">
                <Codepen />
              </a>
            </li>
          </ul>
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
        <h2>Technologies/frameworks I worked with:</h2>
        <ul className={css.grid}>
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
