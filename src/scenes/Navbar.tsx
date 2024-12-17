//type Props = {}
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

export const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*Left Side */}
            <img src={Logo} alt="Company Name Logo - Evogym" />
            {/*Right Side */}
            <div className={`${flexBetween} w-full`}>
              {/* Navigation Links */}
              <ul className={`${flexBetween} gap-8 text-sm`}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#benefits">Benefits</a>
                </li>
                <li>
                  <a href="#our-classes">Our Classes</a>
                </li>
                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>
              </ul>
              {/* Action Buttons */}
              <div className={`${flexBetween} gap-8`}>
                <a href="#sign-in">Sign In</a>
                <button aria-label="Sign up for membership">
                  Become a Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
