import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  Table,
  TableBody,
  TableDataCell,
  TableHeadCell,
  TableRow,
} from 'react95';
import styled from 'styled-components';

import { useMyInfo, useReferralList } from '@/requests/user';

dayjs.extend(relativeTime);

export function Profile() {
  const { data: myInfo } = useMyInfo();
  const { data: referralData } = useReferralList({
    page: 1,
    size: 1,
  });

  return (
    <Container>
      <StyledTable>
        <TableBody>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableDataCell>{myInfo?.nickname}</TableDataCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>TG Handle</TableHeadCell>
            <TableDataCell>@{myInfo?.telegramHandle}</TableDataCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Registered 🗓️</TableHeadCell>
            <TableDataCell>{dayjs(myInfo?.createdAt).fromNow()}</TableDataCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Updated 🗓️</TableHeadCell>
            <TableDataCell>{dayjs(myInfo?.updatedAt).fromNow()}</TableDataCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Referral Count</TableHeadCell>
            <TableDataCell>{referralData?.count}</TableDataCell>
          </TableRow>
        </TableBody>
      </StyledTable>
    </Container>
  );
}

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

const StyledTable = styled(Table)`
  table-layout: fixed;

  & th {
    width: 126px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.25;
    letter-spacing: -0.015em;
    padding: 4px;
  }

  & tr:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderLight};
  }

  & td {
    overflow-x: auto;
    white-space: nowrap;
  }
`;
