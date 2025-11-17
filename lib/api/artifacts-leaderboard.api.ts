import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAccountsLeaderboardApiQuery,
  GetAccountsLeaderboardApiResult,
  GetCharactersLeaderboardApiQuery,
  GetCharactersLeaderboardApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsLeaderboardApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch leaderboard details. */
  public getCharacters(
    params: GetCharactersLeaderboardApiQuery = {},
  ): Promise<GetCharactersLeaderboardApiResult> {
    return this.httpClient.get<GetCharactersLeaderboardApiResult>(`/leaderboard/characters`, {
      query: params,
    });
  }

  /** Fetch leaderboard details. */
  public getAccounts(
    params: GetAccountsLeaderboardApiQuery = {},
  ): Promise<GetAccountsLeaderboardApiResult> {
    return this.httpClient.get<GetAccountsLeaderboardApiResult>(`/leaderboard/accounts`, {
      query: params,
    });
  }
}
