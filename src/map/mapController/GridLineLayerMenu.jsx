import React, { Component } from 'react';
import FormCheckBox from '../../form/FormCheckBox';

/* eslint-disable */
class GridLineLayerMenu extends Component {
  render() {
    const { onClick, onChecked } = this.props;

    return (
      <div className="inline">
        <FormCheckBox
          name="chk_grid"
          value="0"
          checked={onChecked}
          onClick={onClick}
          label="GridLine"
        />
      </div>
    );
  }
}

export default GridLineLayerMenu;
