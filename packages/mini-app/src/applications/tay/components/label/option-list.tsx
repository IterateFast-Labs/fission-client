import { Button } from 'react95';
import styled from 'styled-components';

import { DatasetDetail, InputOption } from '@/requests/data-labeling';

export function OptionList({
  option,
  onOptionClick,
}: {
  option: DatasetDetail['dataSetOption'];
  onOptionClick: (option: InputOption) => void;
}) {
  const list = (Object.keys(option) as Array<keyof typeof option>)
    .filter((key) => key.includes('option'))
    .map((key) => option[key]);

  return (
    <StyledContainer>
      {list.map(
        (item, index) =>
          Boolean(item) && (
            <Button
              size="lg"
              fullWidth
              key={index}
              onClick={() => {
                onOptionClick(`OPTION${index + 1}` as InputOption);
              }}
            >
              {item}
            </Button>
          ),
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
`;
