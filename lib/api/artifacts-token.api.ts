import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { toBase64 } from '../utils/toBase64';
import { GenerateTokenApiResult } from './types/api-schema-bindings.types';

export class ArtifactsTokenApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /**
   * Use your account as HTTPBasic Auth to generate your token to use the API.
   * You can also generate your token directly on the website.
   */
  public generate(username: string, password: string): Promise<GenerateTokenApiResult> {
    const base64 = toBase64(`${username}:${password}`);
    return this.httpClient.post<GenerateTokenApiResult>(`/token`, {
      headers: {
        Authorization: `Basic ${base64}`,
      },
    });
  }
}
