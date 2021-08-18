import { useEffect, useState } from 'react';
import { MemberHealth, MemberLevel } from '..';
import { SwordIcon } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';
const MemberInfo: React.FC = () => {
  const { setResetUserLevel } = useActions();

  const { levelPoint } = useTypedSelector((state) => state.user);

  const [maxBarValue, setMaxBarValue] = useState<any>({
    level: 1,
    point: 25,
  });

  useEffect(() => {
    if (levelPoint > maxBarValue.point) {
      setMaxBarValue({
        ...maxBarValue,
        point: maxBarValue.point * 1.4,
        level: maxBarValue.level + 1,
      });
      setResetUserLevel();
    } else if (levelPoint < 0) {
      setResetUserLevel();
    }
  }, [levelPoint]);
  return (
    <div className='member__item'>
      <div className='member__info'>
        <div className='member__text member__data'>
          <div className='member__icon'>
            <SwordIcon />
          </div>
          <div className='member__wrapper'>
            <div className='member__supinfo'>Уровень {maxBarValue.level} Воин</div>
          </div>
        </div>
        <MemberHealth />
        <MemberLevel levelPoint={levelPoint} maxBarValue={maxBarValue} />
      </div>
    </div>
  );
};

export default MemberInfo;
