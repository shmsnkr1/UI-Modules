import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextArea from './FormTextArea';

/* eslint-disable */
const propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  tailLabel: PropTypes.any,
  disabled: PropTypes.string,
  validate: PropTypes.func,
  maxlength: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  validationMessage: PropTypes.func,
  status: PropTypes.string,
};

class FormTextAreaTemp extends Component {

  render() {
    return (
      <div className="inlineTextAreaDivBox">
        <TextArea {...this.props} />
      </div>
    );
  }
}

FormTextAreaTemp.propTypes = propTypes;
export default FormTextAreaTemp;
