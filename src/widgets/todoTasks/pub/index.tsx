import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TasksColumn} from "../../tasksColumn";
import {NoteAboutTasks} from "../../../entities/noteAboutTasks";
import {OkIcon} from "../../../assets/icons/OkIcon";
import {TodoTaskSelectors} from "../../../entities/todoTask/model/selectors";
import {TodoTaskActions} from "../../../entities/todoTask/model/actions";
import {TodoTask} from "../../../entities/todoTask";
import {TodoCategoryEnum, todoFilters} from "../../../entities/todoTask/model/config";

export const TodoTasks: React.FC = () => {
	const dispatch = useDispatch();
	const todoTasks = useSelector(TodoTaskSelectors.selectTodoTasks);
	const currentTodoTaskFilter = useSelector(TodoTaskSelectors.selectCurrentTodoTaskFilter);

	const changeActiveFilter = (newFilter: string) => {
		dispatch(TodoTaskActions.changeCurrentTodoFilter({newFilter: newFilter}))
	}

	const onSendToDo = (titleText: string) => {
		dispatch(TodoTaskActions.addTodoTask({
			newTask: {
				id: todoTasks.length + 1,
				titleText,
				category: TodoCategoryEnum.ACTIVE,
				isCompletedTask: false,
				diff: 1,
				supText: '',
				remainDay: 0,

			}
		}))
	};

	return (
		<TasksColumn
			tasksColumnName='Задачи'
			addTask={
				{
					placeHolder: 'Добавить задачу',
					handler: onSendToDo
				}
			}
			taskFilters={{
				filters: todoFilters,
				handler: changeActiveFilter
			}}
			tasks={todoTasks}
			currentFilter={currentTodoTaskFilter}
			taskComponent={(todoTask) => <TodoTask
				key={todoTask.id}
				titleText={todoTask.titleText}
				id={todoTask.id}
				supText={todoTask.supText}
				category={todoTask.category}
				isCompletedTask={todoTask.category === TodoCategoryEnum.COMPLETED ?? false}
				diff={todoTask.diff ?? 1}
				remainDay={todoTask.remainDay ?? 0}
			/>}
			additionalContent={
				<NoteAboutTasks
					title='Это ваши Задачи'
					icon={<OkIcon/>}
					text='Задачи могут быть выполнены только один раз. Добавьте списки вашим задачам, чтобы увеличить их награду.'
				/>
			}
		/>
	);
};
