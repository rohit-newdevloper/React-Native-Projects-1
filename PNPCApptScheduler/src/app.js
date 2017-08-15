import React from 'react';
import { ScrollView, Image, View, Linking } from 'react-native';
import { Header, Button, ScheduleForm } from './components/common';

const App = () => {
  const { imgContainer } = styles;

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header headerText="Book an appointment" />
      <View
        style={imgContainer}>
        <Image
          source={require('./img/BNBLogo.png')}
        />
        <Image
          source={require('./img/PNPCLogo.png')}
        />
      </View>
      <ScheduleForm />
      <View style={{paddingTop: 10}}>
      <Button>
        Submit
      </Button>
    </View>
    </ScrollView>
  );
};

const styles = {
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15
  }
}

export default App;
