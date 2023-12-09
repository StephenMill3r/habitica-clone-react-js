import React, {FunctionComponent, useMemo} from "react";
import {TaskFilters} from "features/filterTasks";
import {AddTaskForm} from "features/addTask";
import {TaskFiltersType, TaskType} from "shared/types/task";

interface ITasksColumnProps {
	tasksColumnName: string
	addTask: { placeHolder: string, handler: (text: string) => void },
	tasks: TaskType[],
	taskFilters: TaskFiltersType,
	currentFilter: string,
	additionalContent?: React.ReactNode,
	taskComponent: (taskData: TaskType) => React.ReactNode,
}

export const TasksColumn: FunctionComponent<ITasksColumnProps> = ({
	                                                                  tasksColumnName,
	                                                                  tasks,
	                                                                  taskFilters,
	                                                                  currentFilter,
	                                                                  addTask,
	                                                                  taskComponent,
	                                                                  additionalContent
                                                                  }) => {

	const filteredTasks = useMemo(() => tasks.filter((task) => task.category === currentFilter), [])

	return (
		<div className='tasks__column'>
			<div className='tasks__info'>
				<div className='tasks__name'>{tasksColumnName}</div>
				<TaskFilters taskFilters={taskFilters}/>
			</div>
			<div className='tasks__item item-tasks'>
				<div className='item-tasks__wrapper'>
					<AddTaskForm addTask={addTask}/>
					{
						filteredTasks.map((habitTask) => taskComponent(habitTask))
					}
					{additionalContent && additionalContent}
				</div>
			</div>
		</div>
	);
};
