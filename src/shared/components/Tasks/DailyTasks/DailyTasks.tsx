import React from 'react';

import {useActions} from '../../../../app/store/typeHooks/useActions';
import {useTypedSelector} from '../../../../app/store/typeHooks/useTypedSelector';
import {TasksColumn} from "../TasksColumn";
import {dailyTaskType} from "../../../../redux/typesRedux/dailyTask";
import {DailyTask} from "./DailyTask";
import {taskTabsType} from "../taskTypes";
import {CalendarIcon} from "../../../../assets/icons/CalendarIcon";
import NoteAboutTasks from "../NoteAboutTasks";

export const DailyTasks: React.FC = () => {
	const {addDailyTask} = useActions();
	const {dailyTasks} = useTypedSelector((state) => state.dailyTask);

	const renderDailyTasksList = (category: string) => {
		const filteredDailyTasks = category === 'all' ? dailyTasks : (
			dailyTasks.filter(dailyTasks => dailyTasks.category === category)
		)

		return (
			<>
				{
					filteredDailyTasks.map((dailyTask: dailyTaskType) => (
						<DailyTask
							key={dailyTask.id}
							titleText={dailyTask.titleText}
							id={dailyTask.id}
							count={dailyTask.count}
							supText={dailyTask.supText}
							exp={dailyTask.exp}
							health={dailyTask.health}
							isCompletedTask={dailyTask.isCompletedTask}
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
			render: (category: string) => renderDailyTasksList(category)
		},
		{
			title: 'Текущие',
			category: 'active',
			render: (category: string) => renderDailyTasksList(category)
		},
		{
			title: 'Прочие',
			category: 'other',
			render: (category: string) => renderDailyTasksList(category)
		}
	]

	const onSendDaily = (titleText: string) => {
		addDailyTask({
			id: dailyTasks.length - 1 + 1,
			titleText,
			supText: '',
			count: 0,
			category: 'active',
			isCompletedTask: false,
			exp: 10,
			health: 7,
		});
	};

	return (
		<TasksColumn
			tasksColumnName='Ежедневные дела'
			addTask={
				{
					placeHolder: 'Добавить ежедневное дело',
					handler: onSendDaily
				}
			}
			tabs={tabs}
			additionalContent={
				<NoteAboutTasks
					title='Это ваши Ежедневные дела'
					icon={<CalendarIcon/>}
					text='Ежедневные дела повторяются регулярно. Настройте расписание, которое вам подходит лучше всего!'
				/>
			}
		/>
	);
};

