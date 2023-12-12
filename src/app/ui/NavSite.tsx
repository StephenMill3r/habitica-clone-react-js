import classNames from 'classnames';
import {Link} from 'react-router-dom';
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
					<Link to='/'>
						Задачи
					</Link>
				</li>
				<li>
					<Link to='/inventory'>
						Инвентарь
					</Link>
				</li>
			</ul>
		</nav>
	);
};

