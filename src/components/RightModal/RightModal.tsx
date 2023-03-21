import React, { ReactElement } from 'react';
import styles from './RightModal.module.scss';

interface IProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const RightModal: React.FC<IProps> = ({ title, onClose, children }): ReactElement => {
  return (
    <>
      <div className={styles['blackout']}></div>
      <div className={styles['modal']}>
        <div className={styles['header']}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['close']} onClick={onClose}></div>
        </div>
        <div className={styles['content']}>{children}</div>
      </div>
    </>
  );
};

export { RightModal };
