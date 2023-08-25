import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import InputMask from 'react-input-mask';
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
import CustomInputEmail from "../../components/CustomInput/CustomInputEmail";
import CustomInputTelefone from "../../components/CustomInput/CustomInputTelefone";
import CustomInputNome from "../../components/CustomInput/CustomInputNome";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const [conteudo, setConteudo] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const onNomeChange = (e) => {
    setConteudo({ ...conteudo, nome: e.target.value });
  };

  const onEmailChange = (e) => {
    setConteudo({ ...conteudo, email: e.target.value });

  };

  const onTelefoneChange = (e) => {
    setConteudo({ ...conteudo, telefone: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      conteudo.name
       === '' || 
      conteudo.email
       === ''|| 
      conteudo.telefone
      === ''
       ) {
            alert('Por favor, preencha todos os campos obrigatórios.');
          } 

    const  conteudoJson =  JSON.stringify(conteudo);
    const formData = new FormData();
    formData.append('nome', conteudo.nome);
    formData.append('email', conteudo.email);
    formData.append('telefone', conteudo.telefone);
    

    try {
      const response = await fetch(
        'https://form.residencialcuruca.com.br/addRow',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
          },
          body: JSON.stringify(Object.fromEntries(formData))
        }
      );
        
      if (response.ok) {
        alert('formulário com sucesso!');
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
            Fale com um consultor sobre o Residencial Curuça
          </h2>
          <h4 className={classes.description}>
            Saiba como realizar o sonho de morar em um apartamento novo com toda
            a qualidade de vida que você deseja no centro de Mauá
          </h4>

          <form onSubmit={handleSubmit}    >
            
            <GridContainer>
              
              <GridItem xs={12} sm={12} md={12}>
                <CustomInputNome 
                  labelText="Nome Completo"
                  name="nome"
                  onChange={onNomeChange}
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
                  onChange={onEmailChange}
                  required
                  type="email"
                  value={conteudo.email}
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
                  onChange={onTelefoneChange}
                  required
                  value={conteudo.telefone}
                  placeholder="(99) 99999-9999"
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