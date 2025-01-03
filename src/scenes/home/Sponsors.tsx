import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import { motion } from 'framer-motion'

const slides = [
  { src: SponsorForbes, alt: "Forbes Sponsor" },
  { src: SponsorFortune, alt: "Fortune Sponsor" },
  { src: SponsorRedBull, alt: "Red Bull Sponsor" },
];

export const Sponsors = () => {
  const duplicatedSlides = [...slides, ...slides];
  return (
    <div className='relative h-[150px] w-full bg-gray-50 py-5 overflow-hidden mx-auto" ' aria-labelledby="sponsors-heading">
      <h2 id="sponsors-heading" className="sr-only">Our Sponsors</h2>
        <div className='h-[150px] mx-auto w-5/6 absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before: before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0  after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3'>
            <motion.div className='flex  items-center justify-between gap-8 h-[150px]' 
            animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}>
                {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="flex items-center justify-center h-full">
                <img src={slide.src} alt={slide.alt} className="h-full object-contain" />
              </div>
            </div>
          ))}
            </motion.div>
        </div>
    </div>
    
  )
}

{/*<div className='h-[150px] w-full bg-gray-50 py-10' aria-labelledby="sponsors-heading">
    <h2 id="sponsors-heading" className="sr-only">Our Sponsors</h2>
      <div className='mx-auto w-5/6'>
          <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={SponsorRedBull} alt="" />
              <img src={SponsorForbes} alt="" />
              <img src={SponsorFortune} alt="" />
          </div>
      </div>
  </div>*/}