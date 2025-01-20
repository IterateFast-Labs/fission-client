import { Confcp118 } from '@react95/icons';
import { Button } from 'react95';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';
import styled from 'styled-components';

import { RootContainer } from './components/layout';

export function ErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();

  let message = '';

  if (isRouteErrorResponse(error)) {
    message = `[${error.status}] ${error.statusText}`;
  }

  if (error instanceof Error) {
    message = error.message;
  }

  return (
    <RootContainer>
      <PageContainer>
        <Confcp118 width={64} height={64} />
        <MessageContainer>
          <h1>Error</h1>
          <pre>{message}</pre>
        </MessageContainer>

        <Button onClick={() => navigate(-1)}>Go back</Button>
      </PageContainer>
    </RootContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100svh;
  gap: 0.25rem;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  text-align: center;
  padding: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
