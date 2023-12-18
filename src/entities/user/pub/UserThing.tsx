import React from 'react';

interface IUserThing {
	img: string;
	name: string;
}

export const UserThing: React.FC<IUserThing> = ({img, name}) => {

	return (
		<div className='inventory__column'>
			<div className='inventory__item'>
				<div className='inventory__img'>
					<img src={img} alt={name}/>
				</div>
				<div className='inventory__title'>{name}</div>
			</div>
		</div>
	);
};
