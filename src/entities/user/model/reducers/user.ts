import {createReducer} from "@reduxjs/toolkit";
import {UserActions} from "../actions";
import {userState} from "../config/config";

const initialState: userState = {
    levelPoint: 0,
    healthPoint: 50,
    level: 1,
    maxLevelPoint: 25,
    maxHealthPoint: 50,
    money: 0,
    things: []
};


export const user = createReducer(initialState, (builder) => builder

    .addCase(UserActions.addUserLevelPoint, (state, {payload: {level_point}}) => ({
        ...state,
        levelPoint: state.levelPoint + level_point,
    }))
    .addCase(UserActions.minusUserLevelPoint, (state, {payload: {level_point}}) => ({
        ...state,
        levelPoint: state.levelPoint - level_point,
    }))
    .addCase(UserActions.increaseMaxUserLevelPoint, (state) => ({
        ...state,
        maxLevelPoint: Math.floor(state.maxLevelPoint * 1.4)
    }))
    .addCase(UserActions.increaseUserLevel, (state) => ({
        ...state,
        level: state.level + 1,
        maxLevelPoint: Math.floor(state.maxLevelPoint * 1.4)
    }))
    .addCase(UserActions.resetUserLevelPoint, (state) => ({
        ...state,
        levelPoint: 0
    }))
    .addCase(UserActions.addUserHp, (state, {payload: {hp}}) => ({
        ...state,
        healthPoint: state.healthPoint + hp
    }))
    .addCase(UserActions.minusUserHp, (state, {payload: {hp}}) => ({
        ...state,
        healthPoint: state.healthPoint - hp
    }))
    .addCase(UserActions.resetUserHp, (state) => ({
        ...state,
        healthPoint: 50
    }))
    .addCase(UserActions.addUserMoney, (state, {payload: {money}}) => ({
        ...state,
        money: state.money + money
    }))
    .addCase(UserActions.buyThing, (state, {payload: {newThing}}) => ({
        ...state,
        things: [...state.things, newThing]
    }))
    .addCase(UserActions.minusUserMoney, (state, {payload: {money}}) => ({
        ...state,
        money: state.money - money
    }))
);
