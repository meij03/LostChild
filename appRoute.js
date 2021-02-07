import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from './Screen/Welcome';
import CharacterSelect from './screen/Character'

//Credits to The netNinja - youtube Vids
const stack = createStackNavigator();
export default function appRoute() {
    return (
        <NavigationContainer initialRouteName = 'Welcome'>
            <stack.Navigator>
                <stack.Screen name = "Welcome" component = {WelcomePage}/>
                <stack.Screen name = "Character" component = {CharacterSelect}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

//export const appRoute 
// = () => (
//     <NavigationContainer>
//         <homeStack/>
//     </NavigationContainer>
// )
//const appRoute = createStackNavigator({screens});

//export default createAppContainer(appRoute)