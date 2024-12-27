import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMemo, useCallback } from "react";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  ariaLabel?: string;
  title?: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  ariaLabel,
  title,
}: Props) => {
  const lowerCasePage = useMemo(
    () => page.toLowerCase().replace(/ /g, "") as SelectedPage,
    [page],
  );

  const handleClick = useCallback(() => {
    setSelectedPage(lowerCasePage);
  }, [setSelectedPage, lowerCasePage]);

  const computedAriaLabel = ariaLabel || `Navigate to ${page}`;
  const computedTitle = title || `Go to ${page}`;

  return (
    <li>
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-300" : ""} transition duration-200 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        aria-label={computedAriaLabel}
        title={computedTitle}
        onClick={handleClick}
      >
        {page}
      </AnchorLink>
    </li>
  );
};
