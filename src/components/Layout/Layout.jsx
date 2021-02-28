import { layout } from './layout.module.css';

export { bleed } from './layout.module.css';

export const Layout = ({
  children,
  className,
  ...rest
}) => {
  return (
    <main className={`${layout} ${className}`} {...rest}>
      {children}
    </main>
  );
};
