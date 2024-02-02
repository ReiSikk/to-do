import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { Todo } from './entities/Todo';

export default function App() {

  const handleAddTodo = () => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = new Todo(newId, text, false)
    console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo])
    
  }
 const handleDoneTodo = (todo: Todo) => {
  console.log('done');
  console.log(todos)
  const updatedTodos = todos.map((item) => {
    if (item.id === todo.id) {
      return {...item, done:true}
    }
    return item;
  })
  setTodos(updatedTodos)
  }

  const [text, onChangeText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const Item = ({ todo }: {todo: Todo}) => {
    return (
      !todo.done ? 
      <View style={styles.item}>
        <Text>{todo.task}</Text>
        <Button title="Done" onPress={() => handleDoneTodo(todo)}></Button>
      </View>
      : 
      <View style={styles.item}>
        <Text style={{textDecorationLine: 'line-through'}}>{todo.task}</Text>
        </View>
    )
  }


  return (
    <View style={styles.container}>
       <Text>ToDo application</Text>
      <TextInput
      onChangeText={onChangeText}
      placeholder="Type your task here"
      value={text}
      style={styles.input}
      ></TextInput>
      <StatusBar style="auto" />
      <Button 
      title="Add to list"
      onPress={handleAddTodo}
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      ></Button>
       <FlatList
        data={todos}
        renderItem={({item}) => <Item todo={item} />}
      />
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
  item: {
    backgroundColor: '#f2f2fa',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
  },
});
