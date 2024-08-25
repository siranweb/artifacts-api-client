import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { GetLeaderboardApiQuery, GetLeaderboardApiResult } from './types/api-schema-bindings.types';

export class ArtifactsLeaderboardApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch leaderboard details. */
  public getAll(params: GetLeaderboardApiQuery = {}): Promise<GetLeaderboardApiResult> {
    return this.httpClient.get<GetLeaderboardApiResult>(`/leaderboard`, {
      query: params,
    });
  }
}
