export interface habitState {
  items: any;
}

export enum habitActionsType {
  SET_HABIT_ITEMS = 'SET_HABIT_ITEMS',
  SET_HABIT_SUCSESS_TASK = 'SET_HABIT_SUCSESS_TASK',
}

interface setsHabitItemsType {
  type: habitActionsType.SET_HABIT_ITEMS;
  payload: string;
}

interface setsHabitSucsessTaskType {
  type: habitActionsType.SET_HABIT_SUCSESS_TASK;
  payload: number;
}

export type habitActions = setsHabitItemsType | setsHabitSucsessTaskType;
