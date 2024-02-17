import { StyleSheet } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({navigation}) => {
    
  return (
    <>
        <Header title="Industrias Corcos"/>
        <Categories navigation={navigation}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})