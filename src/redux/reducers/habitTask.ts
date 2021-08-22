import { habitActions, habitActionsType, habitState } from '../typesRedux/habitTask';

const initialState: habitState = {
  items: [
    {
      id: 0,
      category: 'weak',
      titleText: 'Плохая привычка',
      isBadTask: true,
      isSucsessTask: false,
      count: 0,
    },
    {
      id: 1,
      category: 'weak',
      titleText: 'Проверить почту',
      isBadTask: false,
      isSucsessTask: false,
      count: 0,
    },
  ],
};

export const habitTask = (state = initialState, action: habitActions): habitState => {
  switch (action.type) {
    case habitActionsType.SET_HABIT_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    case habitActionsType.SET_HABIT_SUCSESS_TASK:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.payload ? { ...item, isSucsessTask: true, category: 'strong' } : item,
        ),
      };
    case habitActionsType.SET_PLUS_HABIT_COUNT:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item,
        ),
      };
    case habitActionsType.SET_MINUS_HABIT_COUNT:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.payload ? { ...item, count: item.count - 1 } : item,
        ),
      };
    default:
      return state;
  }
};
