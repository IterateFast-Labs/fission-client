import { memo } from 'react';
import { Button } from 'react95';

export const GateAction = memo(function GateAction({
  onStart,
  datasetList,
}: {
  onStart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  datasetList: string[];
}) {
  return (
    <>
      <p>Please teach TAY how to talk</p>
      <Button
        fullWidth
        size="lg"
        onClick={onStart}
        disabled={!datasetList?.length}
      >
        {datasetList?.length ? 'Start' : 'I already collected enough data!'}
      </Button>
    </>
  );
});
