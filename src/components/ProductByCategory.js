import { StyleSheet, Text, Image, Pressable,ImageBackground } from 'react-native'

import colors from '../utils/globals/colors'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};



const ProductByCategory = ({item,selectedProductId}) => {
  return (
    <Pressable onPress={()=>selectedProductId(item.id)} style={styles.container}>
      <Text style={styles.text}>{item.id}{item.title}</Text>
     <Image style={styles.image} source={{uri: item.images}} resizeMode="cover"/>
    </Pressable>
  )
}
export default ProductByCategory

const styles = StyleSheet.create({
   container:{
    backgroundColor: colors.green2,
    width:"80%",
    marginHorizontal:"10%",
    marginVertical:10,
    padding:10,
    borderRadius:10,
    flexDirection:"row",
    alignItems: "center",
    gap:20
    
  

   },
   text:{
    
    fontSize: 16,
    color: "white",
    
   },
 image:{
    minWidth: 90,
    minHeight:90,
    
    borderRadius:5,



 }
})