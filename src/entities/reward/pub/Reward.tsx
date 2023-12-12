import React from "react";
import {ThreeDots} from "../../../assets/icons/ThreeDots";
import {useModal} from "../../../shared/hooks/useModal";
import {RewardType} from "../model/config";
import {BuyRewardBox} from "features/buyReward";

export const Reward: React.FC<RewardType> = ({
	                                             titleText,
	                                             supText,
	                                             cost,
                                             }) => {

	const {toggle, isShown} = useModal()

	return (
		<>
			<div
				className='item-tasks__task'>
				<div className='item-tasks__middle'>
					<div className='item-tasks__text-wrapper'>
						<p className='item-tasks__text'>{titleText}</p>
						<div onClick={toggle}><ThreeDots/></div>
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
				</div>
				<BuyRewardBox cost={cost}/>
			</div>
			{/*<UpdateRewardTaskModal isShown={isShown} toggle={toggle} taskData={{titleText, supText, cost, id, category}}/>*/}
		</>
	);
};

