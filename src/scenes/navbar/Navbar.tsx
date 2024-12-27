
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
//import { Link } from "./Link";
import { SelectedPage } from "@/shared/types";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ActionButton } from "@/components/ActionButton";
import { LinkItems } from "./LinkItems";


type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuToggled(prev => !prev);
  const hoverMenuButton = "rounded-full bg-secondary-500 p-2 hover:bg-primary-500 duration-300"

  return (
    <header className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
                <ActionButton setSelectedPage={setSelectedPage}>
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



{/*<ul className={`${flexBetween} gap-8 text-sm`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </ul>*/}


{/*<ul className="ml-[33%] flex flex-col gap-10 text-2xl text-gray-100">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </ul>*/}