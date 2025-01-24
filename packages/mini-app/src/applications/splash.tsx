import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Timing } from '@/components/timing';
import { sleep } from '@/lib/utils/sleep';

export interface SplashProps {
  logo: React.ReactNode;
  title: React.ReactNode;
  backgroundColor?: string;
  titleColor?: string;
  className?: string;
}

export function Splash({
  logo,
  title,
  backgroundColor = '#000',
  titleColor = '#fff',
  className,
}: SplashProps) {
  return (
    <SplashContainer backgroundColor={backgroundColor} className={className}>
      <Timing start={0.5} duration={1} className="inner">
        <div>{logo}</div>
        <h1
          style={{
            color: titleColor,
          }}
        >
          {title}
        </h1>
      </Timing>
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
      await sleep(3);
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
  z-index: 1;

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

  transition: opacity 0.6s;
  transition-timing-function: steps(5, end);
`;
