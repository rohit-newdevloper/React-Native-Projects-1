import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCvfXy3O3wj2jIBXIuyNW39za39reGxM20',
      authDomain: 'auth-f151d.firebaseapp.com',
      databaseURL: 'https://auth-f151d.firebaseio.com',
      projectId: 'auth-f151d',
      storageBucket: 'auth-f151d.appspot.com',
      messagingSenderId: '61967848974'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  }
  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
