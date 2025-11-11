import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  CreateCharacterApiBody,
  CreateCharacterApiResult,
  DeleteCharacterApiBody,
  DeleteCharacterApiResult,
  GetActiveCharactersApiQuery,
  GetActiveCharactersApiResult,
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

  /** Delete character on your account. */
  public delete(body: DeleteCharacterApiBody): Promise<DeleteCharacterApiResult> {
    return this.httpClient.post<DeleteCharacterApiResult>('/characters/delete', {
      body,
      isSecure: true,
    });
  }

  /** Fetch active characters details. */
  public getActive(
    params: GetActiveCharactersApiQuery = {},
  ): Promise<GetActiveCharactersApiResult> {
    return this.httpClient.get<GetActiveCharactersApiResult>(`/characters/active`, {
      query: params,
    });
  }

  /** Retrieve the details of a character. */
  public get(name: string): Promise<GetCharacterApiResult> {
    return this.httpClient.get<GetCharacterApiResult>(`/characters/${name}`);
  }
}
