import React from "react";
import StarIcon from "assets/icons/StarIcon";

interface IUserLevel {
	levelPoint: number;
	maxLevelPoint: number;
}

export const UserLevel: React.FC<IUserLevel> = ({levelPoint, maxLevelPoint}) => {
	return (
		<div className='user__star user__data'>
			<div className='user__icon'>
				<StarIcon/>
			</div>
			<div className='progress-bar'>
        <span
	        className='progress-bar-fill progress-bar-yellow'
	        style={{
		        width: (levelPoint > 0 ? levelPoint / maxLevelPoint : 0) * 100 + '%',
	        }}></span>
			</div>
			<div className='user__count'>
				{levelPoint > 0 ? levelPoint : 0}/{maxLevelPoint}
			</div>
		</div>
	);
};

