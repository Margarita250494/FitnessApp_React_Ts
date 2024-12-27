import { SelectedPage } from "@/shared/types";
import { Link } from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  className: string;
};
const NAV_LINKS = [
  { page: "Home", id: SelectedPage.Home },
  { page: "Benefits", id: SelectedPage.Benefits },
  { page: "Our Classes", id: SelectedPage.OurClasses },
  { page: "Contact Us", id: SelectedPage.ContsctUs },
];

export const LinkItems = ({
  selectedPage,
  setSelectedPage,
  className,
}: Props) => {
  return (
    <ul className={className}>
      {NAV_LINKS.map(({ page, id }) => (
        <Link
          key={id}
          page={page}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </ul>
  );
};
