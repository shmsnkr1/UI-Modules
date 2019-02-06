import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './FormText';

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
  normalize: PropTypes.func,
  onChange: PropTypes.func,
  maxlength: PropTypes.string,
  placeholder: PropTypes.string,
  status: PropTypes.string,
};
/* eslint-disable */
class FormTextTemp extends Component {

  render() {
    return (
      <div className="inlineDivBox">
        <Text {...this.props} />
      </div>
    );
  }
}
FormTextTemp.propTypes = propTypes;
export default FormTextTemp;
