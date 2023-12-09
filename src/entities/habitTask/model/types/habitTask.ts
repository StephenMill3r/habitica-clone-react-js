import {HabitCategoryEnum} from "../config";

export type habitTaskType = {
    id: number;
    category: HabitCategoryEnum;
    titleText: string;
    isBadTask: boolean;
    isSuccessTask: boolean;
    count: number;
    supText: string;
    diff: number;
};

export interface habitState {
    habitTasks: habitTaskType[];
    currentFilter: HabitCategoryEnum,
}

export enum habitActionsType {
    ADD_HABIT_TASK = 'ADD_HABIT_TASK',
    SET_HABIT_SUCCESS_TASK = 'SET_HABIT_SUCCESS_TASK',
    SET_PLUS_HABIT_COUNT = 'SET_PLUS_HABIT_COUNT',
    SET_MINUS_HABIT_COUNT = 'SET_MINUS_HABIT_COUNT',
    SET_HABIT_CHANGE_TASK = 'SET_HABIT_CHANGE_TASK',
    SET_DELETE_HABIT_TASK = 'SET_DELETE_HABIT_TASK',
}

interface setHabitItemsType {
    type: habitActionsType.ADD_HABIT_TASK;
    payload: habitTaskType;
}

interface setHabitSuccessTaskType {
    type: habitActionsType.SET_HABIT_SUCCESS_TASK;
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

interface setHabitChangeTaskType {
    type: habitActionsType.SET_HABIT_CHANGE_TASK;
    id: number;
    isBadTask: boolean;
    isSuccessTask: boolean;
    titleText: string;
    supText: string;
    diff: number;
}

interface setDeleteHabitTaskType {
    type: habitActionsType.SET_DELETE_HABIT_TASK;
    payload: number;
}

export type habitActions =
    | setHabitItemsType
    | setHabitSuccessTaskType
    | setPlusHabitCountType
    | setMinusHabitCountType
    | setHabitChangeTaskType
    | setDeleteHabitTaskType;
