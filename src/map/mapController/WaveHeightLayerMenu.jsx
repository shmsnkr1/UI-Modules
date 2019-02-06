import React, { Component } from 'react';
import FormCheckBox from '../../form/FormCheckBox';

/* eslint-disable */
class WaveHeightLayerMenu extends Component {
  render() {
    const { onClick, onChecked } = this.props;
    return (
      <div className="inline">
        <FormCheckBox
          name="chk_fill"
          value="0"
          checked={onChecked.fill}
          onClick={onClick.fill}
          label="fill"
        />
        <FormCheckBox
          name="chk_contour"
          value="0"
          checked={onChecked.contour}
          onClick={onClick.contour}
          label="contour"
        />
        <FormCheckBox
          name="chk_arrow"
          value="0"
          checked={onChecked.arrow}
          onClick={onClick.arrow}
          label="arrow"
        />
        <FormCheckBox
          name="chk_low"
          value="0"
          checked={onChecked.low}
          onClick={onClick.low}
          label="LOW"
        />
        <FormCheckBox
          name="chk_npac"
          value="0"
          checked={onChecked.npac}
          onClick={onClick.npac}
          label="NPAC"
        />
        <FormCheckBox
          name="chk_natl"
          value="0"
          checked={onChecked.natl}
          onClick={onClick.natl}
          label="NATL"
        />
        <FormCheckBox
          name="chk_swasia"
          value="0"
          checked={onChecked.swasia}
          onClick={onClick.swasia}
          label="SEASIA"
        />
      </div>
    );
  }
}

export default WaveHeightLayerMenu;
