import {TaskFiltersType} from "shared/types/task";

export type RewardType = {
    id: number;
    titleText: string;
    supText: string;
    cost?: number;
    category: string;
};

export interface rewardState {
    rewards: RewardType[];
    currentFilter: string
}

export enum RewardCategoryEnum {
    ALL = 'ALL',
    SEASON = 'SEASON',
    LATER = 'LATER'
}

export const rewardFilters: TaskFiltersType = [
    {
        title: 'Все',
        category: RewardCategoryEnum.ALL,
    },
    {
        title: 'Сезонные',
        category: RewardCategoryEnum.SEASON,
    },
    {
        title: 'Отложенные',
        category: RewardCategoryEnum.LATER,
    }
]
