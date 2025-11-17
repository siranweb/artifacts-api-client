import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  FightSimulationApiBody,
  FightSimulationApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsSimulationApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Simulate combat with fake characters against a monster multiple times. Member or founder account required. */
  public simulate(body: FightSimulationApiBody): Promise<FightSimulationApiResult> {
    return this.httpClient.post<FightSimulationApiResult>(`/simulation/fight_simulation`, {
      body,
      isSecure: true,
    });
  }
}
