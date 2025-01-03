import { childVariant } from '@/shared/helpers'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { LearnMoreLink } from '../components/LearnMoreLink'

type Props = {
    icon:JSX.Element,
    title: string,
    description:string,
    setSelectedPage: (value:SelectedPage) => void
}

export const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
        variants={childVariant}
        className='mt-5 rounded-md border-2 border-gray-50 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-50 p-4'>
                {icon}
            </div>
        </div>
        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <LearnMoreLink
            setSelectedPage={setSelectedPage}
            page={SelectedPage.Benefits}/>
    </motion.div>
  )
}

