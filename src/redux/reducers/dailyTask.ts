import { dailyActions, dailyActionsType, dailyState } from '../typesRedux/dailyTask';

const initialState: dailyState = {
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

export const dailyTask = (state = initialState, action: dailyActions): dailyState => {
  switch (action.type) {
    case dailyActionsType.SET_DAILY_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
