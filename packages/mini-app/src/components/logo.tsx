import { ComponentPropsWithRef, memo } from 'react';
import styled from 'styled-components';

export function LogoTypo({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<'svg'>) {
  return (
    <SVGTYPO
      ref={ref}
      width="111"
      height="32"
      viewBox="0 0 111 32"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M6 6.00004L5 7V13H16V18H5V32H0V4L4 0H18V6.00004H6Z" />
      <path d="M20 7V3H24V7H20ZM20 32V10H24V32H20Z" />
      <path d="M62 32H47V28H61L62 27V24L61 23.0002H50L47 20V14L51 10H65V14H53.0464L51 16V18L52 19H62.0464L66 23V28L62 32Z" />
      <path d="M41 32H26V28H40L41 27V24L40 23.0002H29L26 20V14L30 10H44V14H32.0464L30 16V18L31 19H41.0464L45 23V28L41 32Z" />
      <path d="M84 32H72L68 28V14L72 10H84.0923L88 14V28L84 32ZM84.0923 16L83.0923 15H73.0923L72.0923 16V26L73.1846 27H83.0923L84.0923 26V16Z" />
      <path d="M106 32L106 16.0045L105 15.0053L97 15.0048L95 16.0045L95 32L90 31.9995V10.0068H95V12.006L97 10L107 10.0068L111 13.999V32H106Z" />
    </SVGTYPO>
  );
}

const SVGTYPO = styled.svg`
  aspect-ratio: 111 / 32;
`;

export const LogoImage = memo(function LogoImage({
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
      viewBox="0 0 36 36"
      fill={variant === 'light' ? 'black' : fill || 'white'}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...style,
        aspectRatio: '1 / 1',
      }}
      className={className}
      {...props}
    >
      <path d="M0 10.8C0 14.8014 2.17606 18.2945 5.40933 20.1605C5.45664 18.7954 5.68278 17.4757 6.06507 16.2242C4.55435 14.9044 3.6 12.9636 3.6 10.8C3.6 6.82355 6.82355 3.6 10.8 3.6C12.9636 3.6 14.9044 4.55435 16.2242 6.06507C17.4757 5.68278 18.7954 5.45664 20.1605 5.40933C18.2945 2.17606 14.8014 0 10.8 0C4.83532 0 0 4.83532 0 10.8Z" />
      <path d="M10.8 21.6C16.7647 21.6 21.6 16.7647 21.6 10.8C21.6 10.1951 21.5503 9.60177 21.4547 9.02395C21.2052 9.00806 20.9535 9 20.7 9C19.7183 9 18.7648 9.12091 17.8537 9.34865C17.9496 9.81744 18 10.3028 18 10.8C18 14.7765 14.7765 18 10.8 18C10.3028 18 9.81744 17.9496 9.34865 17.8537C9.12091 18.7648 9 19.7183 9 20.7C9 20.9535 9.00806 21.2052 9.02395 21.4547C9.60177 21.5503 10.1951 21.6 10.8 21.6Z" />
      <path d="M32.4 20.7C32.4 27.1617 27.1617 32.4 20.7 32.4C14.4918 32.4 9.41292 27.5647 9.02395 21.4547C7.72642 21.24 6.50696 20.794 5.40933 20.1605C5.40313 20.3396 5.4 20.5194 5.4 20.7C5.4 29.15 12.25 36 20.7 36C29.15 36 36 29.15 36 20.7C36 12.25 29.15 5.4 20.7 5.4C20.5194 5.4 20.3396 5.40313 20.1605 5.40933C20.794 6.50696 21.24 7.72642 21.4547 9.02395C27.5647 9.41292 32.4 14.4918 32.4 20.7Z" />
      <path d="M16.2242 6.06507C11.3736 7.54667 7.54667 11.3736 6.06507 16.2242C6.9837 17.0268 8.10806 17.5997 9.34865 17.8537C10.3922 13.6787 13.6787 10.3922 17.8537 9.34865C17.5997 8.10806 17.0268 6.9837 16.2242 6.06507Z" />
    </svg>
  );
});
