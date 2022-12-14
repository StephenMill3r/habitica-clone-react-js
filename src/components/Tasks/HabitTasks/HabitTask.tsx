import React from 'react';
import classNames from 'classnames';
import {useModal} from "../../../hooks/useModal";
import {UpdateHabitTask} from "../../Modal/UpdateHabitTask";
import {habitTaskType} from "../../../redux/typesRedux/habitTask";
import {ThreeDots} from "../../../assets/icons/ThreeDots";
import {CounterIcon} from "../../../assets/icons/CounterIcon";
import {useTasks} from "../../../hooks/useTasks";


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

	const {habitTaskComplete, habitTaskFail} = useTasks()
	const {toggle, isShown} = useModal()

	const onClickBadHabitTask = (health: number, id: number) => () => {
		if (isBadTask) {
			habitTaskFail(id, health)
		}
	};
	const onClickSuccessTask = (id: number, level: number) => () => {
		if (!isBadTask) {
			habitTaskComplete(id, level * taskDiff)
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
						<div onClick={toggle}><ThreeDots/></div>
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
					<div className='item-tasks__counter'>
						<CounterIcon/>
						<span className='item-tasks__count'>
              {count >= 0 ? `+${count}` : `-${count}`}
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
			<UpdateHabitTask
				isShown={isShown}
				toggle={toggle}
				taskData={{isBadTask, id, isSuccessTask, supText, diff: taskDiff, titleText, category, count}}
			/>
		</>
	);
};
