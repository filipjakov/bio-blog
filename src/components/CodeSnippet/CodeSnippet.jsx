import { code } from './code-snippet.module.css';

export const CodeSnippet = ({
  className,
  children,
  ...rest
}) => {
  return (
    <pre className={className + ' ' + code} {...rest}>
      <code tabIndex="0">{children}</code>
    </pre>
  );
};
