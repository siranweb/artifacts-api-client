import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { components, operations } from '../types/api-schema.types';

export class ArtifactsMyCharactersApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Moves a character on the map using the map's X and Y position. */
  public move(
    name: string,
    body: components['schemas']['DestinationSchema'],
  ): Promise<components['schemas']['CharacterMovementResponseSchema']> {
    return this.httpClient.post<components['schemas']['CharacterMovementResponseSchema']>(
      `/my/${name}/action/move`,
      { body, isSecure: true },
    );
  }

  /** Equip an item on your character. */
  public equipItem(
    name: string,
    body: components['schemas']['EquipSchema'],
  ): Promise<components['schemas']['EquipmentResponseSchema']> {
    return this.httpClient.post<components['schemas']['EquipmentResponseSchema']>(
      `/my/${name}/action/equip`,
      { body, isSecure: true },
    );
  }

  /** Unequip an item on your character. */
  public unequipItem(
    name: string,
    body: components['schemas']['UnequipSchema'],
  ): Promise<components['schemas']['EquipmentResponseSchema']> {
    return this.httpClient.post<components['schemas']['EquipmentResponseSchema']>(
      `/my/${name}/action/unequip`,
      { body, isSecure: true },
    );
  }

  /** Start a fight against a monster on the character's map. */
  public fight(name: string): Promise<components['schemas']['CharacterFightResponseSchema']> {
    return this.httpClient.post<components['schemas']['CharacterFightResponseSchema']>(
      `/my/${name}/action/fight`,
      { isSecure: true },
    );
  }

  /** Harvest a resource on the character's map. */
  public gathering(name: string): Promise<components['schemas']['SkillResponseSchema']> {
    return this.httpClient.post<components['schemas']['SkillResponseSchema']>(
      `/my/${name}/action/gathering`,
      { isSecure: true },
    );
  }

  /** Crafting an item. The character must be on a map with a workshop. */
  public crafting(
    name: string,
    body: components['schemas']['CraftingSchema'],
  ): Promise<components['schemas']['SkillResponseSchema']> {
    return this.httpClient.post<components['schemas']['SkillResponseSchema']>(
      `/my/${name}/action/crafting`,
      { body, isSecure: true },
    );
  }

  /** Deposit an item in a bank on the character's map. */
  public depositBank(
    name: string,
    body: components['schemas']['SimpleItemSchema'],
  ): Promise<components['schemas']['ActionItemBankResponseSchema']> {
    return this.httpClient.post<components['schemas']['ActionItemBankResponseSchema']>(
      `/my/${name}/action/bank/deposit`,
      { body, isSecure: true },
    );
  }

  /** Deposit golds in a bank on the character's map. */
  public depositBankGold(
    name: string,
    body: components['schemas']['DepositWithdrawGoldSchema'],
  ): Promise<components['schemas']['GoldResponseSchema']> {
    return this.httpClient.post<components['schemas']['GoldResponseSchema']>(
      `/my/${name}/action/bank/deposit/gold`,
      { body, isSecure: true },
    );
  }

  /** Take an item from your bank and put it in the character's inventory. */
  public withdrawBank(
    name: string,
    body: components['schemas']['SimpleItemSchema'],
  ): Promise<components['schemas']['ActionItemBankResponseSchema']> {
    return this.httpClient.post<components['schemas']['ActionItemBankResponseSchema']>(
      `/my/${name}/action/bank/withdraw`,
      { body, isSecure: true },
    );
  }

  /** Withdraw gold from your bank. */
  public withdrawBankGold(
    name: string,
    body: components['schemas']['DepositWithdrawGoldSchema'],
  ): Promise<components['schemas']['GoldResponseSchema']> {
    return this.httpClient.post<components['schemas']['GoldResponseSchema']>(
      `/my/${name}/action/bank/withdraw/gold`,
      { body, isSecure: true },
    );
  }

  /** Recycling an item. The character must be on a map with a workshop (only for equipments and weapons). */
  public recycling(
    name: string,
    body: components['schemas']['RecyclingSchema'],
  ): Promise<components['schemas']['RecyclingResponseSchema']> {
    return this.httpClient.post<components['schemas']['RecyclingResponseSchema']>(
      `/my/${name}/action/recycling`,
      { body, isSecure: true },
    );
  }

  /** Buy an item at the Grand Exchange on the character's map. */
  public buyGrandExchangeItem(
    name: string,
    body: components['schemas']['GETransactionItemSchema'],
  ): Promise<components['schemas']['GETransactionResponseSchema']> {
    return this.httpClient.post<components['schemas']['GETransactionResponseSchema']>(
      `/my/${name}/action/ge/buy`,
      { body, isSecure: true },
    );
  }

  /** Sell an item at the Grand Exchange on the character's map. */
  public sellGrandExchangeItem(
    name: string,
    body: components['schemas']['GETransactionItemSchema'],
  ): Promise<components['schemas']['GETransactionResponseSchema']> {
    return this.httpClient.post<components['schemas']['GETransactionResponseSchema']>(
      `/my/${name}/action/ge/sell`,
      { body, isSecure: true },
    );
  }

  /** Accepting a new task. */
  public acceptTask(name: string): Promise<components['schemas']['TaskResponseSchema']> {
    return this.httpClient.post<components['schemas']['TaskResponseSchema']>(
      `/my/${name}/action/task/new`,
      { isSecure: true },
    );
  }

  /** Complete a task. */
  public completeTask(name: string): Promise<components['schemas']['TaskRewardResponseSchema']> {
    return this.httpClient.post<components['schemas']['TaskRewardResponseSchema']>(
      `/my/${name}/action/task/complete`,
      { isSecure: true },
    );
  }

  /** Exchange 3 tasks coins for a random reward. Rewards are exclusive resources for crafting items. */
  public exchangeTask(name: string): Promise<components['schemas']['TaskRewardResponseSchema']> {
    return this.httpClient.post<components['schemas']['TaskRewardResponseSchema']>(
      `/my/${name}/action/task/exchange`,
      { isSecure: true },
    );
  }

  /** Delete an item from your character's inventory. */
  public deleteItem(
    name: string,
    body: components['schemas']['SimpleItemSchema'],
  ): Promise<components['schemas']['DeleteItemResponseSchema']> {
    return this.httpClient.post<components['schemas']['DeleteItemResponseSchema']>(
      `/my/${name}/action/delete`,
      { body, isSecure: true },
    );
  }

  /** History of the last 100 actions of all your characters. */
  public getLogs(
    params: operations['get_all_characters_logs_my_logs_get']['parameters']['query'] = {},
  ): Promise<components['schemas']['DataPage_LogSchema_']> {
    return this.httpClient.get<components['schemas']['DataPage_LogSchema_']>(`/my/logs`, {
      query: params,
      isSecure: true,
    });
  }

  /** List of your characters. */
  public getAll(): Promise<components['schemas']['MyCharactersListSchema']> {
    return this.httpClient.get<components['schemas']['MyCharactersListSchema']>(`/my/characters`, {
      isSecure: true,
    });
  }
}
