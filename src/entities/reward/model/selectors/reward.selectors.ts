import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store/model/store.model";

export const selectReward = (state: RootState) => state.reward;

export const selectRewards = createSelector(
    selectReward,
    (state) => state.rewards,
);

export const selectCurrentRewardFilter = createSelector(
    selectReward,
    (state) => state.currentFilter,
);

