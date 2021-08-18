import { userActions, userActionsType, userState } from '../typesRedux/user';

const initialState: userState = {
  levelPoint: 0,
  healthPoint: 50,
};

export const user = (state = initialState, action: userActions): userState => {
  switch (action.type) {
    case userActionsType.SET_USER_LEVEL:
      return { ...state, levelPoint: state.levelPoint + action.payload };
    case userActionsType.SET_MINUS_USER_LEVEL:
      return { ...state, levelPoint: state.levelPoint - action.payload };
    case userActionsType.SET_RESET_USER_LEVEL:
      return { ...state, levelPoint: 0 };
    case userActionsType.SET_USER_HEALTH:
      return { ...state, levelPoint: state.healthPoint + action.payload };
    default:
      return state;
  }
};
