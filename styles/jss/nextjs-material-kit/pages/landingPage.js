import { container, title } from "/styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "1",
    color: "#FFFFFF",
    ...container
  },
  title: {
    
    
    display: "inline-block",
    position: "relative",
    lineHeight: '1',
    marginRight: "5.2vw",
    textAlign: 'left',
    marginTop: "2.5vw",
    fontSize: '6vw',
    color: "#000",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    textDecoration: "none",
    background: 'rgba(255, 140, 0, 0.5)',
    transition: "all 150ms ease 0s",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },

  titleOne: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
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
