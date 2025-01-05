import Logo from "@/assets/Logo.png";
import { descriptionP } from "@/shared/dateBaseDesc";
import { TagPDescription } from "../components/TagPDescription";


export const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-6 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <TagPDescription className="my-5">{descriptionP.footerIntro}</TagPDescription>
          <small className="font-bold">© Evogym All Rights Reserved.</small>
        </div>
        <div className="mt-6 basis-1/4 md:mt-0">
          <h4 className="font-bold text-primary-300">Links</h4>
          <ul className="mt-5 space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-secondary-500 duration-200" >Massa orci senectus</a></li>
            <li><a href="#" className="hover:text-secondary-500 duration-200">Et gravida id et etiam</a></li>
            <li><a href="#" className="hover:text-secondary-500 duration-200">Ullamcorper vivamus</a></li>
          </ul>
          
        </div>
        <div className="mt-6 basis-1/4 md:mt-0">
          <h4 className="font-bold text-primary-300">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <a href="tel:+3334256825" className="hover:text-secondary-500 duration-200">(333) 425-6825</a>
        </div>
      </div>
    </footer>

  )
}

