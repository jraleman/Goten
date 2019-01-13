import React from 'react';

import { Text } from 'native-base';

class ChangePassword extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <React.Fragment>
                <Text>{ 'ChangePassword' }</Text>
            </React.Fragment>
        );
    }
}

export default ChangePassword;