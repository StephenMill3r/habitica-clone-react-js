import React, {useState} from 'react';

import {Tabs, ToDoTask} from '../../';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';

export const ToDoTasks: React.FC = () => {
	const {setGoalItems} = useActions();
	const {items} = useTypedSelector((state) => state.goal);

	const [text, setText] = useState<string>('');
	const [active, setActive] = useState<string>('active');

	const onSendGoal = (titleText: string) => {
		setGoalItems({
			id: items.length + 1,
			titleText,
			category: 'active',
			isCompletedTask: false,
			diff: 1,
		});
	};
	const handleAddGoal = (e: React.FormEvent) => {
		e.preventDefault();
		onSendGoal(text);
		setText('');
	};
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleAddGoal(e);
		}
	};
	return (
		<div className='tasks__column'>
			<div className='tasks__info'>
				<div className='tasks__name'>Задачи</div>
				<div className='tasks__tabs'>
					<ul className='tasks__list'>
						<Tabs
							active={active}
							setActive={setActive}
							categoryFirst='active'
							categorySecond='date'
							categoryThird='completed'
							titleFirst='Активные'
							titleSecond='С датой'
							titleThird='Сделанные'
						/>
					</ul>
				</div>
			</div>
			<div className='tasks__item item-tasks'>
				<div className='item-tasks__top'>
					<div className='item-tasks__add'>
						<form onSubmit={handleAddGoal}>
              <textarea
	              value={text}
	              onChange={(e) => setText(e.target.value)}
	              onKeyDown={handleKeyDown}
	              placeholder='Добавить задачу'
              />
							<div className='item-tasks__button'>
								<button className='btn'>Добавить задачу</button>
							</div>
						</form>
					</div>
				</div>
				<div className='item-tasks__wrapper'>
					{items.map((item, index: number) => (
						<ToDoTask
							key={`${index}`}
							id={item.id}
							isCompletedTask={item.isCompletedTask}
							isShow={item.category === active}
							titleText={item.titleText}
							supText={item.supText}
							taskDiff={item.diff}
							calculatedDate={item.remainDay}
						/>
					))}
					<div className='item-tasks__note note-item-tasks'>
						<div className='note-item-tasks__icon'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M8.343 14.916c-.312 0-.61-.123-.831-.344l-3.831-3.831 1.662-1.662 2.934 2.934 5.938-6.929L16 6.613l-6.764 7.893a1.182 1.182 0 0 1-.848.409l-.045.001zM18 16c0 1.103-.897 2-2 2H4c-1.102 0-2-.897-2-2V4c0-1.103.898-2 2-2h12c1.103 0 2 .897 2 2v12zM16 0H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z'></path>
							</svg>
						</div>
						<div className='note-item-tasks__title'>Это ваши Задачи</div>
						<p className='note-item-tasks__text'>
							Задачи могут быть выполнены только один раз. Добавьте списки вашим задачам, чтобы
							увеличить их награду.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
