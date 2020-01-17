import * as React from 'react';
import { BaseIconProps } from './types';

interface DoubleArrowUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DoubleArrowUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DoubleArrowUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.1464 6.85355C11.3417 7.04882 11.6583 7.04882 11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645L7.85355 2.14645C7.65829 1.95118 7.34171 1.95118 7.14645 2.14645L3.14645 6.14645C2.95118 6.34171 2.95118 6.65829 3.14645 6.85355C3.34171 7.04882 3.65829 7.04882 3.85355 6.85355L7.5 3.20711L11.1464 6.85355ZM11.1464 12.8536C11.3417 13.0488 11.6583 13.0488 11.8536 12.8536C12.0488 12.6583 12.0488 12.3417 11.8536 12.1464L7.85355 8.14645C7.65829 7.95118 7.34171 7.95118 7.14645 8.14645L3.14645 12.1464C2.95118 12.3417 2.95118 12.6583 3.14645 12.8536C3.34171 13.0488 3.65829 13.0488 3.85355 12.8536L7.5 9.20711L11.1464 12.8536Z"
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
          d="M10.7929 7.20711C11.1834 7.59763 11.8166 7.59763 12.2071 7.20711C12.5976 6.81658 12.5976 6.18342 12.2071 5.79289L8.20711 1.79289C7.81658 1.40237 7.18342 1.40237 6.79289 1.79289L2.79289 5.79289C2.40237 6.18342 2.40237 6.81658 2.79289 7.20711C3.18342 7.59763 3.81658 7.59763 4.20711 7.20711L7.5 3.91421L10.7929 7.20711ZM10.7929 13.2071C11.1834 13.5976 11.8166 13.5976 12.2071 13.2071C12.5976 12.8166 12.5976 12.1834 12.2071 11.7929L8.20711 7.79289C7.81658 7.40237 7.18342 7.40237 6.79289 7.79289L2.79289 11.7929C2.40237 12.1834 2.40237 12.8166 2.79289 13.2071C3.18342 13.5976 3.81658 13.5976 4.20711 13.2071L7.5 9.91421L10.7929 13.2071Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.1464 6.85355C11.3417 7.04882 11.6583 7.04882 11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645L7.85355 2.14645C7.65829 1.95118 7.34171 1.95118 7.14645 2.14645L3.14645 6.14645C2.95118 6.34171 2.95118 6.65829 3.14645 6.85355C3.34171 7.04882 3.65829 7.04882 3.85355 6.85355L7.5 3.20711L11.1464 6.85355ZM11.1464 12.8536C11.3417 13.0488 11.6583 13.0488 11.8536 12.8536C12.0488 12.6583 12.0488 12.3417 11.8536 12.1464L7.85355 8.14645C7.65829 7.95118 7.34171 7.95118 7.14645 8.14645L3.14645 12.1464C2.95118 12.3417 2.95118 12.6583 3.14645 12.8536C3.34171 13.0488 3.65829 13.0488 3.85355 12.8536L7.5 9.20711L11.1464 12.8536Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DoubleArrowUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DoubleArrowUpIcon;
