/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { habitActions, habitActionsType } from '../typesRedux/habitTask';

export const setHabitItems = (payload: string): habitActions => {
  return { type: habitActionsType.SET_HABIT_ITEMS, payload };
};
