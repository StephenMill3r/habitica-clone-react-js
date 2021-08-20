import { habitActions, habitActionsType, habitState } from '../typesRedux/habitTask';

const initialState: habitState = {
  items: [
    {
      titleText: 'Плохая привычка',
      isBadTask: true,
    },
    {
      titleText: 'Проверить почту',
      isBadTask: false,
    },
  ],
};

export const habitTask = (state = initialState, action: habitActions): habitState => {
  switch (action.type) {
    case habitActionsType.SET_HABIT_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
