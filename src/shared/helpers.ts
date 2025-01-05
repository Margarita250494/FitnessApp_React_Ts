//Navbar
export const navbarStyles = {
  flexBetween: "flex items-center justify-between",
  hoverMenuButton: "rounded-full bg-secondary-500 p-2 hover:bg-primary-500 duration-300",
};

//Home.tsx
export const animationLeftToRight = {
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

//Benefits

export const containerAnimation = {
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2 }
  }
}

export const animationBenefit = {
  initial:"hidden",
  whileInView: "visible",
  viewport:{once:true, amount:0.5},
  variants:{containerAnimation}
}

export const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const animationRightToLeft = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  variants: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

//Our classes
export const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

//ContactUs
export const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
px-5 py-3 placeholder-white`;

//footer
export const footerStyles = {
  linkClass:"hover:text-secondary-500 duration-200",
  headerClass:"font-bold text-primary-300"
}
