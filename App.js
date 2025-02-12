import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => {
      //     setData(response.data)
      //   }).catch(error => {
        //     Alert.alert("Error", "Something went wrong!!")
        //     console.error("Error: ", error)
        //   });
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      userId: 1,
      title: "Hello Jarvis",
      body: "Jarvis is not ready"
    }).then(response => console.log("Post Response: ", response.data))
      .catch((error) => console.error("Error posting", error))
      }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
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
});

export default App;
