import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllActiveEventsApiQuery,
  GetAllActiveEventsApiResult,
  GetAllEventsApiQuery,
  GetAllEventsApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsEventsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch active events details. */
  public getAllActive(
    params: GetAllActiveEventsApiQuery = {},
  ): Promise<GetAllActiveEventsApiResult> {
    return this.httpClient.get<GetAllActiveEventsApiResult>(`/events/active`, {
      query: params,
    });
  }

  /** Fetch events details. */
  public getAll(params: GetAllEventsApiQuery = {}): Promise<GetAllEventsApiResult> {
    return this.httpClient.get<GetAllEventsApiResult>(`/events`, {
      query: params,
    });
  }
}
