import React, {FunctionComponent, useState} from 'react';

interface IAddTaskForm {
	addTask: { placeHolder: string, handler: (text: string) => void },
}

export const AddTaskForm: FunctionComponent<IAddTaskForm> = ({addTask}) => {
	const [taskTitle, setTaskTitle] = useState<string>('');

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		addTask.handler(taskTitle);
		setTaskTitle('');
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			onSubmitHandler(e);
		}
	};

	return (
		<div className='item-tasks__top'>
			<div className='item-tasks__add'>
				<form onSubmit={onSubmitHandler}>
                <textarea
	                value={taskTitle}
	                onChange={(e) => setTaskTitle(e.target.value)}
	                onKeyDown={handleKeyDown}
	                placeholder={addTask.placeHolder}
                />
					<div className='item-tasks__button'>
						<button className='btn'>Добавить привычку</button>
					</div>
				</form>
			</div>
		</div>
	);
};
