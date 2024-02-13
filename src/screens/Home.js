import { StyleSheet } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({selectedCategoryState}) => {
    
  return (
    <>
        <Header title="Industrias Corcos"/>
        <Categories selectedCategoryState={selectedCategoryState}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})