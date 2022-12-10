import {toDoActions, toDoActionsType, toDoState, toDoTaskType} from "../typesRedux/toDo";

const initialState: toDoState = {
    toDoTasks: [
        {
            id: 0,
            category: 'active',
            titleText: 'Растяжка > Ежедневная тренировка',
            supText: '',
            isCompletedTask: false,
            diff: 1,
            remainDay: 0,
        },
    ],
};

export const toDo = (state = initialState, action: toDoActions): toDoState => {
    switch (action.type) {
        case toDoActionsType.ADD_TODO_TASK:
            return {...state, toDoTasks: [...state.toDoTasks, action.payload]};
        case toDoActionsType.SET_TODO_SUCCESS_TASK:
            return {
                ...state,
                toDoTasks: state.toDoTasks.map((toDoTask: toDoTaskType) =>
                    toDoTask.id === action.payload
                        ? {...toDoTask, isCompletedTask: true, category: 'completed'}
                        : toDoTask,
                ),
            };
        case toDoActionsType.SET_TODO_CHANGE_TASK:
            return {
                ...state,
                toDoTasks: state.toDoTasks.map((toDoTask: toDoTaskType) =>
                    toDoTask.id === action.id
                        ? {
                            ...toDoTask,
                            titleText: action.titleText,
                            supText: action.supText,
                            diff: action.diff + 1,
                            remainDay: action.remainDay,
                        }
                        : toDoTask,
                ),
            };
        case toDoActionsType.SET_DELETE_TODO_TASK:
            return {
                ...state,
                toDoTasks: state.toDoTasks.filter((toDoTask) => toDoTask.id !== action.payload),
            };
        case toDoActionsType.SET_TODO_CHANGE_CATEGORY:
            return {
                ...state,
                toDoTasks: state.toDoTasks.map((toDoTask: toDoTaskType) =>
                    toDoTask.id === action.id ? {...toDoTask, category: action.category} : toDoTask,
                ),
            };
        default:
            return state;
    }
};
