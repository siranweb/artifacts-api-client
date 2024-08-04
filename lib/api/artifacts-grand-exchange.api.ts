import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllGrandExchangeApiQuery,
  GetAllGrandExchangeApiResult,
  GetGrandExchangeApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsGrandExchangeApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch Grand Exchange items details. */
  public getAll(params: GetAllGrandExchangeApiQuery = {}): Promise<GetAllGrandExchangeApiResult> {
    return this.httpClient.get<GetAllGrandExchangeApiResult>(`/ge`, {
      query: params,
    });
  }

  /** Retrieve the details of a Grand Exchange item. */
  public get(code: string): Promise<GetGrandExchangeApiResult> {
    return this.httpClient.get<GetGrandExchangeApiResult>(`/ge/${code}`);
  }
}
