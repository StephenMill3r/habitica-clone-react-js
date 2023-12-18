import {TaskType} from "../../../shared/types/task";

export function filterTask<T extends TaskType>(tasks: T[], filter: string): T[] {
    return tasks.filter((task) => filter === 'ALL' ? task :
        task.category === filter)
}
