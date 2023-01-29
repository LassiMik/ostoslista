import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import React from 'react';

export default function App() {

  const [sItem, setsItem] = React.useState('');
  const [sItems, setsItems] = React.useState([]);

  const listSeparator = () => {
    return (
      <View style={{ height: 1, backgroundColor: 'blue' }} />
    );
  }

  const clearList = () => {
    setsItems([]);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        value={sItem}
        onChangeText={text => setsItem(text)}
      />
      <Button
        title='Add item to shopping list'
        onPress={() => setsItems([...sItems, sItem])} />
      <Button
        title='Clear'
        onPress={clearList} />
      <Text>Shopping List</Text>
      <FlatList
        data={sItems}
        renderItem={({ item }) => <Text style={{ fontSize: 18 }}>{item}</Text>}
        // keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={listSeparator}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
