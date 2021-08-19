import { goalActions, goalActionsType, goalState } from '../typesRedux/goal';

const initialState: goalState = {
  items: [
    {
      titleText: 'Поработать над творческим проектом',
      supText: 'Нажмите, чтобы указать название вашего текущего проекта и задать расписание!',
    },
    {
      titleText: 'Растяжка > Ежедневная тренировка',
      supText: 'Нажмите, чтобы выбрать расписание и указать упражнения!',
    },
  ],
};

export const goal = (state = initialState, action: goalActions): goalState => {
  switch (action.type) {
    case goalActionsType.SET_GOAL_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
