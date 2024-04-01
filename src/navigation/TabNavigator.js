import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import TabBarIcon from '../components/TabBarIcon';
import colors from '../utils/globals/colors'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()


const TabNavigator = () => {
  return (
    <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar


                }}
        >
            <Tab.Screen 
                name='ShopStack'
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Productos" nameIcon="home" focused={focused}/>
                }}
            />
            <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Carrito" nameIcon="cart-sharp" focused={focused}/>
                    }}

            />
            <Tab.Screen 
                    name='OrdersStack' 
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Ordenes" nameIcon="list" focused={focused}/>
                    }}
            />
             <Tab.Screen 
                    name='ProfileStack' 
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Perfil" nameIcon="person-circle" focused={focused}/>
                    }}
            />
    </Tab.Navigator>
  )
}

export default TabNavigator


const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.tab,
        height:100,
        width:"100%",
        position:"absolute",

        /*Shadow IOS*/
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.70, 
    }
})