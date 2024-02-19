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
    <Header/>
    <View style={[styles.content,{flexDirection:"column",gap:10,padding:10}] } >
      <View>
        <Image
          style={styles.image}
          source={{uri :product?.images? product.images[0] :null}}
          resizeMode='cover'
        />
      </View>
        <View style={[styles.containerText,!portrait && {width:"10%"}]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={[styles.containerPrice ,!portrait && {width:"20%",flexDirection:"column"}]}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
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
    alignItems:"center"
  },
  content:{
    minwidth:"80%",
    minheight: "80%",
    justifyContent:"center",
    alignItems:"center"
  },

  image:{
    
    width:"100%",
    height:300
  },
  containerText:{
    gap:30,
    paddingHorizontal:40,
    paddingVertical:20,
    gap:10
  },

  containerPrice:{
      width:"100%",
      flexDirection:"column",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:10
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  price:{
    fontSize:30
  },
  buyNow:{
    backgroundColor:colors.ligthGray,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  buyNowText:{
    color:"black",
    fontSize: 20
  }
})