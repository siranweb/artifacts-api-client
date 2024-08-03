import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components } from '../types/api-schema.types';

export class ArtifactsAccountsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Create an account. */
  public create(
    body: components['schemas']['AddAccountSchema'],
  ): Promise<components['schemas']['ResponseSchema']> {
    return this.httpClient.post<components['schemas']['ResponseSchema']>(`/accounts/create`, {
      body,
    });
  }
}
