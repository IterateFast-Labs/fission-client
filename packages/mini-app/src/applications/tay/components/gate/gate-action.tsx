import { memo } from 'react';
import { Button } from 'react95';

export const GateAction = memo(function GateAction({
  onStart,
  onClickStatus,
  datasetList,
}: {
  onStart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickStatus: () => void;
  datasetList: string[];
}) {
  return (
    <>
      <p>Please teach TAY how to respond</p>
      <Button
        fullWidth
        size="lg"
        onClick={onStart}
        disabled={!datasetList?.length}
      >
        {datasetList?.length ? 'Start' : 'I already collected enough data!'}
      </Button>
      <Button fullWidth size="lg" onClick={onClickStatus}>
        Check Tay's status
      </Button>
    </>
  );
});
