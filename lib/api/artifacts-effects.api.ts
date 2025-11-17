import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllEffectsApiQuery,
  GetAllEffectsApiResult,
  GetEffectApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsEffectsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** List of all effects. Effects are used by equipment, tools, runes, consumables and monsters. An effect is an action that produces an effect on the game. */
  public getAll(params: GetAllEffectsApiQuery = {}): Promise<GetAllEffectsApiResult> {
    return this.httpClient.get<GetAllEffectsApiResult>(`/effects`, {
      query: params,
    });
  }

  /** Retrieve the details of an effect. */
  public get(code: string): Promise<GetEffectApiResult> {
    return this.httpClient.get<GetEffectApiResult>(`/effects/${code}`);
  }
}
