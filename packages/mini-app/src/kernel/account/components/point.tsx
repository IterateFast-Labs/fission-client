import {
  Counter,
  GroupBox,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'react95';
import styled from 'styled-components';

import { useMyPoint } from '@/requests/user';

export function Point() {
  const { data } = useMyPoint();

  return (
    <Container>
      <GroupBox label="Your Point">
        <StyledCounter size="lg" value={data} />
      </GroupBox>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell width={140}>Type</TableHeadCell>
            <TableHeadCell>Point</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell>Labeling</TableDataCell>
            <TableDataCell>{data?.toLocaleString('en-US')}</TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledCounter = styled(Counter)`
  width: 100%;
  justify-content: end;
`;
