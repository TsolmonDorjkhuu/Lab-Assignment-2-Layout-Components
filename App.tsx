import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState(['Buy groceries', 'Walk the dog', 'Read a book']);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      {/* ToDo List */}
      <ScrollView style={styles.list}>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.task}>
            {task}
          </Text>
        ))}
      </ScrollView>

      {/* ToDo Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={newTask}
          onChangeText={setNewTask}
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  list: { marginBottom: 20 },
  task: { padding: 10, fontSize: 18, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  form: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, marginRight: 10, borderRadius: 5 },
});

export default App;
