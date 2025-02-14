import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Checkbox, Provider as PaperProvider } from 'react-native-paper';

const ScoutingApp = () => {
  const [autonCoralL1, setAutonCoralL1] = useState(0);
  const [autonCoralL2, setAutonCoralL2] = useState(0);
  const [autonCoralL3, setAutonCoralL3] = useState(0);
  const [leave, setLeave] = useState(false);

  const [teleopCoralL1, setTeleopCoralL1] = useState(0);
  const [teleopCoralL2, setTeleopCoralL2] = useState(0);
  const [teleopCoralL3, setTeleopCoralL3] = useState(0);
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
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Autonomous</Text>
        <Text>Coral Scored (L1): {autonCoralL1}</Text>
        <Button title="+" onPress={() => setAutonCoralL1(autonCoralL1 + 1)} />
        <Button title="-" onPress={() => setAutonCoralL1(Math.max(0, autonCoralL1 - 1))} />
        <Text>Coral Scored (L2): {autonCoralL2}</Text>
        <Button title="+" onPress={() => setAutonCoralL2(autonCoralL2 + 1)} />
        <Button title="-" onPress={() => setAutonCoralL2(Math.max(0, autonCoralL2 - 1))} />
        <Text>Coral Scored (L3): {autonCoralL3}</Text>
        <Button title="+" onPress={() => setAutonCoralL3(autonCoralL3 + 1)} />
        <Button title="-" onPress={() => setAutonCoralL3(Math.max(0, autonCoralL3 - 1))} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={leave ? 'checked' : 'unchecked'} onPress={() => setLeave(!leave)} />
          <Text>Left Starting Area</Text>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Teleoperated</Text>
        <Text>Coral Scored (L1): {teleopCoralL1}</Text>
        <Button title="+" onPress={() => setTeleopCoralL1(teleopCoralL1 + 1)} />
        <Button title="-" onPress={() => setTeleopCoralL1(Math.max(0, teleopCoralL1 - 1))} />
        <Text>Coral Scored (L2): {teleopCoralL2}</Text>
        <Button title="+" onPress={() => setTeleopCoralL2(teleopCoralL2 + 1)} />
        <Button title="-" onPress={() => setTeleopCoralL2(Math.max(0, teleopCoralL2 - 1))} />
        <Text>Coral Scored (L3): {teleopCoralL3}</Text>
        <Button title="+" onPress={() => setTeleopCoralL3(teleopCoralL3 + 1)} />
        <Button title="-" onPress={() => setTeleopCoralL3(Math.max(0, teleopCoralL3 - 1))} />
        <Text>Algae Removed: {algaeRemoved}</Text>
        <Button title="+" onPress={() => setAlgaeRemoved(algaeRemoved + 1)} />
        <Button title="-" onPress={() => setAlgaeRemoved(Math.max(0, algaeRemoved - 1))} />
        <Text>Algae Scored in Barge: {algaeBarge}</Text>
        <Button title="+" onPress={() => setAlgaeBarge(algaeBarge + 1)} />
        <Button title="-" onPress={() => setAlgaeBarge(Math.max(0, algaeBarge - 1))} />
        <Text>Algae Scored in Processor: {algaeProcessor}</Text>
        <Button title="+" onPress={() => setAlgaeProcessor(algaeProcessor + 1)} />
        <Button title="-" onPress={() => setAlgaeProcessor(Math.max(0, algaeProcessor - 1))} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={defense ? 'checked' : 'unchecked'} onPress={() => setDefense(!defense)} />
          <Text>Played Defense</Text>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Endgame</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={park ? 'checked' : 'unchecked'} onPress={() => setPark(!park)} />
          <Text>Parked</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={deepClimb ? 'checked' : 'unchecked'} onPress={() => setDeepClimb(!deepClimb)} />
          <Text>Deep Climb</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={shallowClimb ? 'checked' : 'unchecked'} onPress={() => setShallowClimb(!shallowClimb)} />
          <Text>Shallow Climb</Text>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Notes</Text>
        <TextInput 
          style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
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
