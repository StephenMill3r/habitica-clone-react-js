import React from "react";
import {HabitTaskType} from "../model/config";
import {ThreeDots} from "../../../assets/icons/ThreeDots";
import classNames from "classnames";
import {CounterIcon} from "../../../assets/icons/CounterIcon";
import {useHabitTask} from "../hooks/useHabitTask";
import {useModal} from "../../../shared/hooks/useModal";

export const HabitTask: React.FC<HabitTaskType> = ({
	                                                   titleText,
	                                                   isBadTask,
	                                                   id,
	                                                   isSuccessTask,
	                                                   count,
	                                                   supText,
	                                                   diff: taskDiff,
                                                   }) => {

	const {habitTaskComplete, habitTaskFail} = useHabitTask()
	const {toggle, isShown} = useModal()

	const onClickBadHabitTask = (health: number, id: number) => () => {
		if (isBadTask) {
			habitTaskFail(id, health)
		}
	};
	const onClickSuccessTask = (id: number, levelPoint: number, taskDiff = 1) => () => {
		if (!isBadTask) {
			habitTaskComplete(id, levelPoint * taskDiff)
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
					onClick={onClickSuccessTask(id, 10, taskDiff)}
					className='item-tasks__left item-tasks__func'>
					<div className='item-tasks__plus'>+</div>
				</div>
				<div className='item-tasks__middle'>
					<div className='item-tasks__text-wrapper'>
						<p className='item-tasks__text'>{titleText}</p>
						<div onClick={toggle}><ThreeDots/></div>
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
					<div className='item-tasks__counter'>
						<CounterIcon/>
						<span className='item-tasks__count'>
			        {count && count >= 0 ? `+${count}` : `-${count}`}
			      </span>
					</div>
				</div>
				<div className='item-tasks__right item-tasks__func'>
					<div onClick={onClickBadHabitTask(7, id)} className='item-tasks__minus'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
							<path fillRule='evenodd' d='M0 0h10v2H0z'/>
						</svg>
					</div>
				</div>
			</div>
			{/*<UpdateHabitTask*/}
			{/*	isShown={isShown}*/}
			{/*	toggle={toggle}*/}
			{/*	taskData={{isBadTask, id, isSuccessTask, supText, diff: taskDiff, titleText, category, count}}*/}
			{/*/>*/}
		</>
	);
};

