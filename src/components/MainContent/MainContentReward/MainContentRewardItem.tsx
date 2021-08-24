import { CoinIcon, HealthIcon, notifySuccess } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

import { toast } from 'react-toastify';

interface IMainContentRewardItem {
  price: number;
  name: string;
}

const MainContentRewardItem: React.FC<IMainContentRewardItem> = ({ price, name }) => {
  const { money } = useTypedSelector((state) => state.user);
  const { setMinusUserMoney, setUserHealth } = useActions();

  const notifySmallValueMoney = () => toast.error(<div>У вас не хватает монет</div>);

  const onClickItem = (price: number) => () => {
    if (money >= price) {
      setMinusUserMoney(price);
      if (name === 'Health flask') {
        setUserHealth(25);
        notifySuccess('жизни', 25, <HealthIcon />);
      }
    } else {
      notifySmallValueMoney();
    }
  };
  return (
    <div className='shop-main-content__column'>
      <div onClick={onClickItem(price)} className='shop-main-content__item'>
        <div className='shop-main-content__icon'></div>
        <div className='shop-main-content__price'>
          <CoinIcon />
          {price}
        </div>
      </div>
    </div>
  );
};

export default MainContentRewardItem;
