import React, { Component, PropTypes, Navigator, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { loginUser, logoutUser, fetchQuote, fetchSecretQuote } from '../actions/index'
import Navbar from '../components/Navbar'
import Drawer from 'react-native-drawer'
import SideMenu from '../scenes/SideMenu'
import Main from '../scenes/Main'
import NavigationBar from 'react-native-navbar';
import styles from '../components/Styles'

export default class App extends Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };

  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  onLogoutClick = () =>{
    this._drawer.close()
    this.props.dispatch(logoutUser())
  }
  renderScene = (route, nav) => {
    const { state, actions, dispatch } = this.props;
    const Component = route.component;
        return (
          <View style={{flex: 1,alignItems: 'stretch',}}>
              <Drawer
               ref={(ref) => this._drawer = ref}
               type="displace"
               content={ <SideMenu closeDrawer={ this.closeDrawer } onLogoutClick={ this.onLogoutClick } navigator={ nav }/> }
               acceptDoubleTap
               onOpen={() => {this.setState({drawerOpen: true})}}
               onClose={() => {this.setState({drawerOpen: false})}}
               tweenDuration={ 100 }
               panThreshold={ 0.08 }
               disabled={ this.state.drawerDisabled }
               openDrawerOffset={ 0.2 }
               panOpenMask={ 0.2 }
               negotiatePan
               >
               <View>
                   <Navbar route={ route }
                    openDrawer={ this.openDrawer }
                    navigator={ nav }
                  />
                <Component { ...route.props } { ...actions }
                  data={ state } topNavigator={ nav }
                  dispatch={dispatch}
                  navigator={ nav }
                  route={ route }
                />
                </View>
              </Drawer>
          </View>
        );
  }

  render() {

    return (
      <Navigator
        initialRoute={{
          name: 'Main',
          component: Main,
          passProps: {
            titleConfig:{
              tintColor:'#ffffff',
              title: '',
            }
          }
          }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
      />
    )
  }
}
export default (App)
