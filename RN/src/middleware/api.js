import { AsyncStorage } from 'react-native'
var Symbol = require('es6-symbol');
const BASE_URL = 'http://remsense.devstoyou.com/api/'

function callApi(endpoint, authenticated, token) {

  var token = token || null
  let config = {}
  var PARAMS = "";
  var REQUEST_URL = "";

  if(authenticated) {
    if(token) {
      PARAMS = `?token=${token}`
      REQUEST_URL = BASE_URL + endpoint + PARAMS
    } else {
      throw "No token saved!"
    }
  }

  return fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((response) => {
      console.log('response: ', response);
      for(var key in response) {
        switch(key) {
          case 'alerts':
            return response[key];
          case 'device':
            return response[key];
          case 'systems':
            return response[key];
          case 'message':
            if(response.message == 'Failed to authenticate token.')
              AsyncStorage.removeItem('id_token')
        }
      }

      return response;
    }).catch(err => console.log(err))
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {

  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, types, authenticated } = callAPI

  const [ requestType, successType, errorType ] = types

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return AsyncStorage.getItem('id_token')
    .then((token) => {
      callApi(endpoint, authenticated, token).then(
        response =>
          next({
            response,
            authenticated,
            type: successType
          }),
        error => next({
          error: error.message || 'There was an error.',
          type: errorType
        })
      )
    }).done();

}
