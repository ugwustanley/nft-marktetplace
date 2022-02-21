

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
        backgroundSize: ["300%", "200%", "100%"],
        backgroundPosition: "bottom center"
      },
  
      visible: {
        backgroundSize: "cover",
        backgroundPosition: "center center",
        transition: {
          duration: .4,
          ease: "easeOut",
        },
      },
    };
  };
export { navVariant , introVariant}; 