//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const QuickbloxBridge = requireNativeComponent('QuickbloxBridge', QuickbloxBridgeView)

export default class QuickbloxBridgeView extends Component {
  render () {
    return <QuickbloxBridge {...this.props} />
  }
}

QuickbloxBridgeView.propTypes = {
  exampleProp: React.PropTypes.string
}
