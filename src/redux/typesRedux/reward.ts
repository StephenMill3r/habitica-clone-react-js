type rewardItemsType = {
  titleText: string;
  supText?: string;
  cost: number;
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
