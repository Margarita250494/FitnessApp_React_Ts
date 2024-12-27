import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage) => void;
}

export const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-secondary-500 text-gray-100 px-10 py-2 hover:bg-primary-500 hover:text-gray-20 transition duration-300"
        onClick={()=>setSelectedPage(SelectedPage.ContsctUs)}
        href={`#${SelectedPage.ContsctUs}`}>
        {children}
    </AnchorLink>
  )
}
