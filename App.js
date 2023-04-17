import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const addContact = () => {
    setContacts([...contacts, { name: name }]);
    setName('');
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Texto"
          value={name}
          onChangeText={setName}
        />
        <Button title="Adicionar" onPress={addContact} />
      </View>
      <FlatList
        style={styles.list}
        data={contacts}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.item}>
            <TouchableOpacity onPress={() => deleteContact(index)}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.itemText}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  list: {
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
  },
  
});