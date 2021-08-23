/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { rewardActions, rewardActionsType, rewardItemsType } from '../typesRedux/reward';

export const setRewardItems = (payload: rewardItemsType): rewardActions => {
  return { type: rewardActionsType.SET_REWARD_ITEMS, payload };
};
