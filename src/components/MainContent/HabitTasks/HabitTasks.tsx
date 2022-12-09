import React, {useState} from 'react';

import {HabitTask, Tabs} from '../../';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';

export const HabitTasks: React.FC = () => {
	const {setHabitItems} = useActions();
	const {items} = useTypedSelector((state) => state.habitTask);

	const [active, setActive] = useState('all');
	const [text, setText] = useState<string>('');

	const onSendHabit = (text: string) => {
		setHabitItems({
			id: items.length + 1,
			category: 'weak',
			titleText: text,
			count: 0,
			diff: 1,
		});
	};
	const handleAddHabit = (e: React.FormEvent) => {
		e.preventDefault();
		onSendHabit(text);
		setText('');
	};
	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleAddHabit(e);
		}
	};

	return (
		<div className='tasks__column'>
			<div className='tasks__info'>
				<div className='tasks__name'>Привычки</div>
				<div className='tasks__tabs'>
					<ul className='tasks__list'>
						<Tabs
							active={active}
							setActive={setActive}
							categoryFirst='all'
							categorySecond='weak'
							categoryThird='strong'
							titleFirst='Все'
							titleSecond='Слабые'
							titleThird='Сильные'
						/>
					</ul>
				</div>
			</div>
			<div className='tasks__item item-tasks'>
				<div className='item-tasks__wrapper'>
					<div className='item-tasks__top'>
						<div className='item-tasks__add'>
							<form onSubmit={handleAddHabit}>
                <textarea
	                value={text}
	                onChange={(e) => setText(e.target.value)}
	                onKeyDown={handleKeyDown}
	                placeholder='Добавить привычку'
                />
								<div className='item-tasks__button'>
									<button className='btn'>Добавить привычку</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				{items.map((item: any, index: number) => (
					<HabitTask
						key={`${index}__${item[0]}`}
						text={item.titleText}
						isBadTask={item.isBadTask}
						id={item.id}
						isSucsessTask={item.isSucsessTask}
						isShow={item.category === active || active === 'all'}
						count={item.count}
						supText={item.supText}
						taskDiff={item.diff}
					/>
				))}
			</div>
		</div>
	);
};
