import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import colors from '../utils/globals/colors'



const TabBarIcon = ({title,nameIcon,focused}) => {
  return (
    <View>
     <Ionicons name={nameIcon} size={40} color={focused ? colors.primary:colors.black}/>  
      <Text style={[styles.text,!focused && styles.textFocused]} >{title}</Text>
    
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
      
        
        
    },
    text:{
        color:"black",
        textAlign:"center",
        fontSize:14,
    
    },
    textFocused:{
        color: colors.black
    }

})