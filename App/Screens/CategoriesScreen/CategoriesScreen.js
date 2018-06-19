import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  ListView,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import { loadCategories } from '../../Redux/Modules/Categories/actions';
import styles from './styles';

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
    this.props.dispatch(loadCategories());
  }
  // Update the dataSource whenever there are any changes in the
  // categories array on the global state
  componentWillReceiveProps (nextProps) {
    if (this.props.categories !== nextProps.categories) {
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.categories)
      });
    }
  }
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

// Map and connect the data from state to the props
const mapStateToProps = (state) => {
  return ({
    categories: state.categories.all
  });
}

export default connect(mapStateToProps)(CategoriesScreen);
