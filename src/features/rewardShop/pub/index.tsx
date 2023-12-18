import React, {FunctionComponent} from 'react';
import {shopThings} from "../model/config";
import {BuyRewardItemBox} from "../ui";


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

