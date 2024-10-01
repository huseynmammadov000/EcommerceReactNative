import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/login/Login';
import Register from '../screens/auth/register/Register';
import CustomHeader from '../common/CustomHeader';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle: {
            color: 'white',
          },
          header:()=><CustomHeader title="Login"/>
        }}
        name="Login"
        component={Login}
        
      />
       <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle: {
            color: 'white',
          },
          header:()=><CustomHeader title="Register"/>
        }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
