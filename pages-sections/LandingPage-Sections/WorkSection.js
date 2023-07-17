import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Fale com um consultor sobre o residencial Curuça
          </h2>
          <h4 className={classes.description}>
            Saiba como realizar o sonho de morar em um apartamento novo com toda a qualidade de vida que você deseja no centro de Mauá
          </h4>
          <form action="https://formsubmit.co/weslleycassio18@gmail.com" method="POST">
  <GridContainer>
      <GridContainer >
    <GridItem xs={12} sm={12} md={5}>
      <CustomInput
        labelText="Nome Completo"
        id="name"
        formControlProps={{
        fullWidth: true
                  }}
                />
    </GridItem>
    <GridItem 
    xs={12} sm={12} md={5}>
      <CustomInput
      labelText="E-mail"
      id="email"
      formControlProps={{
      fullWidth: true
      }}
      />
    </GridItem>
    <GridItem 
    xs={12} sm={12} md={5}>
      <CustomInput
      labelText="Telefone"
      id="tel"
      formControlProps={{
      fullWidth: true
      }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
      <Button type="submit" color="warning">
        Quero Saber Tudo!
      </Button>
    </GridItem>
        </GridContainer>
  </GridContainer>
</form>
        </GridItem>
      </GridContainer>
    </div>
    
  );
}