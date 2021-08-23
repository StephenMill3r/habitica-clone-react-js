/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { habitActions, habitActionsType, habitItemsType } from '../typesRedux/habitTask';

export const setHabitItems = (payload: habitItemsType): habitActions => {
  return { type: habitActionsType.SET_HABIT_ITEMS, payload };
};

export const setHabitSuccessTask = (payload: number): habitActions => {
  return { type: habitActionsType.SET_HABIT_SUCCESS_TASK, payload };
};

export const setPlusHabitCount = (payload: number): habitActions => {
  return { type: habitActionsType.SET_PLUS_HABIT_COUNT, payload };
};

export const setMinusHabitCount = (payload: number): habitActions => {
  return { type: habitActionsType.SET_MINUS_HABIT_COUNT, payload };
};
