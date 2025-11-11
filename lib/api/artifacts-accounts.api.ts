import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  CreateAccountApiBody,
  CreateAccountApiResult,
  ForgotPasswordApiBody,
  ForgotPasswordApiResult,
  GetAccountAchievementsApiQuery,
  GetAccountAchievementsApiResult,
  GetAccountApiResult,
  GetAccountCharactersApiResult,
  ResetPasswordApiBody,
  ResetPasswordApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsAccountsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Create an account. */
  public create(body: CreateAccountApiBody): Promise<CreateAccountApiResult> {
    return this.httpClient.post<CreateAccountApiResult>(`/accounts/create`, {
      body,
    });
  }

  /** Request a password reset. */
  public forgotPassword(body: ForgotPasswordApiBody): Promise<ForgotPasswordApiResult> {
    return this.httpClient.post<ForgotPasswordApiResult>(`/accounts/forgot_password`, {
      body,
    });
  }

  /** Reset password with a token. Use /forgot_password to get a token by email. */
  public resetPassword(body: ResetPasswordApiBody): Promise<ResetPasswordApiResult> {
    return this.httpClient.post<ResetPasswordApiResult>(`/accounts/reset_password`, {
      body,
    });
  }

  /** Retrieve the achievements of an account. */
  public getAchievements(
    account: string,
    params?: GetAccountAchievementsApiQuery,
  ): Promise<GetAccountAchievementsApiResult> {
    return this.httpClient.get<GetAccountAchievementsApiResult>(
      `/accounts/${account}/achievements`,
      {
        query: params,
      },
    );
  }

  /** Account character lists. */
  public getCharacters(account: string): Promise<GetAccountCharactersApiResult> {
    return this.httpClient.get<GetAccountCharactersApiResult>(`/accounts/${account}/characters`);
  }

  /** Retrieve the details of an account. */
  public get(account: string): Promise<GetAccountApiResult> {
    return this.httpClient.get<GetAccountApiResult>(`/accounts/${account}`);
  }
}
