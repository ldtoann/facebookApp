import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TodoList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.contentTop}>Top</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.contentCenter}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.contentBottom}>Bottom</Text>
        </View>
      </View>
    </View>
  );
};

export default TodoList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    backgroundColor: 'orange',
    flex: 1,
  },
  containerCenter: {
    backgroundColor: 'lightyellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 10,
  },
  containerBottom: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  top: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'darkorange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: 'yellow',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
    textAlign: 'right',
  },
  contentTop: {
    color: 'black',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'left',
  },
  contentCenter: {
    color: 'black',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  contentBottom: {
    color: 'black',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'right',
  },
});
