/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {habitActions, habitActionsType, habitTaskType} from '../typesRedux/habitTask';

export const addHabitTask = (payload: habitTaskType): habitActions => {
    return {type: habitActionsType.ADD_HABIT_TASK, payload};
};

export const setHabitSuccessTask = (payload: number): habitActions => {
    return {type: habitActionsType.SET_HABIT_SUCCESS_TASK, payload};
};

export const setPlusHabitCount = (payload: number): habitActions => {
    return {type: habitActionsType.SET_PLUS_HABIT_COUNT, payload};
};

export const setMinusHabitCount = (payload: number): habitActions => {
    return {type: habitActionsType.SET_MINUS_HABIT_COUNT, payload};
};

export const setHabitChangeTask = (
    id: number,
    isBadTask: boolean,
    titleText: string,
    supText: string,
    diff: number,
    isSuccessTask: boolean,
): habitActions => {
    return {
        type: habitActionsType.SET_HABIT_CHANGE_TASK,
        isBadTask,
        id,
        titleText,
        supText,
        diff,
        isSuccessTask,
    };
};

export const setDeleteHabitTask = (payload: number): habitActions => {
    return {type: habitActionsType.SET_DELETE_HABIT_TASK, payload};
};
