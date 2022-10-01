import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
interface IProps {
  home: boolean;
}
const RightBar: React.FC<IProps> = props => {
  const { home = false } = props;
  return (
    <div className={styles.rightBar}>
      <ul className={styles.toolContainer}>
        {home ? (
          <li role="button" aria-label="刷新" className={styles.toolItem}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCBAMAAAAReh3bAAAAG1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABp4cHsAAAACHRSTlMAv5FA3hAwr6yRFRcAAAC/SURBVEjHY2AYvoBZPQG/AlaNjqYAvCpMOjo6nPEpCOoAAVU8jvAAq2gxwOMICMDpFJAjOpQ6cDslCCJngtMpYEcAzQfbhc0pCAmYUqyOUEW2DrsjMFRjOALdRiyOwKYBq7HoTsHiNFQ92LyHam8GtiACa2uGciqwBjPI6iYoWwJ7VAGd0ghX0YItulk9kFQ0Yo1siVEVoypGVQyYig5BbAA5Z+MCxKvQwKmiHarCAqeKNqgKtkJB7EDIYJjV8wBS39MLX8xCZQAAAABJRU5ErkJggg=="
              alt=""
            />
            首页
          </li>
        ) : (
          <li role="button" aria-label="刷新" className={styles.toolItem}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCBAMAAAAReh3bAAAALVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACttl6nAAAADnRSTlMAYBDfIEBv74agw68wUON3dVcAAAIbSURBVEjH1ZbNK4RBGMDfXbsbQr5Oil4JiYQ4qW2llIs2Sj5KEjccnNbBm4uPHCSR28ZBOTmQq+TgKC7cZC3WWp6/wcw778w8Mzu7e/acZmZ/87zP96xl/VPpqNquH83ze8slUOmvzfG7vw64nJiBLZDSbSLGAPIj7aDKgQ6Uhenx6mLE8o+79iYjGvFMT6+8zSTdrKmAj57ti+0w3VYqxAs5OUV+7ZL9CgYCDsAXitw51fGDiUFyMCvwHeZNDybiAAm+Dp4zIFWp2SlUjDBgtRqrKMJWLLsKNmzFkwaALsWtWFQLF4mnjGApJDfYqnEemZFG/JOnIBBO3Yhb8G5INrl4LK3fMxDFAG/S0KiBCAJ8estrSBqrzoGMcCVjJOL8pl9qU4XEzubf+zAS9wDM3XJpsyojvIqI369GooITxXmIdXcRKkgU/orPnBbL6gR4YM2kFa2QGZ6NwhEjUU8bCZmvOKSMhMzXcs7sJ6TN6waiRPpYqnexSAuvwjKHD4vgktqI4uKQ118TYXGLlDpklV6Qjrpf3IgJdRROOrQdZex2cSPS/jpiDS0yFNKmkM9hwHcU9bIS6SYGnEWwil6taImCOQtbkVLmZSsBvtDImFLcEtNSjuG27GnJJu6ht5k2TFwyLNyXZcG2Aneu48kbPU/D2uS/yE5ljQL0mUoKIzHbWHXoFbNzvHQD3ks4l+e1bH7crLr9r38F/gBmMqBtGNS1cgAAAABJRU5ErkJggg=="
              alt=""
            />
            刷新
          </li>
        )}
        <li role="button" aria-label="反馈" className={styles.toolItem}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCBAMAAAAReh3bAAAAJ1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+jSoGAAAADHRSTlMAv0CAGVue2zCvcO9t51/ZAAABMklEQVRIx2NgGAWYgGlZmiA6mJalgKSg5gw2cDwArsLmDHZwGKaA+QwuYABV4YNTxSGoijlAKwUxAdBxByEKWIAKFLB4kAWoxAHikzNnjmINA50zZxrADNYzZ45gVQF0XwBMxQGsKnhgKpjxqFhAUIXB4FShNgMqBWVgqOA4cwYS+DAGhgrOM2cSGJAZGCoYz5wRYEBmDGEVbGfOTGBAZmCoYIIlOhgDM9Q7k6ChDmUM3vRBIxWE8wuBPNdDUEUOLBpgKliclFBAILBcYUBWwSqDWUqdQlbBgq3ELEBWEY2tQHVAUoG1xBRBFKcHWHIw5U+LIhW4B9yBIseCULzS4gD3NrAcOwRy5gKcFQMrxNBNuKsODhR3YwXgkJiCr/6JQa4osDukBnvBjgRc00JGRm0NACcMkNIj/Qm4AAAAAElFTkSuQmCC"
            alt=""
          />
          反馈
        </li>
        <li role="button" aria-label="回到顶部" className={classnames(styles.toolItem, styles.top)}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYBAMAAABglkJ9AAAAG1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABp4cHsAAAACHRSTlMAf2W/sEjnIC7DJE4AAABhSURBVBjTY2CgAQgxQhdh7OgQQBOS6OhoxFCErkwCJNSIoQhVmQREqBFDEbIyCZhQI4YihDIJhFAjhqKODgWwUAWyUCtYyAJZqAUs5IEs1AwW0kAWagILMZkhRJIVKAhyAIGxTPN/5SDhAAAAAElFTkSuQmCC"
            alt=""
          />
          顶部
        </li>
      </ul>
    </div>
  );
};

export default RightBar;
