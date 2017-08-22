import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAyCKIZ_DhOvS5VOGs68EejkTLB62BiGE8",
      authDomain: "manager-d9ce5.firebaseapp.com",
      databaseURL: "https://manager-d9ce5.firebaseio.com",
      projectId: "manager-d9ce5",
      storageBucket: "",
      messagingSenderId: "23701733302"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
