type goalItemsType = {
  titleText: string;
  supText?: string;
};

export interface goalState {
  items: goalItemsType[];
}

export enum goalActionsType {
  SET_GOAL_ITEMS = 'SET_GOAL_ITEMS',
}

interface setGoalItemsType {
  type: goalActionsType.SET_GOAL_ITEMS;
  payload: any;
}

export type goalActions = setGoalItemsType;
