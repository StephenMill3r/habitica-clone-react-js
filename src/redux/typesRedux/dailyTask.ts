export type dailyTaskType = {
    id: number;
    category: string;
    titleText: string;
    supText: string;
    isCompletedTask: boolean;
    count: number;
    exp: number;
    health: number;
};

export interface dailyState {
    dailyTasks: dailyTaskType[];
}

export enum dailyActionsType {
    ADD_DAILY_TASK = 'ADD_DAILY_TASK',
    SET_DAILY_SUCCESS_TASK = 'SET_DAILY_SUCCESS_TASK',
    SET_DAILY_DEFAULT_TASK = 'SET_DAILY_DEFAULT_TASK',
}

interface addDailyTaskType {
    type: dailyActionsType.ADD_DAILY_TASK;
    payload: dailyTaskType;
}

interface setDailySuccessType {
    type: dailyActionsType.SET_DAILY_SUCCESS_TASK;
    payload: number;
}

interface setDailyDefaultType {
    type: dailyActionsType.SET_DAILY_DEFAULT_TASK;
    payload: number;
}

export type dailyActions = addDailyTaskType | setDailySuccessType | setDailyDefaultType;
