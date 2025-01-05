import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { animationLeftToRight, animationRightToLeft } from "@/shared/helpers";
import HText from "../components/HText";
import { TagPDescription } from "../components/TagPDescription";
import { descriptionP } from "@/shared/dateBaseDesc";
import { ContactUsForm } from "./ContactUsForm";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          {...animationLeftToRight}
          transition={{ duration: 0.5 }}
        >
          <HText>
            <span className="text-primary-300">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <TagPDescription className="my-5">
            {descriptionP.contactUsIntro}
          </TagPDescription>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            {...animationRightToLeft}
            transition={{ duration: 0.5 }}
          >
            <ContactUsForm />
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            {...animationRightToLeft}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
