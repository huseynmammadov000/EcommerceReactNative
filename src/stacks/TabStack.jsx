import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import BasketStack from './BasketStack';
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown:false}} name="Home" component={HomeStack} />
      <Tab.Screen options={{headerShown:false}} name="Basket" component={BasketStack} />
      <Tab.Screen options={{headerShown:false}} name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default TabStack;

