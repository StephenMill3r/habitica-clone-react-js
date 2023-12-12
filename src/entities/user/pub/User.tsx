import React from "react";
import {UserInfo} from "../ui/UserInfo";
import {useSelector} from "react-redux";
import {UserSelectors} from "../model/selectors";


export const User: React.FC = () => {
	const level = useSelector(UserSelectors.selectLevel)
	const levelPoint = useSelector(UserSelectors.selectLevelPoint)
	const maxLevelPoint = useSelector(UserSelectors.selectMaxLevelPoint)

	const healthPoint = useSelector(UserSelectors.selectHp)
	const maxHealthPoint = useSelector(UserSelectors.selectMaxHealthPoint)

	return (
		<section className='user'>
			<div className='container'>
				<div className='user__row'>
					<div className='user__column'>
						<UserInfo
							level={level}
							levelPoint={levelPoint}
							maxLevelPoint={maxLevelPoint}
							maxHealthPoint={maxHealthPoint}
							healthPoint={healthPoint}
						/>
					</div>
					<div className='user__column'>
						<div className='user__text-wrapper'>
							<div className='user__title'>Мотивируйте себя на достижение ваших целей</div>
							<p className='user__main-text'>
								Пора повеселиться, делая дела! Присоединяйся к более чем 4 миллионам жителей
								Хабитики и улучшай свою жизнь, выполняя задания одно за другим.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

