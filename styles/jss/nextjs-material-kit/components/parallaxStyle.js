const parallaxStyle = (theme) => ({
  parallax: {
    height: "55vh",
    maxHeight: "55vh",
    overflow: "hidden",
    position: "center",
    backgroundPosition: "20% 60%",
    backgroundSize: "cover",
    marginLeft: "",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
  },
  parallaxResponsive: {
    [theme.breakpoints.down("md")]: {
      minHeight: "50vh",
    },
  },
});

export default parallaxStyle;
