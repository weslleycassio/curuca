import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import styles from "/styles/jss/nextjs-material-kit/components/customInputStyle.js";

const useStyles = makeStyles(styles);

function CustomInputTelefone(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    labelProps,
    inputProps,
    error,
    success,
    white,
    inputRootCustomClasses,
    onChange,
    required
  } = props;

  const labelClasses = classNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });

  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });

  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });

  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });

  const formControlClasses = classNames(
    formControlProps?.className,
    classes.formControl
  );

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText && (
        <InputLabel className={`${classes.labelRoot} ${labelClasses}`} {...labelProps}>
          {labelText}
        </InputLabel>
      )}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        onChange={onChange}
        required
        {...inputProps}
      />
    </FormControl>
  );
}

CustomInputTelefone.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  // Other PropTypes for inputProps can be added here
};

export default CustomInputTelefone;