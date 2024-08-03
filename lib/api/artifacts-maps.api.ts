import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsMapsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch maps details. */
  public getAll(
    params: operations['get_all_maps_maps__get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_SimpleItemSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_SimpleItemSchema_']>(`/maps`, {
      query: params,
    });
  }

  /** Retrieve the details of a map. */
  public get(
    x: number,
    y: number,
    params: operations['get_all_maps_maps__get']['parameters']['query'] = {},
  ): Promise<components['schemas']['MapResponseSchema']> {
    return this.httpClient.get<components['schemas']['MapResponseSchema']>(`/maps/${x}/${y}`, {
      query: params,
    });
  }
}
