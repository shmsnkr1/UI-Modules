import React, { Component } from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import TableHead from '@material-ui/core/TableHead/TableHead';

/* eslint-disable */
class EnhancedTableHead extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { order, orderBy, className, headerData, isSort } = this.props;

    const row = [];
    for (var i = 0; i < headerData.length; i++) {
      let headerColumn = headerData[i];

      // ソートの場合
      if (isSort) {
        row.push(
          <TableCell className={className}
            key={headerColumn}
            padding='none'
            sortDirection={orderBy === headerColumn ? order : false}
          >
            <Tooltip
              title="Sort"
              placement='bottom-start'
              enterDelay={300}
            >
              <TableSortLabel
                active={orderBy === headerColumn}
                direction={order}
                onClick={() => this.props.onRequestSort(headerColumn, order)}
              >
                {headerColumn}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        );

      } else {
        row.push(
          <TableCell className={className}
            key={headerColumn}
            padding='none'
            sortDirection={false}
          >
            {headerColumn}
          </TableCell>
        );
      }
    }
    return (
      <TableHead>
        <TableRow>
          {row}
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead;
