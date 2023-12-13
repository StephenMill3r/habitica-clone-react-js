import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {HabitTaskActions} from "../../../entities/habitTask/model/actions";
import {HabitCategoryEnum, habitFilters} from "../../../entities/habitTask/model/config";
import {HabitTaskSelectors} from "../../../entities/habitTask/model/selectors";
import {TasksColumn} from "../../tasksColumn";
import {HabitTask} from "../../../entities/habitTask";

export const HabitTasks: React.FC = () => {
	const dispatch = useDispatch();
	const habitTasks = useSelector(HabitTaskSelectors.selectHabitTasks);
	const currentHabitTaskFilter = useSelector(HabitTaskSelectors.selectCurrentHabitTaskFilter);

	const changeActiveFilter = (newFilter: string) => {
		dispatch(HabitTaskActions.changeCurrentHabitFilter({newFilter: newFilter}))
	}

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
			taskFilters={{
				filters: habitFilters,
				handler: changeActiveFilter
			}}
			tasks={habitTasks}
			currentFilter={currentHabitTaskFilter}
			taskComponent={(habitTask) => <HabitTask
				key={habitTask.id}
				titleText={habitTask.titleText}
				isBadTask={habitTask.isBadTask ?? false}
				id={habitTask.id}
				isSuccessTask={habitTask.isSuccessTask ?? false}
				count={habitTask.count ?? 0}
				supText={habitTask.supText}
				diff={habitTask.diff ?? 1}
				category={habitTask.category}
			/>}

		/>
	);
};
