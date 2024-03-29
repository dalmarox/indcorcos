import { StyleSheet, Text, Image, Pressable } from 'react-native'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'




const ProductByCategory = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate ("ProductDetail", {productId:item.id})} style={styles.container}>
      <Text style={styles.text}>{item.id} {item.title}</Text>
     <Image style={styles.image} source={{uri: item.images}} resizeMode="cover"/>
    </Pressable>
  )
}
export default ProductByCategory

const styles = StyleSheet.create({
   container:{
    
    width:"80%",
    marginHorizontal:"10%",
    marginVertical:10,
    padding:10,
    borderRadius:10,
    flexDirection:"column",
    alignItems: "center",
    gap:20
    
  

   },
   text:{
    width:"60%",
    fontSize: 18,
    color: "black",
    fontFamily: fonts.JosefinSansBold
    
   },
 image:{

    minWidth: 180,
    minHeight:180,
    
    borderRadius:5,

 }
})