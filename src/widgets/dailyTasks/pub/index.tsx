import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TasksColumn} from "../../tasksColumn";
import {DailyTask} from "../../../entities/dailyTask";
import {DailyTaskActions} from "../../../entities/dailyTask/model/actions";
import {DailyTaskSelectors} from "../../../entities/dailyTask/model/selectors";
import {
	DailyCategoryEnum,
	dailyFilters,
	DEFAULT_DAILY_TASK_EXP,
	DEFAULT_DAILY_TASK_HEALTH
} from "../../../entities/dailyTask/model/config";
import {CalendarIcon} from "../../../assets/icons/CalendarIcon";
import {NoteAboutTasks} from "../../../entities/noteAboutTasks";

export const DailyTasks: React.FC = () => {
	const dispatch = useDispatch();
	const dailyTasks = useSelector(DailyTaskSelectors.selectDailyTasks);
	const currentDailyTaskFilter = useSelector(DailyTaskSelectors.selectCurrentDailyTaskFilter);

	const changeActiveFilter = (newFilter: string) => {
		dispatch(DailyTaskActions.changeCurrentDailyFilter({newFilter: newFilter}))
	}

	const onSendDaily = (titleText: string) => {
		dispatch(DailyTaskActions.addDailyTask({
			newTask: {
				id: dailyTasks.length - 1 + 1,
				titleText,
				supText: '',
				count: 0,
				category: DailyCategoryEnum.ACTIVE,
				isCompletedTask: false,
				exp: 10,
				health: 7,
			}
		}))
	};

	return (
		<TasksColumn
			tasksColumnName='Задачи'
			addTask={
				{
					placeHolder: 'Добавить ежедневное дело',
					handler: onSendDaily
				}
			}
			taskFilters={{
				filters: dailyFilters,
				handler: changeActiveFilter
			}}
			tasks={dailyTasks}
			currentFilter={currentDailyTaskFilter}
			taskComponent={(dailyTask) => <DailyTask
				key={dailyTask.id}
				titleText={dailyTask.titleText}
				id={dailyTask.id}
				supText={dailyTask.supText}
				category={dailyTask.category}
				count={dailyTask.count ?? 1}
				exp={dailyTask.exp ?? DEFAULT_DAILY_TASK_EXP}
				health={dailyTask.health ?? DEFAULT_DAILY_TASK_HEALTH}
				isCompletedTask={dailyTask.isCompletedTask ?? false}
			/>}
			additionalContent={
				<NoteAboutTasks
					title='Это ваши Ежедневные дела'
					icon={<CalendarIcon/>}
					text='Ежедневные дела повторяются регулярно. Настройте расписание, которое вам подходит лучше всего!'
				/>
			}
		/>
	);
};
