import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store/model/store.model";

export const selectDailyTask = (state: RootState) => state.dailyTask;

export const selectDailyTasks = createSelector(
    selectDailyTask,
    (state) => state.dailyTasks,
);

export const selectCurrentDailyTaskFilter = createSelector(
    selectDailyTask,
    (state) => state.currentFilter,
);
