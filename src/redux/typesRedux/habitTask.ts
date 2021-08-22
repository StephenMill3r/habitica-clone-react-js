export type habitItemsType = {
  id: number;
  category: string;
  titleText: string;
  isBadTask?: boolean;
  isSucsessTask?: boolean;
  count?: number;
};

export interface habitState {
  items: habitItemsType[];
}

export enum habitActionsType {
  SET_HABIT_ITEMS = 'SET_HABIT_ITEMS',
  SET_HABIT_SUCSESS_TASK = 'SET_HABIT_SUCSESS_TASK',
  SET_PLUS_HABIT_COUNT = 'SET_PLUS_HABIT_COUNT',
  SET_MINUS_HABIT_COUNT = 'SET_MINUS_HABIT_COUNT',
}

interface setHabitItemsType {
  type: habitActionsType.SET_HABIT_ITEMS;
  payload: habitItemsType;
}

interface setHabitSucsessTaskType {
  type: habitActionsType.SET_HABIT_SUCSESS_TASK;
  payload: number;
}

interface setPlusHabitCountType {
  type: habitActionsType.SET_PLUS_HABIT_COUNT;
  payload: number;
}

interface setMinusHabitCountType {
  type: habitActionsType.SET_MINUS_HABIT_COUNT;
  payload: number;
}

export type habitActions =
  | setHabitItemsType
  | setHabitSucsessTaskType
  | setPlusHabitCountType
  | setMinusHabitCountType;
