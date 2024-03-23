import { motion } from 'framer-motion';
import Button from "@/components/Button";
import Input from "@/components/Input";
import SectionTitle from "@/components/SectionTitle";
import { fadeSmallUpVariant } from '@/utils/animations';

export default function Contact() {
  return (
    <section id="Get-in-touch" className="flex justify-center w-full my-8 p-8 md:p-0">
      <div className="container flex flex-col w-full py-8">
        <SectionTitle>BOOK A CALL</SectionTitle>

        <div className="flex flex-wrap w-full px-8 py-12">
          <div className="w-full md:w-1/3">
            <motion.h1 initial="hide" whileInView="show" viewport={{ once: true }} variants={fadeSmallUpVariant()} className="text-3xl">Let us know if you want a FREE Demo Call!</motion.h1>
            <motion.p initial="hide" whileInView="show" viewport={{ once: true }} variants={fadeSmallUpVariant(0.5,0.2)} className="text-sm my-8">
              Fill the form and LET&apos;S GET STARTED, if you prefer to email us instead... support@maestromedia.agency
            </motion.p>
          </div>

          <div className="w-full md:w-2/3 md:px-16">
            <Input label="What's your name?" className="mb-12" />
            <Input label="What's your email?" className="mb-12" />
            <Input label="Describe your business, and the service you need" />

            <Button>Submit Here</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
