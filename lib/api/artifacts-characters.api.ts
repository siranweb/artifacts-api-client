import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  CreateCharacterApiBody,
  CreateCharacterApiResult,
  GetAllCharactersApiQuery,
  GetAllCharactersApiResult,
  GetCharacterApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsCharactersApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Create new character on your account. You can create up to 5 characters. */
  public create(body: CreateCharacterApiBody): Promise<CreateCharacterApiResult> {
    return this.httpClient.post<CreateCharacterApiResult>(`/characters/create`, {
      body,
      isSecure: true,
    });
  }

  /** Fetch characters details. */
  public getAll(params: GetAllCharactersApiQuery = {}): Promise<GetAllCharactersApiResult> {
    return this.httpClient.get<GetAllCharactersApiResult>(`/characters`, {
      query: params,
    });
  }

  /** Fetch characters details. */
  public get(name: string): Promise<GetCharacterApiResult> {
    return this.httpClient.get<GetCharacterApiResult>(`/characters/${name}`);
  }
}
