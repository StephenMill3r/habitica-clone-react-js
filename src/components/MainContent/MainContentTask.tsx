import classNames from 'classnames';
import React, { useState } from 'react';
import { useActions } from '../../redux/typeHooks/useActions';

interface IMainContentTask {
  titleText: string;
  supText: string;
  diff: number;
}

const MainContentTask: React.FC<IMainContentTask> = ({ titleText, supText, diff }) => {
  const { setUserLevel, setMinusUserLevel, setUserHealth, setMinusUserHealth, setUserMoney } =
    useActions();
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [pointsReward, setPointsReward] = useState([
    {
      diff: 0,
      point: 11,
      health: 7,
    },
    {
      diff: 1,
      point: 14,
      health: 11,
    },
  ]);
  const [count, setCount] = useState<number>(0);

  const onClickLevelUpdate =
    (level: number, health: number) => (event: React.MouseEvent<HTMLElement>) => {
      setCheckBox(!checkBox);
      if (checkBox) {
        setMinusUserLevel(level);
        setMinusUserHealth(health);
        setCount(count - 1);
      } else {
        setUserLevel(level);
        setUserHealth(health);
        setUserMoney(Math.floor(Math.random() * 2));
        setCount(count + 1);
      }
    };
  return (
    <div className='item-main-content__wrapper'>
      <div className='item-main-content__task'>
        <div
          className={classNames('item-main-content__left item-main-content__func', {
            'item-main-content__left-active': checkBox,
          })}>
          <div
            onClick={onClickLevelUpdate(pointsReward[diff].point, pointsReward[diff].health)}
            className='item-main-content__checkbox'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 10'>
                <path
                  fill-rule='evenodd'
                  d='M4.662 9.832c-.312 0-.61-.123-.831-.344L0 5.657l1.662-1.662 2.934 2.934L10.534 0l1.785 1.529-6.764 7.893a1.182 1.182 0 0 1-.848.409l-.045.001'></path>
              </svg>
            </span>
          </div>
        </div>
        <div className='item-main-content__middle'>
          <p className='item-main-content__text'>{titleText}</p>
          <p className='item-main-content__suptext'>{supText}</p>
          <div className='item-main-content__counter'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
              <path
                fill-rule='evenodd'
                d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
            </svg>
            <span className='item-main-content__count'>
              {count >= 0 ? `+${count}` : `-${count}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentTask;
