import { useState } from 'react';
import { MainContentTaskHabit } from '../../';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const MainContentHabit: React.FC = () => {
  const { setHabitItems } = useActions();
  const { items } = useTypedSelector((state) => state.habitTask);

  const [text, setText] = useState<string>('');

  const onSendHabit = (text: string) => {
    setHabitItems(text);
  };
  const handleAddHabit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendHabit(text);
    setText('');
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddHabit(e);
    }
  };
  return (
    <div className='main-content__column'>
      <div className='main-content__info'>
        <div className='main-content__name'>Привычки</div>
        <div className='main-content__tabs'>
          <ul className='main-content__list'>
            <li className='main-content__list-item list-item-active'>Все</li>
            <li className='main-content__list-item'>Слабые</li>
            <li className='main-content__list-item'>Сильные</li>
          </ul>
        </div>
      </div>
      <div className='main-content__item item-main-content'>
        <div className='item-main-content__top'>
          <div className='item-main-content__add'>
            <form onSubmit={handleAddHabit}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Добавить привычку'></textarea>
            </form>
          </div>
        </div>
        <div className='item-main-content__wrapper'>
          {items.map((item: any, index: number) => (
            <MainContentTaskHabit
              key={`${index}__${item[0]}`}
              text={item.titleText}
              isBadTask={item.isBadTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContentHabit;
