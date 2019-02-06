import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorButton from '../button/ColorButton';
import WindLayerMenu from './mapController/WindLayerMenu';
import GridLineLayerMenu from './mapController/GridLineLayerMenu';
import WaveHeightLayerMenu from './mapController/WaveHeightLayerMenu';
import PortLayerMenu from './mapController/PortLayerMenu';
import css from '../../style/map/mapController.css';

/* eslint-disable */
class MapController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gridButtonClick: false,
      waveButtonClick: false,
      windButtonClick: false,
      portButtonClick: false,
    };
    this.onGridButtonClick = this.onGridButtonClick.bind(this);
    this.onWaveButtonClick = this.onWaveButtonClick.bind(this);
    this.onWindButtonClick = this.onWindButtonClick.bind(this);
    this.onPortButtonClick = this.onPortButtonClick.bind(this);
  }

  onGridButtonClick() {
    this.setState({
      gridButtonClick: !this.state.gridButtonClick,
      waveButtonClick: false,
      windButtonClick: false,
      portButtonClick: false
    });
  }

  onWaveButtonClick() {
    this.setState({
      waveButtonClick: !this.state.waveButtonClick,
      gridButtonClick: false,
      windButtonClick: false,
      portButtonClick: false,
    });
  }

  onWindButtonClick() {
    this.setState({
      windButtonClick: !this.state.windButtonClick,
      gridButtonClick: false,
      portButtonClick: false,
      waveButtonClick: false,
    });
  }

  onPortButtonClick() {
    this.setState({
      portButtonClick: !this.state.portButtonClick,
      gridButtonClick: false,
      waveButtonClick: false,
      windButtonClick: false,
    });
  }

  render() {
    const { controllerInfo } = this.props;

    let gridButtonShow = false;
    let waveButtonShow = false;
    let windButtonShow = false;
    let portButtonShow = false;

    let gridClick;
    let waveClick;
    let windClick;
    let portClick;

    let gridCheck;
    let waveCheck;
    let windCheck;
    let portCheck;

    Object.keys(controllerInfo).forEach(function (key, val) {
      if (controllerInfo[key].id === 'GirdLine' && controllerInfo[key].isShow) {
          gridButtonShow = true;
          gridClick = controllerInfo[key].onClick;
          gridCheck =  controllerInfo[key].isChecked;
      } else if (controllerInfo[key].id === 'WaveHeight' && controllerInfo[key].isShow) {
          waveButtonShow = true;
          waveClick = controllerInfo[key].onClick;
          waveCheck =  controllerInfo[key].isChecked;
      } else if (controllerInfo[key].id === 'Wind' && controllerInfo[key].isShow) {
          windButtonShow = true;
          windClick = controllerInfo[key].onClick;
          windCheck =  controllerInfo[key].isChecked;
      } else if (controllerInfo[key].id === 'Port' && controllerInfo[key].isShow) {
          portButtonShow = true;
          portClick = controllerInfo[key].onClick;
          portCheck =  controllerInfo[key].isChecked;
      }  else  {

      }
    });

    return (
      <div>
        <div className={css.buttonController}>
            <div className={gridButtonShow?css.show:css.hidden}><ColorButton id='gridButton' baseValue='grid line' onClick={this.onGridButtonClick} /></div>
            <div className={waveButtonShow?css.show:css.hidden}><ColorButton id='waveButton' baseValue='wave height' onClick={this.onWaveButtonClick} /></div>
            <div className={windButtonShow?css.show:css.hidden}><ColorButton id='windButton' baseValue='wind' onClick={this.onWindButtonClick} /></div>
            <div className={portButtonShow?css.show:css.hidden}><ColorButton id='portButton' baseValue='port' onClick={this.onPortButtonClick} /></div>
        </div>
        <div>
          <div className={this.state.gridButtonClick?css.show:css.hidden}><GridLineLayerMenu onClick={gridClick} onChecked={gridCheck} /></div>
          <div className={this.state.waveButtonClick?css.show:css.hidden}><WaveHeightLayerMenu onClick={waveClick} onChecked={waveCheck} /></div>
          <div className={this.state.windButtonClick?css.show:css.hidden}><WindLayerMenu onClick={windClick} onChecked={windCheck} /></div>
          <div className={this.state.portButtonClick?css.show:css.hidden}><PortLayerMenu onClick={portClick} onChecked={portCheck} /></div>
        </div>
      </div>
    );
  }
}

const propTypes = {
  controllerInfo: PropTypes.object,
};

MapController.propTypes = propTypes;

export default MapController;
