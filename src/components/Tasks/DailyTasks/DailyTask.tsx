import React from 'react';
import classNames from 'classnames';
import {HealthIcon, notifyError, notifySuccess, StarIcon} from '../../index';
import {useActions} from '../../../redux/typeHooks/useActions';
import {CounterIcon} from "../../../assets/icons/CounterIcon";
import {CheckIcon} from "../../../assets/icons/CheckIcon";

interface IMainContentTaskDaily {
	titleText: string;
	supText: string;
	id: number;
	isCompletedTask: boolean;
	count: number;
	exp: number;
	health: number;
}

export const DailyTask: React.FC<IMainContentTaskDaily> = ({
	                                                           titleText,
	                                                           supText,
	                                                           id,
	                                                           isCompletedTask,
	                                                           count,
	                                                           health,
	                                                           exp,
                                                           }) => {
	const {
		setUserLevel,
		setMinusUserLevel,
		setUserHealth,
		setMinusUserHealth,
		setUserMoney,
		setDailySuccessTask,
		setDailyDefaultTask,
	} = useActions();

	const onCheckBoxClick = (level: number, health: number) => () => {
		if (isCompletedTask) {
			setMinusUserLevel(level);
			setMinusUserHealth(health);
			setDailyDefaultTask(id);
			notifyError('жизни', health, <HealthIcon/>);
			notifyError('опыта', level, <StarIcon/>);
		} else {
			setDailySuccessTask(id);
			setUserLevel(level);
			setUserHealth(health);
			setUserMoney(Math.floor(Math.random() * 10));
			notifySuccess('опыта', level, <StarIcon/>);
			notifySuccess('жизни', health, <HealthIcon/>);
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
