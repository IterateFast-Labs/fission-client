import { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

export const RootContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
  height: 100svh;
  padding-bottom: 0.25rem;
`;

const BaseContentContainer = styled(
  ({ ref, children, ...props }: ComponentPropsWithRef<'article'>) => {
    return (
      <article ref={ref} {...props}>
        {children}
      </article>
    );
  },
)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

const BaseContentHeader = styled(
  ({ ref, children, ...props }: ComponentPropsWithRef<'header'>) => {
    return (
      <header ref={ref} {...props}>
        {children}
      </header>
    );
  },
)`
  flex-shrink: 0;
  min-height: 80px;

  & .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & .description {
    font-size: 1rem;
  }
`;

const BaseContentBody = styled(
  ({ ref, children, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  },
)`
  flex-grow: 1;
  overflow-y: auto;
`;

const BaseContentAction = styled(
  ({ ref, children, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  },
)`
  flex-shrink: 0;
`;

export const BaseContent = Object.assign(BaseContentContainer, {
  Header: BaseContentHeader,
  Body: BaseContentBody,
  Action: BaseContentAction,
});
