import styled from 'styled-components';

import { useTelegram } from '@/lib/hook/use-telegram';

import roundImage from './assets/round.png';
import tileImage from './assets/tile.webp';

export function MyInfo() {
  const { telegramUser } = useTelegram();

  return (
    <Container>
      <ProfileFrame className="profile-frame">
        <div className="background"></div>
        <img
          src={telegramUser?.photoUrl}
          width={140}
          height={140}
          loading="lazy"
          alt="Profile"
        />
      </ProfileFrame>
      <img
        className="round"
        src={roundImage}
        alt="Round"
        width={260}
        height={100}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 0.5rem 0 0.5rem;
  height: 180px;
  position: relative;
  .profile-frame {
    margin: 0 auto;
  }

  .round {
    position: absolute;
    image-rendering: pixelated;
    display: block;
    margin: 0 auto;
    z-index: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.4;
  }
`;

const ProfileFrame = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  z-index: 1;

  border: 14px solid transparent;
  border-image: url(${tileImage}) 28 round;
  image-rendering: pixelated;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
  }
`;
