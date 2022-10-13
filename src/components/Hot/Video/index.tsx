import Board from '../board';
import hotVideo from '@/assets/hotVideo.png';

export default () => {
  return (
    <Board
      title={
        <>
          <img
            style={{
              width: '22px',
              height: '22px',
              marginRight: '8px',
            }}
            src={hotVideo}
          />
          热门视频
        </>
      }
    >
      2222222
    </Board>
  );
};
