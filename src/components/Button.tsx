import { fadeSmallUpVariant } from '@/utils/animations';
import { motion } from 'framer-motion';

const Button = (props: any) => {
  return (
    <motion.button className="button" initial="hide" whileInView="show" viewport={{ once: true }} variants={fadeSmallUpVariant(0.5,0.5)}>
      {props.children}
    </motion.button>
  );
};

export default Button;
