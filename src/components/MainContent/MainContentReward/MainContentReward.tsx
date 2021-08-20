import { useState } from 'react';
import { CoinIcon, MainContentRewardTask } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const MainContentReward: React.FC = () => {
  const { setRewardItems } = useActions();
  const { items } = useTypedSelector((state) => state.reward);

  const [text, setText] = useState<string>('');

  const onSendReward = (titleText: string) => {
    setRewardItems({ titleText });
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
            <li className='main-content__list-item list-item-active'>Все</li>
            <li className='main-content__list-item'>Сезонные</li>
            <li className='main-content__list-item'>Отложенные</li>
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
              diff={0}
              cost={item.cost ? item.cost : 10}
            />
          ))}
          <div className='item-main-content__shop shop-main-content'>
            <div className='shop-main-content__row'>
              <div className='shop-main-content__column'>
                <div className='shop-main-content__item'>
                  <div className='shop-main-content__icon'></div>
                  <div className='shop-main-content__price'>
                    <CoinIcon />
                    25
                  </div>
                </div>
              </div>
              <div className='shop-main-content__column'>
                <div className='shop-main-content__item'>
                  <div className='shop-main-content__icon'></div>
                  <div className='shop-main-content__price'>
                    <CoinIcon />
                    25
                  </div>
                </div>
              </div>
              <div className='shop-main-content__column'>
                <div className='shop-main-content__item'>
                  <div className='shop-main-content__icon'></div>
                  <div className='shop-main-content__price'>
                    <CoinIcon />
                    25
                  </div>
                </div>
              </div>
              <div className='shop-main-content__column'>
                <div className='shop-main-content__item'>
                  <div className='shop-main-content__icon'></div>
                  <div className='shop-main-content__price'>
                    <CoinIcon />
                    25
                  </div>
                </div>
              </div>
              <div className='shop-main-content__column'>
                <div className='shop-main-content__item'>
                  <div className='shop-main-content__icon'></div>
                  <div className='shop-main-content__price'>
                    <CoinIcon />
                    25
                  </div>
                </div>
              </div>
              <div className='shop-main-content__column'>
                <div className='shop-main-content__item'>
                  <div className='shop-main-content__icon'></div>
                  <div className='shop-main-content__price'>
                    <CoinIcon />
                    25
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentReward;
