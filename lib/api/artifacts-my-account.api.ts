import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  ChangePasswordApiBody,
  ChangePasswordApiResult,
  GetAccountDetailsApiResult,
  GetBankApiResult,
  GetBankItemsApiQuery,
  GetBankItemsApiResult,
  GetMyGrandExchangeSellHistoryApiRequest,
  GetMyGrandExchangeSellHistoryApiResult,
  GetMyGrandExchangeSellOrdersApiRequest,
  GetMyGrandExchangeSellOrdersApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMyAccountApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch bank details. */
  public getBank(): Promise<GetBankApiResult> {
    return this.httpClient.get<GetBankApiResult>(`/my/bank`, {
      isSecure: true,
    });
  }

  /** Fetch all items in your bank. */
  public getBankItems(params: GetBankItemsApiQuery = {}): Promise<GetBankItemsApiResult> {
    return this.httpClient.get<GetBankItemsApiResult>(`/my/bank/items`, {
      query: params,
      isSecure: true,
    });
  }

  /** Fetch your sell orders details. */
  public getGrandExchangeSellOrders(
    params: GetMyGrandExchangeSellOrdersApiRequest = {},
  ): Promise<GetMyGrandExchangeSellOrdersApiResult> {
    return this.httpClient.get<GetMyGrandExchangeSellOrdersApiResult>(`/my/grandexchange/orders`, {
      query: params,
      isSecure: true,
    });
  }

  /** Fetch your sales history of the last 7 days. */
  public getGrandExchangeSellHistory(
    params: GetMyGrandExchangeSellHistoryApiRequest = {},
  ): Promise<GetMyGrandExchangeSellHistoryApiResult> {
    return this.httpClient.get<GetMyGrandExchangeSellHistoryApiResult>(
      `/my/grandexchange/history`,
      {
        query: params,
        isSecure: true,
      },
    );
  }

  /** Fetch account details. */
  public get(): Promise<GetAccountDetailsApiResult> {
    return this.httpClient.get<GetAccountDetailsApiResult>(`/my/details`, { isSecure: true });
  }

  /** Change your account password. Changing the password reset the account token. */
  public changePassword(body: ChangePasswordApiBody): Promise<ChangePasswordApiResult> {
    return this.httpClient.post<ChangePasswordApiResult>(`/my/change_password`, {
      body,
      isSecure: true,
    });
  }
}
