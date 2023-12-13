import React from 'react';
import {useTasks} from "../../task/hooks/useTasks";
import {useDispatch} from "react-redux";
import {DailyTaskActions} from "../model/actions";


export const useDailyTask = () => {
	const dispatch = useDispatch()

	const {taskFail, taskComplete} = useTasks()

	const dailyTaskComplete = (id: number, levelPoint: number, hp: number) => {
		dispatch(DailyTaskActions.successDailyTask({taskId: id}))
		taskComplete(levelPoint, hp)
	}

	const dailyTaskFail = (id: number, levelPoint: number, hp: number) => {
		dispatch(DailyTaskActions.resetDailyTask({taskId: id}))
		taskFail(levelPoint, hp)
	}

	return {dailyTaskComplete, dailyTaskFail};
};

