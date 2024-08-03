import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsResourcesApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch resources details. */
  public getAll(
    params: operations['get_all_resources_resources__get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_ResourceSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_ResourceSchema_']>(`/resources`, {
      query: params,
    });
  }

  /** Retrieve the details of a resource. */
  public get(code: string): Promise<components['schemas']['ResourceResponseSchema']> {
    return this.httpClient.get<components['schemas']['ResourceResponseSchema']>(
      `/resources/${code}`,
    );
  }
}
