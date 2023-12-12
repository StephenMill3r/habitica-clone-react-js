import React, {FunctionComponent} from 'react';
import {BuyRewardItemBox} from "../../../features/buyRewardItem";
import {shopThings} from "../../../features/buyRewardItem/model/config";


export const RewardShop: FunctionComponent = () => {

	return (
		<div className='item-tasks__shop shop-tasks'>
			<div className='shop-tasks__row'>
				{shopThings.map((shopItem, index) => (
					<BuyRewardItemBox key={`${shopItem.price}__${index}`} {...shopItem} />
				))}
			</div>
		</div>
	);
};

