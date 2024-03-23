import { fadeSmallUpVariant } from '@/utils/animations';
import { motion } from 'framer-motion';

const Description = (props: any) => {
  return (
    <div className={`${props.className} p-2`}>
      <motion.div initial="hide" whileInView="show" viewport={{ once: true }} variants={fadeSmallUpVariant()} className="flex justify-center items-center h-full px-20 py-8 card-gradient">
        {props.children}
      </motion.div>
    </div>
  );
};

export default Description;
