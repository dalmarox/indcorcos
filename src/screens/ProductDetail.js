import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import Counter from '../components/Counter'

const ProductDetail = ({route}) => {
  const dispatch = useDispatch()
  const {productId} = route.params
  const [product,setProduct] = useState({})

  useEffect(()=>{
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  },[productId])
   
  const handlerAddCartItem = (quantity) => {
    dispatch(addCartItem(...product,quantity))
  }
  return (
    
    <View style={styles.container}>
    <View style={[styles.content] } >
      <View>
      <Image style={styles.image}
          source={{uri: product.images}} 
          resizeMode='cover'
        />
      </View>
        <View style={[styles.containerText]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={[styles.containerPrice]}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Counter initialValue={1} handlerAddCartItem={handlerAddCartItem} textButton="Carrito"/>
          {
             /*<Pressable style={styles.buyNow} onPress={()=>dispatch(addCartItem(product))}>
            <Text style={styles.buyNowText}>Agregar al carrito</Text>
          </Pressable>
           */
          }
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
    flexDirection: "column"
  },
  content:{
    width: "100%"
 },

  image:{
    
    
    height:300,
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
    textAlign: "right",
    
  },
  price:{
    fontSize:20,
    paddingVertical:10,
    bottom:30
    
  },
  buyNow:{
    
    paddingVertical:10,
    paddingHorizontal:5,
    borderRadius:5,
    borderColor:"black",
    backgroundColor:colors.yellow,

  buyNowText:{
    color:"black",
    fontSize: 25,
    bottom:60,
   
  },
  }
})