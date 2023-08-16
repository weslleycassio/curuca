import { container, title } from "/styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    textAlign: 'left',
    margin: '-0px', 
    fontSize: '3vw',
    // minHeight: "32px",
    color: "#000",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  
  
  responsiveSubtitle: {
    fontSize: '2vw', 
    textAlign: 'left',// Tamanho do subtítulo responsivo em vw
    margin: '0px', // Remover margem para o subtítulo responsivo
    
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
