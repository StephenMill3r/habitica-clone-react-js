import { MainContentTaskHabit } from '..';

const MainContent: React.FC = () => {
  return (
    <section className='main-content'>
      <div className='container'>
        <div className='main-content__top'>
          <div className='main-content__search'>
            <input type='text' placeholder='Поиск' className='main-content__search-bar'></input>
          </div>
          <div className='main-content__tags'>
            <button className='main-content__dropdown'>
              <div className='main-content__ico'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                  <path
                    fill-rule='evenodd'
                    d='M5 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10-2H7.815A2.995 2.995 0 0 0 5 10a2.996 2.996 0 0 0-2.816 2H1a1 1 0 0 0 0 2h1.184A2.995 2.995 0 0 0 5 16a2.993 2.993 0 0 0 2.815-2H15a1 1 0 0 0 0-2m-4-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-2h-1.185A2.995 2.995 0 0 0 11 5a2.996 2.996 0 0 0-2.816 2H1a1 1 0 0 0 0 2h7.184A2.995 2.995 0 0 0 11 11a2.993 2.993 0 0 0 2.815-2H15a1 1 0 0 0 0-2M5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10-2H7.815A2.995 2.995 0 0 0 5 0a2.996 2.996 0 0 0-2.816 2H1a1 1 0 0 0 0 2h1.184A2.995 2.995 0 0 0 5 6a2.993 2.993 0 0 0 2.815-2H15a1 1 0 0 0 0-2'></path>
                </svg>
              </div>
              <span>Теги</span>
            </button>
          </div>
        </div>
        <div className='main-content__row'>
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
          <div className='main-content__column'>
            <div className='main-content__info'>
              <div className='main-content__name'>Ежедневные дела</div>
              <div className='main-content__tabs'>
                <ul className='main-content__list'>
                  <li className='main-content__list-item list-item-active'>Все</li>
                  <li className='main-content__list-item'>Текущие</li>
                  <li className='main-content__list-item'>Прочие</li>
                </ul>
              </div>
            </div>
            <div className='main-content__item item-main-content'>
              <div className='item-main-content__top'>
                <div className='item-main-content__add'>
                  <textarea placeholder='Добавить ежедневное дело'></textarea>
                </div>
              </div>
              <div className='item-main-content__wrapper'>
                <div className='item-main-content__task'>
                  <div className='item-main-content__left item-main-content__func'>
                    <div className='item-main-content__checkbox'></div>
                  </div>
                  <div className='item-main-content__middle'>
                    <p className='item-main-content__text'>Поработать над творческим проектом</p>
                    <p className='item-main-content__suptext'>
                      Нажмите, чтобы указать название вашего текущего проекта и задать расписание!
                    </p>
                    <div className='item-main-content__counter'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
                        <path
                          fill-rule='evenodd'
                          d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
                      </svg>
                      <span className='item-main-content__count'>+2</span>
                    </div>
                  </div>
                </div>
                <div className='item-main-content__task'>
                  <div className='item-main-content__left item-main-content__func'>
                    <div className='item-main-content__checkbox'></div>
                  </div>
                  <div className='item-main-content__middle'>
                    <p className='item-main-content__text'>Поработать над творческим проектом</p>
                    <p className='item-main-content__suptext'>
                      Нажмите, чтобы указать название вашего текущего проекта и задать расписание!
                    </p>
                    <div className='item-main-content__counter'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
                        <path
                          fill-rule='evenodd'
                          d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
                      </svg>
                      <span className='item-main-content__count'>+2</span>
                    </div>
                  </div>
                </div>
                <div className='item-main-content__task'>
                  <div className='item-main-content__left item-main-content__func'>
                    <div className='item-main-content__checkbox'></div>
                  </div>
                  <div className='item-main-content__middle'>
                    <p className='item-main-content__text'>Поработать над творческим проектом</p>
                    <p className='item-main-content__suptext'>
                      Нажмите, чтобы указать название вашего текущего проекта и задать расписание!
                    </p>
                    <div className='item-main-content__counter'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
                        <path
                          fill-rule='evenodd'
                          d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
                      </svg>
                      <span className='item-main-content__count'>+2</span>
                    </div>
                  </div>
                </div>
                <div className='item-main-content__note note-item-main-content'>
                  <div className='note-item-main-content__icon'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 20'>
                      <path
                        fill-rule='evenodd'
                        d='M13 16h2v-2h-2v2zm-4 0h2v-2H9v2zm-4 0h2v-2H5v2zm12-4h2v-2h-2v2zm-4 0h2v-2h-2v2zm-4 0h2v-2H9v2zm13-4H2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8zm2-2v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1V0h2v2h10V0h2v2h1a4 4 0 0 1 4 4zM5 12h2v-2H5v2z'></path>
                    </svg>
                  </div>
                  <div className='note-item-main-content__title'>Это ваши Ежедневные дела</div>
                  <p className='note-item-main-content__text'>
                    Ежедневные дела повторяются регулярно. Настройте расписание, которое вам
                    подходит лучше всего!
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                <div className='item-main-content__task'>
                  <div className='item-main-content__left item-main-content__func'>
                    <div className='item-main-content__checkbox'></div>
                  </div>
                  <div className='item-main-content__middle'>
                    <p className='item-main-content__text'>Установить расписание тренировок</p>
                    <p className='item-main-content__suptext'>Нажмите, чтобы добавить список!</p>
                    <div className='item-main-content__counter'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
                        <path
                          fill-rule='evenodd'
                          d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
                      </svg>
                      <span className='item-main-content__count'>+2</span>
                    </div>
                  </div>
                </div>
                <div className='item-main-content__task'>
                  <div className='item-main-content__left item-main-content__func'>
                    <div className='item-main-content__checkbox'></div>
                  </div>
                  <div className='item-main-content__middle'>
                    <p className='item-main-content__text'>Поработать над творческим проектом</p>
                    <p className='item-main-content__suptext'>
                      Нажмите, чтобы указать название вашего текущего проекта и задать расписание!
                    </p>
                    <div className='item-main-content__counter'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
                        <path
                          fill-rule='evenodd'
                          d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
                      </svg>
                      <span className='item-main-content__count'>+2</span>
                    </div>
                  </div>
                </div>
                <div className='item-main-content__task'>
                  <div className='item-main-content__left item-main-content__func'>
                    <div className='item-main-content__checkbox'></div>
                  </div>
                  <div className='item-main-content__middle'>
                    <p className='item-main-content__text'>Поработать над творческим проектом</p>
                    <p className='item-main-content__suptext'>
                      Нажмите, чтобы указать название вашего текущего проекта и задать расписание!
                    </p>
                    <div className='item-main-content__counter'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
                        <path
                          fill-rule='evenodd'
                          d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
                      </svg>
                      <span className='item-main-content__count'>+2</span>
                    </div>
                  </div>
                </div>
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
                    Задачи могут быть выполнены только один раз. Добавьте списки вашим задачам,
                    чтобы увеличить их награду.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                  <textarea placeholder='Добавить награду'></textarea>
                </div>
              </div>
              <div className='item-main-content__wrapper'>
                <div className='item-main-content__task'>
                  <div className='item-main-content__middle'>
                    <p className='item-main-content__text'>Награди себя</p>
                    <p className='item-main-content__suptext'>
                      Смотрите телевизор, играйте в игры, кушайте вкусняшки, вам решать!
                    </p>
                  </div>
                  <div className='item-main-content__coin'>
                    <div data-v-4d3c31d9='' className='svg-icon'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <g fill='none' fill-rule='evenodd'>
                          <circle cx='12' cy='12' r='12' fill='#FFA623'></circle>
                          <path
                            fill='#FFF'
                            d='M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0'
                            opacity='.5'></path>
                          <path
                            fill='#FFF'
                            d='M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0'
                            opacity='.25'></path>
                          <path
                            fill='#BF7D1A'
                            d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
                            opacity='.5'></path>
                          <path
                            fill='#BF7D1A'
                            d='M13 9v2h-2V9H9v6h2v-2h2v2h2V9z'
                            opacity='.75'></path>
                        </g>
                      </svg>
                    </div>
                    <span>10</span>
                  </div>
                </div>
                <div className='item-main-content__shop shop-main-content'>
                  <div className='shop-main-content__row'>
                    <div className='shop-main-content__column'>
                      <div className='shop-main-content__item'>
                        <div className='shop-main-content__icon'></div>
                        <div className='shop-main-content__price'>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <g fill='none' fill-rule='evenodd'>
                              <circle cx='12' cy='12' r='12' fill='#FFA623'></circle>
                              <path
                                fill='#FFF'
                                d='M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0'
                                opacity='.5'></path>
                              <path
                                fill='#FFF'
                                d='M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0'
                                opacity='.25'></path>
                              <path
                                fill='#BF7D1A'
                                d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
                                opacity='.5'></path>
                              <path
                                fill='#BF7D1A'
                                d='M13 9v2h-2V9H9v6h2v-2h2v2h2V9z'
                                opacity='.75'></path>
                            </g>
                          </svg>
                          25
                        </div>
                      </div>
                    </div>
                    <div className='shop-main-content__column'>
                      <div className='shop-main-content__item'>
                        <div className='shop-main-content__icon'></div>
                        <div className='shop-main-content__price'>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <g fill='none' fill-rule='evenodd'>
                              <circle cx='12' cy='12' r='12' fill='#FFA623'></circle>
                              <path
                                fill='#FFF'
                                d='M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0'
                                opacity='.5'></path>
                              <path
                                fill='#FFF'
                                d='M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0'
                                opacity='.25'></path>
                              <path
                                fill='#BF7D1A'
                                d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
                                opacity='.5'></path>
                              <path
                                fill='#BF7D1A'
                                d='M13 9v2h-2V9H9v6h2v-2h2v2h2V9z'
                                opacity='.75'></path>
                            </g>
                          </svg>
                          25
                        </div>
                      </div>
                    </div>
                    <div className='shop-main-content__column'>
                      <div className='shop-main-content__item'>
                        <div className='shop-main-content__icon'></div>
                        <div className='shop-main-content__price'>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <g fill='none' fill-rule='evenodd'>
                              <circle cx='12' cy='12' r='12' fill='#FFA623'></circle>
                              <path
                                fill='#FFF'
                                d='M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0'
                                opacity='.5'></path>
                              <path
                                fill='#FFF'
                                d='M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0'
                                opacity='.25'></path>
                              <path
                                fill='#BF7D1A'
                                d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
                                opacity='.5'></path>
                              <path
                                fill='#BF7D1A'
                                d='M13 9v2h-2V9H9v6h2v-2h2v2h2V9z'
                                opacity='.75'></path>
                            </g>
                          </svg>
                          25
                        </div>
                      </div>
                    </div>
                    <div className='shop-main-content__column'>
                      <div className='shop-main-content__item'>
                        <div className='shop-main-content__icon'></div>
                        <div className='shop-main-content__price'>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <g fill='none' fill-rule='evenodd'>
                              <circle cx='12' cy='12' r='12' fill='#FFA623'></circle>
                              <path
                                fill='#FFF'
                                d='M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0'
                                opacity='.5'></path>
                              <path
                                fill='#FFF'
                                d='M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0'
                                opacity='.25'></path>
                              <path
                                fill='#BF7D1A'
                                d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
                                opacity='.5'></path>
                              <path
                                fill='#BF7D1A'
                                d='M13 9v2h-2V9H9v6h2v-2h2v2h2V9z'
                                opacity='.75'></path>
                            </g>
                          </svg>
                          25
                        </div>
                      </div>
                    </div>
                    <div className='shop-main-content__column'>
                      <div className='shop-main-content__item'>
                        <div className='shop-main-content__icon'></div>
                        <div className='shop-main-content__price'>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <g fill='none' fill-rule='evenodd'>
                              <circle cx='12' cy='12' r='12' fill='#FFA623'></circle>
                              <path
                                fill='#FFF'
                                d='M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0'
                                opacity='.5'></path>
                              <path
                                fill='#FFF'
                                d='M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0'
                                opacity='.25'></path>
                              <path
                                fill='#BF7D1A'
                                d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
                                opacity='.5'></path>
                              <path
                                fill='#BF7D1A'
                                d='M13 9v2h-2V9H9v6h2v-2h2v2h2V9z'
                                opacity='.75'></path>
                            </g>
                          </svg>
                          25
                        </div>
                      </div>
                    </div>
                    <div className='shop-main-content__column'>
                      <div className='shop-main-content__item'>
                        <div className='shop-main-content__icon'></div>
                        <div className='shop-main-content__price'>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <g fill='none' fill-rule='evenodd'>
                              <circle cx='12' cy='12' r='12' fill='#FFA623'></circle>
                              <path
                                fill='#FFF'
                                d='M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0'
                                opacity='.5'></path>
                              <path
                                fill='#FFF'
                                d='M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0'
                                opacity='.25'></path>
                              <path
                                fill='#BF7D1A'
                                d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
                                opacity='.5'></path>
                              <path
                                fill='#BF7D1A'
                                d='M13 9v2h-2V9H9v6h2v-2h2v2h2V9z'
                                opacity='.75'></path>
                            </g>
                          </svg>
                          25
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
