import { IMemberInfo } from './MemberInfo';

interface IMemberLevel {
  levelPoint: number;
  memberInfo: IMemberInfo;
}

const MemberLevel: React.FC<IMemberLevel> = ({ levelPoint, memberInfo }) => {
  return (
    <div className='member__star member__data'>
      <div className='member__icon'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <g fill='none' fill-rule='evenodd'>
            <path fill='#FFA623' d='M16 16l8-4-8-4-4-8-4 8-8 4 8 4 4 8z'></path>
            <path
              fill='#FFF'
              d='M4.5 12l5-2.5L12 12zm7.5 7.5l-2.5-5L12 12zm7.5-7.5l-5 2.5L12 12zM12 4.5l2.5 5L12 12z'
              opacity='.25'></path>
            <path fill='#BF7D1A' d='M19.5 12l-5-2.5L12 12z' opacity='.25'></path>
            <path fill='#BF7D1A' d='M12 19.5l2.5-5L12 12z' opacity='.5'></path>
            <path fill='#FFF' d='M4.5 12l5 2.5L12 12zM12 4.5l-2.5 5L12 12z' opacity='.5'></path>
            <path
              fill='#FFF'
              d='M10.8 13.2L8.5 12l2.3-1.2L12 8.5l1.2 2.3 2.3 1.2-2.3 1.2-1.2 2.3z'
              opacity='.5'></path>
          </g>
        </svg>
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
