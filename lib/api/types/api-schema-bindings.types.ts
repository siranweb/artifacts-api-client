import { paths } from './api-schema.types';

export type GetStatusApiResult = paths['/']['get']['responses'][200]['content']['application/json'];

export type MoveApiBody =
  paths['/my/{name}/action/move']['post']['requestBody']['content']['application/json'];
export type MoveApiResult =
  paths['/my/{name}/action/move']['post']['responses'][200]['content']['application/json'];

export type EquipItemApiBody =
  paths['/my/{name}/action/equip']['post']['requestBody']['content']['application/json'];
export type EquipItemApiResult =
  paths['/my/{name}/action/equip']['post']['responses'][200]['content']['application/json'];

export type UnequipItemApiBody =
  paths['/my/{name}/action/unequip']['post']['requestBody']['content']['application/json'];
export type UnequipItemApiResult =
  paths['/my/{name}/action/unequip']['post']['responses'][200]['content']['application/json'];

export type FightApiResult =
  paths['/my/{name}/action/fight']['post']['responses'][200]['content']['application/json'];

export type GatheringApiResult =
  paths['/my/{name}/action/gathering']['post']['responses'][200]['content']['application/json'];

export type CraftingApiBody =
  paths['/my/{name}/action/crafting']['post']['requestBody']['content']['application/json'];
export type CraftingApiResult =
  paths['/my/{name}/action/crafting']['post']['responses'][200]['content']['application/json'];

export type DepositBankApiBody =
  paths['/my/{name}/action/bank/deposit']['post']['requestBody']['content']['application/json'];
export type DepositBankApiResult =
  paths['/my/{name}/action/bank/deposit']['post']['responses'][200]['content']['application/json'];

export type DepositBankGoldApiBody =
  paths['/my/{name}/action/bank/deposit/gold']['post']['requestBody']['content']['application/json'];
export type DepositBankGoldApiResult =
  paths['/my/{name}/action/bank/deposit/gold']['post']['responses'][200]['content']['application/json'];

export type WithdrawBankApiBody =
  paths['/my/{name}/action/bank/withdraw']['post']['requestBody']['content']['application/json'];
export type WithdrawBankApiResult =
  paths['/my/{name}/action/bank/withdraw']['post']['responses'][200]['content']['application/json'];

export type WithdrawBankGoldApiBody =
  paths['/my/{name}/action/bank/withdraw/gold']['post']['requestBody']['content']['application/json'];
export type WithdrawBankGoldApiResult =
  paths['/my/{name}/action/bank/withdraw/gold']['post']['responses'][200]['content']['application/json'];

export type RecyclingApiBody =
  paths['/my/{name}/action/recycling']['post']['requestBody']['content']['application/json'];
export type RecyclingApiResult =
  paths['/my/{name}/action/recycling']['post']['responses'][200]['content']['application/json'];

export type BuyGrandExchangeItemApiBody =
  paths['/my/{name}/action/ge/buy']['post']['requestBody']['content']['application/json'];
export type BuyGrandExchangeItemApiResult =
  paths['/my/{name}/action/ge/buy']['post']['responses'][200]['content']['application/json'];

export type SellGrandExchangeItemApiBody =
  paths['/my/{name}/action/ge/sell']['post']['requestBody']['content']['application/json'];
export type SellGrandExchangeItemApiResult =
  paths['/my/{name}/action/ge/sell']['post']['responses'][200]['content']['application/json'];

export type AcceptTaskApiResult =
  paths['/my/{name}/action/task/new']['post']['responses'][200]['content']['application/json'];

export type CompleteTaskApiResult =
  paths['/my/{name}/action/task/complete']['post']['responses'][200]['content']['application/json'];

export type ExchangeTaskApiResult =
  paths['/my/{name}/action/task/exchange']['post']['responses'][200]['content']['application/json'];

export type DeleteItemApiBody =
  paths['/my/{name}/action/delete']['post']['requestBody']['content']['application/json'];
export type DeleteItemApiResult =
  paths['/my/{name}/action/delete']['post']['responses'][200]['content']['application/json'];

export type GetLogsApiQuery = paths['/my/logs']['get']['parameters']['query'];
export type GetLogsApiResult =
  paths['/my/logs']['get']['responses'][200]['content']['application/json'];

export type GetMyCharactersApiResult =
  paths['/my/characters']['get']['responses'][200]['content']['application/json'];

export type CreateAccountApiBody =
  paths['/accounts/create']['post']['requestBody']['content']['application/json'];
export type CreateAccountApiResult =
  paths['/accounts/create']['post']['responses'][200]['content']['application/json'];

export type CreateCharacterApiBody =
  paths['/characters/create']['post']['requestBody']['content']['application/json'];
export type CreateCharacterApiResult =
  paths['/accounts/create']['post']['responses'][200]['content']['application/json'];

export type GetAllCharactersApiQuery = paths['/characters']['get']['parameters']['query'];
export type GetAllCharactersApiResult =
  paths['/characters']['get']['responses'][200]['content']['application/json'];

export type GetCharacterApiResult =
  paths['/characters/{name}']['get']['responses'][200]['content']['application/json'];

export type GetAllEventsApiQuery = paths['/events']['get']['parameters']['query'];
export type GetAllEventsApiResult =
  paths['/events']['get']['responses'][200]['content']['application/json'];

export type GetAllGrandExchangeApiQuery = paths['/ge']['get']['parameters']['query'];
export type GetAllGrandExchangeApiResult =
  paths['/ge']['get']['responses'][200]['content']['application/json'];

export type GetGrandExchangeApiResult =
  paths['/ge/{code}']['get']['responses'][200]['content']['application/json'];

export type GetAllItemsApiQuery = paths['/items']['get']['parameters']['query'];
export type GetAllItemsApiResult =
  paths['/items']['get']['responses'][200]['content']['application/json'];

export type GetItemApiResult =
  paths['/items/{code}']['get']['responses'][200]['content']['application/json'];

export type GetAllMapsApiQuery = paths['/maps']['get']['parameters']['query'];
export type GetAllMapsApiResult =
  paths['/maps']['get']['responses'][200]['content']['application/json'];

export type GetMapApiResult =
  paths['/maps/{x}/{y}']['get']['responses'][200]['content']['application/json'];

export type GetAllMonstersApiQuery = paths['/monsters']['get']['parameters']['query'];
export type GetAllMonstersApiResult =
  paths['/monsters']['get']['responses'][200]['content']['application/json'];

export type GetMonsterApiResult =
  paths['/monsters/{code}']['get']['responses'][200]['content']['application/json'];

export type GetBankItemsApiQuery = paths['/my/bank/items']['get']['parameters']['query'];
export type GetBankItemsApiResult =
  paths['/my/bank/items']['get']['responses'][200]['content']['application/json'];

export type GetBankApiResult =
  paths['/my/bank']['get']['responses'][200]['content']['application/json'];

export type ChangePasswordApiBody =
  paths['/my/change_password']['post']['requestBody']['content']['application/json'];
export type ChangePasswordApiResult =
  paths['/my/change_password']['post']['responses'][200]['content']['application/json'];

export type GetAllResourcesApiQuery = paths['/resources']['get']['parameters']['query'];
export type GetAllResourcesApiResult =
  paths['/resources']['get']['responses'][200]['content']['application/json'];

export type GetResourceApiResult =
  paths['/resources/{code}']['get']['responses'][200]['content']['application/json'];

export type GenerateTokenResult =
  paths['/token']['post']['responses'][200]['content']['application/json'];

export type DeleteCharacterApiBody =
  paths['/characters/delete']['post']['requestBody']['content']['application/json'];
export type DeleteCharacterApiResult =
  paths['/characters/delete']['post']['responses'][200]['content']['application/json'];

export type CancelTaskApiResult =
  paths['/my/{name}/action/task/cancel']['post']['responses'][200]['content']['application/json'];

export type BuyExpansionApiResult =
  paths['/my/{name}/action/bank/buy_expansion']['post']['responses'][200]['content']['application/json'];

export type GetLeaderboardApiResult =
  paths['/leaderboard']['get']['responses'][200]['content']['application/json'];
export type GetLeaderboardApiQuery = paths['/leaderboard']['get']['parameters']['query'];
