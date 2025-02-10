import { useQuery } from '@tanstack/react-query';

import { useAuthStore } from '@/global-state/auth-store';

import { client } from './config/axios-instance';

export async function getAgentStatus({
  agentId,
  type,
}: {
  agentId: string;
  type: string;
}) {
  const { data } = await client.get<{
    createdAt: string;
    updatedAt: string;
    message: string;
  }>('/agent/status', {
    params: {
      agentId,
      type,
    },
  });

  return data;
}

export function useAgentStatus({
  agentId,
  type,
}: {
  agentId: string;
  type: string;
}) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: ['agent', 'status', agentId, type, accessToken],
    queryFn: () => getAgentStatus({ agentId, type }),
    enabled: Boolean(accessToken) && Boolean(agentId) && Boolean(type),
  });

  return Object.freeze(query);
}
