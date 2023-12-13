import {DailyCategoryEnum, dailyState} from "../config";
import {createReducer} from "@reduxjs/toolkit";
import {DailyTaskActions} from "../actions";

const initialState: dailyState = {
    dailyTasks: [
        {
            id: 0,
            category: DailyCategoryEnum.ALL,
            titleText: 'Поработать над творческим проектом',
            supText: 'Нажмите, чтобы указать название вашего текущего проекта и задать расписание!',
            isCompletedTask: false,
            count: 0,
            exp: 10,
            health: 7,
        },
    ],
    currentFilter: DailyCategoryEnum.ALL
};


export const dailyTask = createReducer(initialState, (builder) => builder

    .addCase(DailyTaskActions.addDailyTask, (state, {payload: {newTask}}) => ({
        ...state,
        dailyTasks: [...state.dailyTasks, newTask],
    }))
    .addCase(DailyTaskActions.successDailyTask, (state, {payload: {taskId}}) => ({
        ...state,
        dailyTasks: state.dailyTasks.map((dailyTask) =>
            dailyTask.id === taskId ? {
                ...dailyTask,
                isCompletedTask: true,
                category: DailyCategoryEnum.OTHER,
                count: dailyTask.count + 1,
            } : dailyTask,
        ),
    }))
    .addCase(DailyTaskActions.resetDailyTask, (state, {payload: {taskId}}) => ({
        ...state,
        dailyTasks: state.dailyTasks.map((dailyTask) =>
            dailyTask.id === taskId
                ? {...dailyTask, isCompletedTask: false, category: DailyCategoryEnum.ACTIVE, count: dailyTask.count - 1}
                : dailyTask,
        ),
    }))
    .addCase(DailyTaskActions.changeCurrentDailyFilter, (state, {payload: {newFilter}}) => ({
        ...state,
        currentFilter: newFilter,
    }))
);
