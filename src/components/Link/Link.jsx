import { forwardRef } from 'react';
import { link } from './link.module.css';

export const Link = forwardRef(
  ({ children, className, ...rest }, ref) => {
    return (
      <a
        className={[link, className].join(' ')}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    );
  }
);
