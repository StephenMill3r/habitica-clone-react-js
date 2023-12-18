import React from 'react';
import CoinIcon from "../../../assets/icons/CoinIcon";
import {useDispatch, useSelector} from "react-redux";
import {UserSelectors} from "../../../entities/user/model/selectors";
import {useNotification} from "../../../shared/hooks/useNotification";
import {UserActions} from "../../../entities/user/model/actions";

interface IBuyRewardBox {
	cost: number | undefined,
}

export const BuyRewardBox: React.FC<IBuyRewardBox> = ({cost = 0}) => {
	const dispatch = useDispatch()
	const money = useSelector(UserSelectors.selectMoney);

	const {showErrorNotification} = useNotification()

	const onClickSpendMoney = () => {
		if (money >= cost) {
			dispatch(UserActions.minusUserMoney({money: cost}))
		} else {
			showErrorNotification(<div>У вас не хватает монет</div>)
		}
	};

	return (
		<div onClick={onClickSpendMoney} className='item-tasks__coin'>
			<div className='svg-icon'>
				<CoinIcon/>
			</div>
			<span>{cost}</span>
		</div>
	);
};
