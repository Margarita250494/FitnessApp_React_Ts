import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type LearnMoreLinkProps = {
  setSelectedPage: (value: SelectedPage) => void;
  page: SelectedPage;   
};

export const LearnMoreLink = ({ setSelectedPage, page}: LearnMoreLinkProps) => {
  return (
    <AnchorLink
      aria-label="Learn more"
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      onClick={() => setSelectedPage(page)}
      href={`#${page}`}
    >
      <p>Learn more</p> {/* Der Linktext wird direkt verwendet */}
    </AnchorLink>
  );
};