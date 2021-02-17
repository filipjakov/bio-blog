import { Svg404 } from '../src/components/404/404';
import { Wrapper } from '../src/components/Wrapper/Wrapper';

export default function FourOhFour() {
  return (
    <Wrapper>
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
        <Svg404 />
      </article>
    </Wrapper>
  );
}
