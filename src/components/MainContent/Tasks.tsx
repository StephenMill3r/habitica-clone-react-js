import React from "react";

import {DailyTasks, HabitTasks, RewardTasks, ToDoTasks} from '..';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Tasks: React.FC = () => {

	return (
		<section className='tasks'>
			<div className='container'>
				<div className='tasks__top'/>
				<div className='tasks__row'>
					<HabitTasks/>
					<DailyTasks/>
					<ToDoTasks/>
					<RewardTasks/>
					<ToastContainer/>
				</div>
			</div>
		</section>
	);
};
