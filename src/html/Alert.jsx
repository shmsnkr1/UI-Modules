import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/html/alert.scss';

 /* eslint-disable */
const propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

class Alert extends Component {

  constructor(props){
    super(props);
    const { name, value } = this.props;
    const ErrorLabel = <div name={name} className= "wnAlert isError" role='alert'> {value} <button type='button' className="wnAlertClose" onClick={() => this.remove('Error')} >Close</button></div>;
    const SuccessLabel = <div name={name} className= "wnAlert isSuccess" role='alert'> {value} <button type='button' className="wnAlertClose" onClick={() => this.remove('Success')}>Close</button></div>;
    this.state = {
      ErrorLabel: ErrorLabel,
      SuccessLabel: SuccessLabel,
    };
    this.remove= this.remove.bind(this);
     }

  remove(element) {
    if(element=== 'Error')
    { this.setState({ ErrorLabel: ""}); }
    else
    {  this.setState({ SuccessLabel: ""}); }

  }
  render() {
    const { ErrorLabel, SuccessLabel } = this.state;
    const { type } = this.props;
    return (
     <div>
       {(() => {
         if (type === "error") return ErrorLabel;
         return SuccessLabel;
       })()}
     </div>
    );
  }
}
Alert.propTypes = propTypes;
export default Alert;
