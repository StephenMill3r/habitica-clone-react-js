import {createAction} from "@reduxjs/toolkit";
import {actionWithPayloadType} from "shared/types/actionWithPayload";
import {TodoCategoryEnum, ToDoTaskType} from "../config";


export const addTodoTask = createAction('[TASK/TODO] ADD_TODO_TASK',
    actionWithPayloadType<{ newTask: ToDoTaskType }>());

export const successTodoTask = createAction('[TASK/TODO] SUCCESS_TODO_TASK',
    actionWithPayloadType<{ taskId: number }>());

export const changeTodoTask = createAction('[TASK/TODO] CHANGE_TODO_TASK',
    actionWithPayloadType<{ taskId: number, newTask: ToDoTaskType }>());

export const deleteTodoTask = createAction('[TASK/TODO] DELETE_TODO_TASK',
    actionWithPayloadType<{ taskId: number }>());

export const changeCategoryTodoTask = createAction('[TASK/TODO] CHANGE_CATEGORY_TODO_TASK',
    actionWithPayloadType<{ taskId: number, newCategory: TodoCategoryEnum }>());

export const changeCurrentTodoFilter = createAction('[FILTERS/TODO] CHANGE_FILTER',
    actionWithPayloadType<{ newFilter: string }>());
