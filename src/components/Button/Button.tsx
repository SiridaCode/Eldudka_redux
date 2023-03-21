import React from 'react';
import styles from './Button.module.scss';

interface IProps {
  onClick: () => void;
  text: string;
  style?: string;
}

const Button: React.FC<IProps> = ({ onClick, text, style = 'default' }) => {
  return (
    <button onClick={onClick} className={styles[style]}>
      {text}
    </button>
  );
};

export { Button };
