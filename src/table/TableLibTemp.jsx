import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableLib from './TableLib';

class TableLibTemp extends Component {
  render() {
    return (
      <div>
        <TableLib {...this.props} />
      </div>
    );
  }
}

/* eslint-disable */
const propTypes = {
  classes: PropTypes.object,
  /**
   * [ヘッダ]
   */
  tableHeader: PropTypes.array,
  /**
   * [ヘッダ](key) : [内容]value)
   */
  tableData: PropTypes.array,
  /**
   * (boolean)：ソート有効
   */
  isSort: PropTypes.bool,
  /**
   * (boolean)：ページング有効
   */
  isPaging: PropTypes.bool,
  /**
   * (boolean)：行色有効
   */
  isHover: PropTypes.bool,
};

TableLibTemp.propTypes = propTypes;
export default TableLibTemp;
