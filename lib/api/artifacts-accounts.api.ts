import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { CreateAccountApiBody, CreateAccountApiResult } from './types/api-schema-bindings.types';

export class ArtifactsAccountsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Create an account. */
  public create(body: CreateAccountApiBody): Promise<CreateAccountApiResult> {
    return this.httpClient.post<CreateAccountApiResult>(`/accounts/create`, {
      body,
    });
  }
}
