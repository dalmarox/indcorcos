import { StyleSheet, View,FlatList} from 'react-native'
import { useGetCategoriesQuery} from '../app/services/shop'
import CardCategory from './CardCategory'


const Categories = ({navigation}) => {
  const {data:categories} = useGetCategoriesQuery()
  return (
    <View>

    <FlatList
           data={categories} 
           keyExtractor={item => item.title}
           renderItem= {({item}) => <CardCategory item= {item} navigation={navigation}/>}
      
           />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})