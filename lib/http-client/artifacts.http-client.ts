import {
  GetRequestParams,
  PostRequestParams,
  RequestParams,
} from './types/artifacts-http-client.types';
import { ArtifactsError } from '../errors/artifacts.error';

export class ArtifactsHttpClient {
  constructor(
    private readonly baseUrl: string,
    private token: string,
  ) {}

  public setToken(token: string): void {
    this.token = token;
  }

  public async post<R>(path: string, params: PostRequestParams = {}): Promise<R> {
    return this.request({
      method: 'POST',
      path,
      body: params.body,
      isSecure: params.isSecure,
      headers: params.headers,
    });
  }

  public async get<R>(path: string, params: GetRequestParams = {}): Promise<R> {
    return this.request({
      method: 'GET',
      path,
      query: params.query,
      isSecure: params.isSecure,
    });
  }

  private async request<R>(params: RequestParams = {}): Promise<R> {
    const urlParams = new URLSearchParams(params.query);
    const url = new URL(params.path ?? '', this.baseUrl);
    url.search = urlParams.toString();

    const method = params.method ?? 'GET';

    const headers: HeadersInit = {
      Accept: 'application/json',
    };

    if (method === 'POST') {
      headers['Content-Type'] = 'application/json';
    }

    if (params.isSecure) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    if (params.headers) {
      Object.assign(headers, params.headers);
    }

    let body;
    if (method !== 'GET') {
      body = JSON.stringify(params.body);
    }

    const response = await fetch(url.toString(), {
      method,
      headers,
      body,
    });

    const result = await response.json();

    if (ArtifactsError.isHttpArtifactsError(result)) {
      const { error } = result;
      throw new ArtifactsError(error.code, error.message, error.data);
    }

    return result as R;
  }
}
