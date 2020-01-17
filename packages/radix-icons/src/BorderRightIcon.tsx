import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BorderRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11 2.9L3 2.9C2.94477 2.9 2.9 2.94477 2.9 3L2.9 12C2.9 12.0552 2.94477 12.1 3 12.1L11 12.1L11 2.9ZM2 3C2 2.44771 2.44771 2 3 2L12 2C12.5523 2 13 2.44772 13 3L13 12C13 12.5523 12.5523 13 12 13L3 13C2.44771 13 2 12.5523 2 12L2 3Z"
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
          d="M3 2C2.44771 2 2 2.44771 2 3L2 12C2 12.5523 2.44771 13 3 13L12 13C12.5523 13 13 12.5523 13 12L13 3C13 2.44772 12.5523 2 12 2L3 2Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11 2.9L3 2.9C2.94477 2.9 2.9 2.94477 2.9 3L2.9 12C2.9 12.0552 2.94477 12.1 3 12.1L11 12.1L11 2.9ZM2 3C2 2.44771 2.44771 2 3 2L12 2C12.5523 2 13 2.44772 13 3L13 12C13 12.5523 12.5523 13 12 13L3 13C2.44771 13 2 12.5523 2 12L2 3Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderRightIcon;
