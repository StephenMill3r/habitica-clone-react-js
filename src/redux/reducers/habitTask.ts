import { habitActions, habitActionsType, habitState } from '../typesRedux/habitTask';

const initialState: habitState = {
  items: [
    {
      id: 0,
      category: 'weak',
      titleText: 'Плохая привычка',
      supText: '',
      isBadTask: true,
      isSucsessTask: false,
      count: 0,
      diff: 1,
    },
    {
      id: 1,
      category: 'weak',
      titleText: 'Проверить почту',
      isBadTask: false,
      isSucsessTask: false,
      count: 0,
      supText: '',
      diff: 1,
    },
  ],
};

export const habitTask = (state = initialState, action: habitActions): habitState => {
  switch (action.type) {
    case habitActionsType.SET_HABIT_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    case habitActionsType.SET_HABIT_SUCCESS_TASK:
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
    case habitActionsType.SET_HABIT_CHANGE_TASK:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.id
            ? {
                ...item,
                titleText: action.titleText,
                supText: action.supText,
                isBadTask: action.isBadTask,
                diff: action.diff + 1,
              }
            : item,
        ),
      };
    case habitActionsType.SET_DELETE_HABIT_TASK:
      const newItems = [...state.items];
      newItems.splice(action.payload);
      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};
