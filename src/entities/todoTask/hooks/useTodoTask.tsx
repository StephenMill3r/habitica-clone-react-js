import React from 'react';
import {useTasks} from "../../task/hooks/useTasks";
import {useDispatch} from "react-redux";
import {TodoTaskActions} from "../model/actions";


export const useTodoTask = () => {
	const dispatch = useDispatch()

	const {taskComplete} = useTasks()

	const todoTaskComplete = (id: number, levelPoint: number, hp: number) => {
		dispatch(TodoTaskActions.successTodoTask({taskId: id}))
		taskComplete(levelPoint, hp)
	}


	return {todoTaskComplete};
};

