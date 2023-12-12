import React from 'react';


import SwordIcon from "assets/icons/MemberIcons/SwordIcon";
import {UserHealth} from "./UserHealth";
import {UserLevel} from "./UserLevel";
import {userState} from "../model/config/config";

export const UserInfo: React.FC<Omit<userState, 'money' | 'things'>> = ({
	                                                                        healthPoint,
	                                                                        maxHealthPoint,
	                                                                        levelPoint,
	                                                                        level,
	                                                                        maxLevelPoint
                                                                        }) => {

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
