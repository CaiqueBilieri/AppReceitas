import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {StackRoutes} from '../routes/stackRoutes'
import {Favorites} from '../pages/favorites'
/*Puxando os icones do site expo*/
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                /*headerShown: Tirando o Header padrao para criar um nosso*/
                headerShown: false,
                /*Quando abrir o teclado o TabBar vai esconder*/
                tabBarHideOnKeyboard: true,
                /*Vai tirar o nome da TabBar, deixando apenas o icone */
                tabBarShowLabel: false,
                /*Quando Clico/Ativo o botão ele vai ficar da cor abaixo*/
                tabBarActiveTintColor: '#121212',

                tabBarStyle:{
                    /*Mudando a cor para branco*/
                    backgroundColor: '#fff',
                    /*Tem uma borda pequena entre a TabBar e a Tela*/
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen 
                name="HomeTab" 
                component={StackRoutes} 
                options={{
                                /*Definindo a cor, tamanho e o foco do icone*/
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name='home' color='#000' size={size}/>
                        }
                        
                        return <Ionicons name='home-outline' color={color} size={size}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Favorites"
                component={Favorites} 
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name='heart' color='#ff4141' size={size}/>
                        }

                        return <Ionicons name='heart-outline' color={color} size={size}/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}