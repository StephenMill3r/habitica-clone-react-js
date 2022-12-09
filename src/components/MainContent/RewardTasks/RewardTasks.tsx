import React, {useState} from 'react';

import {RewardTask, Tabs} from '../..';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';
import {RewardShop} from "./RewardShop";


export const RewardTasks: React.FC = () => {
	const {setRewardItems} = useActions();
	const {items} = useTypedSelector((state) => state.reward);

	const [text, setText] = useState<string>('');
	const [active, setActive] = useState('all');

	const onSendReward = (titleText: string) => {
		setRewardItems({id: items.length - 1 + 1, titleText, category: 'season', cost: 10});
	};
	const handleAddReward = (e: React.FormEvent) => {
		e.preventDefault();
		onSendReward(text);
		setText('');
	};
	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleAddReward(e);
		}
	};
	return (
		<div className='tasks__column'>
			<div className='tasks__info'>
				<div className='tasks__name'>Награды</div>
				<div className='tasks__tabs'>
					<ul className='tasks__list'>
						<Tabs
							active={active}
							setActive={setActive}
							categoryFirst='all'
							categorySecond='season'
							categoryThird='later'
							titleFirst='Все'
							titleSecond='Сезонные'
							titleThird='Отложенные'
						/>
					</ul>
				</div>
			</div>
			<div className='tasks__item item-tasks'>
				<div className='item-tasks__top'>
					<div className='item-tasks__add'>
						<form onSubmit={handleAddReward}>
              <textarea
	              value={text}
	              onChange={(e) => setText(e.target.value)}
	              onKeyDown={handleKeyDown}
	              placeholder='Добавить награду'
              />
							<div className='item-tasks__button'>
								<button className='btn'>Добавить награду</button>
							</div>
						</form>
					</div>
				</div>
				<div className='item-tasks__wrapper'>
					<div className='dragle-test'>
						{items.map((item: any, index: number) => (
							<RewardTask
								id={item.id}
								key={`${index}`}
								titleText={item.titleText}
								supText={item.supText}
								cost={item.cost}
								isShow={item.category === active || active === 'all'}
							/>
						))}
					</div>
					<RewardShop/>
				</div>
			</div>
		</div>
	);
};
