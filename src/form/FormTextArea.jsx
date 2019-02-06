import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reduxForm from 'redux-form/lib/reduxForm';
import Field from 'redux-form/lib/Field';
import '../../style/form/formTextArea.scss';

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


class FormTextArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    };
    this.renderField = this.renderField.bind(this);
  }

  renderField({ input }) {
    const {
      name,
      type = 'textarea',
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
      className = 'defaultTheme isSuccess';
    } else if (status === 'error') {
      className = 'defaultTheme isError';
    } else {
      className = 'defaultTheme';
    }

    const errorMessage = validate(input.value);
    return (
      <span className="formText">
        {label && <label className="comLabel" style={labelStyle} htmlFor={`${label}${name}`}>{label}</label>}
        <textarea
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
    const { name, label, placeholder, disabled, onChange = (event) => { this.setState({ textValue: event.target.value }); }, validationMessage = '' } = this.props;

    const labelTag = label === '' ? null : <label className="comLabel" htmlFor={`${label}${name}`}>{label}</label>;
    return (
      <span>
        {labelTag}
        <Field
          component={this.renderField}
          id={`${label}${name}`}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          className="textareaStyle"
          onChange={onChange}
        />
        <br />
        {validationMessage}
      </span>
    );
  }
}

FormTextArea.propTypes = propTypes;
export default reduxForm({
  form: 'FormTextArea',
  enableReinitialize: true,
})(FormTextArea);
