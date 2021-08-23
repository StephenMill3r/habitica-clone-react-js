export type rewardItemsType = {
  id?: number;
  titleText: string;
  supText?: string;
  cost: number;
  category: string;
};

export interface rewardState {
  items: rewardItemsType[];
}

export enum rewardActionsType {
  SET_REWARD_ITEMS = 'SET_REWARD_ITEMS',
}

interface setRewardItemsType {
  type: rewardActionsType.SET_REWARD_ITEMS;
  payload: any;
}

export type rewardActions = setRewardItemsType;
