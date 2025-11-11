import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllBadgesApiQuery,
  GetAllBadgesApiResult,
  GetBadgeApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsBadgesApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** List of all badges. */
  public getAll(params: GetAllBadgesApiQuery = {}): Promise<GetAllBadgesApiResult> {
    return this.httpClient.get<GetAllBadgesApiResult>(`/badges`, {
      query: params,
    });
  }

  /** Retrieve the details of a badge. */
  public get(code: string): Promise<GetBadgeApiResult> {
    return this.httpClient.get<GetBadgeApiResult>(`/badges/${code}`);
  }
}
