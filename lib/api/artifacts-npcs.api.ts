import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllNpcsApiQuery,
  GetAllNpcsApiResult,
  GetAllNpcsItemsApiQuery,
  GetAllNpcsItemsApiResult,
  GetNpcApiResult,
  GetNpcItemsApiQuery,
  GetNpcItemsApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsNpcsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch NPCs details. */
  public getAll(params: GetAllNpcsApiQuery = {}): Promise<GetAllNpcsApiResult> {
    return this.httpClient.get<GetAllNpcsApiResult>(`/npcs/details`, {
      query: params,
    });
  }

  /** Retrieve the details of a NPC. */
  public get(code: string): Promise<GetNpcApiResult> {
    return this.httpClient.get<GetNpcApiResult>(`/npcs/details/${code}`);
  }

  /** Retrieve the items list of a NPC. If the NPC has items to buy, sell or trade, they will be displayed. */
  public getItems(code: string, params: GetNpcItemsApiQuery = {}): Promise<GetNpcItemsApiResult> {
    return this.httpClient.get<GetNpcItemsApiResult>(`/npcs/items/${code}`, {
      query: params,
    });
  }

  /** Retrieve the list of all NPC items. */
  public getAllItems(params: GetAllNpcsItemsApiQuery = {}): Promise<GetAllNpcsItemsApiResult> {
    return this.httpClient.get<GetAllNpcsItemsApiResult>(`/npcs/items`, {
      query: params,
    });
  }
}
