import React, { Component } from 'react';
import FormCheckBox from '../../form/FormCheckBox';

/* eslint-disable */
class PortLayerMenu extends Component {
  render() {
    const { onClick, onChecked } = this.props;

    return (
      <div className="inline">
        <FormCheckBox
          name="chk_port"
          value="0"
          checked={onChecked}
          onClick={onClick}
          label="Port"
        />
      </div>
    );
  }
}

export default PortLayerMenu;
