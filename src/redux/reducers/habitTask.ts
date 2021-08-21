import { habitActions, habitActionsType, habitState } from '../typesRedux/habitTask';

const initialState: habitState = {
  items: [
    {
      id: 0,
      category: 'weak',
      titleText: 'Плохая привычка',
      isBadTask: true,
      isSucsessTask: false,
    },
    {
      id: 1,
      category: 'strong',
      titleText: 'Проверить почту',
      isBadTask: false,
      isSucsessTask: true,
    },
  ],
};

export const habitTask = (state = initialState, action: habitActions): habitState => {
  switch (action.type) {
    case habitActionsType.SET_HABIT_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    // case habitActionsType.SET_HABIT_SUCSESS_TASK:
    //   return { ...state, items: newItems };
    default:
      return state;
  }
};
