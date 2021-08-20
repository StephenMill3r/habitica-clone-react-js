import { HealthIcon } from '..';
import { IMemberInfo } from './MemberInfo';

interface IMemberHealth {
  healthPoint: number;
  memberInfo: IMemberInfo;
}

const MemberHealth: React.FC<IMemberHealth> = ({ healthPoint, memberInfo }) => {
  return (
    <div className='member__health member__data'>
      <div className='member__icon'>
        <HealthIcon />
      </div>
      <div className='progress-bar'>
        <span
          className='progress-bar-fill'
          style={{
            width: (healthPoint > 0 ? healthPoint / memberInfo.health : 0) * 100 + '%',
          }}></span>
      </div>
      <div className='member__count'>
        {healthPoint > 0 ? healthPoint : 0}/{memberInfo.health}
      </div>
    </div>
  );
};

export default MemberHealth;
