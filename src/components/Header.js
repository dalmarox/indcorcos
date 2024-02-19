import { StyleSheet, Text, View, Image, Pressable,Platform,StatusBar} from 'react-native'
import colors from'../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import {AntDesign} from "@expo/vector-icons"


const Header = ({title="Industrias Corcos", navigation}) => {
  return (
    <View style={styles.container}>
           {navigation.canGoBack() && 
    <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="black"/>
    </Pressable>}
    <Text style={styles.text}>{title}</Text>
</View>

  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        paddingTop: 20,
        height:80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position:"relative"
    },
    text:{
        color: "#ffff",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily:fonts.JosefinSansBold
        
             },
    goBack:{
      position: "absolute",
      left:18,
      bottom: 15

    }
})