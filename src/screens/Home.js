import { StyleSheet } from 'react-native'
import Header from '../components/Header'

import Categories from '../components/Categories'
import Counter from '../components/Counter';

const Home = ({navigation}) => {
    
  return (
    <>
        <Counter/>
        <Categories navigation={navigation}/>
        
    </>
  );
}

export default Home

const styles = StyleSheet.create({})