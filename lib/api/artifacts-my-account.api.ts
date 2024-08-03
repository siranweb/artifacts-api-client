import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsMyAccountApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch all items in your bank. */
  public getBankItems(
    params: operations['get_bank_items_my_bank_items_get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_SimpleItemSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_SimpleItemSchema_']>(
      `/my/bank/items`,
      { query: params, isSecure: true },
    );
  }

  /** Fetch golds in your bank. */
  public getBankGold(): Promise<components['schemas']['GoldBankResponseSchema']> {
    return this.httpClient.get<components['schemas']['GoldBankResponseSchema']>(`/my/bank/gold`, {
      isSecure: true,
    });
  }

  /** Change your account password. Changing the password reset the account token. */
  public changePassword(
    body: components['schemas']['ChangePassword'],
  ): Promise<components['schemas']['ResponseSchema']> {
    return this.httpClient.post<components['schemas']['ResponseSchema']>(`/my/change_password`, {
      body,
      isSecure: true,
    });
  }
}
