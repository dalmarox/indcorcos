import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import colors from '../utils/globals/colors'



const TabBarIcon = ({title,nameIcon,focused}) => {
  return (
    <View>
     <Ionicons name={nameIcon} size={25} color={focused ? colors.blue:colors.green1}/>  
      <Text style={[styles.text,!focused && styles.textFocused]} >{title}</Text>
    
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text:{
        color:colors.pink,
        textAlign:"center",
        fontSize:15
    },
    textFocused:{
        color: colors.blue
    }

})