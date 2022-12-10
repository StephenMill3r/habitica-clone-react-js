import React, {FunctionComponent, useState} from 'react';
import {Tabs} from "../index";
import {taskTabsType} from "./taskTypes";

interface ITaskStructure {
	tasksColumnName: string
	addTask: { placeHolder: string, handler: (text: string) => void },
	tabs: taskTabsType,
	additionalContent?: React.ReactNode
}

export const TasksColumn: FunctionComponent<ITaskStructure> = ({tasksColumnName, addTask, tabs, additionalContent}) => {
	const [activeTab, setActiveTab] = useState<number>(0);
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
		<div className='tasks__column'>
			<div className='tasks__info'>
				<div className='tasks__name'>{tasksColumnName}</div>
				<div className='tasks__tabs'>
					<ul className='tasks__list'>
						<Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
					</ul>
				</div>
			</div>
			<div className='tasks__item item-tasks'>
				<div className='item-tasks__wrapper'>
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
					{tabs[activeTab].render(tabs[activeTab].category)}
					{additionalContent && additionalContent}
				</div>
			</div>
		</div>
	);
};
