import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import GridItemT from "/components/Grid/GridItemT.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Icon from "@material-ui/core/Icon";
import { useRef } from 'react';
import Head from 'next/head';      




import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import { Grid, Typography } from "@material-ui/core";
import PlantasCarousel from "../pages-sections/Components-Sections/PlantsCarrousel";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const scrollToSection = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });
};

const MyComponent = () => {
  const sectionRef = useRef(null);
   }

  const handleClick = () => {
    scrollToSection(sectionRef);
  };

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id='Inicio'>
      <Head>
        <title>Curuça - Jireh Imóveis</title>
        <meta name="description" content="Conheça o imóvel residencial Curuça, localizado na região de Mauá e financiado pelo programa Minha Casa, Minha Vida." />
        <meta property="og:title" content="Curuça - Jireh Imóveis" />
        <meta property="og:description" content="Conheça o imóvel residencial Curuça, localizado na região de Mauá e financiado pelo programa Minha Casa, Minha Vida." />
        <meta property="og:url" content="URL_DA_PAGINA" />
      </Head> 
      < Header
        color="transparent"
        routes={dashboardRoutes}
        // brand="Jireh"
        image="/img/jirehlogo.png"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "warning"
        }}
        {...rest}
      />
      
      <Parallax filter responsive  image="/img/curucanovo.jpeg" >
     
        <div  className={classes.container}>
          <GridContainer> 
          <GridItemT xs={12} sm={12} md={12} >
          <h1 className={classes.title}>O RESIDENCIAL QUE VOCÊ ESTAVA ESPERANDO</h1>
          </GridItemT>
          
          <GridItem xs={12} sm={12} md={0} >

              <h4 className={classes.responsiveSubtitle}>
              Seu apartamento na região mais  privilegiada de Mauá
            </h4>
          
            
            <GridItem xs={12} sm={12} md={0}>

              <Button 
              href="https://api.whatsapp.com/send?phone=5511942980440&text=Quero%20saber%20tudo%20sobre%20o%20Residencial%20Curu%C3%A7a"
              color="warning"
              size="sm"
  
       
>
                  WhatsApp
                <img
                src="img/faces/wpp.png" 
                alt="wpp"
                width={30}
                height={30}
                
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              
              </Button>

                </GridItem>
            </GridItem>
          </GridContainer>
          
        </div>
        <div className={classes.containerTwo}>
      
      </div>
      </Parallax >
     
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div id='Curuca' className={classes.container}>
          <ProductSection />
          <div id='Fotos'>
          <div><h3><br></br></h3></div>
          <SectionCarousel/>
          </div>
          <GridContainer justify="center" >

        <GridItem justify="center" style={{color:'#3C4858'}} xs={12} sm={12} md={8} >
          <div id='Localizacao'></div> 
          <div><h3><br></br></h3></div>
          <h2 className={classes.titleOne} style={{color:'#3C4858'}}>Localização</h2>
          
          <h5 className={classes.description}>
          Venha morar na Vila Guarani em Mauá! Os apartamentos do Residencial Curuçá são perfeitos para você e sua família, com suíte e sacada Grill. Não perca essa oportunidade!
          </h5>
          
        </GridItem>
          </GridContainer>
          <GridContainer justify="center"> 

          <Grid xs={10} sm={6} md={4}>
          

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.1364269155135!2d-46.45080681120912!3d-23.666198444681985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x654442a5c09aadc9%3A0xfda6367f6cf0b6ef!2sResidencial%20Curu%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1692117106894!5m2!1spt-BR!2sbr" 
                  width="300" 
                  height="300" 
                  style={{border:0}} 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
         
                  </Grid>
                  </GridContainer>
                  <GridContainer justify="center" >

<GridItem justify="center" style={{color:'#3C4858'}} xs={12} sm={12} md={8} >
  <div id='Plantas'></div> 
  <div><h3><br></br></h3></div>
  <h2 className={classes.titleOne} style={{color:'#3C4858'}}>Plantas</h2>
  <h5 className={classes.description}>
  O Residencial Curuça oferece uma variedade de apartamentos, com seis unidades por andar e dois elevadores. São disponibilizados cinco tipos de apartamentos, com tamanhos que variam de 53m² a 139m². As plantas foram projetadas para proporcionar conforto e praticidade aos moradores, atendendo às diferentes necessidades e preferências.
  </h5>
</GridItem>
  </GridContainer>
  <GridContainer justify="center"> 

  <Grid xs={12} sm={12} md={4}>
          </Grid>
          </GridContainer>
          <div>
          <PlantasCarousel>

          </PlantasCarousel>
          </div>
                  
          
          <WorkSection/>
        </div>
        
      </div>
      
      <div id='Contato'>
      <  Footer />

      </div>
    </div>
  );
}
