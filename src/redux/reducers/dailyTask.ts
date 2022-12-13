import {dailyActions, dailyActionsType, dailyState, dailyTaskType} from '../typesRedux/dailyTask';

const initialState: dailyState = {
    dailyTasks: [
        {
            id: 0,
            category: 'active',
            titleText: 'Поработать над творческим проектом',
            supText: 'Нажмите, чтобы указать название вашего текущего проекта и задать расписание!',
            isCompletedTask: false,
            count: 0,
            exp: 10,
            health: 7,
        },
    ],
};

export const dailyTask = (state = initialState, action: dailyActions): dailyState => {
    switch (action.type) {
        case dailyActionsType.ADD_DAILY_TASK:
            return {...state, dailyTasks: [...state.dailyTasks, action.payload]};
        case dailyActionsType.SET_DAILY_SUCCESS_TASK:
            return {
                ...state,
                dailyTasks: state.dailyTasks.map((dailyTask: dailyTaskType) =>
                    dailyTask.id === action.payload
                        ? {...dailyTask, isCompletedTask: true, category: 'other', count: dailyTask.count + 1}
                        : dailyTask,
                ),
            };
        case dailyActionsType.SET_DAILY_DEFAULT_TASK:
            return {
                ...state,
                dailyTasks: state.dailyTasks.map((dailyTask: dailyTaskType) =>
                    dailyTask.id === action.payload
                        ? {...dailyTask, isCompletedTask: false, category: 'active', count: dailyTask.count - 1}
                        : dailyTask,
                ),
            };
        default:
            return state;
    }
};
