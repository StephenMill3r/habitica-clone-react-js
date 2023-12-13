import {combineReducers, Reducer} from "@reduxjs/toolkit";
import {RootState, StoreEnum} from "../model/store.model";
import {habitTask} from "../../../entities/habitTask/model/reducers";
import {user} from "../../../entities/user/model";
import {reward} from "../../../entities/reward/model/reducers";
import {dailyTask} from "../../../entities/dailyTask/model/reducers";
import {todoTask} from "../../../entities/todoTask/model/reducers";


export const rootReducer: Reducer<RootState> = combineReducers({
    [StoreEnum.HABIT_TASK]: habitTask,
    [StoreEnum.REWARD]: reward,
    [StoreEnum.USER]: user,
    [StoreEnum.DAILY_TASK]: dailyTask,
    [StoreEnum.TODO_TASK]: todoTask,
});


