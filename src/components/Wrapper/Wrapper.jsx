import { wrapper } from './wrapper.module.css';

export const Wrapper = ({
  children,
  className,
  ...rest
}) => {
  return (
    <main
      className={[wrapper, className].join(' ')}
      {...rest}
    >
      {children}
    </main>
  );
};

// export const bleed = bleed;
