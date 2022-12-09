import React, {FunctionComponent} from 'react';
import HealthFlaskImg from "../../../assets/shopThings/HealthFlask.png";
import SwordOneImg from "../../../assets/shopThings/Item__00.png";
import SwordSecondImg from "../../../assets/shopThings/Item__01.png";
import {RewardThing} from "./RewardThing";


const shopItems = [
	{
		category: 'Health flask',
		name: 'Health flask',
		price: 5,
		img: HealthFlaskImg,
	},
	{
		category: 'Thing',
		name: 'Sword 1 type',
		price: 5,
		img: SwordOneImg,
	},
	{
		category: 'Thing',
		name: 'Sword 2 type',
		price: 5,
		img: SwordSecondImg,
	},
];

export const RewardShop: FunctionComponent = () => {

	return (
		<div className='item-tasks__shop shop-tasks'>
			<div className='shop-tasks__row'>
				{shopItems.map((shopItem, index) => (
					<RewardThing key={`${shopItem.price}__${index}`} {...shopItem} />
				))}
			</div>
		</div>
	);
};

