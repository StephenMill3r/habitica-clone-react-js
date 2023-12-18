import {combineReducers, Reducer} from "@reduxjs/toolkit";
import {RootState, StoreEnum} from "../model/store.model";
import {habitTask} from "../../../widgets/habitTasks/model/reducers";
import {user} from "../../../entities/user/model";
import {dailyTask} from "../../../widgets/dailyTasks/model/reducers";
import {todoTask} from "../../../widgets/todoTasks/model/reducers";
import {reward} from "../../../widgets/rewards/model/reducers";


export const rootReducer: Reducer<RootState> = combineReducers({
    [StoreEnum.HABIT_TASK]: habitTask,
    [StoreEnum.REWARD]: reward,
    [StoreEnum.USER]: user,
    [StoreEnum.DAILY_TASK]: dailyTask,
    [StoreEnum.TODO_TASK]: todoTask,
});


