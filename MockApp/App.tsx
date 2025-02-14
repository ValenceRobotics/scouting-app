import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Checkbox, Provider as PaperProvider } from 'react-native-paper';

const ScoutingApp = () => {
  const [autonCoralLow, setAutonCoralLow] = useState(0);
  const [autonCoralMid, setAutonCoralMid] = useState(0);
  const [autonCoralHigh, setAutonCoralHigh] = useState(0);
  const [leave, setLeave] = useState(false);

  const [teleopCoralLow, setTeleopCoralLow] = useState(0);
  const [teleopCoralMid, setTeleopCoralMid] = useState(0);
  const [teleopCoralHigh, setTeleopCoralHigh] = useState(0);
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
        <Text>Coral Scored (Low): {autonCoralLow}</Text>
        <Button title="+" onPress={() => setAutonCoralLow(autonCoralLow + 1)} />
        <Text>Coral Scored (Mid): {autonCoralMid}</Text>
        <Button title="+" onPress={() => setAutonCoralMid(autonCoralMid + 1)} />
        <Text>Coral Scored (High): {autonCoralHigh}</Text>
        <Button title="+" onPress={() => setAutonCoralHigh(autonCoralHigh + 1)} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={leave ? 'checked' : 'unchecked'} onPress={() => setLeave(!leave)} />
          <Text>Left Starting Area</Text>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Teleoperated</Text>
        <Text>Coral Scored (Low): {teleopCoralLow}</Text>
        <Button title="+" onPress={() => setTeleopCoralLow(teleopCoralLow + 1)} />
        <Text>Coral Scored (Mid): {teleopCoralMid}</Text>
        <Button title="+" onPress={() => setTeleopCoralMid(teleopCoralMid + 1)} />
        <Text>Coral Scored (High): {teleopCoralHigh}</Text>
        <Button title="+" onPress={() => setTeleopCoralHigh(teleopCoralHigh + 1)} />
        <Text>Algae Removed: {algaeRemoved}</Text>
        <Button title="+" onPress={() => setAlgaeRemoved(algaeRemoved + 1)} />
        <Text>Algae Scored in Barge: {algaeBarge}</Text>
        <Button title="+" onPress={() => setAlgaeBarge(algaeBarge + 1)} />
        <Text>Algae Scored in Processor: {algaeProcessor}</Text>
        <Button title="+" onPress={() => setAlgaeProcessor(algaeProcessor + 1)} />
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
