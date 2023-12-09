import React from 'react';
import classNames from 'classnames';
import {CounterIcon} from "../../../../assets/icons/CounterIcon";
import {CheckIcon} from "../../../../assets/icons/CheckIcon";
import {useTasks} from "../../../hooks/useTasks";
import {dailyTaskType} from "../../../../redux/typesRedux/dailyTask";


export const DailyTask: React.FC<dailyTaskType> = ({
	                                                   titleText,
	                                                   supText,
	                                                   id,
	                                                   isCompletedTask,
	                                                   count,
	                                                   health,
	                                                   exp,
                                                   }) => {

	const {dailyTaskComplete, dailyTaskFail} = useTasks()

	const onCheckBoxClick = (level: number, health: number) => () => {
		if (isCompletedTask) {
			dailyTaskFail(id, level, health)
		} else {
			dailyTaskComplete(id, level, health)
		}
	};

	return (
		<div className='item-tasks__wrapper'>
			<div
				className={'item-tasks__task'}>
				<div
					className={classNames('item-tasks__left item-tasks__func', {
						'item-tasks__left-active': isCompletedTask,
					})}>
					<div onClick={onCheckBoxClick(exp, health)} className='item-tasks__checkbox'>
            <span>
							<CheckIcon/>
            </span>
					</div>
				</div>
				<div className='item-tasks__middle'>
					<div className='item-tasks__text-wrapper'>
						<p className='item-tasks__text'>{titleText}</p>
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
					<div className='item-tasks__counter'>
						<CounterIcon/>
						<span className='item-tasks__count'>
              {count >= 0 ? `+${count}` : `-${count}`}
            </span>
					</div>
				</div>
			</div>
		</div>
	);
};
