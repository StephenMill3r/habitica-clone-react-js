export interface habitState {
  items: any[];
}

export enum habitActionsType {
  SET_HABIT_ITEMS = 'SET_HABIT_ITEMS',
}

interface setsHabitItemsType {
  type: habitActionsType.SET_HABIT_ITEMS;
  payload: string;
}

export type habitActions = setsHabitItemsType;
