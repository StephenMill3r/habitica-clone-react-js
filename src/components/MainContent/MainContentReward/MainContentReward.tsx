import { useState } from 'react';
import { MainContentRewardTask, Tabs, MainContentRewardItem } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const shopItems = [
  {
    name: 'Health flask',
    price: 25,
  },
  {
    name: 'Health flask',
    price: 25,
  },
  {
    name: 'Health flask',
    price: 25,
  },
];

const MainContentReward: React.FC = () => {
  const { setRewardItems } = useActions();
  const { items } = useTypedSelector((state) => state.reward);

  const [text, setText] = useState<string>('');
  const [active, setActive] = useState('all');

  const onSendReward = (titleText: string) => {
    setRewardItems({ titleText, category: 'season', cost: 10 });
  };
  const handleAddReward = (e: React.FormEvent) => {
    e.preventDefault();
    onSendReward(text);
    setText('');
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddReward(e);
    }
  };
  return (
    <div className='main-content__column'>
      <div className='main-content__info'>
        <div className='main-content__name'>Награды</div>
        <div className='main-content__tabs'>
          <ul className='main-content__list'>
            <Tabs
              active={active}
              setActive={setActive}
              categoryFirst='all'
              categorySecond='season'
              categoryThird='later'
              titleFirst='Все'
              titleSecond='Сезонные'
              titleThird='Отложенные'
            />
          </ul>
        </div>
      </div>
      <div className='main-content__item item-main-content'>
        <div className='item-main-content__top'>
          <div className='item-main-content__add'>
            <form onSubmit={handleAddReward}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Добавить награду'></textarea>
            </form>
          </div>
        </div>
        <div className='item-main-content__wrapper'>
          {items.map((item: any, index: number) => (
            <MainContentRewardTask
              key={`${index}`}
              titleText={item.titleText}
              supText={item.supText}
              cost={item.cost ? item.cost : 10}
              isShow={true ? item.category === active || active === 'all' : false}
            />
          ))}
          <div className='item-main-content__shop shop-main-content'>
            <div className='shop-main-content__row'>
              {shopItems.map((shopItem, index) => (
                <MainContentRewardItem key={`${shopItem.price}__${index}`} {...shopItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentReward;
