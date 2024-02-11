import { StyleSheet } from 'react-native'
import React from 'react'
import Home from './src/screen/Home'
import { useEffect,useState } from 'react'
import ProductsByCategory from './src/screen/ProductsByCategory'
import { useFonts } from 'expo-font'
import { fontCollection } from './src/utils/globals/fonts'



const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)

  const [categorySelected, setCategorySelected]= useState("")
 

  const selectedCategoryState= (category)=> {
    setCategorySelected(category)
  }

 

  useEffect(()=>{},[categorySelected])
  return (
    <>
    {categorySelected?
      <ProductsByCategory categorySelected={categorySelected}/>
      :
     <Home selectedCategoryState={selectedCategoryState}/>
  }
    </>


  )
}

export default App

const styles = StyleSheet.create({})
