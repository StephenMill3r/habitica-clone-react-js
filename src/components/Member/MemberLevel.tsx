import { StarIcon } from '..';
import { IMemberInfo } from './MemberInfo';

interface IMemberLevel {
  levelPoint: number;
  memberInfo: IMemberInfo;
}

const MemberLevel: React.FC<IMemberLevel> = ({ levelPoint, memberInfo }) => {
  return (
    <div className='member__star member__data'>
      <div className='member__icon'>
        <StarIcon />
      </div>
      <div className='progress-bar'>
        <span
          className='progress-bar-fill progress-bar-yellow'
          style={{
            width: (levelPoint > 0 ? levelPoint / memberInfo.point : 0) * 100 + '%',
          }}></span>
      </div>
      <div className='member__count'>
        {levelPoint > 0 ? levelPoint : 0}/{memberInfo.point}
      </div>
    </div>
  );
};

export default MemberLevel;
