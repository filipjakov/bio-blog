import * as React from 'react';

function SvgHamburger(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M29 16a2 2 0 01-2 2H11a2 2 0 010-4h16a2 2 0 012 2zm0-10a2 2 0 01-2 2H11a2 2 0 010-4h16a2 2 0 012 2zm0 20a2 2 0 01-2 2H11a2 2 0 010-4h16a2 2 0 012 2zM3 6c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zm0 10c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zm0 10c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2z" />
    </svg>
  );
}

export default SvgHamburger;
