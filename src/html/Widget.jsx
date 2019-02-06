import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WidthProvider from 'react-grid-layout/build/components/WidthProvider';
import Responsive from 'react-grid-layout/build/ResponsiveReactGridLayout';
import map from 'lodash/_arrayMap';

import '../../style/html/grid.scss';


const GridLayout = WidthProvider(Responsive);

/* eslint-disable */
class Widget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newLayout: "",
      isResizable: true,
      isDraggable: true,
      items: this.props.items
    };
    this.onBreakpointChange = this
      .onBreakpointChange
      .bind(this);
    this.onLayoutChange = this
      .onLayoutChange
      .bind(this);
    this.hasAction = this
      .hasAction
      .bind(this);
    this.calcTotalWidth = this
      .calcTotalWidth
      .bind(this);
  }

  createElement(el, i) {
    const ElmentComponent = el.item;
    const WidgetHeaderComponent = this.props.widgetHeader;
    return (

      <div
        style={{
        display: 'block'
      }}
        className="widgetContainer"
        key={i.toString()}
        data-grid={{
        i: i,
        minW: el.minW,
        minH: el.minH,
        x: el.x,
        y: el.y,
        w: el.w,
        h: el.h,
        maxW: el.maxW,
        maxH: el.maxH
      }}>

        <div className="headerMap">
          <a className="mapHeader">
            {el.itemName}
          </a>
          <div className="widgetComponent">
            <WidgetHeaderComponent headerKey={i}/>
            <div
              className="wn-widget-button_remove"
              onClick={this
              .onRemoveItem
              .bind(this, i)}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div
          style={{
          width: '100%',
          height: "calc(100% - 45px)",
          display: 'block'
        }}>
          {(el.isComponent)
            ? el.item
            : <ElmentComponent
              hasAction={this
              .hasAction
              .bind(this, i)}/>}
          <div
            style={{
            overflow: "hidden",
            width: "100%",
            height: "100%"
          }}>
            {(el.isMixed)
              ? this.generatMixedElement(el, i)
              : null}
          </div>
        </div>

      </div>
    );
  }
  onBreakpointChange(breakpoint, cols) {
    this.setState({breakpoint: breakpoint, cols: cols});
  }

  calcTotalWidth(el, j) {
    let totalWidth = 0;
    for (var i = 0; i < j; i++) {
      totalWidth = totalWidth + el[i].w;
    }
    totalWidth = totalWidth * 100;
    return totalWidth;
  }

  generatMixedElement(el, i) {
    const mixedList = el.mixedList;
    const newLayout = this.state.newLayout;
    let mixedElement = [];
    let currentWidth = ((newLayout == "")
      ? el.w
      : newLayout[i].w);
    for (var j = 0; (j < (mixedList.length) && (j < currentWidth)); j++) {
      let elementWidth = `calc(100% / (${ ((currentWidth > mixedList.length)
        ? mixedList.length
        : currentWidth)}))`;
      let totalWidth = this.calcTotalWidth(mixedList, j);
      let elWidth = (j == 0)
        ? `${mixedList[j].w * 100}px`
        : `calc(100% - ${totalWidth}px)`;
      mixedElement.push(
        <div
          style={{
          float: "left",
          width: elWidth,
          height: "100%",
          minWidth: `${mixedList[j].minW}px`
        }}>
          {mixedList[j].element}
        </div>
      );
    }
    return mixedElement;

  }
  onResizeStop(layout, oldItem, newItem, placeholder, event, element) {
    this.setState({newLayout: layout});
  }

  hasAction(i, position) {
    this
      .props
      .hasAction(i, position);
  }

  onLayoutChange(layout, layouts) {
    this
      .props
      .reloadComponent();
    this.setState({layouts, newLayout: layout});
  }

  onRemoveItem(i) {
    let itemList = this.state.items;
    itemList.splice(i, 1);
    this.setState({items: itemList});
  }
  onWidthChange(containerWidth, margin, cols, containerPadding) {
    if (window.innerWidth < "800") {
      this.setState({isResizable: false, isDraggable: false});

    } else {
      this.setState({isResizable: true, isDraggable: true});

    }
  }
  render() {

    return (
      <div >
        <GridLayout
          {...this.props}
          containerPadding={[0, 0]}
          margin={[20, 20]}
          isDraggable={this.state.isDraggable}
          isResizable={this.state.isResizable}
          draggableHandle=".headerMap"
          draggableCancel=".text"
          onLayoutChange={this.onLayoutChange}
          onWidthChange={this
          .onWidthChange
          .bind(this)}
          onBreakpointChange={this.onBreakpointChange}
          onResizeStop={this
          .onResizeStop
          .bind(this)}>
          {map(this.props.items, (el, i) => this.createElement(el, i.toString()))}
        </GridLayout>
      </div>
    );
  }
}

Widget.propTypes = {
  className: PropTypes.string,
  isDraggable: PropTypes.bool,
  isResizable: PropTypes.bool,

  /**
   * itemName (object) : ヘッダ
   * item (object) : メイン内容
   * x (number) : 位置x
   * y (number) : 位置y
   * w (number) : 幅
   * minW (number) :  最小幅
   * minH (number) :  最小高さ
   */
  items: PropTypes.array.isRequired,
  cols: PropTypes.object,
  breakpoint: PropTypes.object,
  rowHeight: PropTypes.number
};

Widget.defaultProps = {
  className: "layout",
  isDraggable: true,
  isResizable: true,
  cols: {
    lg: 12,
    md: 10,
    sm: 6,
    xs: 4,
    xxs: 4
  },
  rowHeight: 400,
  maxRows: 30
};

export default Widget;
