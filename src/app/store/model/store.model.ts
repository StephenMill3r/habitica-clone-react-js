import {habitState} from "entities/habitTask/model/config";
import {userState} from "entities/user/model/config/config";
import {rewardState} from "entities/reward/model/config";

export enum StoreEnum {
    HABIT_TASK = 'habitTask',
    USER = 'user',
    REWARD = 'reward',
}

export interface RootState {
    [StoreEnum.HABIT_TASK]: habitState;
    [StoreEnum.USER]: userState;
    [StoreEnum.REWARD]: rewardState;
}
