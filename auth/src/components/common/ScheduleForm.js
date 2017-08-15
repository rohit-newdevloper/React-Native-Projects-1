import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {Card, CardSection, Input, StateDropdown} from './'



class ScheduleForm extends Component {
  render() {
    return (
      <View>
      <Card>
        <CardSection>
          <Text style={this.textStyle}>Your Information {"\n"}
          <Text style={{fontSize: 12}}>All fields marked with * are required</Text></Text>
        </CardSection>
        <CardSection>
          <Input
            placeholder="Your first name"
            label="First Name *"
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Your last name"
            label="Last Name *"
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="123 Puppy Road"
            label="Address *"
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Apt. 2"
            label="Address 2"
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Dogsville"
            label="City *"
          />
        </CardSection>
      </Card>
        <StateDropdown />
        <Card>
        <CardSection>
          <Input
            placeholder="ZIP code"
            label="ZIP Code *"
          />
        </CardSection>
        <Input
          placeholder="puppy123@email.com"
          label="E-Mail *"
        />
      </Card>
    </View>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 25
  }
};
export {ScheduleForm}
