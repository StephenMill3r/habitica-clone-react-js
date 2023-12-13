import React from "react";
import classNames from "classnames";
import {CounterIcon} from "../../../assets/icons/CounterIcon";
import {CheckIcon} from "../../../assets/icons/CheckIcon";
import {useDailyTask} from "../hooks/useDailyTask";
import {DailyTaskType, DEFAULT_DAILY_TASK_EXP, DEFAULT_DAILY_TASK_HEALTH} from "../model/config";

export const DailyTask: React.FC<DailyTaskType> = ({
	                                                   titleText,
	                                                   isCompletedTask,
	                                                   id,
	                                                   count,
	                                                   supText,
	                                                   health = DEFAULT_DAILY_TASK_HEALTH,
	                                                   exp = DEFAULT_DAILY_TASK_EXP
                                                   }) => {

	const {dailyTaskComplete, dailyTaskFail} = useDailyTask()


	const onCheckBoxClick = (level: number, health: number) => () => {
		if (isCompletedTask) {
			dailyTaskFail(id, level, health)
		} else {
			dailyTaskComplete(id, level, health)
		}
	};

	return (
		<>
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
              {count && count >= 0 ? `+${count}` : `-${count}`}
            </span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

