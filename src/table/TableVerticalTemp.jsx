import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableVertical from './TableVertical';

class TableVerticalTemp extends Component {
  render() {
    return (
      <div>
        <TableVertical {...this.props} />
      </div>
    );
  }
}
/*eslint-disable */
TableVerticalTemp.propTypes = {
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
   * (boolean)：行色有効
   */
  isHover: PropTypes.bool,
};

export default TableVerticalTemp;
