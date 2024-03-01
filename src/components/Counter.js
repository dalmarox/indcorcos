import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import colors from "../utils/globals/colors";



const Counter = ({initialValue, handlerAddCartItem, textButton}) => {
  
  const [count,setCount] = useState(initialValue)
  


  return (
    <View style={styles.counterContainer}>
      <Button title="+" onPress={() => setCount(count+1)} />
      
      <Text
        style={styles.input}>{count}</Text>
      
      <Button title="-" onPress={() => setCount(count-1)} />
      <Button title={textButton} onPress={handlerAddCartItem(count)} />
    </View>
  );
};

export default Counter;

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
