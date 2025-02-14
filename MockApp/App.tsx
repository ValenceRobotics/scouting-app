import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Checkbox, Provider as PaperProvider } from 'react-native-paper';

const ScoutingApp = () => {
  const [autonCoralL1, setAutonCoralL1] = useState(0);
  const [autonCoralL2, setAutonCoralL2] = useState(0);
  const [autonCoralL3, setAutonCoralL3] = useState(0);
  const [autonCoralL4, setAutonCoralL4] = useState(0);
  const [leave, setLeave] = useState(false);

  const [teleopCoralL1, setTeleopCoralL1] = useState(0);
  const [teleopCoralL2, setTeleopCoralL2] = useState(0);
  const [teleopCoralL3, setTeleopCoralL3] = useState(0);
  const [teleopCoralL4, setTeleopCoralL4] = useState(0);
  const [algaeRemoved, setAlgaeRemoved] = useState(0);
  const [algaeBarge, setAlgaeBarge] = useState(0);
  const [algaeProcessor, setAlgaeProcessor] = useState(0);
  const [defense, setDefense] = useState(false);

  const [park, setPark] = useState(false);
  const [deepClimb, setDeepClimb] = useState(false);
  const [shallowClimb, setShallowClimb] = useState(false);
  const [notes, setNotes] = useState('');

  return (
    <PaperProvider>
      <ScrollView style={{ padding: 15 }}>
        <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Autonomous</Text>
        {[autonCoralL1, autonCoralL2, autonCoralL3, autonCoralL4].map((value, index) => (
          <View key={index} style={{ marginVertical: 2 }}>
            <Text style={{ fontSize: 22 }}>Coral Scored (L{index + 1}): {value}</Text>
            <Button title="+" onPress={() => eval(`setAutonCoralL${index + 1}(${value} + 1)`) } />
            <Button title="-" onPress={() => eval(`setAutonCoralL${index + 1}(Math.max(0, ${value} - 1))`)} />
          </View>
        ))}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={leave ? 'checked' : 'unchecked'} onPress={() => setLeave(!leave)} />
          <Text style={{ fontSize: 22 }}>Left Starting Area</Text>
        </View>

        <Text style={{ fontSize: 27, fontWeight: 'bold', marginTop: 15 }}>Teleoperated</Text>
        {[teleopCoralL1, teleopCoralL2, teleopCoralL3, teleopCoralL4].map((value, index) => (
          <View key={index} style={{ marginVertical: 2 }}>
            <Text style={{ fontSize: 22 }}>Coral Scored (L{index + 1}): {value}</Text>
            <Button title="+" onPress={() => eval(`setTeleopCoralL${index + 1}(${value} + 1)`) } />
            <Button title="-" onPress={() => eval(`setTeleopCoralL${index + 1}(Math.max(0, ${value} - 1))`)} />
          </View>
        ))}
        <Text style={{ fontSize: 22 }}>Algae Removed: {algaeRemoved}</Text>
        <Button title="+" onPress={() => setAlgaeRemoved(algaeRemoved + 1)} />
        <Button title="-" onPress={() => setAlgaeRemoved(Math.max(0, algaeRemoved - 1))} />
        <Text style={{ fontSize: 22 }}>Algae Scored in Barge: {algaeBarge}</Text>
        <Button title="+" onPress={() => setAlgaeBarge(algaeBarge + 1)} />
        <Button title="-" onPress={() => setAlgaeBarge(Math.max(0, algaeBarge - 1))} />
        <Text style={{ fontSize: 22 }}>Algae Scored in Processor: {algaeProcessor}</Text>
        <Button title="+" onPress={() => setAlgaeProcessor(algaeProcessor + 1)} />
        <Button title="-" onPress={() => setAlgaeProcessor(Math.max(0, algaeProcessor - 1))} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={defense ? 'checked' : 'unchecked'} onPress={() => setDefense(!defense)} />
          <Text style={{ fontSize: 22 }}>Played Defense</Text>
        </View>

        <Text style={{ fontSize: 27, fontWeight: 'bold', marginTop: 15 }}>Endgame</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={park ? 'checked' : 'unchecked'} onPress={() => setPark(!park)} />
          <Text style={{ fontSize: 22 }}>Parked</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={deepClimb ? 'checked' : 'unchecked'} onPress={() => setDeepClimb(!deepClimb)} />
          <Text style={{ fontSize: 22 }}>Deep Climb</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={shallowClimb ? 'checked' : 'unchecked'} onPress={() => setShallowClimb(!shallowClimb)} />
          <Text style={{ fontSize: 22 }}>Shallow Climb</Text>
        </View>

        <Text style={{ fontSize: 27, fontWeight: 'bold', marginTop: 15 }}>Notes</Text>
        <TextInput 
          style={{ borderWidth: 1, padding: 10, marginTop: 5, fontSize: 22 }}
          placeholder="Enter notes here..."
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </ScrollView>
    </PaperProvider>
  );
};

export default ScoutingApp;
