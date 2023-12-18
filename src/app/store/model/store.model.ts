import {habitState} from "widgets/habitTasks/model/config";
import {userState} from "entities/user/model/config/config";
import {toDoState} from "widgets/todoTasks/model/config";
import {dailyState} from "widgets/dailyTasks/model/config";
import {rewardState} from "widgets/rewards/model/config";

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
