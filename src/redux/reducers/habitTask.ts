import { habitActions, habitActionsType, habitState } from '../typesRedux/habitTask';

const initialState: habitState = {
  items: [
    'Изучить действия мастера ремесла + к Использовать новый подход в творчестве',
    '10 мин. кардио + 10 минут кардио',
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
