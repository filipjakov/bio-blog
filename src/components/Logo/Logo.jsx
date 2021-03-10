import { forwardRef } from 'react';
import { logo } from './logo.module.css';
import { Logo as SvgLogo } from '../icons';

export const Logo = forwardRef(
  ({ className, height, ...rest }, ref) => {
    return (
      <a
        className={logo + ' ' + className}
        ref={ref}
        {...rest}
      >
        <SvgLogo height={height} />
        <span style="font-weight: bold;">FJB</span>
      </a>
    );
  }
);
