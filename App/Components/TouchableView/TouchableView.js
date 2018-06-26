import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

class TouchableView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <TouchableOpacity { ...this.props }>
        <View>
          <Text>{ "Dummy TouchableView" }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TouchableView;
