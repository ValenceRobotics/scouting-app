import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, { id: Date.now().toString(), value: text }]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple React Native App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
});
