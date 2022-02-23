

const navVariant = () => {
    return {
      hidden: {
        scale: 0.8,
      },
  
      visible: {
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    };
  };

  const introVariant = () => {
    return {
      hidden: {
        scale:1.5,
        y: 200,
      },
  
      visible: {
        scale:1,
        y:0,
        transition: {
          duration: .5,
          delay:5,
          ease: "easeOut",
        },
      },
    };
  };

  const swipeVariant = () => {
    return {
      hidden: {
         pathLength: 0, strokeWidth:1.5
      },
  
      visible: {
        pathLength: 1.1,  strokeWidth:1.5, 
        transition: {
          duration: 5, ease: "easeInOut"
        },
      },
    };
  };

  const textVariant = (delay:any) => {
    return {
      hidden: {
         y:20,
         skewY:4,
         opacity:0,
         
      },
      exit: {
        y: '-20',
        skewY:4,
        opacity:0,
        transition: {
          duration: 4,
          ease: "easeOut",
        },
      },
      visible: {
        y:0,
        skewY:0,
        opacity:1,
        transition: {
          delay:delay + 1,
          duration: .3, ease: "easeInOut"
        },
      },
    };
  };
  const divVariant = (delay:any) => {
    return {
      hidden: {
         opacity:0,
         y:10,
      },
  
      visible: {
        opacity:1,
        y:0,
        transition: {
           duration: .4,
           delay:delay + 1,
           ease: "easeInOut"
        },
      },
    };
  };

  const moveVariant = (delay:any) => {
    return {
      hidden: {
         y:300,
         opacity:0.5
      },
  
      visible: {
        opacity:1,
        y:0,
        transition: {
          delay:delay + 5,
          duration: .6, 
          ease: "easeOut"
        },
      },
    };
  };

  
 const loaderVariant = () => {
  return {
    hidden: {
      opacity: 1
    },
    exit: {
      y: '-100vh',
      opacity: 1,
      transition: {
        duration: .8,
        ease: "easeInOut",
      },
    },
    visible: {
      y: '0vh',
      opacity: 1,
      transition: {
        duration: 0,
        ease: "easeInOut",
      },
    },
  };
};

export { navVariant , introVariant, moveVariant,  swipeVariant, divVariant , loaderVariant, textVariant}; 