import {habitState} from "../../../entities/habitTask/model/types/habitTask";

export enum StoreEnum {
    HABIT_TASK = 'habitTask',
}

export interface RootState {
    [StoreEnum.HABIT_TASK]: habitState;
}
