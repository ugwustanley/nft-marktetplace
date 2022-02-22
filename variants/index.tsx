

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
        scale:1.3,
        y: 100,
      },
  
      visible: {
        scale:1,
        y:0,
        transition: {
          duration: .4,
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
export { navVariant , introVariant, swipeVariant}; 