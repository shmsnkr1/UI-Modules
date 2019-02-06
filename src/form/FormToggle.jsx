import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import styles from './toggle';

class FormToggle extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: this.props.checked };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <label htmlFor="material-switch">
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor={styles.onColor}
            offColor={styles.offColor}
            offHandleColor={styles.offHandleColor}
            onHandleColor={styles.onHandleColor}
            handleDiameter={styles.handleDiameter}
            uncheckedIcon={styles.uncheckedIcon}
            checkedIcon={styles.checkedIcon}
            boxShadow={styles.boxShadow}
            activeBoxShadow={styles.activeBoxShadow}
            height={styles.height}
            width={styles.width}
            className="react-switch"
            id={name}
            name={name}
          />
        </label>
      </div>
    );
  }
  }

FormToggle.defaultProps = {
  checked: false,
};

FormToggle.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default FormToggle;
