/* eslint-disable */
import React, { Component } from 'react';
import Chart from 'chart.js/dist/Chart.min';

class Chart extends Component {

  componentDidMount() {
    this.initChart();
  }

  initChart() {
    this.ctx = document.getElementById(this.canvasId).getContext('2d');
    const config = (typeof this.props.type !== 'object')?this.configureSingleChart():this.configureComboChart();
    new Chart(this.ctx, config);
  }

  configureSingleChart() {
    const {type, data, options} = this.props;
    const bgColor = (options.prop)?options.prop.backgroundColor : '';
    const bdColor = (options.prop)?options.prop.borderColor : '';
    const conf = {
      type: (type === 'spline' || type === 'step')?'line':type,
      data:{
        labels: [],
        datasets: [],
      },
      options: this.props.optConfig || {},
    };
    data.map(function(hash, v){
      /**
     * setting labels
     */
      const tmp = {label: '', data: []};
      Object.keys(hash).forEach(function(key, i) {
        tmp.data.push(hash[key]);
        conf.data.labels.push(key);
      });

      /**
     * setting legend labels and background color
     */
      if(typeof options.label === 'object') {
        tmp.label = options.label[v];
        const bc = {backgroundColor: bgColor[v], borderColor: bdColor[v]};
        if(options.backgroundColor) delete options.backgroundColor;
        if(options.borderColor)  delete options.borderColor;
        if(options[v]) tmp["yAxisID"] = options.id;
        Object.assign(tmp, options);
      } else {
        if(options.id) tmp["yAxisID"] = options.id;
          Object.assign(tmp, options);
      }
      //Setting data for plotting graph
      conf.data.datasets.push(tmp);
    });

    return conf;
  }

  configureComboChart() {
    const {data, options} = this.props;
    const graphType = this.props.type;
    const conf = {
      type: (this.props.type[0] === 'spline' || this.props.type[0] === 'step')?'line':this.props.type[0],
      data:{
        labels: [],
        datasets: [],
      },
      options: this.props.optConfig || {},
    };
    data.map(function(hash, v){
      /**
     * setting labels
     */
      const tmp = {label: '', data: []};
      Object.keys(hash).forEach(function(key, i) {
        tmp.data.push(hash[key]);
        if(!conf.data.labels.includes(key))
          conf.data.labels.push(key);
      });

      tmp['type'] = (typeof graphType === 'object' && v>0)?graphType[v]:'';
      tmp['type'] = (tmp['type'] === 'spline' || tmp['type'] === 'step')?'line':tmp['type'];

      /**
     * setting legend labels and background color
     */
      if(options) {
        if(options[v].id) tmp["yAxisID"] = options[v].id;
        Object.assign(tmp, options[v]);
      }
      //Setting data for plotting graph
      conf.data.datasets.push(tmp);
    });

    return conf;
  }

  render() {
    this.canvasId = 'cnvs_' + this.props.type;
    return (
      <canvas id={this.canvasId} />
    );
  }
}

export default Chart;
