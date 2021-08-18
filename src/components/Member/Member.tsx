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
              <div className='member__title'>Побеждайте монстров с друзьями</div>
              <p className='member__main-text'>
                Пригласив друга в команду, вы получите уникальный <br />
                свиток квеста для совместного сражения с Василистом!
              </p>
              <div className='member__button'>
                <button className='member__btn btn'>Создать команду</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
