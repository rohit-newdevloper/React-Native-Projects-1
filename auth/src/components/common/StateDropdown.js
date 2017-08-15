import React, {Component} from 'react';
import { View, Text, Picker } from 'react-native'
import {CardSection} from './CardSection'

class StateDropdown extends Component {
  state = {states: ''}

  updateStates = (states) => {
    this.setState({states: states})
  }

  render() {
    return (
    <View>
      <Picker selectedValue = {this.state.states} onValueChange = {this.updateStates} mode="dropdown">
          <Picker.Item value="State" label="State *">State*</Picker.Item>
          <Picker.Item value="AL" label="Alabama">Alabama</Picker.Item>
        	<Picker.Item value="AK" label="Alaska">Alaska</Picker.Item>
        	<Picker.Item value="AZ" label="Arizona">Arizona</Picker.Item>
        	<Picker.Item value="AR" label="Arkansas">Arkansas</Picker.Item>
        	<Picker.Item value="CA" label="California">California</Picker.Item>
        	<Picker.Item value="CO" label="Colorado">Colorado</Picker.Item>
        	<Picker.Item value="CT" label="Connecticut">Connecticut</Picker.Item>
        	<Picker.Item value="DE" label="Delaware">Delaware</Picker.Item>
        	<Picker.Item value="DC" label="District Of Columbia">District Of Columbia</Picker.Item>
        	<Picker.Item value="FL" label="Florida">Florida</Picker.Item>
        	<Picker.Item value="GA" label="Georgia">Georgia</Picker.Item>
        	<Picker.Item value="HI" label="Hawaii">Hawaii</Picker.Item>
        	<Picker.Item value="ID" label="Idaho">Idaho</Picker.Item>
        	<Picker.Item value="IL" label="Illinois">Illinois</Picker.Item>
        	<Picker.Item value="IN" label="Indiana">Indiana</Picker.Item>
        	<Picker.Item value="IA" label="Iowa">Iowa</Picker.Item>
        	<Picker.Item value="KS" label="Kansas">Kansas</Picker.Item>
        	<Picker.Item value="KY" label="Kentucky">Kentucky</Picker.Item>
        	<Picker.Item value="LA" label="Louisiana">Louisiana</Picker.Item>
        	<Picker.Item value="ME" label="Maine">Maine</Picker.Item>
        	<Picker.Item value="MD" label="Maryland">Maryland</Picker.Item>
        	<Picker.Item value="MA" label="Massachusetts">Massachusetts</Picker.Item>
        	<Picker.Item value="MI" label="Michigan">Michigan</Picker.Item>
        	<Picker.Item value="MN" label="Minnesota">Minnesota</Picker.Item>
        	<Picker.Item value="MS" label="Mississippi">Mississippi</Picker.Item>
        	<Picker.Item value="MO" label="Missouri">Missouri</Picker.Item>
        	<Picker.Item value="MT" label="Montana">Montana</Picker.Item>
        	<Picker.Item value="NE" label="Nebraska">Nebraska</Picker.Item>
        	<Picker.Item value="NV" label="Nevada">Nevada</Picker.Item>
        	<Picker.Item value="NH" label="New Hampshire">New Hampshire</Picker.Item>
        	<Picker.Item value="NJ" label="New Jersey">New Jersey</Picker.Item>
        	<Picker.Item value="NM" label="New Mexico">New Mexico</Picker.Item>
        	<Picker.Item value="NY" label="New York">New York</Picker.Item>
        	<Picker.Item value="NC" label="North Carolina">North Carolina</Picker.Item>
        	<Picker.Item value="ND" label="North Dakota">North Dakota</Picker.Item>
        	<Picker.Item value="OH" label="Ohio">Ohio</Picker.Item>
        	<Picker.Item value="OK" label="Oklahoma">Oklahoma</Picker.Item>
        	<Picker.Item value="OR" label="Oregon">Oregon</Picker.Item>
        	<Picker.Item value="PA" label="Pennsylvania">Pennsylvania</Picker.Item>
        	<Picker.Item value="RI" label="Rhode Island">Rhode Island</Picker.Item>
        	<Picker.Item value="SC" label="South Carolina">South Carolina</Picker.Item>
        	<Picker.Item value="SD" label="South Dakota">South Dakota</Picker.Item>
        	<Picker.Item value="TN" label="Tennessee">Tennessee</Picker.Item>
        	<Picker.Item value="TX" label="Texas">Texas</Picker.Item>
        	<Picker.Item value="UT" label="Utah">Utah</Picker.Item>
        	<Picker.Item value="VT" label="Vermont">Vermont</Picker.Item>
        	<Picker.Item value="VA" label="Virginia">Virginia</Picker.Item>
        	<Picker.Item value="WA" label="Washington">Washington</Picker.Item>
        	<Picker.Item value="WV" label="West Virginia">West Virginia</Picker.Item>
        	<Picker.Item value="WI" label="Wisconsin">Wisconsin</Picker.Item>
        	<Picker.Item value="WY" label="Wyoming">Wyoming</Picker.Item>
      </Picker>
    </View>
    )
  }
}

export {StateDropdown};
