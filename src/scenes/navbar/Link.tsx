import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMemo, useCallback } from "react";

type Props = {
  page: string;
  selectedPage: string;
  ariaLabel:string;
  title:string;
  setSelectedPage: (value: string) => void;
};

export const Link = ({ page, selectedPage, setSelectedPage, ariaLabel, title }: Props) => {
  //const lowerCasePage = page.toLowerCase().replace(/ /g,"");
  const lowerCasePage = useMemo(
    () => page.toLowerCase().replace(/ /g, ""),
    [page],
  );

  const handleClick = useCallback(() => {
    setSelectedPage(lowerCasePage);
  }, [setSelectedPage, lowerCasePage]);

  return (
    <li>
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-100" : ""}
        transition duration-200 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        aria-label={ariaLabel}
        title={title}
        onClick={handleClick}
      >
        {page}
      </AnchorLink>
    </li>
  );
};
