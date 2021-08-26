import classNames from 'classnames';
import { useState } from 'react';

import { StarIcon, HealthIcon, notifyError, notifySuccess, Modal } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';

interface IMainContentTaskHabit {
  text: string;
  isBadTask: boolean;
  id: number;
  isSucsessTask: boolean;
  isShow: boolean;
  count: number;
}
const diff = ['Пустяк', 'Легко', 'Нормально', 'Сложно'];
const tags = [
  'Работа',
  'Спортивные упражнения',
  'Здоровье и образ жизни',
  'Учеба',
  'Работа в команде',
  'Домашние дела',
  'Творчество',
];

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

  const [modalActive, setModalActive] = useState(false);
  const [selectedDiff, setSelectedDiff] = useState(diff[0]);
  const [selectedTag, setSelectedTag] = useState(tags[0]);

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
    <>
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
          <div className='item-main-content__text-wrapper'>
            <p className='item-main-content__text'>{text}</p>
            <svg
              onClick={() => setModalActive(true)}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 4 16'>
              <path
                fill-rule='evenodd'
                d='M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'></path>
            </svg>
          </div>
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
        <div className='item-main-content__right item-main-content__func'>
          <div onClick={onClickBadHabitTask(7, id)} className='item-main-content__minus'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
              <path fill-rule='evenodd' d='M0 0h10v2H0z'></path>
            </svg>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setModalActive={setModalActive}>
        <div className='modal__header'>
          <div className='modal__top'>
            <div className='modal__title'>Изменить привычку</div>
            <div className='modal__buttons'>
              <button className='modal__cancel'>Отмена</button>
              <button className='modal__save btn'>Сохранить</button>
            </div>
          </div>
          <div className='modal__text'>
            <label>Заголовок*</label>
            <input placeholder='Добавить название' value='Плохая привычка' type='text' />
          </div>
          <div className='modal__notice'>
            <label>Заметки</label>
            <textarea value='Заметка'></textarea>
          </div>
        </div>
        <div className='modal__body'>
          <div className='modal__icons'>
            <div className='modal__icon-item'>
              <div className='modal__icon modal__icon-active'>
                <div className='item-main-content__plus'>+</div>
              </div>
              <div className='modal__description'>Полезная</div>
            </div>
            <div className='modal__icon-item'>
              <div className='modal__icon'>
                <div className='item-main-content__minus'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
                    <path fill-rule='evenodd' d='M0 0h10v2H0z'></path>
                  </svg>
                </div>
              </div>
              <div className='modal__description'>Вредная</div>
            </div>
          </div>
          <div className='modal__title-select'>Сложность</div>
          <select
            className='modal__select'
            value={selectedDiff}
            onChange={(e) => setSelectedDiff(e.target.value)}>
            {diff.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className='modal__title-select'>Теги</div>
          <select
            className='modal__select'
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}>
            {tags.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className='modal__footer'>Удалить привычку</div>
        </div>
      </Modal>
    </>
  );
};

export default MainContentTaskHabit;
