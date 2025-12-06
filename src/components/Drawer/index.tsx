import React, { useEffect } from 'react';
import styles from './index.module.scss';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: React.ReactNode | string;
  children: React.ReactNode;
  title?: string | React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ 
  isOpen, 
  onClose, 
  triggerElement, 
  children,
  title 
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      {triggerElement && (
        <div style={{ display: 'inline-block' }}>
          {triggerElement}
        </div>
      )}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`} 
        onClick={onClose}
      >
        <div 
          className={styles.panel} 
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            {title && <div style={{ margin: 0, marginRight: 'auto' }}>{title}</div>}
            <button 
              className={styles.closeButton} 
              onClick={onClose}
              aria-label="Close drawer"
            >
              &#10005;
            </button>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;