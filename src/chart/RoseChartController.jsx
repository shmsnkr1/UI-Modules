import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoseChart from './roseChart/RoseChart';

const propTypes = {
  type: PropTypes.string.isRequired,
  chartData: PropTypes.array,
  chartProp: PropTypes.object,
  chartConf: PropTypes.object,
};

/* eslint-disable */
class RoseChartController extends Component {

  render() {
    const { type, chartData, chartProp, chartConf, onInitialized, onUpdate  } = this.props;

    return (
      <div style={{ width: '100%', height:'100%' }}>
        <RoseChart
          data={chartData}
          options={chartProp}
          optConfig={chartConf}
          onInitialized={onInitialized}
          onUpdate={onUpdate}
        />
      </div>
    );
  }
}

RoseChartController.propTypes = propTypes;

export default RoseChartController;
