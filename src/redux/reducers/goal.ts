import { goalActions, goalActionsType, goalState } from '../typesRedux/goal';

const initialState: goalState = {
  items: [
    {
      id: 0,
      category: 'active',
      titleText: 'Растяжка > Ежедневная тренировка',
      isCompletedTask: false,
      exp: 10,
      health: 7,
    },
  ],
};

export const goal = (state = initialState, action: goalActions): goalState => {
  switch (action.type) {
    case goalActionsType.SET_GOAL_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    case goalActionsType.SET_GOAL_SUCCESS_TASK:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.payload
            ? { ...item, isCompletedTask: true, category: 'completed' }
            : item,
        ),
      };
    default:
      return state;
  }
};
