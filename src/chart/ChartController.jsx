import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from './chart/Chart';

const propTypes = {
  type: PropTypes.string.isRequired,
  chartData: PropTypes.array,
  chartProp: PropTypes.object,
  chartConf: PropTypes.object,
};

/* eslint-disable */
class ChartController extends Component {

  render() {
    const { type, chartData, chartProp, chartConf } = this.props;

    return (
     <div style={{ width: '100%', height:'100%' }}>
        <Chart
          type={type}
          data={chartData}
          options={chartProp}
          optConfig={chartConf}
        />
      </div>
    );
  }
}

ChartController.propTypes = propTypes;

export default ChartController;
