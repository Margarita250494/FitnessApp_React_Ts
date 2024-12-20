//type Props = {}
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link } from "./Link";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

export const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <header className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/*Left Side */}
          <img src={Logo} alt="Company Name Logo - Evogym" />
          {/*Right Side */}
          <nav className={`${flexBetween} w-full`}>
            {/* Navigation Links */}
            <ul className={`${flexBetween} gap-8 text-sm`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                ariaLabel="Home"
                title="Home"
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                ariaLabel="Benefits"
                title="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                ariaLabel="Our Classes"
                title="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                ariaLabel="Contact Us"
                title="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </ul>
            {/* Action Buttons */}
            <div className={`${flexBetween} gap-8`}>
              <a href="#sign-in">Sign In</a>
              <button aria-label="Sign up for membership">
                Become a Member
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
