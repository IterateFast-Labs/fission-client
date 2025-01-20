import { useQuery } from '@tanstack/react-query';

import { useAuthStore } from '@/global-state/auth-store';

import { client } from './config/axios-instance';

export interface LeaderBoardItem {
  rank: number;
  nickname: string;
  labelingPoints: number;
  referralCount: number;
  totalPoints: number;
}

export interface UserRank {
  rank: number;
  nickname: string;
  labelingPoints: number;
  referralCount: number;
  totalPoints: number;
}

interface LeaderBoardResponse {
  leaderboard: LeaderBoardItem[];
  userRank: UserRank;
}

export async function getLeaderboard() {
  const { data } = await client.get<LeaderBoardResponse>('/leaderboard');

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
}

export function useLeaderboard() {
  const accessToken = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ['leaderboard', accessToken],
    queryFn: getLeaderboard,
    enabled: !!accessToken,
  });
}
