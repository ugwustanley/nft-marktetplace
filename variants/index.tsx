

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
export { navVariant , introVariant}; 