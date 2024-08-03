import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsItemsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch items details. */
  public getAll(
    params: operations['get_all_items_items__get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_ItemSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_ItemSchema_']>(`/items`, {
      query: params,
    });
  }

  /** Retrieve the details of an item. */
  public get(code: string): Promise<components['schemas']['ItemResponseSchema']> {
    return this.httpClient.get<components['schemas']['ItemResponseSchema']>(`/items/${code}`);
  }
}
