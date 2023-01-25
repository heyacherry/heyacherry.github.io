import {
  AnimatePresence,
  AnimatePresenceProps,
  motion,
  MotionProps,
} from 'framer-motion';

interface IMotionPresence {
  visible: boolean;
  animatePresenceProps?: AnimatePresenceProps;
  motionProps?: MotionProps;
  children?: React.ReactNode;
}

export const MotionPresence: React.FC<IMotionPresence> = ({
  visible,
  animatePresenceProps,
  motionProps,
  children,
}) => {
  return (
    <AnimatePresence mode="popLayout" {...animatePresenceProps}>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          {...motionProps}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
