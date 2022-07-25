import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sceneContainerStyle } from "../styles";

import Login from '../../screens/Acount/Login';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
} 
export default StackNavigation;