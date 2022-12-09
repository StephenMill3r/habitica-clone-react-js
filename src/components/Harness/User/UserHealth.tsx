import React from "react";

import {HealthIcon} from '../../index';

interface IUserHealth {
	healthPoint: number;
	maxHealthPoint: number;
}

export const UserHealth: React.FC<IUserHealth> = ({healthPoint, maxHealthPoint}) => {
	return (
		<div className='user__health user__data'>
			<div className='user__icon'>
				<HealthIcon/>
			</div>
			<div className='progress-bar'>
        <span
	        className='progress-bar-fill'
	        style={{
		        width: (healthPoint > 0 ? healthPoint / maxHealthPoint : 0) * 100 + '%',
	        }}></span>
			</div>
			<div className='user__count'>
				{healthPoint > 0 ? healthPoint : 0}/{maxHealthPoint}
			</div>
		</div>
	);
};
