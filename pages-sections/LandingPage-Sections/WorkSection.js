import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
import CustomInputEmail from "../../components/CustomInput/CustomInputEmail";
import CustomInputTelefone from "../../components/CustomInput/CustomInputTelefone";
import CustomInputNome from "../../components/CustomInput/CustomInputNome";

// ... outras importações

import Script from "next/script";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const [conteudo, setConteudo] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const onChangeInputs = (e) =>
    setConteudo({ ...conteudo, [e.target.name]: e.target.value });

  const submitContact = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nome', conteudo.nome);
    formData.append('email', conteudo.email);
    formData.append('telefone', conteudo.telefone);

    try {
      const response = await fetch(
        'https://api.sheetmonkey.io/form/aM9okd1BnYyLW26TNWo5Xg',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        alert('Formulário enviado com sucesso');
      } else {
        alert('Erro ao enviar o formulário');
      }
    } catch (error) {
      alert('Erro ao enviar o formulário');
    }
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Fale com um consultor sobre o residencial Curuça
          </h2>
          <h4 className={classes.description}>
            Saiba como realizar o sonho de morar em um apartamento novo com toda
            a qualidade de vida que você deseja no centro de Mauá
          </h4>

          <form onSubmit={submitContact}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInputNome
                  labelText="Nome Completo"
                  name="nome"
                  onChange={onChangeInputs}
                  value={conteudo.nome}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInputEmail
                  labelText="E-mail"
                  name="email"
                  onChange={onChangeInputs}
                  value={conteudo.email}
                  type="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInputTelefone
                  labelText="Telefone"
                  type="tel"
                  name="telefone"
                  onChange={onChangeInputs}
                  value={conteudo.telefone}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                <Button type="submit" color="warning">
                  Quero Saber Tudo!
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
