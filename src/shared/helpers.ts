
//Home.tsx
export const animationSettings = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    variants: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
};

//Sponsors.tsx
export const carousselTW = "h-[150px] mx-auto w-5/6 absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before: before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0  after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"