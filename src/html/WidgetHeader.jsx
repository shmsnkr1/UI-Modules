import React, { Component } from 'react';
import editImage from '../../img/html/widget/icon_edit.png';

/* eslint-disable */
class WidgetHeader extends Component {

    render() {
        return (
            <div className="editComponent">
                <img
                    className="editWidget"
                    src={editImage}
                    role="represetation"
                    />
            </div>
        );
    }
}

export default WidgetHeader;
