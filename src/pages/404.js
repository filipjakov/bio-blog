import Head from 'next/head';
import { Svg404 } from '../components/404/404';
import { Layout } from '../components/Layout/Layout';

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>FJB | 404</title>
        <meta name="description" content="Page not found" />
      </Head>
      <Layout>
        <article>
          <h1
            style={{
              justifySelf: 'center',
              fontSize: '2.5rem'
            }}
          >
            Well well well...
          </h1>
          <h2 style={{ justifySelf: 'center' }}>
            Looks like someone got lost
          </h2>
          <Svg404 style="width: min(100%, 60vh); margin-left: auto; margin-right: auto;" />
        </article>
      </Layout>
    </>
  );
}
