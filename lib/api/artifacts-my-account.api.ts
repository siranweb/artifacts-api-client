import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  ChangePasswordApiBody,
  ChangePasswordApiResult,
  GetBankGoldApiResult,
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

  /** Fetch golds in your bank. */
  public getBankGold(): Promise<GetBankGoldApiResult> {
    return this.httpClient.get<GetBankGoldApiResult>(`/my/bank/gold`, {
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
