import React, {FunctionComponent, useState} from 'react';
import {Modal} from "./Modal";
import {useActions} from "../../redux/typeHooks/useActions";
import DatePicker from "react-datepicker";
import {toDoTaskType} from "../../redux/typesRedux/toDo";
import {diff} from "../Tasks/HabitTasks/HabitTask";

interface IUpdateToDoTaskModal {
	isShown: boolean,
	toggle: () => void,
	taskData: toDoTaskType
}

export const UpdateToDoTaskModal: FunctionComponent<IUpdateToDoTaskModal> = ({isShown, toggle, taskData}) => {
	const {id, titleText, supText, remainDay, diff: indexDiff} = taskData

	const [taskTitle, setTaskTitle] = useState<string>(titleText);
	const [taskText, setTaskText] = useState<string>(supText);

	const [selectedDiff, setSelectedDiff] = useState<string>(diff[indexDiff]);
	const [userDateToFinish, setUserDateToFinish] = useState<Date>();
	const [calculatedRemainDate, setCalculatedRemainDate] = useState<number>(remainDay);

	const {setDeleteToDoTask, setToDoChangeCategoryTask, setToDoChangeTask} = useActions();

	const handleDateChange = (newDate: Date) => {
		const calculatedRemainDay = Math.ceil(
			(newDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
		);
		setUserDateToFinish(newDate);
		setCalculatedRemainDate(calculatedRemainDay);
	};

	const onClickDeleteTask = () => {
		setDeleteToDoTask(id);
		toggle();
	};

	const handleSubmit = (titleText: string, supText: string, diff: number) => {
		setToDoChangeTask(id, titleText, supText, diff, calculatedRemainDate);
		if (userDateToFinish) {
			setToDoChangeCategoryTask(id, 'date');
		}
		toggle();
	};

	return (
		<Modal
			isShown={isShown}
			handleClose={toggle}
			handleSubmit={() => handleSubmit(taskTitle, taskText, diff.indexOf(selectedDiff))}
			headerText={'Изменить задачу'}
			headerContent={
				<>
					<div className='modal__text'>
						<label>Заголовок*</label>
						<input
							placeholder='Добавить название'
							value={taskTitle}
							onChange={(e) => setTaskTitle(e.target.value)}
							type='text'
						/>
					</div>
					<div className='modal__notice'>
						<label>Заметки</label>
						<textarea
							value={taskText}
							onChange={(e) => setTaskText(e.target.value)}
						/>
					</div>
				</>
			}
			modalContent={
				<>
					<div className='modal__title-select'>Сложность</div>
					<select
						className='modal__select'
						value={selectedDiff}
						onChange={(e) => setSelectedDiff(e.target.value)}>
						{diff.map((item: string) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
					<div className='modal__title-select'>Выполнить до</div>
					<div className='modal__calendar'>
						<DatePicker
							filterDate={(date) => date > new Date()}
							popperPlacement='top-start'
							selected={userDateToFinish}
							onChange={(date) => date && handleDateChange(date)}
						/>
					</div>
					<div onClick={onClickDeleteTask} className='modal__footer'>
						Удалить задачу
					</div>
				</>
			}
		/>
	);
};

