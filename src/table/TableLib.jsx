import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TablePagination from '@material-ui/core/TablePagination/TablePagination';
import Paper from '@material-ui/core/Paper/Paper';
import EnhancedTableHead from './EnhancedTableHead';

/* eslint-disable */
const styles = theme => ({
  root: {
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    height:'100%',
    width: '100%',
    overflowX: 'auto',
    overflowY: 'auto',
  },
  header: { 
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '45px',
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    padding: '10px',
    border: '1px solid #ccc',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'black',
  },
  rowCell:{
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    padding: '10px',
    border: '1px solid #ccc',
    fontSize: '14px',
   },
  row: { 
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '45px',
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    padding: '10px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  rowWidth:{
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '45px',
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    padding: '10px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  table: {
    color: '#444',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    height: '100%',
    overflowX: 'scroll',
    overflowY: 'scroll',
    minWidth: '100%',
  },
});

class TableLib extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      data: this.props.tableData,
      order: 'asc',
      orderBy: '',
      selected: [],
      page: 0,
      rowsPerPage: 10,
    };
    this.handleRequestSort =this.handleRequestSort.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }


  handleRequestSort(event, property) {
    const orderBy = event;
    let order = property;

    if (order === 'desc') {
      order = 'asc';
    } else {
      order = 'desc';
    }
    let dataList = this.state.data;
    dataList =
      order === 'desc'
        ? dataList.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : dataList.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data:dataList, order: order, orderBy: orderBy });
  };

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  render() {
    const { classes, tableHeader, isSort, isPaging, isHover } = this.props;
    const tableData=this.props.tableData;

    let createElement = [];
    for (var i = 0; i < tableData.length; i++) {
      let children = []
      Object.keys(tableData[i]).forEach(function (key, val) {
        children.push(<TableCell className={classes.row}  component="th" scope="row" key={key} >{tableData[i][key]}</TableCell>);
      })
      createElement.push(<TableRow hover={isHover} key={i} >{children}</TableRow>);
    }

    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
        <EnhancedTableHead
          order={order}
          isSort={isSort}
          headerData={tableHeader}
          className={classes.header}
          orderBy={orderBy}
          onRequestSort={this.handleRequestSort}
        />
          <TableBody>
            {createElement}
          </TableBody>
        </Table>
        <div>
          { isPaging && <TablePagination
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          /> }
        </div>
      </Paper>
    );
  }
}

TableLib.propTypes = {
  classes: PropTypes.object,
  tableHeader: PropTypes.array,
  tableData: PropTypes.array,
  isSort: PropTypes.bool,
  isPaging: PropTypes.bool,
  isHover: PropTypes.bool,
};

export default withStyles(styles)(TableLib);
