import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/form/formCheckBox.scss';


const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  checked: PropTypes.bool,
};


class FormCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    const { name, label, disabled, onClick, labelPosition } = this.props;
    const labelTag = label === '' ? null : <label key={0} className="comLabel" htmlFor={`${label}${name}`}>{label}</label>;

    const items = [];
    items.push(
      <div key={1} className="wnCheckbox" >
        <input
          key={1}
          type="checkbox"
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

FormCheckBox.defaultProps = {
  labelPosition: 'right',
};

FormCheckBox.propTypes = propTypes;
export default FormCheckBox;
