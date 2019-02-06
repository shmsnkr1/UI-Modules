import React, { Component } from 'react';
import GridList from 'material-ui/GridList/GridList';
import GridTile from 'material-ui/GridList/GridTile';
import propTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* eslint-disable */
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color: '#000',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80%',
    height: '100%',
  },
  gridTile: {
    background: '#f1f1f1',
    color: '#000',
 },
 gridStyle: {
  backgroundColor: '#fafafa',
  boxShadow: '1px 1px 4px #b4b4b4',
  color: '#000',
 }
};

class GridLayout extends Component {
  render() {
    return (
      <div style={styles.root}>
        <MuiThemeProvider>
          <GridList
            cols={this.props.cols}
            cellHeight={this.props.cellHeight}
            padding={this.props.padding}
            style={this.props.gridListStyle}
          >
            {this.props.gridItems.map((items) => (
              <GridTile
                titleStyle={styles.gridStyle}
                style={styles.gridStyle}
                key={items.item}
                title={items.item}
                // actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="#fafafa"
                cols={items.cols}
                rows={items.rows}
              />
            ))}
          </GridList>
        </MuiThemeProvider>
      </div>
   );
  }
}
GridLayout.defaultProps = {
  cols: 4,
  cellHeight: 125,
  padding: 10,
  gridListStyle: styles.gridList,
  gridTileStyle: styles.gridTile,
};

GridLayout.propTypes= {
  /**
   * item (object) : 表示内容
   * rows (number) : 位置（行）
   * cols (number) : 位置（列）
   */
  gridItems: propTypes.array.isRequired,
  cols: propTypes.number,
  cellHeight: propTypes.number,
  padding: propTypes.number,
  gridListStyle: propTypes.object,
  gridTileStyle: propTypes.object,
 };

export default GridLayout;