export interface userState {
  levelPoint: number;
  healthPoint: number;
}

export enum userActionsType {
  SET_USER_LEVEL = 'SET_USER_LEVEL',
  SET_USER_HEALTH = 'SET_USER_HEALTH',
  SET_MINUS_USER_LEVEL = 'SET_MINUS_USER_LEVEL',
  SET_RESET_USER_LEVEL = 'SET_RESET_USER_LEVEL',
}

interface setUserLevelType {
  type: userActionsType.SET_USER_LEVEL;
  payload: number;
}

interface setUserHealthType {
  type: userActionsType.SET_USER_HEALTH;
  payload: number;
}

interface setMinusUserLevelType {
  type: userActionsType.SET_MINUS_USER_LEVEL;
  payload: number;
}

interface setResetUserLevelType {
  type: userActionsType.SET_RESET_USER_LEVEL;
}
export type userActions =
  | setUserHealthType
  | setUserLevelType
  | setMinusUserLevelType
  | setResetUserLevelType;
