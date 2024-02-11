import { StyleSheet, Text, View, Image} from 'react-native'
import colors from'../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Header = ({title="Industrias Corcos"}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color: "#ffff",
        fontSize: 23,
        fontWeight: "bold",
        fontFamily:fonts.JosefinSansBold
        
             },
})