import * as React from 'react';
import { BaseIconProps } from './types';

interface SimpleComponentIconProps extends BaseIconProps {
  size?: '15';
  type: 'twoTone';
}

export const SimpleComponentIcon = ({
  color = 'currentColor',
  size = '15',
  type,
  ...props
}: SimpleComponentIconProps) => {
  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.5 4.9C2.5 4.05992 2.5 3.63988 2.66349 3.31901C2.8073 3.03677 3.03677 2.8073 3.31901 2.66349C3.63988 2.5 4.05992 2.5 4.9 2.5H10.1C10.9401 2.5 11.3601 2.5 11.681 2.66349C11.9632 2.8073 12.1927 3.03677 12.3365 3.31901C12.5 3.63988 12.5 4.05992 12.5 4.9V10.1C12.5 10.9401 12.5 11.3601 12.3365 11.681C12.1927 11.9632 11.9632 12.1927 11.681 12.3365C11.3601 12.5 10.9401 12.5 10.1 12.5H4.9C4.05992 12.5 3.63988 12.5 3.31901 12.3365C3.03677 12.1927 2.8073 11.9632 2.66349 11.681C2.5 11.3601 2.5 10.9401 2.5 10.1V4.9Z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M4.87935 2L4.9 2H10.1L10.1206 2C10.5231 1.99999 10.8553 1.99999 11.1259 2.0221C11.407 2.04506 11.6653 2.09434 11.908 2.21799C12.2843 2.40973 12.5903 2.71569 12.782 3.09202C12.9057 3.33469 12.9549 3.59304 12.9779 3.87409C13 4.14468 13 4.47686 13 4.87934V4.9V10.1V10.1207C13 10.5231 13 10.8553 12.9779 11.1259C12.9549 11.407 12.9057 11.6653 12.782 11.908C12.5903 12.2843 12.2843 12.5903 11.908 12.782C11.6653 12.9057 11.407 12.9549 11.1259 12.9779C10.8553 13 10.5231 13 10.1207 13H10.1H4.9H4.87934C4.47686 13 4.14468 13 3.87409 12.9779C3.59304 12.9549 3.33469 12.9057 3.09202 12.782C2.71569 12.5903 2.40973 12.2843 2.21799 11.908C2.09434 11.6653 2.04506 11.407 2.0221 11.1259C1.99999 10.8553 1.99999 10.5231 2 10.1206L2 10.1V4.9L2 4.87935C1.99999 4.47687 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47687 1.99999 4.87935 2ZM3.95552 3.01878C3.73631 3.03669 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V10.1C3 10.5283 3.00039 10.8194 3.01878 11.0445C3.03669 11.2637 3.06915 11.3758 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.62421 11.9309 3.73631 11.9633 3.95552 11.9812C4.18056 11.9996 4.47171 12 4.9 12H10.1C10.5283 12 10.8194 11.9996 11.0445 11.9812C11.2637 11.9633 11.3758 11.9309 11.454 11.891C11.6422 11.7951 11.7951 11.6422 11.891 11.454C11.9309 11.3758 11.9633 11.2637 11.9812 11.0445C11.9996 10.8194 12 10.5283 12 10.1V4.9C12 4.47171 11.9996 4.18056 11.9812 3.95552C11.9633 3.73631 11.9309 3.62421 11.891 3.54601C11.7951 3.35785 11.6422 3.20487 11.454 3.10899C11.3758 3.06915 11.2637 3.03669 11.0445 3.01878C10.8194 3.00039 10.5283 3 10.1 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01878Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SimpleComponentIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SimpleComponentIcon;
