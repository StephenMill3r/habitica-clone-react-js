type goalItemsType = {
  id?: number;
  category: string;
  titleText: string;
  isCompletedTask: boolean;
  exp: number;
  health: number;
};

export interface goalState {
  items: goalItemsType[];
}

export enum goalActionsType {
  SET_GOAL_ITEMS = 'SET_GOAL_ITEMS',
  SET_GOAL_SUCCESS_TASK = 'SET_GOAL_SUCCESS_TASK',
}

interface setGoalItemsType {
  type: goalActionsType.SET_GOAL_ITEMS;
  payload: any;
}
interface setGoalSuccessType {
  type: goalActionsType.SET_GOAL_SUCCESS_TASK;
  payload: number;
}

export type goalActions = setGoalItemsType | setGoalSuccessType;
