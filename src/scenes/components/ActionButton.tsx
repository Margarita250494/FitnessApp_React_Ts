import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage) => void;
    ariaLabel:string;
}

export const ActionButton = ({children, setSelectedPage, ariaLabel}: Props) => {
  return (
    <AnchorLink
        aria-label={ariaLabel}
        className="rounded-md bg-secondary-500 text-gray-100 px-10 py-2 hover:bg-primary-500 hover:text-gray-20 transition duration-300"
        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}>
        {children}
    </AnchorLink>
  )
}
