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
    flex:1,
    width:"70%",
    marginHorizontal:"10%",
    marginVertical:5,
    padding:5,
    borderRadius:10,
    flexDirection:"column",
    alignItems: "center",
    gap:20
    
  

   },
   text:{
    width:"100%",
    fontSize: 18,
    color: "black",
    fontFamily: fonts.JosefinSansBold
    
   },
 image:{

    minWidth: 200,
    minHeight:200,
    
    borderRadius:5,

 }
})