# E-Commerce-App-React Native de Industrias Corcos.
Una aplicación de comercio electrónico desarrollada con React Native que ofrece una experiencia de compra completa y fácil de usar.

## Funcionalidades especiales

### Pantallas de la cuenta:

- **Acceso seguro:** Solo los usuarios utenticados pueden acceder a la pantalla de perfíl y ralizar compras.
- **Información del usuario:** Muestra detalles del usuario, nombre.

<img src="./screenshot/Screenshot_1712442943.png" width="300">
<img src="./screenshot/Screenshot_1712456214.png" width="300">

### Autenticación con Firebase:
- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

### Pantalla de Categorías:
- Muestra una selección de categorías en tarjetas.
- Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.

### Pantalla de Detalles del Producto:
- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite agregar el producto al carrito.

<img src="./screenshot/Screenshot_1712442970.png" width="300">
<img src="./screenshot/Screenshot_1712442984.png" width="300">
<img src="./screenshot/Screenshot_1712443005.png" width="300">
<img src="./screenshot/Screenshot_1712443220.png" width="300">
<img src="./screenshot/Screenshot_1712443247.png" width="300">

### Navegador inferior:

```javascript
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
```
- Pestaña 1 
    - Productos: Categorías y productos (stack principal).
- Pestaña 2
    - Carrito: Detalles del carrito de compras con resumen y botón para finalizar la orden.
- Pestaña 3
    - Órdenes: Historial de órdenes realizadas.
- Pestaña 4
    - Perfil: Información del usuario, carga de imagen de perfil y consultas.

   <img src="./screenshot/Screenshot_1712443268.png" width="300"> 
   <img src="./screenshot/Screenshot_1712443018.png" width="300"> 
   <img src="./screenshot/Screenshot_1712443026.png" width="300">
    <img src="./screenshot/Screenshot_1712500072.png" width="300">

### Tecnologías 

- Firebase Authentication: Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- React Native Navigation Stack: Gestiona la navegación entre pantallas.
- React Native Navigation Buttom tap: Gestiona la navegación entre pestañas.
- Expo-Location: Permite acceder y gestionar la ubicación del usuario.
- Expo-Picker-Image: Facilita la carga de imágenes de perfil.
- Redux: Centraliza y gestiona el estado de la aplicación.
- RTK Query y Firebase: Realiza operaciones de lectura/escritura en la base de datos.

### Instalación

1. Clona el repositorio: git clone https://github.com/dalmarox/dalmacersosimo53280.git
2. Instala las dependencias: npm install
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: npm start.

### Contacto

Para preguntas o soporte, contacta a drcersosimo@gmail.com
