//  Created by react-native-create-bridge

import React from 'react';
import { requireNativeComponent } from 'react-native';

class QuickbloxBridgeView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <React.Fragment>
        <QuickbloxBridge { ...this.props } />
      </React.Fragment>
    );
  }
}

QuickbloxBridgeView.propTypes = {
  exampleProp: React.PropTypes.string
};

const QuickbloxBridge = requireNativeComponent('QuickbloxBridge', QuickbloxBridgeView);

export default QuickbloxBridgeView;
