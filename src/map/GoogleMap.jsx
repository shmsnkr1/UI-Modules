import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GMap from 'WRAP/UI/GoogleMap';
import mapSettingDefault from '../../data/map/MapSetting.json';

/* eslint-disable */
class GoogleMap extends Component {

  render() {
    const {
      width, height, mapId, isHide, mapSetting,
    } = this.props;

    if (!mapSetting) {
      return (
        <div>Map Loading...</div>
      );
    }

    return (
      <div style={{ height, width, position: 'relative' }}>
        <GMap
          mapSetting={mapSetting}
          mapId={mapId}
          isHide={isHide}
          mapInitedCallback={this.props.mapInitedCallback}
        />
      </div>
    );
  }
}

GoogleMap.defaultProps = {
  mapId: 'gmap',
  isHide: false,
  mapSetting: mapSettingDefault,
  width: '600px',
  height: '300px',
};

const propTypes = {
  mapId: PropTypes.string,
  isHide: PropTypes.bool,
  mapSetting: PropTypes.object,
  height: PropTypes.string,
  width: PropTypes.string,
  mapInitedCallback: PropTypes.func,
};

GoogleMap.propTypes = propTypes;

export default GoogleMap;
