import { MainContentTask } from '../../';

const MainContentGoal: React.FC = () => {
  return (
    <div className='main-content__column'>
      <div className='main-content__info'>
        <div className='main-content__name'>Задачи</div>
        <div className='main-content__tabs'>
          <ul className='main-content__list'>
            <li className='main-content__list-item list-item-active'>Активные</li>
            <li className='main-content__list-item'>С датой</li>
            <li className='main-content__list-item'>Сделанные</li>
          </ul>
        </div>
      </div>
      <div className='main-content__item item-main-content'>
        <div className='item-main-content__top'>
          <div className='item-main-content__add'>
            <textarea placeholder='Добавить задачу'></textarea>
          </div>
        </div>
        <div className='item-main-content__wrapper'>
          <MainContentTask
            titleText='Установить расписание тренировок'
            supText='Нажмите, чтобы добавить список!'
            count={1}
            diff={0}
          />
          <MainContentTask
            titleText='Поработать над творческим проектом'
            supText='Нажмите, чтобы указать название вашего текущего проекта и задать расписание!'
            count={1}
            diff={0}
          />
          <MainContentTask
            titleText='Поработать над творческим проектом'
            supText='Нажмите, чтобы указать название вашего текущего проекта и задать расписание!'
            count={0}
            diff={0}
          />
          <div className='item-main-content__note note-item-main-content'>
            <div className='note-item-main-content__icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path
                  fill-rule='evenodd'
                  d='M8.343 14.916c-.312 0-.61-.123-.831-.344l-3.831-3.831 1.662-1.662 2.934 2.934 5.938-6.929L16 6.613l-6.764 7.893a1.182 1.182 0 0 1-.848.409l-.045.001zM18 16c0 1.103-.897 2-2 2H4c-1.102 0-2-.897-2-2V4c0-1.103.898-2 2-2h12c1.103 0 2 .897 2 2v12zM16 0H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z'></path>
              </svg>
            </div>
            <div className='note-item-main-content__title'>Это ваши Задачи</div>
            <p className='note-item-main-content__text'>
              Задачи могут быть выполнены только один раз. Добавьте списки вашим задачам, чтобы
              увеличить их награду.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentGoal;
