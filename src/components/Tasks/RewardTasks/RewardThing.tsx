import React from "react";

import {CoinIcon, HealthIcon, notifySuccess} from '../../index';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';

import {toast} from 'react-toastify';

interface IMainContentRewardItem {
	price: number;
	name: string;
	category: string;
	img: string;
}

export const RewardThing: React.FC<IMainContentRewardItem> = ({
	                                                              price,
	                                                              name,
	                                                              category,
	                                                              img,
                                                              }) => {
	const {money} = useTypedSelector((state) => state.user);
	const {setMinusUserMoney, setUserHealth, setUserThing} = useActions();

	const notifySmallValueMoney = () => toast.error(<div>У вас не хватает монет</div>);
	const notifySuccessPursue = () =>
		toast.success(<div>Покупка успешна совершена, проверьте инвентарь</div>);

	const onClickItem = (price: number) => () => {
		if (money >= price) {
			setMinusUserMoney(price);
			if (category === 'Health flask') {
				setUserHealth(25);
				notifySuccess('жизни', 25, <HealthIcon/>);
			}
			if (category === 'Thing') {
				setUserThing({category, name, price, img});
				notifySuccessPursue();
			}
		} else {
			notifySmallValueMoney();
		}
	};
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
