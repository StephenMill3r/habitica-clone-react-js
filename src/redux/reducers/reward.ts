import { rewardActions, rewardActionsType, rewardState } from '../typesRedux/reward';

const initialState: rewardState = {
  items: [
    {
      titleText: 'Награди себя',
      supText: 'Смотрите телевизор,играйте в игры, кушайте вкусняшки,вам решать!',
      cost: 10,
    },
  ],
};

export const reward = (state = initialState, action: rewardActions): rewardState => {
  switch (action.type) {
    case rewardActionsType.SET_REWARD_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
