import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, Button, ScrollView } from 'react-native';

const ScoutingApp = () => {
  const [autonomous, setAutonomous] = useState({ coralLow: 0, coralMid: 0, coralHigh: 0, leftZone: false });
  const [teleop, setTeleop] = useState({ coralLow: 0, coralMid: 0, coralHigh: 0, algaeRemoved: 0, algaeBarge: 0, algaeProcessor: 0, defense: false });
  const [endgame, setEndgame] = useState({ park: false, deepClimb: false, shallowClimb: false });
  const [notes, setNotes] = useState('');

  return (
    <ScrollView style={{ padding: 20 }}>
      {/* Autonomous Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Autonomous</Text>
      <Text>Coral Scored (Low): {autonomous.coralLow}</Text>
      <Button title="+" onPress={() => setAutonomous({ ...autonomous, coralLow: autonomous.coralLow + 1 })} />
      <Text>Coral Scored (Mid): {autonomous.coralMid}</Text>
      <Button title="+" onPress={() => setAutonomous({ ...autonomous, coralMid: autonomous.coralMid + 1 })} />
      <Text>Coral Scored (High): {autonomous.coralHigh}</Text>
      <Button title="+" onPress={() => setAutonomous({ ...autonomous, coralHigh: autonomous.coralHigh + 1 })} />
      <CheckBox value={autonomous.leftZone} onValueChange={(value) => setAutonomous({ ...autonomous, leftZone: value })} /><Text>Left Starting Zone</Text>

      {/* Teleoperated Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Teleoperated</Text>
      <Text>Coral Scored (Low): {teleop.coralLow}</Text>
      <Button title="+" onPress={() => setTeleop({ ...teleop, coralLow: teleop.coralLow + 1 })} />
      <Text>Coral Scored (Mid): {teleop.coralMid}</Text>
      <Button title="+" onPress={() => setTeleop({ ...teleop, coralMid: teleop.coralMid + 1 })} />
      <Text>Coral Scored (High): {teleop.coralHigh}</Text>
      <Button title="+" onPress={() => setTeleop({ ...teleop, coralHigh: teleop.coralHigh + 1 })} />
      <Text>Algae Removed: {teleop.algaeRemoved}</Text>
      <Button title="+" onPress={() => setTeleop({ ...teleop, algaeRemoved: teleop.algaeRemoved + 1 })} />
      <Text>Algae Scored (Barge): {teleop.algaeBarge}</Text>
      <Button title="+" onPress={() => setTeleop({ ...teleop, algaeBarge: teleop.algaeBarge + 1 })} />
      <Text>Algae Scored (Processor): {teleop.algaeProcessor}</Text>
      <Button title="+" onPress={() => setTeleop({ ...teleop, algaeProcessor: teleop.algaeProcessor + 1 })} />
      <CheckBox value={teleop.defense} onValueChange={(value) => setTeleop({ ...teleop, defense: value })} /><Text>Played Defense</Text>

      {/* Endgame Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Endgame</Text>
      <CheckBox value={endgame.park} onValueChange={(value) => setEndgame({ ...endgame, park: value })} /><Text>Park</Text>
      <CheckBox value={endgame.deepClimb} onValueChange={(value) => setEndgame({ ...endgame, deepClimb: value })} /><Text>Deep Climb</Text>
      <CheckBox value={endgame.shallowClimb} onValueChange={(value) => setEndgame({ ...endgame, shallowClimb: value })} /><Text>Shallow Climb</Text>

      {/* Notes Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Notes</Text>
      <TextInput
        placeholder="Enter notes here..."
        value={notes}
        onChangeText={setNotes}
        multiline
        style={{ borderWidth: 1, padding: 10, height: 100 }}
      />
    </ScrollView>
  );
};

export default ScoutingApp;
