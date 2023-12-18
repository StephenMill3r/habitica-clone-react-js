import React from 'react';
import {useTasks} from "../../../entities/task/hooks/useTasks";
import {useDispatch} from "react-redux";
import {HabitTaskActions} from "../model/actions";

export const useHabitTask = () => {
	const dispatch = useDispatch()

	const {taskFail, taskComplete} = useTasks()
	const habitTaskComplete = (id: number, level: number) => {
		dispatch(HabitTaskActions.plusHabitCount({taskId: id}))
		taskComplete(level, 5)
	}

	const habitTaskFail = (id: number, health: number) => {
		dispatch(HabitTaskActions.minusHabitCount({taskId: id}))
		taskFail(10, health)
	}

	return {habitTaskComplete, habitTaskFail};
};

