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

  const isEmpty = status === 'success' && !datasetIdList.length;

  if (isEmpty) {
    return <Empty onBackClick={onBackClick} />;
  }

  return (
    <BaseContent>
      <BaseContent.Header>
        <h2 className="title">
          Question {index + 1} of {datasetIdList!.length}
        </h2>
        <p className="description">
          Please review the question and select your answer.
        </p>
      </BaseContent.Header>
      <Stage
        onErrorBackClick={onBackClick}
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
