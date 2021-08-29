import React from 'react';
import classNames from 'classnames';

import { StarIcon, HealthIcon, notifySuccess } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';

interface IMainContentTaskGoal {
  titleText: string;
  supText: string;
  id: number;
  isCompletedTask: boolean;
  isShow: boolean;
  exp: number;
  health: number;
}

const MainContentTaskGoal: React.FC<IMainContentTaskGoal> = ({
  titleText,
  supText,
  id,
  isCompletedTask,
  isShow,
  health,
  exp,
}) => {
  const { setUserLevel, setUserHealth, setUserMoney, setGoalSuccessTask } = useActions();

  const onClickLevelUpdate =
    (level: number, health: number) => (event: React.MouseEvent<HTMLElement>) => {
      if (!isCompletedTask) {
        setGoalSuccessTask(id);
        setUserLevel(level);
        setUserHealth(health);
        setUserMoney(Math.floor(Math.random() * 10));
        notifySuccess('опыта', level, <StarIcon />);
        notifySuccess('жизни', health, <HealthIcon />);
      }
    };
  return (
    <div className='item-main-content__wrapper'>
      <div
        className={classNames('item-main-content__task', {
          'item-main-content__show-task': isShow,
        })}>
        <div
          className={classNames('item-main-content__left item-main-content__func', {
            'item-main-content__left-active': isCompletedTask,
          })}>
          <div onClick={onClickLevelUpdate(exp, health)} className='item-main-content__checkbox'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 10'>
                <path
                  fillRule='evenodd'
                  d='M4.662 9.832c-.312 0-.61-.123-.831-.344L0 5.657l1.662-1.662 2.934 2.934L10.534 0l1.785 1.529-6.764 7.893a1.182 1.182 0 0 1-.848.409l-.045.001'></path>
              </svg>
            </span>
          </div>
        </div>
        <div className='item-main-content__middle'>
          <div className='item-main-content__text-wrapper'>
            <p className='item-main-content__text'>{titleText}</p>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 16'>
              <path
                fillRule='evenodd'
                d='M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'></path>
            </svg>
          </div>
          <p className='item-main-content__suptext'>{supText}</p>
        </div>
      </div>
    </div>
  );
};

export default MainContentTaskGoal;
