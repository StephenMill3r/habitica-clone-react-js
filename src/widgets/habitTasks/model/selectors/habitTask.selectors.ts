import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store/model/store.model";

export const selectHabitTask = (state: RootState) => state.habitTask;

export const selectHabitTasks = createSelector(
    selectHabitTask,
    (state) => state.habitTasks,
);

export const selectCurrentHabitTaskFilter = createSelector(
    selectHabitTask,
    (state) => state.currentFilter,
);
