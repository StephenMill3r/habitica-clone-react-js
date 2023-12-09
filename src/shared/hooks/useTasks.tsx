import React from 'react';
import {useNotification} from "./useNotification";
import {useActions} from "../../app/store/typeHooks/useActions";
import {MessageOnLost} from "../../common/ui/MessageOnLost";
import {HealthIcon, StarIcon} from "../components";
import {MessageOnGain} from "../../common/ui/MessageOnGain";

export const useTasks = () => {
	const {showErrorNotification, showSuccessNotification} = useNotification()

	const {
		setUserLevel,
		setMinusUserLevel,
		setUserHealth,
		setMinusUserHealth,
		setUserMoney,
		setDailySuccessTask,
		setDailyDefaultTask,
		setToDoSuccessTask,
		setPlusHabitCount,
		setMinusHabitCount
	} = useActions();

	const taskComplete = (level: number, health: number) => {
		setUserLevel(level);
		setUserHealth(health);
		setUserMoney(Math.floor(Math.random() * 10));
		showSuccessNotification(<MessageOnGain thing={['жизнь', 'жизни', 'жизней']} icon={<HealthIcon/>} count={health}/>)
		showSuccessNotification(<MessageOnGain thing={['опыт', 'опыта', 'опыта']} icon={<StarIcon/>} count={level}/>)
	};

	const taskFail = (level: number, health: number) => {
		setMinusUserLevel(level);
		setMinusUserHealth(health);
		showErrorNotification(<MessageOnLost thing={['жизнь', 'жизни', 'жизней']} icon={<HealthIcon/>} count={health}/>)
		showErrorNotification(<MessageOnLost thing={['опыт', 'опыта', 'опыта']} icon={<StarIcon/>} count={level}/>)
	};

	const dailyTaskComplete = (id: number, level: number, health: number) => {
		setDailySuccessTask(id);
		taskComplete(level, health)
	}

	const dailyTaskFail = (id: number, level: number, health: number) => {
		setDailyDefaultTask(id);
		taskFail(level, health)
	}

	const toDoTaskComplete = (id: number, level: number, health: number) => {
		setToDoSuccessTask(id);
		taskComplete(level, health)
	}

	const habitTaskComplete = (id: number, level: number) => {
		setPlusHabitCount(id);
		taskComplete(level, 5)
	}

	const habitTaskFail = (id: number, health: number) => {
		setMinusHabitCount(id);
		taskFail(10, health)
	}

	return {dailyTaskComplete, dailyTaskFail, toDoTaskComplete, habitTaskComplete, habitTaskFail};
};

