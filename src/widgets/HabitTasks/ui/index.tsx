import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {HabitTaskActions} from "../../../entities/habitTask/model/actions";
import {HabitCategoryEnum, habitFilters} from "../../../entities/habitTask/model";
import {HabitTaskSelectors} from "../../../entities/habitTask/model/selectors";
import {TasksColumn} from "../../tasksColumn/pub/TasksColumn";
import {HabitTask} from "../../../entities/habitTask";

export const HabitTasks: React.FC = () => {
	const dispatch = useDispatch();
	const habitTasks = useSelector(HabitTaskSelectors.selectHabitTasks);
	const currentHabitTaskFilter = useSelector(HabitTaskSelectors.selectCurrentHabitTaskFilter);

	const onSendHabit = (text: string) => {
		dispatch(HabitTaskActions.addHabitTask({
			newHabit: {
				id: habitTasks.length + 1,
				category: HabitCategoryEnum.WEAK,
				titleText: text,
				count: 0,
				diff: 1,
				isSuccessTask: true,
				isBadTask: false,
				supText: ''
			}
		}))
	};

	return (
		<TasksColumn
			tasksColumnName='Привычки'
			addTask={
				{
					placeHolder: 'Добавить привычку',
					handler: onSendHabit
				}
			}
			taskFilters={habitFilters}
			tasks={habitTasks}
			currentFilter={currentHabitTaskFilter}
			taskComponent={(habitTask) => <HabitTask
				key={habitTask.id}
				titleText={habitTask.titleText}
				isBadTask={habitTask.isBadTask}
				id={habitTask.id}
				isSuccessTask={habitTask.isSuccessTask}
				count={habitTask.count}
				supText={habitTask.supText}
				diff={habitTask.diff}
				category={habitTask.category}
			/>}

		/>
	);
};
