import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAchievementApiResult,
  GetAllAchievementsApiQuery,
  GetAllAchievementsApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsAchievementsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** List of all achievements. */
  public getAll(params: GetAllAchievementsApiQuery = {}): Promise<GetAllAchievementsApiResult> {
    return this.httpClient.get<GetAllAchievementsApiResult>(`/achievements`, {
      query: params,
    });
  }

  /** Retrieve the details of an achievement. */
  public get(code: string): Promise<GetAchievementApiResult> {
    return this.httpClient.get<GetAchievementApiResult>(`/achievements/${code}`);
  }
}
