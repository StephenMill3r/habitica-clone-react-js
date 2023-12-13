import {habitState} from "entities/habitTask/model/config";
import {userState} from "entities/user/model/config/config";
import {rewardState} from "entities/reward/model/config";
import {toDoState} from "entities/todoTask/model/config";
import {dailyState} from "entities/dailyTask/model/config";

export enum StoreEnum {
    HABIT_TASK = 'habitTask',
    USER = 'user',
    REWARD = 'reward',
    DAILY_TASK = 'dailyTask',
    TODO_TASK = 'todoTask',
}

export interface RootState {
    [StoreEnum.HABIT_TASK]: habitState;
    [StoreEnum.USER]: userState;
    [StoreEnum.REWARD]: rewardState;
    [StoreEnum.DAILY_TASK]: dailyState;
    [StoreEnum.TODO_TASK]: toDoState;
}
