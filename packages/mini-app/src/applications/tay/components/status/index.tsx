import { useState } from 'react';
import { Button } from 'react95';
import styled from 'styled-components';

import { BaseContent } from '@/components/layout';
import { useAgentStatus } from '@/requests/agent';

import { TayTalkingFrame } from '../tay-talking-frame';

export function TayStatus({ onBackClick }: { onBackClick: () => void }) {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isTayAnswering, setIsTayAnswering] = useState<boolean>(true);

  const { data, status } = useAgentStatus({
    agentId: '1-TAY',
    type: questionIndex === 0 ? '' : `STATUS${questionIndex}`,
  });

  const greetings = `Hi, How are you today?\nI am ready to tell my status`;

  const questionList = [
    'What did you think today?',
    'Do you have any question to me?',
    'What do you think about human?',
    'Are you good or evil?',
  ];

  return (
    <BaseContent>
      <BaseContent.Header>
        <h2 className="title">TAY's status</h2>
        <p className="description">Together And You</p>
      </BaseContent.Header>
      <BaseContent.Body>
        <StyledTayTalkingFrame
          key={questionIndex + status + data?.updatedAt}
          startTalking={questionIndex === 0 || status === 'success'}
          onAnimationEnd={() => setIsTayAnswering(false)}
        >
          {questionIndex === 0
            ? greetings
            : status === 'success'
              ? data.message
              : 'I am thinking...'}
        </StyledTayTalkingFrame>
      </BaseContent.Body>
      <StyledAction>
        <Button
          fullWidth
          size="lg"
          disabled={isTayAnswering}
          style={{
            display: questionIndex === questionList.length ? 'none' : 'block',
          }}
          onClick={() => {
            if (questionIndex === questionList.length) {
              return;
            }

            setQuestionIndex(questionIndex + 1);
            setIsTayAnswering(true);
          }}
        >
          {questionList[questionIndex]}
        </Button>
        <Button fullWidth size="lg" onClick={onBackClick}>
          Back
        </Button>
      </StyledAction>
    </BaseContent>
  );
}

const StyledAction = styled(BaseContent.Action)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledTayTalkingFrame = styled(TayTalkingFrame)`
  height: calc(100% - 2rem);
`;
