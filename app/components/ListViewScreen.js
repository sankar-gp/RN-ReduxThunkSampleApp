import React, { Component } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert } from "react-native";
import PropTypes from "prop-types";

const DATA = [
  {
    id: "1",
    title: "ONE",
  },
  {
    id: "2",
    title: "TWO",
  },
  {
    id: "3",
    title: "THREE",
  },
  {
    id: "4",
    title: "FOUR",
  },
  {
    id: "5",
    title: "FIVE",
  },
  {
    id: "6",
    title: "SIX",
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class ListViewScreen extends Component {

  static propTypes = {
    callListService: PropTypes.func,
  }

  componentDidMount(){
    this.props.callListService()
  }

  _loading() {
    if(this.props.showUserLoading == true){
      Alert.alert("loading called")
    }else{
      return(<View></View>)
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._loading()}
        <Text>{this.props.data}</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
