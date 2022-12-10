import {habitActions, habitActionsType, habitState, habitTaskType} from '../typesRedux/habitTask';

const initialState: habitState = {
    habitTasks: [
        {
            id: 1,
            category: 'weak',
            titleText: 'Плохая привычка',
            supText: '',
            isBadTask: true,
            isSuccessTask: false,
            count: 0,
            diff: 1,
        },
        {
            id: 2,
            category: 'weak',
            titleText: 'Проверить почту',
            isBadTask: false,
            isSuccessTask: false,
            count: 0,
            supText: '',
            diff: 1,
        },
    ],
};

export const habitTask = (state = initialState, action: habitActions): habitState => {
    switch (action.type) {
        case habitActionsType.ADD_HABIT_TASK:
            return {...state, habitTasks: [...state.habitTasks, action.payload]};
        case habitActionsType.SET_HABIT_SUCCESS_TASK:
            return {
                ...state,
                habitTasks: state.habitTasks.map((habitTask: habitTaskType) =>
                    habitTask.id === action.payload ? {
                        ...habitTask,
                        isSuccessTask: true,
                        category: 'strong'
                    } : habitTask,
                ),
            };
        case habitActionsType.SET_PLUS_HABIT_COUNT:
            return {
                ...state,
                habitTasks: state.habitTasks.map((habitTask: habitTaskType) =>
                    habitTask.id === action.payload ? {...habitTask, count: habitTask.count + 1} : habitTask,
                ),
            };
        case habitActionsType.SET_MINUS_HABIT_COUNT:
            return {
                ...state,
                habitTasks: state.habitTasks.map((habitTask: habitTaskType) =>
                    habitTask.id === action.payload ? {...habitTask, count: habitTask.count - 1} : habitTask,
                ),
            };
        case habitActionsType.SET_HABIT_CHANGE_TASK:
            return {
                ...state,
                habitTasks: state.habitTasks.map((habitTask: habitTaskType) =>
                    habitTask.id === action.id
                        ? {
                            ...habitTask,
                            titleText: action.titleText,
                            supText: action.supText,
                            isBadTask: action.isBadTask,
                            isSuccessTask: action.isSuccessTask,
                            diff: action.diff + 1,
                        }
                        : habitTask,
                ),
            };
        case habitActionsType.SET_DELETE_HABIT_TASK:
            return {
                ...state,
                habitTasks: state.habitTasks.filter((habitTask) => habitTask.id !== action.payload),
            };
        default:
            return state;
    }
};
