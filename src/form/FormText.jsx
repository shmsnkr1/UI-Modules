import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reduxForm from 'redux-form/lib/reduxForm';
import Field from 'redux-form/lib/Field';
import '../../style/form/formText.scss';

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
  value: PropTypes.string,
};

class FormText extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      textValue: value,
    };
    this.renderField = this.renderField.bind(this);
  }

  renderField({ input }) {
    const {
      name,
      type = 'text',
      style,
      label,
      labelStyle,
      tailLabel = '',
      disabled,
      validate = () => {},
      maxlength,
      placeholder,
      status,
    } = this.props;

    let className = '';
    if (status === 'success') {
      className = 'FormTextdefaultTheme isSuccess';
    } else if (status === 'error') {
      className = 'FormTextdefaultTheme isError';
    } else {
      className = 'FormTextdefaultTheme';
    }

    const errorMessage = validate(input.value);
    return (
      <span className="formText">
        {label && <label className="comLabel" style={labelStyle} htmlFor={`${label}${name}`}>{label}</label>}
        <input
          value={this.state.textValue}
          type={type}
          style={style}
          className={className}
          disabled={disabled}
          id={`${label}${name}`}
          onChange={input.onChange}
          maxLength={maxlength}
          placeholder={placeholder}
        />
        <span className="tailLabel">{tailLabel}</span>
        <span className="errorMessage"><br />{errorMessage}</span>
      </span>
    );
  }

  render() {
    const {
      name,
      validate,
      normalize,
      onChange = (event) => { this.setState({ textValue: event.target.value }); },
      type,
    } = this.props;

    return (
      <Field
        name={name}
        type={type}
        component={this.renderField}
        validate={validate}
        normalize={normalize}
        onChange={onChange}
      />
    );
  }
}

FormText.propTypes = propTypes;
export default reduxForm({
  form: 'FormText',
  enableReinitialize: true,
})(FormText);
