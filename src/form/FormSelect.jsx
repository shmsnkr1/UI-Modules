import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reduxForm from 'redux-form/lib/reduxForm';
import Field from 'redux-form/lib/Field';
import '../../style/form/formSelect.scss';

/* eslint-disable */
class FormSelect extends Component {

  constructor(props) {
    super(props);
    const { selectKey, optionList } = this.props;
    this.state = {
      selectedKey: selectKey,
      selectedValue: optionList[selectKey],
    };
    this.renderField = this.renderField.bind(this);
  }
  onChangeItem(event) {
    const { optionList } = this.props;
    this.setState(
      {
        selectedKey: event.target.value,
        selectedValue: optionList[event.target.value],
      }
    );
  }

  renderField(param) {
    const { disabled, input, children, style } = param;
    const { labelStyle, label, tailLabel, validate, rowStyle } = this.props;
    const error = validate(input.value);
    return (
      <span style={style}>
        <div className="wnSelect">
          {label && <label className="label" style={labelStyle} htmlFor={name}>{label}</label>}
          {(() => (disabled
            ? <select
              {...input}
              disabled
              className=""
              value={this.state.selectedKey}>
              {children}
            </select>
            : <select {...input} value={this.state.selectedKey}>
              {children}
            </select>)
          )()}
          <div className="wnSelectLabel">{this.state.selectedValue}</div>
          <div className="wnSelectIcon" />
          {tailLabel && <span className="tailLabel">{tailLabel}</span>}
        </div>
        {error && <span className="errorMessage"><br />{error}</span>}
      </span>
    );
  }

  render() {
    const {
      name, disabled,
      optionList = {}, style, selectStyle, addBlank,
      validate,
    } = this.props;

    const options = Object.keys(optionList).map(key => (
      <option
        value={key}
        key={key}>{optionList[key]}</option>
    ));


    if (addBlank) options.unshift(<option value="" key="" />);

    return (
      <Field
        component={this.renderField}
        name={name}
        style={style}
        selectStyle={selectStyle}
        disabled={disabled}
        onChange={this.onChangeItem.bind(this)}
        id={name}
        validate={validate}
      >
        {options}
      </Field>
    );
  }
}

FormSelect.defaultProps = {
  addBlank: false,
  disabled: false,
  validate: () => {},
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  validate: PropTypes.func,
  addBlank: PropTypes.bool,
  disabled: PropTypes.bool,
  optionList: PropTypes.objectOf(PropTypes.string),
  tailLabel: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  rowStyle: PropTypes.objectOf(PropTypes.string),
  labelStyle: PropTypes.objectOf(PropTypes.string),
  selectStyle: PropTypes.objectOf(PropTypes.string),
  selectKey: PropTypes.string,
};
export default reduxForm({
  form: 'FormSelect',
  enableReinitialize: true,
})(FormSelect);
