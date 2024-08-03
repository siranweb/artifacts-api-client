import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsEventsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch events details. */
  public getAll(
    params: operations['get_all_events_events__get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_EventSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_EventSchema_']>(`/events`, {
      query: params,
    });
  }
}
