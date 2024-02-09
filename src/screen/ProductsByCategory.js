import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import products from'../utils/data/products.json' 
import { useEffect, useState } from 'react'
import ProductByCategory from' ../components/ProductByCategory'
import Search from' ../components/Search'

const ProductsByCategory = ({categorySelected, SelectedProductId}) => {
  const[productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }


  useEffect(()=>{
    if(categorySelected) setProductsFiltered(products.filter(product =>product.category ===categorySelected))},[categorySelected])
    if(keyword) setProductsFiltered(productsFiltered.filter(product => {
      const productTitleLower = product.title.toLowerCase()
      const keywordLower = keyword.toLowerCase()
      return productTitleLower.includes(keywordLower)
    }))}
  ([categorySelected,keyword])

  return (
    <>
   <Header title={categorySelected}/>
   <Search handlerKeyword={handlerKeyword}/>
   <FlatList
      data={productsFiltered}
      keyExtractor={item=>item.id}
      renderItem={({item})=><view><text>{item.title}</text></view>}
    />
    </>
  )
    

export default ProductsByCategory

const styles = StyleSheet.create({

})
