/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { rewardActions, rewardActionsType } from '../typesRedux/reward';

export const setRewardItems = (payload: any): rewardActions => {
  return { type: rewardActionsType.SET_REWARD_ITEMS, payload };
};
