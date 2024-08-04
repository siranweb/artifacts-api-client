import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllMapsApiQuery,
  GetAllMapsApiResult,
  GetMapApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMapsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch maps details. */
  public getAll(params: GetAllMapsApiQuery = {}): Promise<GetAllMapsApiResult> {
    return this.httpClient.get<GetAllMapsApiResult>(`/maps`, {
      query: params,
    });
  }

  /** Retrieve the details of a map. */
  public get(x: number, y: number): Promise<GetMapApiResult> {
    return this.httpClient.get<GetMapApiResult>(`/maps/${x}/${y}`);
  }
}
