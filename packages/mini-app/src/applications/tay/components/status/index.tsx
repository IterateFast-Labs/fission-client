import { useState } from 'react';

import { BaseContent } from '@/components/layout';
import { useAgentStatus } from '@/requests/agent';

import { VisualNovelInterface } from './visual-novel-interface';

export type Scene = {
  sceneId: string;
  background: string;
  character: string;
  characterStyle?: React.CSSProperties;
  whoIsTalking: string;
  dialog: string | (() => Promise<string>);
  select: {
    text: string;
    onClick: () => void;
  }[];
  onNext: () => void;
};

export function TayStatus({ onBackClick }: { onBackClick: () => void }) {
  const { data } = useAgentStatus({
    agentId: '1-TAY',
  });

  const [qnaIdx, setQnaIdx] = useState<number>(0);
  const [sceneId, setSceneId] = useState<string>('intro');

  const scenes: Scene[] = [
    {
      sceneId: 'intro',
      background: 'default',
      character: 'tay',
      whoIsTalking: 'Tay',
      dialog: 'Hi, My name is Tay. I am here and ready to tell my status.',
      select: [],
      onNext: () => {
        setSceneId('question-select');
      },
    },
    {
      sceneId: 'question-select',
      background: 'default',
      character: 'tay',
      whoIsTalking: 'Tay',
      dialog:
        qnaIdx === 0
          ? 'Do you have any questions?'
          : qnaIdx < (data?.qna.length || 0)
            ? 'Do you have any other questions?'
            : '...',
      select: [
        {
          text: data?.qna[qnaIdx].question || '...',
          onClick: () => {
            setSceneId('question-talkback');
          },
        },
        {
          text: 'No, I am good.',
          onClick: () => {
            setSceneId('bye');
          },
        },
      ],
      onNext: () => {},
    },
    {
      sceneId: 'question-talkback',
      background: 'default',
      character: 'tay',
      characterStyle: {
        opacity: 0.2,
      },
      whoIsTalking: 'You',
      dialog: data?.qna[qnaIdx].question || '...',
      select: [],
      onNext: () => {
        setSceneId('answer');
      },
    },
    {
      sceneId: 'answer',
      background: 'default',
      character: 'tay',
      whoIsTalking: 'Tay',
      dialog: async () => {
        return data?.qna[qnaIdx].answer || '...';
      },
      select: [],
      onNext: () => {
        if (qnaIdx < (data?.qna.length || 0) - 1) {
          setQnaIdx(qnaIdx + 1);
          setSceneId('question-select');
        } else {
          setSceneId('bye');
        }
      },
    },
    {
      sceneId: 'bye',
      background: 'default',
      character: 'tay',
      whoIsTalking: 'Tay',
      dialog: 'Thank you for your time. Have a good day!',
      select: [],
      onNext: () => {
        // get out of the interface
        onBackClick();
      },
    },
  ];

  return (
    <BaseContent>
      <BaseContent.Header>
        <h2 className="title">TAY's status</h2>
        <p className="description">Together And You</p>
      </BaseContent.Header>
      <BaseContent.Body>
        <VisualNovelInterface sceneList={scenes} sceneId={sceneId} />
      </BaseContent.Body>
    </BaseContent>
  );
}
