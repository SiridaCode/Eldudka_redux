import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './useDimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import classes from './BurgerMobileMenu.module.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const BurgerMobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      style={isOpen && { background: '#fff', width: '100%', zIndex: '10' }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={classes['background']} variants={sidebar} />
      {isOpen && <Navigation isOpen={isOpen} />}
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </motion.nav>
  );
};

export default BurgerMobileMenu;
