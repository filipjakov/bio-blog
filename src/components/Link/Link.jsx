import { forwardRef } from 'react';
import { link } from './link.module.css';

export const Link = forwardRef(
  ({ children, className, ...rest }, ref) => {
    return (
      <a
        className={`${link} ${className}`}
        ref={ref}
        {...rest}
      >
        <span>{children}</span>
      </a>
    );
  }
);
