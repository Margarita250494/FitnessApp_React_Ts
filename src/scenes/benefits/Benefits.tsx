import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "../components/HText";
import { Benefit } from "./Benefit";
import { animationBenefit, animationLeftToRight,animationRightToLeft} from "@/shared/helpers";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import { ActionButton } from "../components/ActionButton";
import { TagPDescription } from "../components/TagPDescription";
import { descriptionP } from "@/shared/dateBaseDesc";
import { benefitsData } from "./benefitsData";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div {...animationLeftToRight} transition={{duration:0.5}} className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <TagPDescription className="my-5 text-sm">
            {descriptionP.benefitIntro}
          </TagPDescription>
        </motion.div>

        <h3 id="benefits" className="sr-only"> Our Benefit </h3>

        <motion.div {...animationBenefit} className="mt-5 items-center justify-between gap-8 md:flex">
          {benefitsData.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          <div>
            {/*Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div {...animationRightToLeft} transition={{duration:0.5}}>
                <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-300">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/*Description */}
            <motion.div {...animationRightToLeft } transition={{ delay: 0.2, duration: 0.5 }}>
              <TagPDescription className="my-5">
                  {descriptionP.detailsOfBenefit1}
              </TagPDescription>
              <TagPDescription className="mb-5">
                  {descriptionP.detailsOfBenefit2}
              </TagPDescription>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton 
                  setSelectedPage={setSelectedPage}
                  ariaLabel="Join Now">
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

