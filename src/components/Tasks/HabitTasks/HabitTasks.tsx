import React from 'react';

import {HabitTask} from '../../index';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';
import {addHabitTask} from "../../../redux/actions/habitTask";
import {habitTaskType} from "../../../redux/typesRedux/habitTask";
import {TasksColumn} from "../TasksColumn";
import {taskTabsType} from "../taskTypes";

export const HabitTasks: React.FC = () => {
	const {addHabitTask} = useActions();
	const {habitTasks} = useTypedSelector((state) => state.habitTask);

	const renderHabitTasksList = (category: string) => {
		const filteredHabitTasks = category === 'all' ? habitTasks : (
			habitTasks.filter(habitTask => habitTask.category === category)
		)

		return (
			<>
				{
					filteredHabitTasks.map((habitTask: habitTaskType) => (
						<HabitTask
							key={habitTask.id}
							text={habitTask.titleText}
							isBadTask={habitTask.isBadTask}
							id={habitTask.id}
							isSuccessTask={habitTask.isSuccessTask}
							count={habitTask.count}
							supText={habitTask.supText}
							taskDiff={habitTask.diff}
						/>
					))
				}
			</>
		)
	}

	const tabs: taskTabsType = [
		{
			title: 'Все',
			category: 'all',
			render: (category: string) => renderHabitTasksList(category)
		},
		{
			title: 'Слабые',
			category: 'weak',
			render: (category: string) => renderHabitTasksList(category)
		},
		{
			title: 'Сильные',
			category: 'strong',
			render: (category: string) => renderHabitTasksList(category)
		}
	]

	const onSendHabit = (text: string) => {
		addHabitTask({
			id: habitTasks.length + 1,
			category: 'weak',
			titleText: text,
			count: 0,
			diff: 1,
			isSuccessTask: true,
			isBadTask: false,
			supText: ''
		});
	};

	return (
		<TasksColumn
			tasksColumnName='Привычки'
			addTask={
				{
					placeHolder: 'Добавить привычку',
					handler: onSendHabit
				}
			}
			tabs={tabs}
		/>
	);
};
