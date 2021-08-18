/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { userActions, userActionsType } from '../typesRedux/user';

export const setUserLevel = (payload: number): userActions => {
  return { type: userActionsType.SET_USER_LEVEL, payload };
};

export const setUserHealth = (payload: number): userActions => {
  return { type: userActionsType.SET_USER_HEALTH, payload };
};

export const setMinusUserLevel = (payload: number): userActions => {
  return { type: userActionsType.SET_MINUS_USER_LEVEL, payload };
};

export const setResetUserLevel = (): userActions => {
  return { type: userActionsType.SET_RESET_USER_LEVEL };
};
