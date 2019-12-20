import * as React from 'react';
import { BaseIconProps } from './types';

interface EyeClosedIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const EyeClosedIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: EyeClosedIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M14.765 6.076a.5.5 0 01.159.689 9.52 9.52 0 01-1.554 1.898l1.201 1.201a.5.5 0 01-.707.707l-1.263-1.263a8.473 8.473 0 01-2.667 1.343l.449 1.677a.5.5 0 01-.966.258l-.458-1.709a8.666 8.666 0 01-2.918 0l-.458 1.71a.5.5 0 11-.966-.26l.45-1.676a8.473 8.473 0 01-2.668-1.343l-1.263 1.263a.5.5 0 11-.707-.707l1.2-1.201A9.52 9.52 0 01.077 6.765a.5.5 0 01.848-.53 8.426 8.426 0 001.77 2.034A7.462 7.462 0 007.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 01.689-.16z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`EyeClosedIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default EyeClosedIcon;