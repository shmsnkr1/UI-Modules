import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';

/* eslint-disable */
const styles = theme => ({
  root: {
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    width: '100%',
    overflowX: 'scroll',
  },
  tbody: {
    display: 'flex',
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    float:'left',
  },
  thead: {

    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      display:'block',
      float:'left',
  },
  tableRow: {
    height: '100%',
    display:'block',
    float:'left',
  },
  rowheader: {
    width: '100px',
    display: 'block',
    textAlign: 'center',
    padding: '0px',
    verticalAlign: 'middle',
    lineHeight: '45px',
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    border: '1px solid #ccc',
    paddingRight: '0px !important',
  },
  row: {
    width: '100px',
    display: 'block',
    textAlign: 'center',
    padding: '0px',
    verticalAlign: 'middle',
    lineHeight: '45px',
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: '14px',
    border: '1px solid #ccc',
    paddingRight: '0px !important',
  },
  table: {
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    borderCollapse: 'collapse',
    height:'100%',
    width: '100%',
    display: 'flex',
  },
});

class TableVertical extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let createHeader = [];
    let headerData=[];
    const { classes, tableHeader, isHover } = this.props;
    const tableData=this.props.tableData;

    for (var i = 0; i < tableHeader.length; i++) {
      headerData.push(<TableCell className={classes.rowheader} key={tableHeader[i]} numeric >{tableHeader[i]}</TableCell>);
    }
    createHeader = (<TableRow className={classes.tableRow} >{headerData}</TableRow>);

   let createElement = [];
    for (var i = 0; i < tableData.length; i++) {
      let children = []
      Object.keys(tableData[i]).forEach(function (key, val) {
        children.push(<TableCell className={classes.row}  component="th" scope="row" key={key} >{tableData[i][key]}</TableCell>);
      })
      createElement.push(<TableRow className={classes.tableRow} hover={isHover} key={i} >{children}</TableRow>);
    }

    return (
        <Table className={classes.table}>
          <TableHead className={classes.thead}>
            {createHeader}
          </TableHead>
          <TableBody className={classes.tbody}>
           {createElement}
          </TableBody>
        </Table>
    );
  }
}

TableVertical.propTypes = {
  classes: PropTypes.object,
  tableHeader: PropTypes.array,
  tableData: PropTypes.array,
  isHover: PropTypes.bool,
};

export default withStyles(styles)(TableVertical);
