import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Todo } from './entities/Todo';

export default function App() {
  const handleAddTodo = () => {
    const newTodo = new Todo(todos[todos.length - 1].id + 1, text, false)
    console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo])
    
  }

  const [text, onChangeText] = useState('')
  const [todos, setTodos] = useState<Todo[]>(
    [
      new Todo(1, 'Go to the gym', false),
      new Todo(2, 'Call skat', false),
      new Todo(3, 'Buy coffee', false)
    ]
  )


  return (
    <View style={styles.container}>
       <Text>ToDo application</Text>
      <TextInput
      onChangeText={onChangeText}
      placeholder="Type your task here"
      value={text}
      style={styles.input}
      >hello again</TextInput>
      <StatusBar style="auto" />
      <Button 
      title="Add to list"
      onPress={handleAddTodo}
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});
