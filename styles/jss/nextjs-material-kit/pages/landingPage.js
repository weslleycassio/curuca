import { container, title } from "/styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "1",
    color: "#FFFFFF",
    ...container
  },

  containerTwo: {
    width: "100%"
   
  },

  title: {
    
    
    display: "inline-block",
    position: "relative",
    lineHeight: '1',
    // marginRight: "7.2vw",

    fontSize: '5vh',
    color: "#000",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    textDecoration: "none",
   
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },

  customParallax: {
    // height: '300px' /* Ajuste a altura conforme necessário */
  },

  titleOne: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },

  fullWidthGridContainer: {
    width: '100%'
  },
  
  
  
  responsiveSubtitle: {
    fontSize: '3vw', 
    textAlign: 'left',
    lineHeight: '1.2',
    marginRight: "6.8vw",
    margin: '3px', 
    
  },

  

  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
