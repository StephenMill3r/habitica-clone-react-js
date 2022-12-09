import React from "react";

import {UserInfo} from "./UserInfo";


export const User: React.FC = () => {
	
	return (
		<section className='user'>
			<div className='container'>
				<div className='user__row'>
					<div className='user__column'>
						<UserInfo/>
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

