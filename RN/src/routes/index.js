import Main from '../scenes/Main'
import Logout from '../scenes/Logout'
import Login from '../scenes/Login'
export const getLayoutScreen = (options) => {
	return {
		name: 'Main',
		component: Main,
		passProps: {
      titleConfig:{
        tintColor:'#ffffff',
        title: 'Event Summary',
      },
      leftButtonConfig:'Main',
      drawerOpen: false,
      drawerDisabled: false,
    }
	};
}

export const getLoginScreen = (options) => {
  return {
    name: 'Login',
    component: Login,
    passProps: {}
  };
}

export const getLogoutScreen = (options) => {
  return {
    name: 'Logout',
    component: Logout,
    passProps: {}
  };
}
