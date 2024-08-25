import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  ChangePasswordApiBody,
  ChangePasswordApiResult,
  GetBankApiResult,
  GetBankItemsApiQuery,
  GetBankItemsApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMyAccountApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch all items in your bank. */
  public getBankItems(params: GetBankItemsApiQuery = {}): Promise<GetBankItemsApiResult> {
    return this.httpClient.get<GetBankItemsApiResult>(`/my/bank/items`, {
      query: params,
      isSecure: true,
    });
  }

  /** Fetch bank details. */
  public getBank(): Promise<GetBankApiResult> {
    return this.httpClient.get<GetBankApiResult>(`/my/bank`, {
      isSecure: true,
    });
  }

  /** Change your account password. Changing the password reset the account token. */
  public changePassword(body: ChangePasswordApiBody): Promise<ChangePasswordApiResult> {
    return this.httpClient.post<ChangePasswordApiResult>(`/my/change_password`, {
      body,
      isSecure: true,
    });
  }
}
