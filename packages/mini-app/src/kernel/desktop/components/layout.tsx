import { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

export const DesktopLayout = styled(
  ({ ref, className, children, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  },
)`
  height: 100svh;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const DesktopMain = styled(
  ({ ref, className, children, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  },
)`
  flex-grow: 1;
`;

export const DesktopBottom = styled(
  ({ ref, className, children, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  },
)`
  position: relative;
  flex-shrink: 0;
`;
