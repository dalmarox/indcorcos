import { StyleSheet, Text, Image, Pressable } from 'react-native'

import colors from '../utils/globals/colors'

const ProductByCategory = ({item}) => {
  return (
    <Pressable onPress={()=>selectedProductId(item.id)} style={styles.container}>
      <Text style={styles.text}>{item.id}{item.title}</Text>
     <Image style={styles.image} source={require( products.images)} resizeMode="cover"/>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
   container:{
    backgroundColor: colors.primary,
    width:"80%",
    marginHorizontal:"10%",
    marginVertical:10,
    padding:10,
    borderRadius:10,
    flexDirection:"row",
    gap:20,

   },
   text:{
    fontSize: 15,
    color: "white",
   },
 image:{
    minWidth: 90,
    minHeight:90,
    width:"30%",
    borderRadius:5,



 }
})