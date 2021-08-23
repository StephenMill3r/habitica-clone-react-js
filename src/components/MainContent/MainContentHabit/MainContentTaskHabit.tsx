import classNames from 'classnames';

import { StarIcon, HealthIcon, notifyError, notifySuccess } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';

interface IMainContentTaskHabit {
  text: string;
  isBadTask: boolean;
  id: number;
  isSucsessTask: boolean;
  isShow: boolean;
  count: number;
}

const MainContentTaskHabit: React.FC<IMainContentTaskHabit> = ({
  text,
  isBadTask,
  id,
  isSucsessTask,
  isShow,
  count,
}) => {
  const {
    setMinusUserHealth,
    setUserLevel,
    setHabitSuccessTask,
    setPlusHabitCount,
    setMinusHabitCount,
  } = useActions();

  const onClickBadHabitTask =
    (health: number, id: number) => (event: React.MouseEvent<HTMLElement>) => {
      if (isBadTask) {
        setMinusUserHealth(health);
        setMinusHabitCount(id);
        notifyError('жизни', health, <HealthIcon />);
      }
    };
  const onClickSucsessTask = (id: number) => (event: React.MouseEvent<HTMLElement>) => {
    if (!isBadTask) {
      setHabitSuccessTask(id);
      setUserLevel(10);
      setPlusHabitCount(id);
      notifySuccess('опыта', 10, <StarIcon />);
    }
  };
  return (
    <div
      className={classNames('item-main-content__task', {
        'item-main-content__bad-task': isBadTask,
        'item-main-content__sucsess-task': isSucsessTask,
        'item-main-content__show-task': isShow,
      })}>
      <div
        onClick={onClickSucsessTask(id)}
        className='item-main-content__left item-main-content__func'>
        <div className='item-main-content__plus'>+</div>
      </div>
      <div className='item-main-content__middle'>
        <p className='item-main-content__text'>{text}</p>
        <div className='item-main-content__counter'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
            <path
              fill-rule='evenodd'
              d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
          </svg>
          <span className='item-main-content__count'>{count >= 0 ? `+${count}` : `-${count}`}</span>
        </div>
      </div>
      <div className='item-main-content__right item-main-content__func'>
        <div onClick={onClickBadHabitTask(7, id)} className='item-main-content__minus'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
            <path fill-rule='evenodd' d='M0 0h10v2H0z'></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainContentTaskHabit;
