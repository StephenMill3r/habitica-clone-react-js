import React from "react";

import { MemberInfo } from '..';

const Member: React.FC = () => {
  return (
    <section className='member'>
      <div className='container'>
        <div className='member__row'>
          <div className='member__column'>
            <MemberInfo />
          </div>
          <div className='member__column'>
            <div className='member__text-wrapper'>
              <div className='member__title'>Мотивируйте себя на достижение ваших целей</div>
              <p className='member__main-text'>
                Пора повеселиться, делая дела! Присоединяйся к более чем 4 миллионам жителей
                Хабитики и улучшай свою жизнь, выполняя задания одно за другим.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
