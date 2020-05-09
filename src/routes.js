import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Login from './pages/Login'
import Dice from './pages/Dice'

const Routes = createAppContainer(
    createStackNavigator({
        Login:{
            screen: Login,
            navigationOptions:{
                title: 'Login'
            }
        },
        Dice:{
            screen: Dice,
            title: 'Play Dice'
        }
    },{
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerStyle:{
                backgroundColor: '#7d40e7'
            }
        }
    })
)

export default Routes