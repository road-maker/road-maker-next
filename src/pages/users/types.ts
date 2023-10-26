export interface TokenInfo {
  accessToken?: string;
  grantType?: string;
  refreshToken?: string;
}
export interface NewUser {
  accessToken?: TokenInfo["accessToken"];
  nickname?: string;
  text?: string;
  password?: string;
  email?: string;
  id?: number;
  avatarUrl?: string | null;
  baekjoonId?: string | null;
  bio?: string | null;
  blogUrl?: string | null;
  exp?: number;
  githubUrl?: string | null;
  level?: 0;
  inProcessRoadmapDto?: [];
}
export type User = NewUser;
