import React, {FunctionComponent} from 'react';
import {RewardThing} from "./RewardThing";
import {shopThings} from "../../../assets/shopThings/shopThings";


export const RewardShop: FunctionComponent = () => {

	return (
		<div className='item-tasks__shop shop-tasks'>
			<div className='shop-tasks__row'>
				{shopThings.map((shopItem, index) => (
					<RewardThing key={`${shopItem.price}__${index}`} {...shopItem} />
				))}
			</div>
		</div>
	);
};

