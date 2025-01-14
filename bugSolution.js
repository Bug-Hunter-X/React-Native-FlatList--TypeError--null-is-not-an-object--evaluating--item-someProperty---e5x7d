/* bugSolution.js */
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: 1, name: 'Item 1', value: 10 },
  { id: 2, name: 'Item 2', value: 20 },
  { id: 3, name: 'Item 3' }, // Missing value property
  { id: 4, name: 'Item 4', value: 40 },
  null, //Null object
  { id: 5, name: 'Item 5', value: 50 },
];

const Item = ({ item }) => (
  <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
    {item && (
      <Text>
        ID: {item.id}, Name: {item.name}, Value: {item.value ?? 'N/A'}
      </Text>
    )}
  </View>
);

const App = () => {
  return (
    <FlatList
      data={data.filter(item => item !== null)}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
export default App;