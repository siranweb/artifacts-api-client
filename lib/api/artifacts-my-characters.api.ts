import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  CraftingApiBody,
  CraftingApiResult,
  DepositBankApiBody,
  DepositBankGoldApiBody,
  DepositBankGoldApiResult,
  DepositBankApiResult,
  EquipItemApiBody,
  EquipItemApiResult,
  FightApiResult,
  GatheringApiResult,
  MoveApiBody,
  MoveApiResult,
  UnequipItemApiBody,
  UnequipItemApiResult,
  WithdrawBankApiBody,
  WithdrawBankApiResult,
  WithdrawBankGoldApiBody,
  WithdrawBankGoldApiResult,
  RecyclingApiBody,
  RecyclingApiResult,
  BuyGrandExchangeItemApiBody,
  BuyGrandExchangeItemApiResult,
  SellGrandExchangeItemApiBody,
  SellGrandExchangeItemApiResult,
  DeleteItemApiBody,
  DeleteItemApiResult,
  AcceptTaskApiResult,
  CompleteTaskApiResult,
  ExchangeTaskApiResult,
  GetLogsApiResult,
  GetLogsApiQuery,
  GetMyCharactersApiResult,
  CancelTaskApiResult,
  BuyExpansionApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMyCharactersApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Moves a character on the map using the map's X and Y position. */
  public move(name: string, body: MoveApiBody): Promise<MoveApiResult> {
    return this.httpClient.post<MoveApiResult>(`/my/${name}/action/move`, { body, isSecure: true });
  }

  /** Equip an item on your character. */
  public equipItem(name: string, body: EquipItemApiBody): Promise<EquipItemApiResult> {
    return this.httpClient.post<EquipItemApiResult>(`/my/${name}/action/equip`, {
      body,
      isSecure: true,
    });
  }

  /** Unequip an item on your character. */
  public unequipItem(name: string, body: UnequipItemApiBody): Promise<UnequipItemApiResult> {
    return this.httpClient.post<UnequipItemApiResult>(`/my/${name}/action/unequip`, {
      body,
      isSecure: true,
    });
  }

  /** Start a fight against a monster on the character's map. */
  public fight(name: string): Promise<FightApiResult> {
    return this.httpClient.post<FightApiResult>(`/my/${name}/action/fight`, { isSecure: true });
  }

  /** Harvest a resource on the character's map. */
  public gathering(name: string): Promise<GatheringApiResult> {
    return this.httpClient.post<GatheringApiResult>(`/my/${name}/action/gathering`, {
      isSecure: true,
    });
  }

  /** Crafting an item. The character must be on a map with a workshop. */
  public crafting(name: string, body: CraftingApiBody): Promise<CraftingApiResult> {
    return this.httpClient.post<CraftingApiResult>(`/my/${name}/action/crafting`, {
      body,
      isSecure: true,
    });
  }

  /** Deposit an item in a bank on the character's map. */
  public depositBank(name: string, body: DepositBankApiBody): Promise<DepositBankApiResult> {
    return this.httpClient.post<DepositBankApiResult>(`/my/${name}/action/bank/deposit`, {
      body,
      isSecure: true,
    });
  }

  /** Deposit golds in a bank on the character's map. */
  public depositBankGold(
    name: string,
    body: DepositBankGoldApiBody,
  ): Promise<DepositBankGoldApiResult> {
    return this.httpClient.post<DepositBankGoldApiResult>(`/my/${name}/action/bank/deposit/gold`, {
      body,
      isSecure: true,
    });
  }

  /** Take an item from your bank and put it in the character's inventory. */
  public withdrawBank(name: string, body: WithdrawBankApiBody): Promise<WithdrawBankApiResult> {
    return this.httpClient.post<WithdrawBankApiResult>(`/my/${name}/action/bank/withdraw`, {
      body,
      isSecure: true,
    });
  }

  /** Withdraw gold from your bank. */
  public withdrawBankGold(
    name: string,
    body: WithdrawBankGoldApiBody,
  ): Promise<WithdrawBankGoldApiResult> {
    return this.httpClient.post<WithdrawBankGoldApiResult>(
      `/my/${name}/action/bank/withdraw/gold`,
      { body, isSecure: true },
    );
  }

  /** Recycling an item. The character must be on a map with a workshop (only for equipments and weapons). */
  public recycling(name: string, body: RecyclingApiBody): Promise<RecyclingApiResult> {
    return this.httpClient.post<RecyclingApiResult>(`/my/${name}/action/recycling`, {
      body,
      isSecure: true,
    });
  }

  /** Buy an item at the Grand Exchange on the character's map. */
  public buyGrandExchangeItem(
    name: string,
    body: BuyGrandExchangeItemApiBody,
  ): Promise<BuyGrandExchangeItemApiResult> {
    return this.httpClient.post<BuyGrandExchangeItemApiResult>(`/my/${name}/action/ge/buy`, {
      body,
      isSecure: true,
    });
  }

  /** Sell an item at the Grand Exchange on the character's map. */
  public sellGrandExchangeItem(
    name: string,
    body: SellGrandExchangeItemApiBody,
  ): Promise<SellGrandExchangeItemApiResult> {
    return this.httpClient.post<SellGrandExchangeItemApiResult>(`/my/${name}/action/ge/sell`, {
      body,
      isSecure: true,
    });
  }

  /** Accepting a new task. */
  public acceptTask(name: string): Promise<AcceptTaskApiResult> {
    return this.httpClient.post<AcceptTaskApiResult>(`/my/${name}/action/task/new`, {
      isSecure: true,
    });
  }

  /** Complete a task. */
  public completeTask(name: string): Promise<CompleteTaskApiResult> {
    return this.httpClient.post<CompleteTaskApiResult>(`/my/${name}/action/task/complete`, {
      isSecure: true,
    });
  }

  /**
   * Exchange 3 tasks coins for a random reward.
   * Rewards are exclusive resources for crafting items.
   */
  public exchangeTask(name: string): Promise<ExchangeTaskApiResult> {
    return this.httpClient.post<ExchangeTaskApiResult>(`/my/${name}/action/task/exchange`, {
      isSecure: true,
    });
  }

  /** Delete an item from your character's inventory. */
  public deleteItem(name: string, body: DeleteItemApiBody): Promise<DeleteItemApiResult> {
    return this.httpClient.post<DeleteItemApiResult>(`/my/${name}/action/delete`, {
      body,
      isSecure: true,
    });
  }

  /** History of the last 100 actions of all your characters. */
  public getLogs(params: GetLogsApiQuery = {}): Promise<GetLogsApiResult> {
    return this.httpClient.get<GetLogsApiResult>(`/my/logs`, {
      query: params,
      isSecure: true,
    });
  }

  /** List of your characters. */
  public getAll(): Promise<GetMyCharactersApiResult> {
    return this.httpClient.get<GetMyCharactersApiResult>(`/my/characters`, {
      isSecure: true,
    });
  }

  /** Cancel a task for 1 tasks coin. */
  public cancelTask(name: string): Promise<CancelTaskApiResult> {
    return this.httpClient.post<ExchangeTaskApiResult>(`/my/${name}/action/task/cancel`, {
      isSecure: true,
    });
  }

  /** Buy a 20 slots bank expansion. */
  public buyBankExpansion(name: string): Promise<BuyExpansionApiResult> {
    return this.httpClient.post<BuyExpansionApiResult>(`/my/${name}/action/bank/buy_expansion`, {
      isSecure: true,
    });
  }
}
