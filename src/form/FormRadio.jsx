import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/form/formRadio.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  labelPosition: PropTypes.oneOf(['left', 'right']),
};


class FormRadio extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    const { name, label, disabled,
    onClick, labelPosition } = this.props;
    const labelTag = label === '' ? null : <label className="comLabel" htmlFor={`${label}${name}`}>{label}</label>;

    const items = [];
    items.push(
      <div key={1} className="wnRadio" >
        <input
          key={1}
          type="radio"
          checked={this.state.checked}
          id={`${label}${name}`}
          onChange={this.onChange}
          name={name} disabled={disabled}
          onClick={onClick}
        />
        {labelTag}
      </div>,
    );

    if (labelPosition === 'left') {
      items.unshift('');
    } else {
      items.push('');
    }

    return (
      <span>
        {items}
      </span>
    );
  }
}

FormRadio.defaultProps = {
  labelPosition: 'right',
};

FormRadio.propTypes = propTypes;
export default FormRadio;
