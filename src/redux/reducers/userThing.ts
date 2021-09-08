import { userThingActions, userThingActionsType, userThingState } from '../typesRedux/userThing';

const initialState: userThingState = {
  items: [
    {
      category: 'flask',
      name: 'Health flask',
      price: 25,
      img: '',
    },
  ],
};

export const userThing = (state = initialState, action: userThingActions): userThingState => {
  switch (action.type) {
    case userThingActionsType.SET_USER_THING:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
