import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DailyTaskActions} from "../model/actions";
import {DailyTaskSelectors} from "../model/selectors";
import {DailyCategoryEnum, dailyFilters, DEFAULT_DAILY_TASK_EXP, DEFAULT_DAILY_TASK_HEALTH} from "../model/config";
import {TaskFilters} from "../../../features/filterTasks";
import {AddTaskForm} from "../../../features/addTask";
import {filterTask} from "../../../entities/task/utils/filterTask";
import {useDailyTask} from "../hooks/useDailyTask";
import {CalendarIcon} from "../../../assets/icons/CalendarIcon";
import {NoteAboutTasks} from "../../../entities/noteAboutTasks";
import {Task} from "../../../entities/task";

export const DailyTasks: React.FC = () => {
	const dispatch = useDispatch();
	const {dailyTaskComplete, dailyTaskFail} = useDailyTask()

	const dailyTasks = useSelector(DailyTaskSelectors.selectDailyTasks);
	const currentDailyTaskFilter = useSelector(DailyTaskSelectors.selectCurrentDailyTaskFilter);

	const filteredTasks = useMemo(() => filterTask(dailyTasks, currentDailyTaskFilter), [dailyTasks, currentDailyTaskFilter])

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


	const onClickSuccessTask = (id: number, level: number, health: number, isCompletedTask: boolean) => () => {
		if (isCompletedTask) {
			dailyTaskFail(id, level, health)
		} else {
			dailyTaskComplete(id, level, health)
		}
	};

	return (
		<div className='tasks__column'>
			<div className='tasks__info'>
				<div className='tasks__name'>Ежедневные дела</div>
				<TaskFilters taskFilters={{filters: dailyFilters, handler: changeActiveFilter}}/>
			</div>
			<div className='tasks__item item-tasks'>
				<div className='item-tasks__wrapper'>
					<AddTaskForm addTask={{placeHolder: 'Добавить ежедневное дело', handler: onSendDaily}}/>
					{
						filteredTasks.map((filteredTask) => (
							<Task
								key={filteredTask.id}
								titleText={filteredTask.titleText}
								supText={filteredTask.supText}
								count={filteredTask.count ?? 1}
								exp={filteredTask.exp ?? DEFAULT_DAILY_TASK_EXP}
								health={filteredTask.health ?? DEFAULT_DAILY_TASK_HEALTH}
								isCompletedTask={filteredTask.isCompletedTask ?? false}
								isOneTimeTask
								onSuccessButtonClick={onClickSuccessTask(filteredTask.id, filteredTask.exp, filteredTask.health, filteredTask.isCompletedTask)}
							/>
						))
					}
				</div>
				<NoteAboutTasks
					title='Это ваши Ежедневные дела'
					icon={<CalendarIcon/>}
					text='Ежедневные дела повторяются регулярно. Настройте расписание, которое вам подходит лучше всего!'
				/>
			</div>
		</div>
	);
};
