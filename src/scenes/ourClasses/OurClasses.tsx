import { ClassType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { animationLeftToRight } from '@/shared/helpers';
import HText from '../components/HText';
import { TagPDescription } from '../components/TagPDescription';
import { descriptionP } from '@/shared/dateBaseDesc';
import { classes } from './dataBaseClasses';
import { Class } from './Class';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-gray-50 text-gray-100 py-40'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div 
                className='mx-auto w-5/6'
                {...animationLeftToRight} 
                transition={{duration:0.5}}>
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <TagPDescription className="py-5">
                            {descriptionP.ourClassesIntro}
                        </TagPDescription>
                    </div>
            </motion.div>
            <div className="mt-10 h-[340px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {
                        classes.map((item:ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))
                    }
                </ul>

            </div>
        </motion.div>
    </section>
  )
}

