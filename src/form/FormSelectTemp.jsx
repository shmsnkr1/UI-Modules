import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './FormSelect';

/* eslint-disable */
const optionList={ 'Select Ship Type': 'Select Ship Type', 'One': 'One', 'Two': 'Two', 'Three': 'Three', 'Four': 'Four','Five': 'Five' };

/* eslint-disable */
class FormSelectTemp extends Component {
  render() {
    return (
      <div  className="selectBorderStyle">
        <Select {...this.props} />
      </div>
    );
  }
}

FormSelectTemp.defaultProps = {
  addBlank: false,
  disabled: false,
  validate: () => {},
};

FormSelectTemp.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  validate: PropTypes.func,
  addBlank: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * ([key] : [value])
   */
  optionList: PropTypes.objectOf(PropTypes.string),
  tailLabel: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  rowStyle: PropTypes.objectOf(PropTypes.string),
  labelStyle: PropTypes.objectOf(PropTypes.string),
  selectStyle: PropTypes.objectOf(PropTypes.string),
  selectKey: PropTypes.string,
};


export default FormSelectTemp;
