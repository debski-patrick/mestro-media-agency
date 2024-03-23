import Image from "next/image";
import { motion } from 'framer-motion';
import Button from "@/components/Button";
import { fadeSmallUpVariant } from "@/utils/animations";

export default function Header() {
  return (
    <section id="Home" className="flex flex-col items-center p-8 md:p-0">
      <div className="w-full p-9"></div>
      <div className="container flex justify-between items-center w-full my-24">
        <div className="w-full">
          <motion.h1 className="text-4xl leading-normal pr-48" initial="hide" whileInView="show" viewport={{ once: true }} variants={fadeSmallUpVariant()}>
            <b>Orchestrating</b> your <b>business</b> to its <b className="italic">social media success</b>.
          </motion.h1>
          <motion.p className="my-8" initial="hide" whileInView="show" viewport={{ once: true }} variants={fadeSmallUpVariant(0.5, 0.2)}>The services you need for your business <b>SUCCESS.</b></motion.p>
          <Button>Book Your Demo Call Now</Button>
        </div>

        <div className="hidden md:flex justify-center items-center w-full">
          <Image alt="phone" src={'/assets/phone.png'} width={250} height={444.5} priority />
        </div>
      </div>
    </section>
  );
};
