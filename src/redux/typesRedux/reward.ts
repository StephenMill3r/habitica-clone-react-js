export type rewardTaskType = {
    id: number;
    titleText: string;
    supText: string;
    cost: number;
    category: string;
};

export interface rewardState {
    rewardTasks: rewardTaskType[];
}

export enum rewardActionsType {
    ADD_REWARD_TASK = 'ADD_REWARD_TASK',
    SET_REWARD_CHANGE_TASK = 'SET_REWARD_CHANGE_TASK',
    SET_DELETE_REWARD_TASK = 'SET_DELETE_REWARD_TASK',
}

interface addRewardTaskType {
    type: rewardActionsType.ADD_REWARD_TASK;
    payload: rewardTaskType;
}

interface setRewardChangeTaskType {
    type: rewardActionsType.SET_REWARD_CHANGE_TASK;
    id: number;
    titleText: string;
    supText: string;
    cost: number;
}

interface setDeleteRewardTaskType {
    type: rewardActionsType.SET_DELETE_REWARD_TASK;
    payload: number;
}

export type rewardActions = addRewardTaskType | setRewardChangeTaskType | setDeleteRewardTaskType;
