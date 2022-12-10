import React, {FunctionComponent} from 'react';

interface ITasksList {
	category: string,
	tasks: any[],
	taskComponent: (filteredTask: any) => React.ReactNode,
}

type Props = ITasksList;

export const TasksList: FunctionComponent<Props> = ({category, tasks, taskComponent}) => {
	const filteredTasks = category === 'all' ? tasks : (
		tasks.filter(task => task.category === category)
	)

	return (
		<>
			{
				filteredTasks.map((filteredTask) => taskComponent(filteredTask))
			}
		</>
	);
};
