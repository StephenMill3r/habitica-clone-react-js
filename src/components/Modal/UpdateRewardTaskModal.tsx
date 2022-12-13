import React, {FunctionComponent, useState} from 'react';
import {Modal} from "./Modal";
import {useActions} from "../../redux/typeHooks/useActions";
import {rewardTaskType} from "../../redux/typesRedux/reward";

interface IUpdateRewardTaskModal {
	isShown: boolean,
	toggle: () => void,
	taskData: rewardTaskType
}

export const UpdateRewardTaskModal: FunctionComponent<IUpdateRewardTaskModal> = ({isShown, toggle, taskData}) => {
	const {cost, id, titleText, supText} = taskData

	const [taskTitle, setTaskTitle] = useState<string>(titleText);
	const [taskText, setTaskText] = useState<string>(supText);
	const [taskCost, setTaskCost] = useState<number>(cost);

	const {setRewardChangeTask, setDeleteRewardTask} = useActions();

	const handleSubmit = (taskTitle: string, taskText: string, cost: number) => {
		setRewardChangeTask(id, taskTitle, taskText, cost);
		toggle();
	};

	const onClickDeleteTask = () => {
		setDeleteRewardTask(id);
		toggle();
	};

	return (
		<Modal
			isShown={isShown}
			handleClose={toggle}
			handleSubmit={() => handleSubmit(taskTitle, taskText, taskCost)}
			headerText={'Изменить награду'}
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
					<div className='modal__notice modal-change'>
						<label>Изменить цену</label>
						<input
							placeholder='Добавить награду'
							value={taskCost}
							onChange={(e) => setTaskCost(Number(e.target.value))}
							type='number'
						/>
					</div>
					<div onClick={onClickDeleteTask} className='modal__footer'>
						Удалить награду
					</div>
				</>
			}
		/>
	);
};
