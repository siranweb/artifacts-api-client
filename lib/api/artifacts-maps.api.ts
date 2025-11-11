import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllMapsApiQuery,
  GetAllMapsApiResult,
  GetLayerMapsApiQuery,
  GetLayerMapsApiResult,
  GetMapByIdApiResult,
  GetMapByPositionApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMapsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch maps details. */
  public getAll(params: GetAllMapsApiQuery = {}): Promise<GetAllMapsApiResult> {
    return this.httpClient.get<GetAllMapsApiResult>(`/maps`, {
      query: params,
    });
  }

  /** Fetch maps details. */
  public getLayerMaps(
    layer: 'interior' | 'overworld' | 'underground',
    params: GetLayerMapsApiQuery = {},
  ): Promise<GetLayerMapsApiResult> {
    return this.httpClient.get<GetLayerMapsApiResult>(`/maps/${layer}`, {
      query: params,
    });
  }

  /** Retrieve the details of a map by layer and coordinates. */
  public getByPosition(
    layer: 'interior' | 'overworld' | 'underground',
    x: number,
    y: number,
  ): Promise<GetMapByPositionApiResult> {
    return this.httpClient.get<GetMapByPositionApiResult>(`/maps/${layer}/${x}/${y}`);
  }

  /** Retrieve the details of a map by its unique ID. */
  public getById(map_id: number): Promise<GetMapByIdApiResult> {
    return this.httpClient.get<GetMapByIdApiResult>(`/maps/${map_id}`);
  }
}
