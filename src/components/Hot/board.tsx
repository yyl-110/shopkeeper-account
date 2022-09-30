import { Button } from 'antd';
import styles from './index.less';
import refresh from '@/assets/refresh.png';

export default ({ title, children, loading, onRefresh }) => {
  return (
    <div className={styles['hotboard']}>
      <div className="title-bar">
        <h2 className="title">{title}</h2>
        <Button
          type="link"
          shape="round"
          loading={!!loading}
          onClick={() => {
            if (onRefresh) onRefresh();
          }}
          icon={<img className={styles['refresh']} src={refresh} />}
        >
          换一换
        </Button>
      </div>
      {children}
    </div>
  );
};
