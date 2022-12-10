/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {dailyActions, dailyActionsType, dailyTaskType} from '../typesRedux/dailyTask';

export const addDailyTask = (payload: dailyTaskType): dailyActions => {
    return {type: dailyActionsType.ADD_DAILY_TASK, payload};
};

export const setDailySuccessTask = (payload: number): dailyActions => {
    return {type: dailyActionsType.SET_DAILY_SUCCESS_TASK, payload};
};

export const setDailyDefaultTask = (payload: number): dailyActions => {
    return {type: dailyActionsType.SET_DAILY_DEFAULT_TASK, payload};
};
