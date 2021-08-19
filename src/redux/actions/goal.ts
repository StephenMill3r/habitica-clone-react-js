/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { goalActions, goalActionsType } from '../typesRedux/goal';

type goalType = {
  titleText: string;
};

export const setGoalItems = (payload: goalType): goalActions => {
  return { type: goalActionsType.SET_GOAL_ITEMS, payload };
};
