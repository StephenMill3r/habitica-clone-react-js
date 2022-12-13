import React from 'react';
import classNames from 'classnames';

import {HealthIcon, notifyError, notifySuccess, StarIcon} from '../../index';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useModal} from "../../../hooks/useModal";
import {UpdateHabitTask} from "../../Modal/UpdateHabitTask";
import {habitTaskType} from "../../../redux/typesRedux/habitTask";


export const diff = ['Пустяк', 'Легко', 'Нормально', 'Сложно'];

export const HabitTask: React.FC<habitTaskType> = ({
	                                                   titleText,
	                                                   isBadTask,
	                                                   id,
	                                                   isSuccessTask,
	                                                   count,
	                                                   supText,
	                                                   diff: taskDiff,
	                                                   category
                                                   }) => {
	const {
		setMinusUserHealth,
		setUserLevel,
		setHabitSuccessTask,
		setPlusHabitCount,
		setMinusHabitCount,
	} = useActions();

	const {toggle, isShown} = useModal()

	//Отбирает хп, при клике по плохой привычке
	const onClickBadHabitTask =
		(health: number, id: number) => () => {
			if (isBadTask) {
				setMinusUserHealth(health * taskDiff);
				setMinusHabitCount(id);
				notifyError('жизни', health * taskDiff, <HealthIcon/>);
			}
		};

	//Дает опыт при клике по хорошей привычке(в зависимости от уровня сложности таски)
	const onClickSuccessTask =
		(id: number, level: number) => () => {
			if (!isBadTask) {
				setHabitSuccessTask(id);
				setUserLevel(level * taskDiff);
				setPlusHabitCount(id);
				notifySuccess('опыта', level * taskDiff, <StarIcon/>);
			}
		};

	return (
		<>
			<div
				className={classNames('item-tasks__task', {
					'item-tasks__bad-task': isBadTask,
					'item-tasks__sucsess-task': isSuccessTask,
				})}>
				<div
					onClick={onClickSuccessTask(id, 10)}
					className='item-tasks__left item-tasks__func'>
					<div className='item-tasks__plus'>+</div>
				</div>
				<div className='item-tasks__middle'>
					<div className='item-tasks__text-wrapper'>
						<p className='item-tasks__text'>{titleText}</p>
						<svg
							onClick={toggle}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 4 16'>
							<path
								fillRule='evenodd'
								d='M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'></path>
						</svg>
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
					<div className='item-tasks__counter'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
							<path
								fillRule='evenodd'
								d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
						</svg>
						<span className='item-tasks__count'>
              {count >= 0 ? `+${count}` : `-${count}`}
            </span>
					</div>
				</div>
				<div className='item-tasks__right item-tasks__func'>
					<div onClick={onClickBadHabitTask(7, id)} className='item-tasks__minus'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
							<path fillRule='evenodd' d='M0 0h10v2H0z'></path>
						</svg>
					</div>
				</div>
			</div>
			<UpdateHabitTask
				isShown={isShown}
				toggle={toggle}
				taskData={{isBadTask, id, isSuccessTask, supText, diff: taskDiff, titleText, category, count}}
			/>
		</>
	);
};
