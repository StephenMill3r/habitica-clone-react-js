/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { dailyActions, dailyActionsType } from '../typesRedux/dailyTask';

type dailyType = {
  titleText: string;
};

export const setDailyItems = (payload: dailyType): dailyActions => {
  return { type: dailyActionsType.SET_DAILY_ITEMS, payload };
};
