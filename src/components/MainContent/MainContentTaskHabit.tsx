import classNames from 'classnames';

interface IMainContentTaskHabit {
  text: string;
  count: number;
  isBadTask: boolean;
  isSucsessTask?: boolean;
}

const MainContentTaskHabit: React.FC<IMainContentTaskHabit> = ({
  text,
  count,
  isBadTask,
  isSucsessTask,
}) => {
  return (
    <div
      className={classNames('item-main-content__task', {
        'item-main-content__bad-task': isBadTask,
        'item-main-content__sucsess-task': isSucsessTask,
      })}>
      <div className='item-main-content__left item-main-content__func'>
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
          <span className='item-main-content__count'>+{count}</span>
        </div>
      </div>
      <div className='item-main-content__right item-main-content__func'>
        <div className='item-main-content__minus'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
            <path fill-rule='evenodd' d='M0 0h10v2H0z'></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainContentTaskHabit;
