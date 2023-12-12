import React from "react";
import {HabitTasks} from "widgets/habitTasks";
import {Rewards} from "widgets/rewards";

const Dashboard = () => {
	return (
		<section className='tasks'>
			<div className='container'>
				<div className='tasks__top'/>
				<div className='tasks__row'>
					<HabitTasks/>
					{/*<DailyTasks/>*/}
					{/*<ToDoTasks/>*/}
					<Rewards/>
					{/*<ToastContainer/>*/}
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
