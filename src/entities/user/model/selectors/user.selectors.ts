import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store/model/store.model";

export const selectUser = (state: RootState) => state.user;

export const selectLevel = createSelector(
    selectUser,
    (state) => state.level,
);

export const selectLevelPoint = createSelector(
    selectUser,
    (state) => state.levelPoint,
);

export const selectMaxLevelPoint = createSelector(
    selectUser,
    (state) => state.maxLevelPoint,
);

export const selectHp = createSelector(
    selectUser,
    (state) => state.healthPoint,
);

export const selectMaxHealthPoint = createSelector(
    selectUser,
    (state) => state.maxHealthPoint,
);

export const selectMoney = createSelector(
    selectUser,
    (state) => state.money,
);

export const selectThings = createSelector(
    selectUser,
    (state) => state.things,
);

