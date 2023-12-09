import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import React from "react";

interface INavSite {
	open: boolean;
}

export const NavSite: React.FC<INavSite> = ({open}) => {
	return (
		<nav
			className={classNames('header__navTop', {
				open: open,
			})}>
			<ul className='menu__list'>
				<li>
					<NavLink exact to='/'>
						Задачи
					</NavLink>
				</li>
				<li>
					<NavLink exact to='/inventory'>
						Инвентарь
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

