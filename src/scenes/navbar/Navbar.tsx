import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ActionButton } from "@/scenes/components/ActionButton";
import { LinkItems } from "./LinkItems";
import { flexBetween, hoverMenuButton } from "@/shared/helpers";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage:boolean;
};

export const Navbar = ({ isTopOfPage ,selectedPage, setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuToggled(prev => !prev);

  const navbarBG = isTopOfPage ? "" : "bg-gray-50 drop-shadow text-gray-100";

  return (
    <header className={`${navbarBG} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img src={Logo} alt="Company Name Logo - Evogym" />
          {isAboveMediumScreens ? (
            <nav className={`${flexBetween} w-full`}>
              <LinkItems
                className={`${flexBetween} gap-8 text-sm`}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <div className={`${flexBetween} gap-8`}>
                <a href="#sign-in">Sign In</a>
                <ActionButton ariaLabel="Become a Member" setSelectedPage={setSelectedPage}>
                  Become a Member
                </ActionButton>
              </div>
            </nav>) : (
            <button aria-label="open Mobile menu" className={hoverMenuButton}
              onClick={toggleMenu}>
              <Bars3BottomRightIcon className="h-6 w-6 text-gray-100 hover:text-gray-50 duration-300" />
            </button>
          )}
        </div>
      </div>
      
      {/*Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={toggleMenu} aria-label="Close Mobile menu" className={hoverMenuButton}>
              <XMarkIcon className="h-6 w-6 text-gray-100 hover:text-gray-20" />
            </button>
          </div>
          <nav>
            <LinkItems
              className="ml-[33%] flex flex-col gap-10 text-2xl text-gray-100"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
          </nav>
        </div>
      )}
    </header>
  );
};