import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsGrandExchangeApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch Grand Exchange items details. */
  public getAll(
    params: operations['get_all_ge_items_ge__get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_GEItemSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_GEItemSchema_']>(`/ge`, {
      query: params,
    });
  }

  /** Retrieve the details of a Grand Exchange item. */
  public get(code: string): Promise<components['schemas']['GEItemResponseSchema']> {
    return this.httpClient.get<components['schemas']['GEItemResponseSchema']>(`/ge/${code}`);
  }
}
