/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { goalActions, goalActionsType } from '../typesRedux/goal';

type goalType = {
  titleText: string;
  id: number;
  category: string;
  isCompletedTask: boolean;
  exp: number;
  health: number;
};

export const setGoalItems = (payload: goalType): goalActions => {
  return { type: goalActionsType.SET_GOAL_ITEMS, payload };
};

export const setGoalSuccessTask = (payload: number): goalActions => {
  return { type: goalActionsType.SET_GOAL_SUCCESS_TASK, payload };
};
