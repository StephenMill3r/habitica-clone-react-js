/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { habitActions, habitActionsType } from '../typesRedux/habitTask';

export const setHabitItems = (payload: any): habitActions => {
  return { type: habitActionsType.SET_HABIT_ITEMS, payload };
};

export const setHabitSucsessTask = (payload: number): habitActions => {
  return { type: habitActionsType.SET_HABIT_SUCSESS_TASK, payload };
};
