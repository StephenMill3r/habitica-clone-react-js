/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {toDoActions, toDoActionsType, toDoTaskType} from '../typesRedux/toDo';

export const setToDoItems = (payload: toDoTaskType): toDoActions => {
    return {type: toDoActionsType.ADD_TODO_TASK, payload};
};

export const setToDoSuccessTask = (payload: number): toDoActions => {
    return {type: toDoActionsType.SET_TODO_SUCCESS_TASK, payload};
};

export const setToDoChangeTask = (
    id: number,
    titleText: string,
    supText: string,
    diff: number,
    remainDay: number,
): toDoActions => {
    return {
        type: toDoActionsType.SET_TODO_CHANGE_TASK,
        id,
        titleText,
        supText,
        diff,
        remainDay,
    };
};

export const setDeleteToDoTask = (payload: number): toDoActions => {
    return {type: toDoActionsType.SET_DELETE_TODO_TASK, payload};
};

export const setToDoChangeCategoryTask = (id: number, category: string): toDoActions => {
    return {type: toDoActionsType.SET_TODO_CHANGE_CATEGORY, category, id};
};
