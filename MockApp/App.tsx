import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
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

  const renderCounter = (label, state, setState) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 2 }}>
      <Text style={{ fontSize: 22 }}>{label}: {state}</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setState(state + 1)} style={styles.button}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setState(Math.max(0, state - 1))} style={styles.button}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <PaperProvider>
      <ScrollView style={{ padding: 15, backgroundColor: 'white' }}>
        <Text style={styles.header}>Autonomous</Text>
        {renderCounter('Coral Scored (L1)', autonCoralL1, setAutonCoralL1)}
        {renderCounter('Coral Scored (L2)', autonCoralL2, setAutonCoralL2)}
        {renderCounter('Coral Scored (L3)', autonCoralL3, setAutonCoralL3)}
        {renderCounter('Coral Scored (L4)', autonCoralL4, setAutonCoralL4)}
        <View style={styles.checkboxContainer}>
          <Checkbox status={leave ? 'checked' : 'unchecked'} onPress={() => setLeave(!leave)} style={styles.checkbox} />
          <Text style={{ fontSize: 22 }}>Left Starting Area</Text>
        </View>

        <Text style={styles.header}>Teleoperated</Text>
        {renderCounter('Coral Scored (L1)', teleopCoralL1, setTeleopCoralL1)}
        {renderCounter('Coral Scored (L2)', teleopCoralL2, setTeleopCoralL2)}
        {renderCounter('Coral Scored (L3)', teleopCoralL3, setTeleopCoralL3)}
        {renderCounter('Coral Scored (L4)', teleopCoralL4, setTeleopCoralL4)}
        {renderCounter('Algae Removed', algaeRemoved, setAlgaeRemoved)}
        {renderCounter('Algae Scored in Barge', algaeBarge, setAlgaeBarge)}
        {renderCounter('Algae Scored in Processor', algaeProcessor, setAlgaeProcessor)}
        <View style={styles.checkboxContainer}>
          <Checkbox status={defense ? 'checked' : 'unchecked'} onPress={() => setDefense(!defense)} style={styles.checkbox} />
          <Text style={{ fontSize: 22 }}>Played Defense</Text>
        </View>

        <Text style={styles.header}>Endgame</Text>
        <View style={styles.checkboxContainer}>
          <Checkbox status={park ? 'checked' : 'unchecked'} onPress={() => setPark(!park)} style={styles.checkbox} />
          <Text style={{ fontSize: 22 }}>Parked</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox status={deepClimb ? 'checked' : 'unchecked'} onPress={() => setDeepClimb(!deepClimb)} style={styles.checkbox} />
          <Text style={{ fontSize: 22 }}>Deep Climb</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox status={shallowClimb ? 'checked' : 'unchecked'} onPress={() => setShallowClimb(!shallowClimb)} style={styles.checkbox} />
          <Text style={{ fontSize: 22 }}>Shallow Climb</Text>
        </View>

        <Text style={styles.header}>Notes</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="Enter notes here..."
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </ScrollView>
    </PaperProvider>
  );
};

const styles = {
  header: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 5
  },
  button: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    marginLeft: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 3,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    fontSize: 22,
    backgroundColor: 'white',
  }
};

export default ScoutingApp;
