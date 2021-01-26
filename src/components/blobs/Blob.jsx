import * as React from 'react';

function SvgBlob(props) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M136.2 55.2c9.9 2.1 16.5 13.8 23.4 27.3 6.9 13.5 14.2 28.7 12.9 43.7-1.3 15-11.2 29.8-24.7 36.4-13.5 6.6-30.7 4.9-42-3.1S89.1 137 74.5 130.7c-14.5-6.2-38.2-4.3-49.6-12.6-11.4-8.4-10.6-27-1.9-39.7 8.8-12.8 25.5-19.5 39.7-20.3 14.1-.7 25.7 4.5 38.1 3.5 12.4-1.1 25.6-8.6 35.4-6.4z"
      />
    </svg>
  );
}

export default SvgBlob;
