import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components } from '../types/api-schema.types';
import { toBase64 } from '../utils/toBase64';

export class ArtifactsTokenApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /**
   * Use your account as HTTPBasic Auth to generate your token to use the API.
   * You can also generate your token directly on the website.
   */
  public generate(
    username: string,
    password: string,
  ): Promise<components['schemas']['TokenResponseSchema']> {
    const base64 = toBase64(`${username}:${password}`);
    return this.httpClient.post<components['schemas']['TokenResponseSchema']>(`/token`, {
      headers: {
        Authorization: `Basic ${base64}`,
      },
    });
  }
}
