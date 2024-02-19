import Header from './src/components/Header'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from'./src/screens/ProductDetail'
import ProductsByCategory from './src/screens/ProductsByCategory'
import Home from './src/screens/Home'

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return (
              <Header
                navigation={navigation}
                title={
                  route.name === "Home"
                    ? "Industrias Corcos"
                    : route.name === "ProductsByCategory"
                    ? route.params.categorySelected
                    : "Detalle del Producto"
                }
              />
            );
          },
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;


