import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { toBase64 } from '../utils/toBase64';
import { GenerateTokenResult } from './types/api-schema-bindings.types';

export class ArtifactsTokenApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /**
   * Use your account as HTTPBasic Auth to generate your token to use the API.
   * You can also generate your token directly on the website.
   */
  public generate(username: string, password: string): Promise<GenerateTokenResult> {
    const base64 = toBase64(`${username}:${password}`);
    return this.httpClient.post<GenerateTokenResult>(`/token`, {
      headers: {
        Authorization: `Basic ${base64}`,
      },
    });
  }
}
