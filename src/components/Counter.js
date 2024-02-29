import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import {useState} from'react'
import colors from '../utils/globals/colors'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'

const Counter = ({initialValue,textButton,product}) => {
  const dispatch = useDispatch()
   const count = useSelector ((state)=> state.counter.value)
   const[number,setNumber] = useState(0)
  return (
    <View style ={styles.counterContainer}>
        <Button title= "+" onPress={()=> dispatch (increment()) }/>
      <Text>{count}</Text>
      <Button title ="-" onPress={()=> dispatch(decrement())}/>
      <TextInput style={styles.input} value={count.toString()} onChangeText={ (t)=> setNumber (parseInt(t))}/>
      <Button title='Carrito' onPress ={ () => dispatch( incrementByAmount(number))}/>
     
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
      counterContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        margin:10,
       
      },
      input: {
        borderWidth: 2,
        width: 50,
        borderRadius: 10,
        backgroundColor:colors.ligthGray,
      }

})