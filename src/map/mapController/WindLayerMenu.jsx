import React, { Component } from 'react';
import FormCheckBox from '../../form/FormCheckBox';

/* eslint-disable */
class WindLayerMenu extends Component {
  render() {
    const { onClick, onChecked } = this.props;

    return (
      <div className="inline">
        <FormCheckBox
          name="chk_wind"
          value="0"
          checked={onChecked}
          onClick={onClick}
          label="Wind"
        />
      </div>
    );
  }
}

export default WindLayerMenu;
