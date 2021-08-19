export interface habitState {
  items: string[];
}

export enum habitActionsType {
  SET_HABIT_ITEMS = 'SET_HABIT_ITEMS',
}

interface setsHabitItemsType {
  type: habitActionsType.SET_HABIT_ITEMS;
  payload: string;
}

export type habitActions = setsHabitItemsType;
