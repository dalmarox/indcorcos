import { StatusBar,StyleSheet,useWindowDimensions } from 'expo-status-bar'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import MainNavigator from './src/navigation/MainNavigator'
import colors from './src/utils/globals/colors'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'

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
      <StatusBar backgroundColor={colors.primary} />
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
