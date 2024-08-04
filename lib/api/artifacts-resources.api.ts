import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllResourcesApiQuery,
  GetAllResourcesApiResult,
  GetResourceApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsResourcesApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch resources details. */
  public getAll(params: GetAllResourcesApiQuery = {}): Promise<GetAllResourcesApiResult> {
    return this.httpClient.get<GetAllResourcesApiResult>(`/resources`, {
      query: params,
    });
  }

  /** Retrieve the details of a resource. */
  public get(code: string): Promise<GetResourceApiResult> {
    return this.httpClient.get<GetResourceApiResult>(`/resources/${code}`);
  }
}
