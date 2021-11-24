import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Tasks from './components/Tasks'

export default function App() {

  const [task, setTask] = useState();

  const [taskItems, setTaskItem] = useState([]);

  const addTask = () => {

    setTaskItem([...taskItems, task])
    setTask(null);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.toDoHome}>
        <Text style={styles.toDoTitle}> To-Do List  </Text>
        <View style={styles.taskItem}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                  <Tasks text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView style={styles.taskName}>
        <TextInput style={styles.taskNameText} placeholder={'Write here'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addTask}>
            <Image source={{ uri: 'https://www.iconsdb.com/icons/preview/black/plus-xxl.png' }} style={styles.addTaskText}></Image>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D1',
  },
  toDoHome: {
    paddingTop: 90,
    paddingHorizontal: 30,
  },
  toDoTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  taskItem: {

  },
  taskName: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',


  },
  taskNameText: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60,
    backgroundColor: '#FFF2AB',
    borderWidth: 1,

  },
  addTask: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF2AB',
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',


  },
  addTaskText: {
    height: 30,
    width: 30,

  },

});
