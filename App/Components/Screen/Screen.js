import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';

import styles from './styles';

class Screen extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const { children } = this.props;
        return (
            <React.Fragment>
                <AppHeader />
                <StatusBar />
                <Container style={ styles.container }>
                    <Content>
                        { children }
                    </Content>
                </Container>
            </React.Fragment>
        );
    }
}

export default Screen;