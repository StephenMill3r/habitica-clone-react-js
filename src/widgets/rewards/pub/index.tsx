import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TasksColumn} from "../../tasksColumn";
import {DEFAULT_REWARD_COST, RewardCategoryEnum, rewardFilters} from "../../../entities/reward/model/config";
import {RewardActions} from "../../../entities/reward/model/actions";
import {RewardSelectors} from "../../../entities/reward/model/selectors";
import {Reward} from "../../../entities/reward";
import {RewardShop} from "../../rewardShop";

export const Rewards: React.FC = () => {
	const dispatch = useDispatch();
	const rewards = useSelector(RewardSelectors.selectRewards);
	const currentRewardFilter = useSelector(RewardSelectors.selectCurrentRewardFilter);

	const changeActiveFilter = (newFilter: string) => {
		dispatch(RewardActions.changeCurrentRewardFilter({newFilter: newFilter}))
	}

	const onSendReward = (titleText: string) => {
		dispatch(RewardActions.addReward({
			newReward: {
				id: rewards.length - 1 + 1,
				titleText,
				category: RewardCategoryEnum.SEASON,
				cost: 10,
				supText: ''
			}
		}));
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
			taskFilters={{
				filters: rewardFilters,
				handler: changeActiveFilter
			}}
			tasks={rewards}
			currentFilter={currentRewardFilter}
			taskComponent={(rewardTask) => <Reward
				key={rewardTask.id}
				titleText={rewardTask.titleText}
				id={rewardTask.id}
				cost={rewardTask.cost ?? DEFAULT_REWARD_COST}
				category={rewardTask.category}
				supText={rewardTask.supText}
			/>}
			additionalContent={<RewardShop/>}

		/>
	);
};
