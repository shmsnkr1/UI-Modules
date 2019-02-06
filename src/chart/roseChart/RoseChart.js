/* eslint-disable */
import React, { Component } from 'react';
import withSize from 'react-sizeme';
import Plotly from 'plotly.js/lib/core';
import CreateplotComponent from 'react-plotly.js/factory';

const Plot = CreateplotComponent(Plotly);

class RoseChart extends Component {
  configureData() {
    const { data, options } = this.props;
    let arrRet = [];
    data.map(function(hash, v){
      const tmp = {r: [], t: [], name: '', marker: {color: ''}, type: 'area'};
      Object.keys(hash).forEach(function(key, i) {
        tmp.r.push(hash[key]);
        tmp.t.push(key);
      });

      // Setting legends
      if(typeof options.legend === 'object') {
        tmp.name = options.legend[v];
        tmp.marker.color = options.strokeColor[v];
      }
      arrRet.push(tmp);
    });
    return arrRet;
  }

updateChart(figure,graphDiv){
  　graphDiv.layout.width=graphDiv.parentElement.clientWidth;
  　   graphDiv.layout.height=graphDiv.parentElement.clientHeight;
       Plotly.newPlot(graphDiv,graphDiv.data,graphDiv.layout);
}

  onInitialized(figure,graphDiv){
    this.updateChart(figure,graphDiv);
　　this.props.onInitialized(figure,graphDiv,Plotly);
  }

  onUpdate(figure,graphDiv){

    this.updateChart(figure,graphDiv);
　　this.props.onUpdate(figure,graphDiv,Plotly);
      }
    

  render() {
    return (
      <Plot 
      data={this.configureData()}
      divId="rosemap"
      layout={this.props.optConfig}
      useResizeHandler={true}
      onInitialized={(figure,graphDiv) => this.onInitialized(figure,graphDiv)}
      onUpdate={(figure,graphDiv) => this.onUpdate(figure,graphDiv)}
      style= {{ width: "100%", height: "100%", position: 'relative' }}
      /> 
    );
  }
}

export default withSize() (RoseChart);
