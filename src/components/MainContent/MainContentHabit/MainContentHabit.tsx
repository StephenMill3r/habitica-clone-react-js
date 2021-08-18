import { MainContentTaskHabit } from '../../';

const MainContentHabit: React.FC = () => {
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
            <textarea placeholder='Добавить привычку'></textarea>
          </div>
        </div>
        <div className='item-main-content__wrapper'>
          <MainContentTaskHabit
            text='10 мин. кардио + 10 минут кардио'
            count={4}
            isBadTask={false}
          />
          <MainContentTaskHabit
            text='10 мин. кардио + 10 минут кардио'
            count={2}
            isBadTask={false}
          />
          <MainContentTaskHabit
            text='10 мин. кардио + 10 минут кардио'
            count={0}
            isBadTask={false}
          />
          <MainContentTaskHabit text='Вредная привычка' count={0} isBadTask={true} />
          <MainContentTaskHabit
            text='Успешная привычка'
            count={0}
            isBadTask={false}
            isSucsessTask={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContentHabit;
