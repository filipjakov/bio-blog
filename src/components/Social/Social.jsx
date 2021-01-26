import {
  Linkedin,
  Twitter,
  Gmail,
  Codepen
} from '../../components/icons';

import { social } from './social.module.css';

export const Social = ({ className, ...rest }) => {
  return (
    <ul className={[social, className].join(' ')} {...rest}>
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
  );
};
