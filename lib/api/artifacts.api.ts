import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { ArtifactsApiParams } from './types/artifacts-api.types';
import { ArtifactsMyCharactersApi } from './artifacts-my-characters.api';
import { ArtifactsCharactersApi } from './artifacts-characters.api';
import { ArtifactsMyAccountApi } from './artifacts-my-account.api';
import { ArtifactsMapsApi } from './artifacts-maps.api';
import { ArtifactsItemsApi } from './artifacts-items.api';
import { ArtifactsMonstersApi } from './artifacts-monsters.api';
import { ArtifactsResourcesApi } from './artifacts-resources.api';
import { ArtifactsEventsApi } from './artifacts-events.api';
import { ArtifactsGrandExchangeApi } from './artifacts-grand-exchange.api';
import { ArtifactsAccountsApi } from './artifacts-accounts.api';
import { ArtifactsTokenApi } from './artifacts-token.api';
import { GetStatusApiResult } from './types/api-schema-bindings.types';
import { ArtifactsLeaderboardApi } from './artifacts-leaderboard.api';

export class ArtifactsApi {
  public readonly myCharacters: ArtifactsMyCharactersApi;
  public readonly myAccount: ArtifactsMyAccountApi;
  public readonly characters: ArtifactsCharactersApi;
  public readonly accounts: ArtifactsAccountsApi;
  public readonly maps: ArtifactsMapsApi;
  public readonly items: ArtifactsItemsApi;
  public readonly monsters: ArtifactsMonstersApi;
  public readonly resources: ArtifactsResourcesApi;
  public readonly events: ArtifactsEventsApi;
  public readonly grandExchange: ArtifactsGrandExchangeApi;
  public readonly token: ArtifactsTokenApi;
  public readonly leaderboard: ArtifactsLeaderboardApi;

  protected constructor(private readonly httpClient: ArtifactsHttpClient) {
    this.myCharacters = new ArtifactsMyCharactersApi(httpClient);
    this.characters = new ArtifactsCharactersApi(httpClient);
    this.myAccount = new ArtifactsMyAccountApi(httpClient);
    this.maps = new ArtifactsMapsApi(httpClient);
    this.items = new ArtifactsItemsApi(httpClient);
    this.monsters = new ArtifactsMonstersApi(httpClient);
    this.resources = new ArtifactsResourcesApi(httpClient);
    this.events = new ArtifactsEventsApi(httpClient);
    this.grandExchange = new ArtifactsGrandExchangeApi(httpClient);
    this.accounts = new ArtifactsAccountsApi(httpClient);
    this.token = new ArtifactsTokenApi(httpClient);
    this.leaderboard = new ArtifactsLeaderboardApi(httpClient);
  }

  public static create(params: ArtifactsApiParams = {}): ArtifactsApi {
    const httpClient = new ArtifactsHttpClient(
      params.baseUrl ?? 'https://api.artifactsmmo.com',
      params.token ?? '',
    );
    return new ArtifactsApi(httpClient);
  }

  public getStatus(): Promise<GetStatusApiResult> {
    return this.httpClient.get<GetStatusApiResult>('/');
  }

  public setToken(token: string): void {
    this.httpClient.setToken(token);
  }
}
