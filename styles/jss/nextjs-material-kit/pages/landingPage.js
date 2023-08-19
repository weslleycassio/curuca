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
    lineHeight: '1',
    marginTop: '-15px',
    
    marginLeft: "7px",
    textAlign: 'left',
    fontSize: '2.340rem',
    color: "#000",
    fontWeight: "700",
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
    fontSize: '1.110rem',
    fontWeight: "50",
    textAlign: 'left',
    marginTop: '-2px',
    lineHeight: '1',

 
    
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
