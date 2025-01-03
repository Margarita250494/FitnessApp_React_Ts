import { ActionButton } from "@/components/ActionButton";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { Sponsors } from "./Sponsors";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const animationSettings = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    variants: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0" aria-labelledby="home-title">
        <h1 id="home-title" className="sr-only">Welcome to Evolve Gym</h1>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            {...animationSettings}
            transition={{ duration: 0.5 }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="" />
              </div>
            </div>

            <p className="mt-8 text-sm md:text-start">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            {...animationSettings}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton
              setSelectedPage={setSelectedPage}
              ariaLabel="Join Now"
            >
              Join Now
            </ActionButton>
            <AnchorLink
              aria-label="Learn more"
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContsctUs)}
              href={`#${SelectedPage.ContsctUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="" />
        </div>
      </motion.div>
      {isAboveMediumScreens && <Sponsors />}
    </section>
  );
};
