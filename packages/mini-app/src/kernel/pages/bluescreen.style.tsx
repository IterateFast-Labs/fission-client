import styled from 'styled-components';

import { RootContainer } from '@/components/layout';

export const FullScreen = styled.div`
  position: fixed;
  inset: 0;
  background-color: blue;
  color: white;
`;

export const Container = styled(RootContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background-color: white;
  color: blue;
  padding: 0.25rem 0.5rem;
  margin: 0 auto;
  text-align: center;
  width: fit-content;
`;

export const Message = styled.p`
  text-align: center;
`;

export const Ornament = styled.span`
  text-align: center;
`;
