import { useQuery } from '@tanstack/react-query';

import { useAuthStore } from '@/global-state/auth-store';

import { client } from './config/axios-instance';

export async function getAgentStatus({ agentId }: { agentId: string }) {
  const { data } = await client.get<{
    agentId: string;
    id: string;
    qna: {
      question: string;
      answer: string;
    }[];
    createdAt: string;
    updatedAt: string;
  }>(`/agent/status/${agentId}`);

  return data;
}

export function useAgentStatus({ agentId }: { agentId: string }) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: ['agent', 'status', agentId, accessToken],
    queryFn: () => getAgentStatus({ agentId }),
    enabled: Boolean(accessToken) && Boolean(agentId),
  });

  return Object.freeze(query);
}
