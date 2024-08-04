import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { GetAllEventsApiQuery, GetAllEventsApiResult } from './types/api-schema-bindings.types';

export class ArtifactsEventsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch events details. */
  public getAll(params: GetAllEventsApiQuery = {}): Promise<GetAllEventsApiResult> {
    return this.httpClient.get<GetAllEventsApiResult>(`/events`, {
      query: params,
    });
  }
}
