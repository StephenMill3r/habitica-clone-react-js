import {TaskFiltersType, TaskType} from "shared/types/task";

export type HabitTaskType =
    Required<Pick<TaskType, 'titleText' | 'isBadTask' | 'id' | 'isSuccessTask' | 'count' | 'supText' | 'diff' | 'category'>>
    & TaskType;

export enum HabitCategoryEnum {
    ALL = 'ALL',
    WEAK = 'WEAK',
    STRONG = 'STRONG'
}

export const habitFilters: TaskFiltersType = [
    {
        title: 'Все',
        category: HabitCategoryEnum.ALL,
    },
    {
        title: 'Слабые',
        category: HabitCategoryEnum.WEAK,
    },
    {
        title: 'Сильные',
        category: HabitCategoryEnum.STRONG,
    }
]

export interface habitState {
    habitTasks: HabitTaskType[];
    currentFilter: string,
}

