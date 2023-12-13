import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store/model/store.model";

export const selectTodoTask = (state: RootState) => state.todoTask;

export const selectTodoTasks = createSelector(
    selectTodoTask,
    (state) => state.toDoTasks,
);

export const selectCurrentTodoTaskFilter = createSelector(
    selectTodoTask,
    (state) => state.currentFilter,
);
