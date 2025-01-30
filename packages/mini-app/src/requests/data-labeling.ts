import { useMutation, useQuery } from '@tanstack/react-query';

import { useAuthStore } from '@/global-state/auth-store';

import { client } from './config/axios-instance';

export async function getPlayableDataset() {
  const { data } = await client.get<{ id: string }[]>('/dataset/playable');

  return data.map((d) => Object.freeze(d));
}

export function usePlayableDataset() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: ['dataset', accessToken],
    queryFn: getPlayableDataset,
    enabled: Boolean(accessToken),
  });

  return Object.freeze(query);
}

export interface DatasetDetail {
  campaignId: string;
  id: string;
  title: string;
  type: string;
  text: string | null;
  expectation: boolean;
  url: string;
  source: string;
  datasetTrackId: string;
  point: number;
  createdAt: string;
  updatedAt: string;
  dataSetTrack: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  };
  dataSetOption: {
    id: string;
    dataSetId: string;
    option1: string | null;
    option2: string | null;
    option3: string | null;
    option4: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export async function getDatasetDetail(datasetId: string) {
  const { data } = await client.get<DatasetDetail>(`/dataset/${datasetId}`);
  return Object.freeze(data);
}

export function useDatasetDetail({ datasetId }: { datasetId: string }) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: ['dataset', datasetId, accessToken],
    queryFn: () => getDatasetDetail(datasetId),
    enabled: Boolean(accessToken && datasetId),
  });

  return Object.freeze(query);
}

export enum InputOption {
  OPTION1 = 'OPTION1',
  OPTION2 = 'OPTION2',
  OPTION3 = 'OPTION3',
  OPTION4 = 'OPTION4',
}

export async function determineDatasetOption({
  datasetId,
  option,
  campaignId,
}: {
  datasetId: string;
  option: InputOption;
  campaignId: string;
}) {
  const { data } = await client.post<{ point: number }>(`/dataLabeling`, {
    // TODO: need to change DTO to `datasetId`
    dataSetId: datasetId,
    inputOption: option,
    campaignId,
  });

  return data;
}

export function useDetermineDatasetOption({
  datasetId,
}: {
  datasetId?: string;
}) {
  return useMutation({
    mutationFn: determineDatasetOption,
    mutationKey: ['dataset', 'determine', datasetId],
  });
}

export interface AgentWithCampaign {
  campaign: {
    id: string;
  }[];

  id: string;
  createdAt: string;
  updatedAt: string;
  agentType: string;
}

export async function getAgentCampainId({ agentType }: { agentType: string }) {
  const {
    data: { id },
  } = await client.get<{
    id: string;
  }>(`/dataset/agent/${agentType}`);

  return Object.freeze(id);
}

export function useAgentCampainId({ agentType }: { agentType: string }) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: ['dataset', 'agent', agentType],
    queryFn: () => getAgentCampainId({ agentType }),
    enabled: Boolean(accessToken),
  });

  return Object.freeze(query);
}

export async function getUnlabelledDatasetsByCampaignId({
  campaignId,
}: {
  campaignId: string;
}) {
  const { data } = await client.get<
    {
      id: string;
    }[]
  >(`/dataset/campaign`, {
    params: {
      campaignId,
    },
  });

  return data.map((d) => Object.freeze(d));
}

export function useUnlabelledDatasetsByCampaignId({
  campaignId,
}: {
  campaignId: string;
}) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: ['dataset', 'campaign', campaignId],
    queryFn: () => getUnlabelledDatasetsByCampaignId({ campaignId }),
    enabled: Boolean(accessToken) && Boolean(campaignId),
  });

  return Object.freeze(query);
}
