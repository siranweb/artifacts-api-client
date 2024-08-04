import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllItemsApiQuery,
  GetAllItemsApiResult,
  GetItemApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsItemsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch items details. */
  public getAll(params: GetAllItemsApiQuery = {}): Promise<GetAllItemsApiResult> {
    return this.httpClient.get<GetAllItemsApiResult>(`/items`, {
      query: params,
    });
  }

  /** Retrieve the details of an item. */
  public get(code: string): Promise<GetItemApiResult> {
    return this.httpClient.get<GetItemApiResult>(`/items/${code}`);
  }
}
