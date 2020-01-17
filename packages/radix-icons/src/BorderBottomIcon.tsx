import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderBottomIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BorderBottomIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderBottomIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 2.9H12C12.0552 2.9 12.1 2.94477 12.1 3V11H2.9V3C2.9 2.94477 2.94477 2.9 3 2.9ZM2 3C2 2.44771 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44771 13 2 12.5523 2 12V3Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 2C2.44772 2 2 2.44771 2 3V12C2 12.5523 2.44771 13 3 13H12C12.5523 13 13 12.5523 13 12V3C13 2.44772 12.5523 2 12 2H3Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M3 2.9H12C12.0552 2.9 12.1 2.94477 12.1 3V11H2.9V3C2.9 2.94477 2.94477 2.9 3 2.9ZM2 3C2 2.44771 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44771 13 2 12.5523 2 12V3Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderBottomIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderBottomIcon;
