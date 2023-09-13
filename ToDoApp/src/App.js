import { useState } from "react";
import { Alert, Button, FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import TaskCard from "./TaskCard/TaskCard.jsx";

function App() {
  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    console.log(input);
    if(input){
      setTodoList([...todoList, 
        {id: todoList.length+1, title: input, isDone: false}
      ])
      setInput('')
    } else {
      Alert.alert('Error', 'Please enter a task')
    }
  }
  const renderTask = ({item}) => <TaskCard task={item} />


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" animated={true} backgroundColor={'pink'} showHideTransition={'slide'}/>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Todos</Text>
        <Text style={styles.heading}>{todoList.length}</Text>
      </View>
      <FlatList
        data={todoList}
        renderItem={renderTask}
        keyExtractor={item => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput value={input} onChangeText={setInput} style={styles.input} placeholder="Task to do..." placeholderTextColor={'white'}/>
        <Pressable style={styles.addButton} onPress={addTodo}>
          <Text style={styles.buttonText} >Add</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  headingContainer:{
    padding:20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'orange'
  },
  inputContainer:{
    backgroundColor:'#36474F',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  input:{
    color: 'white',
    margin: 10,
    marginBottom: 0,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontSize: 17,
  },
  addButton:{
    backgroundColor: 'orange',
    marginHorizontal: 20,
    marginVertical: 12,
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  }
});

export default App;
