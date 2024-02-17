import { SafeAreaView, StyleSheet,View,useWindowDimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import ProductDetail from'./src/screens/ProductDetail'
import colors from './src/utils/globals/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  const {width,height} = useWindowDimensions()
  const [portrait,setPortrait] = useState(true)

  useEffect(()=>{
    if(width > height) setPortrait(false) 
    else setPortrait(true)
  },[width,height])

  if(!fontsLoaded) return null


  return (
    <>
          <StatusBar backgroundColor={colors.primary }  />

          <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
          </Stack.Navigator>
          </NavigationContainer>

          
            

   
    </>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
