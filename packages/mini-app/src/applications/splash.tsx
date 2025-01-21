import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { sleep } from '@/lib/utils/sleep';

export interface SplashProps {
  logo: React.ReactNode;
  title: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

export function Splash({
  logo,
  title,
  backgroundColor = '#000',
  className,
}: SplashProps) {
  return (
    <SplashContainer backgroundColor={backgroundColor} className={className}>
      <div className="inner">
        <div>{logo}</div>
        <h1>{title}</h1>
      </div>
    </SplashContainer>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function withSplash<P>(
  Component: React.ComponentType<P>,
  splashProps: SplashProps,
  onLoading?: () => Promise<void>,
) {
  return function (props: P & React.Attributes) {
    const [loaded, setLoaded] = useState(false);

    const onLoadingWithSleep = async () => {
      if (typeof onLoading === 'function') {
        await onLoading();
      }
      await sleep(1.5);
    };

    useEffect(() => {
      onLoadingWithSleep()
        .then(() => {
          setLoaded(true);
        })
        .catch(() => {
          setLoaded(true);
        });
    }, []);

    return (
      <>
        <Splash {...splashProps} className={loaded ? 'hidden' : ''} />
        <Component {...props} />
      </>
    );
  };
}

const SplashContainer = styled.div<{
  backgroundColor: string;
}>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  & > .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;
  }

  & > .inner > h1 {
    text-align: center;
    font-size: 2rem;
    max-width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  transition: opacity 1.5s;
  transition-timing-function: steps(5, end);
`;
