import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import {
  Container,
  Content,
  ListView,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import { loadCategories } from '../../Redux/Modules/Categories/actions';

class CategoriesScreen extends React.Component {
  static propTypes = {
    categories: PropTypes.array
  }
  componentWillMount () {
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      DataSource: this.ds.cloneWithRows(this.props.categories)
    };
    render () {
      <Container style={ styles.container }>
        <Content>
          <Text style={ styles.toolbar }>{ "Categories" }</Text>
          <ListView
            dataSource={ this.state.dataSource }
            renderRow={ (rowData) => <Text>{ rowData.name }</Text>}
            enableEmptySections={ true }
          />
        </Content>
      </Container>
    }
  }
}

export default CategoriesScreen;
