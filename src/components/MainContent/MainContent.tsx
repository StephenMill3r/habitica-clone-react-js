import { MainContentHabit, MainContentDaily, MainContentGoal, MainContentReward } from '..';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainContent: React.FC = () => {
  return (
    <section className='main-content'>
      <div className='container'>
        <div className='main-content__top'>
          <div className='main-content__search'>
            <input type='text' placeholder='Поиск' className='main-content__search-bar'></input>
          </div>
        </div>
        <div className='main-content__row'>
          <MainContentHabit />
          <MainContentDaily />
          <MainContentGoal />
          <MainContentReward />
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
