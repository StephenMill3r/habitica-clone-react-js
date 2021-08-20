export interface userState {
  levelPoint: number;
  healthPoint: number;
  money: number;
}

export enum userActionsType {
  SET_USER_LEVEL = 'SET_USER_LEVEL',
  SET_MINUS_USER_LEVEL = 'SET_MINUS_USER_LEVEL',
  SET_RESET_USER_LEVEL = 'SET_RESET_USER_LEVEL',
  SET_USER_HEALTH = 'SET_USER_HEALTH',
  SET_MINUS_USER_HEALTH = 'SET_MINUS_USER_HEALTH',
  SET_RESET_USER_HEALTH = 'SET_RESET_USER_HEALTH',
  SET_USER_MONEY = 'SET_USER_MONEY',
  SET_MINUS_USER_MONEY = 'SET_MINUS_USER_MONEY',
}

interface setUserLevelType {
  type: userActionsType.SET_USER_LEVEL;
  payload: number;
}

interface setMinusUserLevelType {
  type: userActionsType.SET_MINUS_USER_LEVEL;
  payload: number;
}

interface setResetUserLevelType {
  type: userActionsType.SET_RESET_USER_LEVEL;
}

interface setUserHealthType {
  type: userActionsType.SET_USER_HEALTH;
  payload: number;
}

interface setMinusUserHealthType {
  type: userActionsType.SET_MINUS_USER_HEALTH;
  payload: number;
}

interface setResetUserHealthType {
  type: userActionsType.SET_RESET_USER_HEALTH;
}

interface setMoneyUserType {
  type: userActionsType.SET_USER_MONEY;
  payload: number;
}

interface setMinusMoneyUserType {
  type: userActionsType.SET_MINUS_USER_MONEY;
  payload: number;
}
export type userActions =
  | setUserHealthType
  | setUserLevelType
  | setMinusUserLevelType
  | setResetUserLevelType
  | setMinusUserHealthType
  | setResetUserHealthType
  | setMoneyUserType
  | setMinusMoneyUserType;
