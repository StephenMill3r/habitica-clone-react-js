import {TaskFiltersType, TaskType} from "../../../../shared/types/task";


export type ToDoTaskType =
    Required<Pick<TaskType, 'titleText' | 'id' | 'supText' | 'diff' | 'category' | 'remainDay'>>
    & TaskType;

export interface toDoState {
    toDoTasks: ToDoTaskType[];
    currentFilter: string;
}

export enum TodoCategoryEnum {
    ACTIVE = 'ACTIVE',
    DATE = 'DATE',
    COMPLETED = 'COMPLETED'
}

export const todoFilters: TaskFiltersType = [
    {
        title: 'Активные',
        category: TodoCategoryEnum.ACTIVE,
    },
    {
        title: 'С датой',
        category: TodoCategoryEnum.DATE,
    },
    {
        title: 'Сделанные',
        category: TodoCategoryEnum.COMPLETED,
    }
]
