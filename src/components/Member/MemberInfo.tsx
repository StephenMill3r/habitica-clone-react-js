import { useEffect, useState } from 'react';
import { MemberHealth, MemberLevel } from '..';
import { SwordIcon } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

export interface IMemberInfo {
  level: number;
  point: number;
  health: number;
}

const MemberInfo: React.FC = () => {
  const { setResetUserLevel, setResetUserHealth } = useActions();

  const { levelPoint, healthPoint } = useTypedSelector((state) => state.user);

  const [memberInfo, setMemberInfo] = useState<IMemberInfo>({
    level: 1,
    point: 25,
    health: 50,
  });

  useEffect(() => {
    if (levelPoint > memberInfo.point) {
      setMemberInfo({
        ...memberInfo,
        point: Math.floor(memberInfo.point * 1.4),
        level: memberInfo.level + 1,
      });
      setResetUserLevel();
    } else if (levelPoint < 0) {
      setResetUserLevel();
    }
  }, [levelPoint]);

  //Переделать
  useEffect(() => {
    if (0 >= healthPoint) {
      setResetUserHealth();
    }
    if (healthPoint > memberInfo.health) {
      setResetUserHealth();
    }
  }, [healthPoint]);

  return (
    <div className='member__item'>
      <div className='member__info'>
        <div className='member__text member__data'>
          <div className='member__icon'>
            <SwordIcon />
          </div>
          <div className='member__wrapper'>
            <div className='member__supinfo'>Уровень {memberInfo.level} Воин</div>
          </div>
        </div>
        <MemberHealth healthPoint={healthPoint} memberInfo={memberInfo} />
        <MemberLevel levelPoint={levelPoint} memberInfo={memberInfo} />
      </div>
    </div>
  );
};

export default MemberInfo;
