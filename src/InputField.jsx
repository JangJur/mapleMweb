import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, MenuItem, Select, Box, InputLabel } from "@mui/material";
import PropTypes from 'prop-types';
import { useInputStyles } from "./CommonStyle";

export function InputField(props) {

  const classes = useInputStyles()

  function setInputField() {
    return (
      <FormControl className={`${classes.root} ${classes.select}`}
        variant="filled" size="small"
        fullWidth
        disabled={props.disabled ? props.disabled : false}
      >
        <InputLabel>{props.label}</InputLabel>
        <Controller
          rules={props.rules}
          render={({ field: { onChange, value } }) => (
            <Select
              displayEmpty
              onChange={onChange}
              value={(value && props.options.findIndex(option => option.value === value) !== -1) ? value : ''}
              defaultValue={''}
              disableUnderline
              readOnly={props.readonly ? props.readonly : false}
              style={props.style}
            >
              {props.options.length > 0 && (props.options).map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value} >
                    {option.label}
                  </MenuItem>
                );
              })}
            </Select>
          )}
          control={props.control}
          name={props.name}
        />
      </FormControl>
    )
  }

  return (
    <>
      {
        <Box className={classes.div} style={props.style}>
          {setInputField()}
          {props.button && (<div style={{ display: "inline-block", position: "absolute" }}>{props.button}</div>)}
        </Box>
      }
    </>
  );
}

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'select', 'multiSelect', 'action', 'check', 'radio', 'datetime', 'time', 'dateRange', 'textarea', 'autocomplete']),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  rules: PropTypes.object
};

export default InputField;
