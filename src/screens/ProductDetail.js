import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import Header from '../components/Header'

const ProductDetail = ({route,portrait}) => {
  const {productId} = route.params
  const [product,setProduct] = useState({})

  useEffect(()=>{
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  },[productId])

  return (
    
    <View style={styles.container}>
    <View style={[styles.content] } >
      <View>
        <Image
          style={styles.image}
          source={{uri :product?.images? product.images[0] :null}}
          resizeMode='cover'
        />
      </View>
        <View style={[styles.containerText]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={[styles.containerPrice]}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Comprar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center",
    flexDirection: "row"
  },
  content:{
    flexDirection:"column",
    gap:10,
    padding:10
 },

  image:{
    
    width:"50%",
    height:"50%"
  },
  containerText:{
    gap:25,
    justifyContent:"center",
    alignItems:"center" ,
    paddingHorizontal: 10,
    marginVertical:10,  
    
  },

  containerPrice:{
      width:"100%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginVertical:10,
      paddingHorizontal: 10,
  },
  title:{
    fontSize:15,
    fontWeight:"bold",
    textAlign: "right"
  },
  price:{
    fontSize:20,
    paddingVertical:10,
    bottom:50
    
  },
  buyNow:{
    
    paddingVertical:10,
    paddingHorizontal:5,
    borderRadius:5,
    borderColor:"black",
    backgroundColor:colors.yellow
  },
  buyNowText:{
    color:"black",
    fontSize: 20,
    bottom:60
  }
})