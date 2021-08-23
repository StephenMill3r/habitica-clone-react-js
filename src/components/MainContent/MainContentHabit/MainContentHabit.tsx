import { useState } from 'react';
import classNames from 'classnames';

import { MainContentHabitItem, Tabs } from '../../';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const MainContentHabit: React.FC = () => {
  const { setHabitItems } = useActions();
  const { items } = useTypedSelector((state) => state.habitTask);

  const [active, setActive] = useState('all');
  const [text, setText] = useState<string>('');

  const onSendHabit = (text: string) => {
    setHabitItems({ id: items.length - 1 + 1, category: 'weak', titleText: text, count: 0 });
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
            <Tabs
              active={active}
              setActive={setActive}
              categoryFirst='all'
              categorySecond='weak'
              categoryThird='strong'
              titleFirst='Все'
              titleSecond='Слабые'
              titleThird='Сильные'
            />
            {/* {tabItems.map((tabItem: tabItemsType) => (
              <li
                onClick={() => setActive(tabItem.category)}
                className={classNames('main-content__list-item', {
                  'list-item-active': active === tabItem.category,
                })}>
                {tabItem.title}
              </li>
            ))} */}
          </ul>
        </div>
      </div>
      <div className='main-content__item item-main-content'>
        <div className='item-main-content__wrapper'>
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
        </div>
        <MainContentHabitItem active={active} items={items} />
      </div>
    </div>
  );
};

export default MainContentHabit;
