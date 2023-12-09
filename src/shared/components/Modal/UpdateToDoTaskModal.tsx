import React, {FunctionComponent, useState} from 'react';
import {Modal} from "./Modal";
import {useActions} from "../../../app/store/typeHooks/useActions";
import DatePicker from "react-datepicker";
import {toDoTaskType} from "../../../redux/typesRedux/toDo";
import {diffList} from "../Tasks/taskDifficulty";
import {useFormik} from "formik";

interface IUpdateToDoTaskModal {
	isShown: boolean,
	toggle: () => void,
	taskData: toDoTaskType
}


export const UpdateToDoTaskModal: FunctionComponent<IUpdateToDoTaskModal> = ({isShown, toggle, taskData}) => {
	const {id, titleText, supText, remainDay, diff: indexDiff, isCompletedTask, category} = taskData
	const {setDeleteToDoTask, setToDoChangeCategoryTask, setToDoChangeTask} = useActions();
	const [userDateToFinish, setUserDateToFinish] = useState<Date>();

	const initialValues: toDoTaskType = {
		id,
		titleText,
		supText,
		diff: indexDiff,
		remainDay,
		isCompletedTask,
		category,
	}

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: values => {
			let createData = {
				id: values.id,
				titleText: values.titleText,
				supText: values.supText,
				diff: diffList.indexOf(diffList[values.diff]),
				remainDay: values.remainDay,
				isCompletedTask: true,
				category: ''
			};

			setToDoChangeTask(createData);
			if (userDateToFinish) {
				setToDoChangeCategoryTask(id, 'date');
			}
			toggle();
		}
	})

	const handleDateChange = (newDate: Date) => {
		const calculatedRemainDay = Math.ceil(
			(newDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
		);
		setUserDateToFinish(newDate);
		formik.setFieldValue('remainDay', calculatedRemainDay);
	};

	const onClickDeleteTask = () => {
		setDeleteToDoTask(id);
		toggle();
	};

	return (
		<Modal
			isShown={isShown}
			handleClose={toggle}
			handleSubmit={formik.handleSubmit}
			headerText={'Изменить задачу'}
			headerContent={
				<>
					<div className='modal__text'>
						<label>Заголовок*</label>
						<input
							placeholder='Добавить название'
							value={formik.values.titleText}
							onChange={(e) => formik.setFieldValue('titleText', e.target.value)}
							type='text'
						/>
					</div>
					<div className='modal__notice'>
						<label>Заметки</label>
						<textarea
							value={formik.values.supText}
							onChange={(e) => formik.setFieldValue('supText', e.target.value)}
						/>
					</div>
				</>
			}
			modalContent={
				<>
					<div className='modal__title-select'>Сложность</div>
					<select
						className='modal__select'
						value={diffList[formik.values.diff]}
						onChange={(e) => formik.setFieldValue('diff', e.target.value)}>
						{diffList.map((difficulty: string) => (
							<option key={difficulty} value={difficulty}>
								{difficulty}
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

