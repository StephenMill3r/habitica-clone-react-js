import {TaskFiltersType, TaskType} from "shared/types/task";

export type HabitTaskType = Pick<TaskType, 'titleText' | 'isBadTask' | 'id' | 'isSuccessTask' | 'count' | 'supText' | 'diff' | 'category'>;

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
