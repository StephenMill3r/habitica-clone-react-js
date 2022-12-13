import React, {FunctionComponent, useState} from 'react';
import {Modal} from "./Modal";
import {useActions} from "../../redux/typeHooks/useActions";
import classNames from "classnames";
import {habitTaskType} from "../../redux/typesRedux/habitTask";
import {diff} from "../Tasks/HabitTasks/HabitTask";

interface IUpdateToDoTaskModal {
	isShown: boolean,
	toggle: () => void,
	taskData: habitTaskType
}

export const UpdateHabitTask: FunctionComponent<IUpdateToDoTaskModal> = ({isShown, toggle, taskData}) => {
	const {id, titleText, supText, isBadTask, diff: indexDiff} = taskData

	const [taskTitle, setTaskTitle] = useState<string>(titleText);
	const [taskText, setTaskText] = useState<string>(supText);

	const [selectedDiff, setSelectedDiff] = useState<string>(diff[indexDiff]);
	const [isBadTaskModal, setIsBadTaskModal] = useState<boolean>(isBadTask);


	const {setHabitChangeTask, setDeleteHabitTask} = useActions();

	//Редактирование сложности, описания, названия, смена таски(хорошая-плохая) в модальном окне
	const handleSubmit = (titleText: string, supText: string, diff: number) => {
		setHabitChangeTask(id, isBadTaskModal, titleText, supText, diff, !isBadTaskModal);
		toggle();
	};

	//Отоброжение и изменение принадлежности таски(хорошая-плохая) в модальном окне
	const handleChangeIsBadTask = (value: boolean) => () => {
		setIsBadTaskModal(value);
	};

	//Удаление такси
	const onClickDeleteTask = () => {
		setDeleteHabitTask(id);
		toggle()
	};

	return (
		<Modal
			isShown={isShown}
			handleClose={toggle}
			handleSubmit={() => handleSubmit(taskTitle, taskText, diff.indexOf(selectedDiff))}
			headerText={'Изменить привычку'}
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
					<div className='modal__icons'>
						<div onClick={handleChangeIsBadTask(false)} className='modal__icon-item'>
							<div
								className={classNames('modal__icon', {
									'modal__icon-active': !isBadTaskModal,
								})}>
								<div className='item-tasks__plus'>+</div>
							</div>
							<div className='modal__description'>Полезная</div>
						</div>
						<div onClick={handleChangeIsBadTask(true)} className='modal__icon-item'>
							<div
								className={classNames('modal__icon', {
									'modal__icon-active': isBadTaskModal,
								})}>
								<div className='item-tasks__minus'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
										<path fillRule='evenodd' d='M0 0h10v2H0z'></path>
									</svg>
								</div>
							</div>
							<div className='modal__description'>Вредная</div>
						</div>
					</div>
					<div className='modal__title-select'>Сложность</div>
					<select
						className='modal__select'
						value={selectedDiff}
						onChange={(e) => setSelectedDiff(e.target.value)}>
						{diff.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
					<div onClick={onClickDeleteTask} className='modal__footer'>
						Удалить привычку
					</div>
				</>
			}
		/>
	);
};

