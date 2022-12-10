export type toDoTaskType = {
    id: number;
    category: string;
    titleText: string;
    isCompletedTask: boolean;
    diff: number;
    supText: string;
    remainDay: number;
};

export interface toDoState {
    toDoTasks: toDoTaskType[];
}

export enum toDoActionsType {
    ADD_TODO_TASK = 'ADD_TODO_TASK',
    SET_TODO_SUCCESS_TASK = 'SET_TODO_SUCCESS_TASK',
    SET_TODO_CHANGE_TASK = 'SET_TODO_CHANGE_TASK',
    SET_DELETE_TODO_TASK = 'SET_DELETE_TODO_TASK',
    SET_TODO_CHANGE_CATEGORY = 'SET_TODO_CHANGE_CATEGORY',
}

interface addToDoTaskType {
    type: toDoActionsType.ADD_TODO_TASK;
    payload: toDoTaskType;
}

interface setToDoSuccessType {
    type: toDoActionsType.SET_TODO_SUCCESS_TASK;
    payload: number;
}

interface setToDoChangeType {
    type: toDoActionsType.SET_TODO_CHANGE_TASK;
    id: number;
    titleText: string;
    supText: string;
    diff: number;
    remainDay: number;
}

interface setDeleteToDoTaskType {
    type: toDoActionsType.SET_DELETE_TODO_TASK;
    payload: number;
}

interface setToDoChangeCategoryType {
    type: toDoActionsType.SET_TODO_CHANGE_CATEGORY;
    id: number;
    category: string;
}

export type toDoActions =
    | addToDoTaskType
    | setToDoSuccessType
    | setToDoChangeType
    | setDeleteToDoTaskType
    | setToDoChangeCategoryType;
