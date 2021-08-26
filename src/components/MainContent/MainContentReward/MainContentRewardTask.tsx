import { CoinIcon } from '../..';

import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';
import { toast } from 'react-toastify';
import classNames from 'classnames';

interface IMainContentRewardTask {
  titleText: string;
  supText?: string;
  cost: number;
  isShow: boolean;
}

const MainContentRewardTask: React.FC<IMainContentRewardTask> = ({
  titleText,
  supText,
  cost,
  isShow,
}) => {
  const { money } = useTypedSelector((state) => state.user);
  const { setMinusUserMoney } = useActions();

  const notifyLevel = () => toast.error(<div>У вас не хватает монет</div>);

  const onClickSpendMoney = () => {
    if (money >= cost) {
      setMinusUserMoney(cost);
    } else {
      notifyLevel();
    }
  };
  return (
    <div
      className={classNames('item-main-content__task', {
        'item-main-content__show-task': isShow,
      })}>
      <div className='item-main-content__middle'>
        <div className='item-main-content__text-wrapper'>
          <p className='item-main-content__text'>{titleText}</p>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 16'>
            <path
              fill-rule='evenodd'
              d='M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'></path>
          </svg>
        </div>
        <p className='item-main-content__suptext'>{supText}</p>
      </div>
      <div onClick={onClickSpendMoney} className='item-main-content__coin'>
        <div className='svg-icon'>
          <CoinIcon />
        </div>
        <span>{cost}</span>
      </div>
    </div>
  );
};

export default MainContentRewardTask;
