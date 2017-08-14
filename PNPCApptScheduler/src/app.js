import React from 'react';
import { ScrollView, Text, Picker } from 'react-native';
import { Header, CardSection, Card, Button, ScheduleForm } from './components/common';

const App = () => {

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header headerText="Book an appointment" />
      <ScheduleForm />

      <Button>
        Submit
      </Button>
    </ScrollView>
  );
};


export default App;
