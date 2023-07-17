/*eslint-disable*/
import React from "react";
import { Link } from "react-scroll";
import { useRef } from 'react';
import { useState } from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);





export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <>

    <List   className={classes.list}>
      <ListItem   className={classes.listItem}>

        <Button
          
          href="#Inicio"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>homeicon</Icon> Início
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Curuca"
          color="transparent"
          className={classes.navLink}
          >
          <Icon className={classes.icons}>apartment</Icon> Conheça o Curuça
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Fotos"
          color="transparent"
          className={classes.navLink}
          >
          <Icon className={classes.icons}>linked_camera</Icon> Fotos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Localizacao"
          color="transparent"
          className={classes.navLink}
          >
          <Icon className={classes.icons}>location_on</Icon> Localização
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Plantas"
          color="transparent"
          className={classes.navLink}
          >
          <Icon className={classes.icons}>map</Icon> Plantas
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button 
          href="#Contato"
          color="transparent"
          className={classes.navLink}
          >
          <Icon className={classes.icons}>chat</Icon> Fale Conosco
        </Button>
      </ListItem>
    </List>
          </>
    
  );
}
