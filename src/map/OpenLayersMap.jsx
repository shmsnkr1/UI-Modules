import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenLayers from 'WRAP/UI/OpenLayers';
import mapSettingDefault from '../../data/map/MapSetting.json';

/* eslint-disable */
class OpenLayersMap extends Component {

  render() {
    const {
      width, height, mapId, mapSetting,
    } = this.props;

    if (!mapSetting) {
      return (
        <div>Map Loading...</div>
      );
    }
    return (
      <div style={{ height, width, position: 'relative' }}>
        <OpenLayers
          mapSetting={mapSetting}
          mapId={mapId}
          mapInitedCallback={this.props.mapInitedCallback}
        />
      </div>
    );
  }
}

OpenLayersMap.defaultProps = {
  mapId: 'olmap',
  mapSetting: mapSettingDefault,
  width: '600px',
  height: '300px',
};

const propTypes = {
  mapId: PropTypes.string,
  mapSetting: PropTypes.object,
  height: PropTypes.string,
  width: PropTypes.string,
  mapInitedCallback: PropTypes.func,
};

OpenLayersMap.propTypes = propTypes;

export default OpenLayersMap;
