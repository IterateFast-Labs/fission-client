import { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

export function LogoTypo({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<'svg'>) {
  return (
    <SVGTYPO
      ref={ref}
      viewBox="0 0 274 38"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M229.973 38V5.17007L229.342 0H240.948L258.736 18.483L261.196 21.3265H261.889V0H274V38H263.466L245.174 19.3231L242.714 16.2857H242.084V38H229.973Z" />
      <path d="M191.25 38C186.793 38 183.534 36.9875 181.473 34.9626C179.455 32.8946 178.446 29.6202 178.446 25.1395V12.7959C178.446 8.40136 179.455 5.17007 181.473 3.10204C183.492 1.03401 186.751 0 191.25 0H209.668C214.083 0 217.3 1.03401 219.319 3.10204C221.379 5.17007 222.409 8.40136 222.409 12.7959V25.1395C222.409 29.6202 221.379 32.8946 219.319 34.9626C217.258 36.9875 214.041 38 209.668 38H191.25ZM195.602 29.2109H205.379C208.659 29.2109 210.299 27.6814 210.299 24.6224V13.3129C210.299 10.2971 208.659 8.78911 205.379 8.78911H195.602C193.92 8.78911 192.659 9.13379 191.818 9.82313C190.977 10.5125 190.556 11.6757 190.556 13.3129V24.6224C190.556 26.2166 190.977 27.3798 191.818 28.1122C192.659 28.8447 193.92 29.2109 195.602 29.2109Z" />
      <path d="M159.424 38V0H171.535V38H159.424Z" />
      <path d="M118.873 38C116.013 38 113.911 37.8708 112.565 37.6122C111.22 37.3537 110.547 37.0522 110.547 36.7075L114.331 28.3707C115.298 28.5431 117.296 28.7154 120.323 28.8878C123.351 29.017 127.283 29.0816 132.119 29.0816H137.102C138.573 29.0816 139.562 28.8662 140.066 28.4354C140.571 28.0045 140.823 27.3798 140.823 26.5612V25.915C140.823 24.881 140.571 24.1701 140.066 23.7823C139.562 23.3946 138.573 23.2007 137.102 23.2007H122.657C118.41 23.2007 115.319 22.4036 113.385 20.8095C111.451 19.1723 110.484 16.5227 110.484 12.8605V10.534C110.484 8.63832 110.82 6.89342 111.493 5.29932C112.208 3.70521 113.406 2.43424 115.088 1.48639C116.77 0.495465 119.083 0 122.027 0H142.968C145.533 0 147.656 0.150793 149.338 0.452379C151.062 0.753968 151.924 1.0771 151.924 1.42177L150.032 9.43537C148.855 9.30612 146.626 9.17687 143.346 9.04762C140.108 8.87528 135.987 8.78911 130.983 8.78911L126.442 8.72449C125.138 8.72449 124.213 8.91837 123.666 9.30612C123.12 9.65079 122.825 10.3186 122.783 11.3095V11.7619C122.783 12.7528 123.078 13.4422 123.666 13.8299C124.255 14.2177 125.201 14.4116 126.505 14.4116H140.382C143.073 14.4116 145.365 14.6916 147.257 15.2517C149.149 15.8118 150.6 16.8458 151.609 18.3537C152.618 19.8186 153.123 21.9943 153.123 24.881V27.2075C153.123 30.4388 152.303 33.0454 150.663 35.0272C149.065 37.0091 146.269 38 142.274 38H118.873Z" />
      <path d="M71.194 38C68.3346 38 66.2321 37.8708 64.8864 37.6122C63.5408 37.3537 62.868 37.0522 62.868 36.7075L66.6526 28.3707C67.6197 28.5431 69.6171 28.7154 72.6448 28.8878C75.6724 29.017 79.6041 29.0816 84.4399 29.0816H89.4229C90.8947 29.0816 91.8829 28.8662 92.3875 28.4354C92.8921 28.0045 93.1444 27.3798 93.1444 26.5612V25.915C93.1444 24.881 92.8921 24.1701 92.3875 23.7823C91.8829 23.3946 90.8947 23.2007 89.4229 23.2007H74.9786C70.7315 23.2007 67.6407 22.4036 65.7064 20.8095C63.7721 19.1723 62.8049 16.5227 62.8049 12.8605V10.534C62.8049 8.63832 63.1413 6.89342 63.8141 5.29932C64.529 3.70521 65.7274 2.43424 67.4095 1.48639C69.0915 0.495465 71.4043 0 74.3478 0H95.289C97.8541 0 99.9776 0.150793 101.66 0.452379C103.384 0.753968 104.246 1.0771 104.246 1.42177L102.353 9.43537C101.176 9.30612 98.9474 9.17687 95.6674 9.04762C92.4296 8.87528 88.3086 8.78911 83.3046 8.78911L78.7631 8.72449C77.4596 8.72449 76.5344 8.91837 75.9878 9.30612C75.4411 9.65079 75.1468 10.3186 75.1047 11.3095V11.7619C75.1047 12.7528 75.3991 13.4422 75.9878 13.8299C76.5765 14.2177 77.5226 14.4116 78.8262 14.4116H92.7029C95.3941 14.4116 97.6859 14.6916 99.5782 15.2517C101.47 15.8118 102.921 16.8458 103.93 18.3537C104.94 19.8186 105.444 21.9943 105.444 24.881V27.2075C105.444 30.4388 104.624 33.0454 102.984 35.0272C101.386 37.0091 98.59 38 94.5952 38H71.194Z" />
      <path d="M44.4143 38V0H56.5249V38H44.4143Z" />
      <path d="M0.630758 38V5.17007L0 0H40.6208V8.78911H12.9306V14.6701H33.8087V23.6531H12.9306V38H0.630758Z" />
    </SVGTYPO>
  );
}

const SVGTYPO = styled.svg`
  aspect-ratio: 274 / 38;
`;

export function LogoImage({
  ref,
  className,
  style,
  variant = 'light',
  fill,
  ...props
}: ComponentPropsWithRef<'svg'> & {
  variant?: 'light' | 'dark';
}) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...style,
        aspectRatio: '1 / 1',
      }}
      className={className}
      {...props}
    >
      <path
        d="M0 28C0 12.536 12.536 0 28 0H122C137.464 0 150 12.536 150 28V122C150 137.464 137.464 150 122 150H28C12.536 150 0 137.464 0 122V28Z"
        fill={variant === 'light' ? 'black' : fill || 'white'}
      />
      <path
        d="M137 75C137 109.242 109.242 137 75 137C40.7583 137 13 109.242 13 75C13 40.7583 40.7583 13 75 13C109.242 13 137 40.7583 137 75Z"
        fill={variant === 'light' ? fill || 'white' : 'black'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M112 43C112 48.5228 107.523 53 102 53C100.165 53 98.4464 52.506 96.9684 51.6438L89.7863 62.4424C91.7874 64.7289 93 67.7228 93 71C93 76.1827 89.9671 80.6571 85.5794 82.7452L88.3942 90.9199C90.6564 89.6953 93.247 89 96 89C104.837 89 112 96.1635 112 105C112 113.837 104.837 121 96 121C87.1635 121 80 113.837 80 105C80 99.2809 83.0006 94.2626 87.5135 91.4337L84.658 83.1406C83.2119 83.6958 81.6415 84 80 84C73.8528 84 68.7021 79.7334 67.3478 74H53.9692C53.4531 82.3707 46.5007 89 38 89C29.1635 89 22 81.8365 22 73C22 64.1635 29.1635 57 38 57C46.8365 57 54 64.1635 54 73H67.1529C67.0522 72.3481 67 71.6801 67 71C67 63.8203 72.8203 58 80 58C83.5334 58 86.7376 59.4097 89.0808 61.6974L96.1309 51.0974C93.6277 49.2799 92 46.33 92 43C92 37.4772 96.4771 33 102 33C107.523 33 112 37.4772 112 43Z"
        fill={variant === 'light' ? 'black' : fill || 'white'}
      />
    </svg>
  );
}
