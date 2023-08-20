
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "/components/PageChange/PageChange.js";

import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";
import LandingPage from "./landing";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

    No mundo moderno dos negócios, empresas de médio e pequeno porte desempenham um papel fundamental na economia global, impulsionando a inovação e a diversidade empresarial. Em meio a esse cenário desafiador, surge o grupo de desenvolvedores líder e dedicado conhecido como Severino Devs.

    O Severino Devs é mais do que apenas um grupo de tecnólogos - é uma força criativa que visa capacitar empresas de médio e pequeno porte por meio de soluções tecnológicas inovadoras. Compreendendo as complexidades e as necessidades específicas dessas empresas, o grupo se dedica a fornecer soluções customizadas que atendam às demandas únicas de cada cliente.
    
    O nome "Severino Devs" reflete uma abordagem direta e autêntica em relação ao desenvolvimento tecnológico. Assim como o nome sugere, o grupo está comprometido em simplificar a tecnologia e torná-la acessível a todas as empresas, independentemente do tamanho ou da complexidade. Sob a liderança experiente e apaixonada dos desenvolvedores do Severino Devs, as empresas encontram parceria e orientação ao navegar pelo mundo em constante evolução da tecnologia.
    
    A equipe do Severino Devs é composta por profissionais experientes e altamente qualificados, cada um trazendo seu conjunto único de habilidades para a mesa. Desde o desenvolvimento de aplicativos e websites até a implementação de soluções de análise de dados e automação de processos, o grupo abrange um amplo espectro de competências tecnológicas. O foco na colaboração, na inovação e no compromisso com o sucesso do cliente é o que define a cultura do Severino Devs.
    
    À medida que o mundo dos negócios continua a evoluir rapidamente, o Severino Devs permanece firme em sua missão de capacitar empresas de médio e pequeno porte a prosperarem no cenário tecnológico em constante mudança. Com uma dedicação inabalável à excelência técnica e ao atendimento ao cliente, o grupo está construindo um legado de sucesso, fornecendo soluções tecnológicas que impulsionam o crescimento, a eficiência e a inovação para seus clientes.
    
    Severino Devs - onde a paixão pela tecnologia encontra a missão de impulsionar o sucesso empresarial. 

`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Residêncial Curuça</title>
        </Head>
        <LandingPage {...pageProps} />
      </React.Fragment>
    );
  }
}
