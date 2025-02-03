import { Awfxex32109 } from '@react95/icons';
import styled from 'styled-components';

export default function Error({
  message,
  button,
}: {
  message: string;
  button?: React.ReactNode;
}) {
  return (
    <ErrorContainer>
      <Awfxex32109 variant="32x32_4" />
      <p
        style={{
          textWrap: 'wrap',
        }}
      >
        {message}
      </p>
      <div>{button}</div>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    text-align: center;
    white-space: pre-line;
  }
`;
