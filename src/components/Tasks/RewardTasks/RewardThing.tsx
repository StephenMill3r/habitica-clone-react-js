import React from "react";

import {CoinIcon, HealthIcon} from '../../index';
import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';
import {useNotification} from "../../../hooks/useNotification";
import {MessageOnGain} from "../../../common/ui/MessageOnGain";

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
	const {money} = useTypedSelector((state) => state.user);
	const {setMinusUserMoney, setUserHealth, setUserThing} = useActions();
	const {showErrorNotification, showSuccessNotification} = useNotification()

	const onClickItem = (price: number) => () => {
		if (money >= price) {
			setMinusUserMoney(price);
			if (category === 'Health flask') {
				setUserHealth(25);
				showSuccessNotification(<MessageOnGain thing={['жизнь', 'жизни', 'жизней']} icon={<HealthIcon/>} count={25}/>)
			}
			if (category === 'Thing') {
				setUserThing({category, name, price, img});
				showSuccessNotification(<div>Покупка успешна совершена, проверьте инвентарь</div>)
			}
		} else {
			showErrorNotification(<div>У вас не хватает монет</div>)
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
