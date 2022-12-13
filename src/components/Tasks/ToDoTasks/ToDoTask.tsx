import React from 'react';
import classNames from 'classnames';
import 'react-datepicker/dist/react-datepicker.css';

import {HealthIcon, notifySuccess, StarIcon} from '../../index';
import {useActions} from '../../../redux/typeHooks/useActions';
import {declinationOfNumber} from "../../../common/utils/declinationOfNumber";
import {CheckIcon} from "../../../assets/icons/CheckIcon";
import {ThreeDots} from "../../../assets/icons/ThreeDots";
import {CalendarIcon} from "../../../assets/icons/CalendarIcon";
import {useModal} from "../../../hooks/useModal";
import {UpdateToDoTaskModal} from "../../Modal/UpdateToDoTaskModal";
import {toDoTaskType} from "../../../redux/typesRedux/toDo";

export const ToDoTask: React.FC<toDoTaskType> = ({
	                                                 titleText,
	                                                 supText,
	                                                 id,
	                                                 isCompletedTask,
	                                                 diff,
	                                                 remainDay,
	                                                 category
                                                 }) => {
	const {
		setUserLevel,
		setUserHealth,
		setUserMoney,
		setToDoSuccessTask,
	} = useActions();

	const {toggle, isShown} = useModal()

	//Дает опыт, жизни, монеты, если таска выполнена
	const onClickLevelUpdate = (level: number, health: number) => () => {
		if (!isCompletedTask) {
			setToDoSuccessTask(id);
			setUserLevel(level * diff);
			setUserHealth(health * diff);
			setUserMoney(Math.floor(Math.random() * 10));
			notifySuccess('опыта', level * diff, <StarIcon/>);
			notifySuccess('жизни', health * diff, <HealthIcon/>);
		}
	};

	return (
		<div className='item-tasks__wrapper'>
			<div className='item-tasks__task'>
				<div
					className={classNames('item-tasks__left item-tasks__func', {
						'item-tasks__left-active': isCompletedTask,
					})}>
					<div onClick={onClickLevelUpdate(10, 7)} className='item-tasks__checkbox'>
            <span>
               <CheckIcon/>
            </span>
					</div>
				</div>
				<div className='item-tasks__middle'>
					<div className='item-tasks__text-wrapper'>
						<p className='item-tasks__text'>{titleText}</p>
						<div onClick={toggle}><ThreeDots/></div>
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
					{remainDay !== 0 && (
						<p className='item-tasks__days'>
							<CalendarIcon/>
							<span>Выполнить через {remainDay}</span>
							{declinationOfNumber(remainDay, ['день', 'дня', 'дней'])}
						</p>
					)}
				</div>
			</div>
			<UpdateToDoTaskModal
				isShown={isShown}
				toggle={toggle}
				taskData={{titleText, category, supText, id, isCompletedTask, remainDay, diff}}
			/>

		</div>
	);
};
