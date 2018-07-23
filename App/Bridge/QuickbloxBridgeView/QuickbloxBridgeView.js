//  Created by react-native-create-bridge

import React from 'react';
import { requireNativeComponent } from 'react-native';

const QuickbloxBridge = requireNativeComponent('QuickbloxBridge', QuickbloxBridgeView);

class QuickbloxBridgeView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
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
}

export default QuickbloxBridgeView;
