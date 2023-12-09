import {combineReducers, Reducer} from "@reduxjs/toolkit";
import {habitTask} from "../../../entities/habitTask/model";
import {RootState, StoreEnum} from "../model/store.model";


export const rootReducer: Reducer<RootState> = combineReducers({
    [StoreEnum.HABIT_TASK]: habitTask,
});


