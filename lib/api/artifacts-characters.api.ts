import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsCharactersApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Create new character on your account. You can create up to 5 characters. */
  public create(
    body: components['schemas']['AddCharacterSchema'],
  ): Promise<components['schemas']['CharacterResponseSchema']> {
    return this.httpClient.post<components['schemas']['CharacterResponseSchema']>(
      `/characters/create`,
      { body, isSecure: true },
    );
  }

  /** Fetch characters details. */
  public getAll(
    params: operations['get_all_characters_characters__get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_CharacterSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_CharacterSchema_']>(`/characters`, {
      query: params,
    });
  }

  /** Fetch characters details. */
  public get(name: string): Promise<components['schemas']['CharacterResponseSchema']> {
    return this.httpClient.get<components['schemas']['CharacterResponseSchema']>(
      `/characters/${name}`,
    );
  }
}
