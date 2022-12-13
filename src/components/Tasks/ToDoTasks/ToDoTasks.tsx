import React from 'react';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';
import {TasksColumn} from "../TasksColumn";
import {taskTabsType} from "../taskTypes";
import {ToDoTask} from "./ToDoTask";
import {toDoTaskType} from "../../../redux/typesRedux/toDo";
import {OkIcon} from "../../../assets/icons/OkIcon";
import NoteAboutTasks from "../NoteAboutTasks";

export const ToDoTasks: React.FC = () => {
	const {setToDoItems} = useActions();
	const {toDoTasks} = useTypedSelector((state) => state.toDo);

	const renderToDoTasksList = (category: string) => {
		const filteredToDoTasks = category === 'all' ? toDoTasks : (
			toDoTasks.filter(toDoTask => toDoTask.category === category)
		)

		return (
			<>
				{
					filteredToDoTasks.map((toDoTask: toDoTaskType) => (
						<ToDoTask
							key={toDoTask.id}
							titleText={toDoTask.titleText}
							id={toDoTask.id}
							supText={toDoTask.supText}
							isCompletedTask={toDoTask.isCompletedTask}
							diff={toDoTask.diff}
							remainDay={toDoTask.remainDay}
							category={toDoTask.category}
						/>
					))
				}
			</>
		)
	}


	const tabs: taskTabsType = [
		{
			title: 'Активные',
			category: 'active',
			render: (category: string) => renderToDoTasksList(category)
		},
		{
			title: 'С датой',
			category: 'date',
			render: (category: string) => renderToDoTasksList(category)
		},
		{
			title: 'Сделанные',
			category: 'completed',
			render: (category: string) => renderToDoTasksList(category)
		}
	]

	const onSendToDo = (titleText: string) => {
		setToDoItems({
			id: toDoTasks.length + 1,
			titleText,
			category: 'active',
			isCompletedTask: false,
			diff: 1,
			supText: '',
			remainDay: 0
		});
	};


	return (
		<TasksColumn
			tasksColumnName='Задачи'
			addTask={
				{
					placeHolder: 'Добавить задачу',
					handler: onSendToDo
				}
			}
			tabs={tabs}
			additionalContent={
				<NoteAboutTasks
					title='Это ваши Задачи'
					icon={<OkIcon/>}
					text='Задачи могут быть выполнены только один раз. Добавьте списки вашим задачам, чтобы увеличить их награду.'
				/>
			}
		/>
	);
};
