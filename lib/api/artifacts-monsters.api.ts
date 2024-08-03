import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsMonstersApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch monsters details. */
  public getAll(
    params: operations['get_all_monsters_monsters__get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_MonsterSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_MonsterSchema_']>(`/monsters`, {
      query: params,
    });
  }

  /** Retrieve the details of a monster. */
  public get(code: string): Promise<components['schemas']['MonsterResponseSchema']> {
    return this.httpClient.get<components['schemas']['MonsterResponseSchema']>(`/monsters/${code}`);
  }
}
