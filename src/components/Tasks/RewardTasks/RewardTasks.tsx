import React from 'react';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';
import {RewardShop} from "./RewardShop";
import {TasksColumn} from "../TasksColumn";
import {taskTabsType} from "../taskTypes";
import {RewardTask} from "./RewardTask";
import {rewardTaskType} from "../../../redux/typesRedux/reward";


export const RewardTasks: React.FC = () => {
	const {setRewardItems} = useActions();
	const {rewardTasks} = useTypedSelector((state) => state.reward);

	const renderRewardTasksList = (category: string) => {
		const filteredRewardTasks = category === 'all' ? rewardTasks : (
			rewardTasks.filter(rewardTask => rewardTask.category === category)
		)

		return (
			<>
				{
					filteredRewardTasks.map((rewardTask: rewardTaskType) => (
						<RewardTask
							key={rewardTask.id}
							titleText={rewardTask.titleText}
							id={rewardTask.id}
							cost={rewardTask.cost}
							category={rewardTask.category}
							supText={rewardTask.supText}
						/>
					))
				}
			</>
		)
	}


	const tabs: taskTabsType = [
		{
			title: 'Все',
			category: 'all',
			render: (category: string) => renderRewardTasksList(category)
		},
		{
			title: 'Сезонные',
			category: 'season',
			render: (category: string) => renderRewardTasksList(category)
		},
		{
			title: 'Отложенные',
			category: 'later',
			render: (category: string) => renderRewardTasksList(category)
		}
	]

	const onSendReward = (titleText: string) => {
		setRewardItems({id: rewardTasks.length - 1 + 1, titleText, category: 'season', cost: 10, supText: ''});
	};

	return (
		<TasksColumn
			tasksColumnName='Награды'
			addTask={
				{
					placeHolder: 'Добавить награду',
					handler: onSendReward
				}
			}
			tabs={tabs}
			additionalContent={<RewardShop/>}
		/>
	);
};
