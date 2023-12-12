import {createReducer} from "@reduxjs/toolkit";
import {RewardActions} from "../actions";
import {RewardCategoryEnum, rewardState} from "../config";

const initialState: rewardState = {
    rewards: [
        {
            id: 0,
            titleText: 'Награди себя',
            supText: 'Смотрите телевизор,играйте в игры, кушайте вкусняшки,вам решать!',
            cost: 10,
            category: RewardCategoryEnum.SEASON,
        },
    ],
    currentFilter: RewardCategoryEnum.ALL
};


export const reward = createReducer(initialState, (builder) => builder

    .addCase(RewardActions.addReward, (state, {payload: {newReward}}) => ({
        ...state,
        rewards: [...state.rewards, newReward],
    }))
    .addCase(RewardActions.changeReward, (state, {payload: {newReward}}) => ({
        ...state,
        rewards: state.rewards.map((reward) =>
            reward.id === newReward.id
                ? {
                    ...reward,
                    titleText: newReward.titleText,
                    supText: newReward.supText,
                    cost: newReward.cost,
                }
                : reward),
    }))
    .addCase(RewardActions.deleteReward, (state, {payload: {rewardId}}) => ({
        ...state,
        rewards: state.rewards.filter((reward) => reward.id !== rewardId)
    }))
    .addCase(RewardActions.changeCurrentRewardFilter, (state, {payload: {newFilter}}) => ({
        ...state,
        currentFilter: newFilter
    }))
);
