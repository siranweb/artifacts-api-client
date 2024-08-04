import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllMonstersApiQuery,
  GetAllMonstersApiResult,
  GetMonsterApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMonstersApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch monsters details. */
  public getAll(params: GetAllMonstersApiQuery = {}): Promise<GetAllMonstersApiResult> {
    return this.httpClient.get<GetAllMonstersApiResult>(`/monsters`, {
      query: params,
    });
  }

  /** Retrieve the details of a monster. */
  public get(code: string): Promise<GetMonsterApiResult> {
    return this.httpClient.get<GetMonsterApiResult>(`/monsters/${code}`);
  }
}
