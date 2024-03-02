import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import colors from "../utils/globals/colors";



const CounterCart = ({value}) => {
  

  return (
    <View style={styles.counterContainer}>
      <Button title="+" onPress={() => setCount("sumar")} />
      
      <Text
        style={styles.input}>{value}</Text>
      
      <Button title="-" onPress={() => setCount("restar")} />
    </View>
  );
};

export default CounterCart;

const styles = StyleSheet.create({
  counterContainer: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  input: {
    
    width: 50,
    alignItems: "center",
    backgroundColor: colors.ligthGray,
  },
});
