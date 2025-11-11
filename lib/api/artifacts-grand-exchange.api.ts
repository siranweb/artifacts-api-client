import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetGrandExchangeSellHistoryApiQuery,
  GetGrandExchangeSellHistoryApiResult,
  GetGrandExchangeSellOrderApiResult,
  GetGrandExchangeSellOrdersApiQuery,
  GetGrandExchangeSellOrdersApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsGrandExchangeApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch the sales history of the item for the last 7 days. */
  public getHistory(
    code: string,
    params: GetGrandExchangeSellHistoryApiQuery = {},
  ): Promise<GetGrandExchangeSellHistoryApiResult> {
    return this.httpClient.get<GetGrandExchangeSellHistoryApiResult>(
      `/grandexchange/history/${code}`,
      {
        query: params,
      },
    );
  }

  /** Fetch all sell orders. */
  public getAll(
    params: GetGrandExchangeSellOrdersApiQuery = {},
  ): Promise<GetGrandExchangeSellOrdersApiResult> {
    return this.httpClient.get<GetGrandExchangeSellOrdersApiResult>('/grandexchange/orders', {
      query: params,
    });
  }

  /** Retrieve the sell order of a item. */
  public get(id: string): Promise<GetGrandExchangeSellOrderApiResult> {
    return this.httpClient.get<GetGrandExchangeSellOrderApiResult>(`/grandexchange/orders/${id}`);
  }
}
