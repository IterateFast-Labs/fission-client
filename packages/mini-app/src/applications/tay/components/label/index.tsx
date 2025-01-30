import { useState } from 'react';

import { BaseContent } from '@/components/layout';
import { useUnlabelledDatasetsByCampaignId } from '@/requests/data-labeling';

import Empty from './empty';
import { Stage } from './stage';

export function Label({
  onClear,
  onBackClick,
  campaignId,
}: {
  onClear: () => void;
  onBackClick: () => void;
  campaignId: string;
}) {
  const { data: datasetIdList, status } = useUnlabelledDatasetsByCampaignId({
    campaignId,
  });

  const [index, setIndex] = useState<number>(0);

  if (status === 'success' && !datasetIdList.length) {
    return <Empty onBackClick={onBackClick} />;
  }

  if (status === 'pending') {
    // intentionally left blank
    // because it already loaded when user enter the gate screen
  }

  return (
    <BaseContent>
      <BaseContent.Header>
        <h2 className="title">
          Question {index + 1} of {datasetIdList!.length}
        </h2>
        <p className="description">Please check the question and answer it.</p>
      </BaseContent.Header>
      <Stage
        datasetId={datasetIdList![index]?.id}
        onDetermineOption={() => {
          if (index + 1 === datasetIdList!.length) {
            onClear();
          } else {
            setIndex(index + 1);
          }
        }}
      />
    </BaseContent>
  );
}
