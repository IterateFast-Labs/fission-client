import React, { Fragment, useState } from 'react';
import { Tab, TabBody, Tabs } from 'react95';
import styled from 'styled-components';

import { Point } from './point';
// import { Point } from './point';
import { Profile } from './profile';

const tabs: {
  title: string;
  body: React.ReactNode;
}[] = [
  {
    title: 'Profile',
    body: <Profile />,
  },
  {
    title: 'Point',
    body: <Point />,
  },
];

export function InfoTabs() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <Container>
      <StyledTabs
        value={selectedTab}
        onChange={(value) => setSelectedTab(Number(value))}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} value={index}>
            {tab.title}
          </Tab>
        ))}
      </StyledTabs>
      <TabBody>
        {tabs.map((tab, index) =>
          selectedTab === index ? (
            <Fragment key={index}>{tab.body}</Fragment>
          ) : null,
        )}
      </TabBody>
    </Container>
  );
}

const StyledTabs = styled(Tabs)`
  display: flex;
  padding-right: 1rem;

  & button {
    flex: 1;
  }

  & button[aria-selected='true'] {
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const Container = styled.div`
  height: 100%;
  padding: 0.5rem 0.5rem;
`;
