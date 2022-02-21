

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
        // backgroundSize: "300% 100%",
        // objectSize: 'contain',
        // backgroundPosition: "bottom center"
        scale:1.2,
        y: 100,
      },
  
      visible: {
        // objectSize:'cover',
        scale:1,
        y:0,
        // backgroundSize: "cover",
        // backgroundPosition: "center center",
        transition: {
          duration: .4,
          ease: "easeOut",
        },
      },
    };
  };
export { navVariant , introVariant}; 