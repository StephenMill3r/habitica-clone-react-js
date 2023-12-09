import React, {useEffect} from 'react';

import {SwordIcon, UserHealth, UserLevel} from '../../index';

import {useActions} from '../../../../app/store/typeHooks/useActions';
import {useTypedSelector} from '../../../../app/store/typeHooks/useTypedSelector';

export const UserInfo: React.FC = () => {
	const {setResetUserLevel, setResetUserHealth, setIncreaseUserLevelPoint, setIncreaseUserLevel} =
		useActions();

	const {levelPoint, healthPoint, level, maxHealthPoint, maxLevelPoint} = useTypedSelector(
		(state) => state.user,
	);

	useEffect(() => {
		if (levelPoint > maxLevelPoint) {
			setIncreaseUserLevelPoint();
			setIncreaseUserLevel();
			setResetUserLevel();
		} else if (levelPoint < 0) {
			setResetUserLevel();
		}
	}, [levelPoint]);

	useEffect(() => {
		if (0 >= healthPoint) {
			setResetUserHealth();
		}
		if (healthPoint > maxHealthPoint) {
			setResetUserHealth();
		}
	}, [healthPoint]);

	return (
		<div className='user__item'>
			<div className='user__info'>
				<div className='user__text user__data'>
					<div className='user__icon'>
						<SwordIcon/>
					</div>
					<div className='use__wrapper'>
						<div className='user__supinfo'>Уровень {level} Воин</div>
					</div>
				</div>
				<UserHealth healthPoint={healthPoint} maxHealthPoint={maxHealthPoint}/>
				<UserLevel levelPoint={levelPoint} maxLevelPoint={maxLevelPoint}/>
			</div>
		</div>
	);
};
