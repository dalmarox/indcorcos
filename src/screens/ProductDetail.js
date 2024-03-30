import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import colors from '../utils/globals/colors'
import Counter from '../components/Counter'

import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { useGetProductQuery } from '../app/services/shop'

const ProductDetail = ({route}) => {
  const dispatch = useDispatch()
  const {productId} = route.params
  const {data:product,isLoading} = useGetProductQuery(productId)

  if(isLoading) return <View><Text>cargando...</Text></View>

  return (
    <View style={styles.container}>
    <View style={styles.content} >
        <Image
          style={styles.image}
          source={{uri:product?.images}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text>{product?.description}</Text>
        </View>
        <View style={styles.containerPrice }>
          <Text style={styles.price}>$ {product?.price}</Text>
          <Pressable style={styles.buyNow} onPress={()=>dispatch(addCartItem(product))}>
            <Text style={styles.buyNowText}>Carrito</Text>
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
    
  },
  content:{
    width: "100%",
    
 },

  image:{
    
    width:200,
    height:200,
    Top:80,
    left:80

  },
  containerText:{
    gap:25,
    justifyContent:"center",
    alignItems:"center" ,
    paddingHorizontal:5,
    marginVertical:25,  
    
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
    color:colors.blue,
    fontSize: 25,
    bottom:60,
   
  },
  }
})