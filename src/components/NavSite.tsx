import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface INavSite {
  open: boolean;
}

const NavSite: React.FC<INavSite> = ({ open }) => {
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
        <li>
          <a href='' className='menu__link'>
            Испытания
          </a>
        </li>
        <li>
          <a href='' className='menu__link'>
            Помощь
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavSite;
