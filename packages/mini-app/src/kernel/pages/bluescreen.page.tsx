import { Timing, TimingFrame } from '@/components/animation/timing';

import {
  Container,
  FullScreen,
  Message,
  Ornament,
  Title,
} from './bluescreen.style';

export function BluescreenPage() {
  const addresses = [
    '诺爱尔梵蜜莉欧',
    '鬲疲婿螟ｧ蜴ｦ的设备',
    '畂桳栠摩琠敨映捡獴',
    '您可能连不止步',
    '女孩永接到了未经授权',
    '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
  ];

  return (
    <FullScreen>
      <Container>
        <Ornament>╔═════════════ ❀•°❀°•❀ ═════════════╗</Ornament>
        <TimingFrame start={0} display>
          <Timing start={0.5} duration={0.5}>
            <Title>Fission</Title>
          </Timing>

          <Message
            style={{
              textWrap: 'pretty',
            }}
          >
            <Timing start={0.7} duration={0.5}>
              Fatal Error occurred in memory address{' '}
              {addresses[Math.floor(Math.random() * addresses.length)]}
              <br />
              It seems like something went wrong.
              <br />
              Here are some things you can try:
              <br />
              <br />
              ・❥・ Close mini-app and try again what you were doing
              <br />
              ・❥・ Report this issue to Discord server with detailed
              information and steps to reproduce
              <br />
              ・❥・ If you are a developer, check your code and try to fix the
              issue
              <br />
              ・❥・ Or just wait for the ▓▓▓▓▓▓▓▓
            </Timing>
          </Message>
        </TimingFrame>

        <Ornament>╚═════════════ ❀•°❀°•❀ ═════════════╝</Ornament>
      </Container>
    </FullScreen>
  );
}
