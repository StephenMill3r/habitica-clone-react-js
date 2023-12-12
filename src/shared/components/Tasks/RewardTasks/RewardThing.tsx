import React from "react";

import {CoinIcon} from '../../index';

interface IRewardItem {
	price: number;
	name: string;
	category: string;
	img: string;
}

export const RewardThing: React.FC<IRewardItem> = ({
	                                                   price,
	                                                   name,
	                                                   category,
	                                                   img,
                                                   }) => {


	return (
		<div className='shop-tasks__column'>
			<div onClick={onClickItem(price)} className='shop-tasks__item'>
				<div className='shop-tasks__icon'>
					<img src={img} alt={name}/>
				</div>
				<div className='shop-tasks__price'>
					<CoinIcon/>
					{price}
				</div>
			</div>
		</div>
	);
};
