type dailyItemsType = {
    titleText:string;
    supText?:string
}


export interface dailyState {
  items: dailyItemsType[];
}

export enum dailyActionsType {
  SET_DAILY_ITEMS = 'SET_DAILY_ITEMS',
}

interface setDailyItemsType {
  type: dailyActionsType.SET_DAILY_ITEMS;
  payload: any;
}

export type dailyActions = setDailyItemsType;
