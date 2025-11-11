import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllActiveEventsApiQuery,
  GetAllActiveEventsApiResult,
  GetAllEventsApiQuery,
  GetAllEventsApiResult,
  SpawnEventApiBody,
  SpawnEventApiResult,
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

  /**
   * Spawn a specific event by code consuming 1 event token.
   *
   * Rules:
   * - Maximum active events defined by utils.config.max_active_events().
   * - Event must not already be active.
   * - Member or founder account required.
   */
  public spawn(body: SpawnEventApiBody): Promise<SpawnEventApiResult> {
    return this.httpClient.post<SpawnEventApiResult>(`/events/spawn`, {
      body,
      isSecure: true,
    });
  }
}
