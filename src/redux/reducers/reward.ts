import {rewardActions, rewardActionsType, rewardState, rewardTaskType} from '../typesRedux/reward';

const initialState: rewardState = {
    rewardTasks: [
        {
            id: 0,
            titleText: 'Награди себя',
            supText: 'Смотрите телевизор,играйте в игры, кушайте вкусняшки,вам решать!',
            cost: 10,
            category: 'season',
        },
    ],
};

export const reward = (state = initialState, action: rewardActions): rewardState => {
    switch (action.type) {
        case rewardActionsType.ADD_REWARD_TASK:
            return {...state, rewardTasks: [...state.rewardTasks, action.payload]};
        case rewardActionsType.SET_REWARD_CHANGE_TASK:
            return {
                ...state,
                rewardTasks: state.rewardTasks.map((rewardTask: rewardTaskType) =>
                    rewardTask.id === action.id
                        ? {
                            ...rewardTask,
                            titleText: action.titleText,
                            supText: action.supText,
                            cost: action.cost,
                        }
                        : rewardTask,
                ),
            };
        case rewardActionsType.SET_DELETE_REWARD_TASK:
            return {
                ...state,
                rewardTasks: state.rewardTasks.filter((rewardTask) => rewardTask.id !== action.payload),
            };
        default:
            return state;
    }
};
