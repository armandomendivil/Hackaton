import React, {
  Component,
  PropTypes
} from 'react-native'
import LeftButton from './LeftButton'
import NavigationBar from 'react-native-navbar';
import RightButton from './RightButton'

export default class NavBar extends Component {
  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
  };
  render() {
    let {openDrawer} = this.props
    const { onLogoutClick, isAuthenticated } = this.props
    const {route} = this.props
    return (
        <NavigationBar
          title={route.passProps.titleConfig}
          tintColor={'#3CB878'}
          rightButton={<RightButton route={ route } navigator={ this.props.navigator } onLogoutClick = {onLogoutClick} isAuthenticated={isAuthenticated} />}
          leftButton={<LeftButton route={ route } navigator={ this.props.navigator } openDrawer={ openDrawer }/>}
        />
    );
  }
}
