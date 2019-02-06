import React, { Component } from 'react';
import propTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import '../../style/grid/list.scss';

class List extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const { name, children } = this.props;
    return (
      <div>
        <Button
          bsClass="siteButton"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {name}
        </Button>
        <br />
        <Panel expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              { children }
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}
List.defaultPropTypes = {
  name: 'Default',
  children: ' ',
};
List.propTypes = {
  name: propTypes.string,
  children: propTypes.node,
};
export default List;
