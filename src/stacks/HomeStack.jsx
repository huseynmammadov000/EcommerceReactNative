import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/homepage/HomePage';
import CustomHeader from '../common/CustomHeader';
import DetailsPage from '../screens/detailspage/DetailsPage';
import AllProducts from '../screens/allproductspage/AllProducts';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{header:()=><CustomHeader title="Wizo"/> }} name='HomePage' component={HomePage}/>
        <Stack.Screen options={{headerShown:false} } name='DetailsPage' component={DetailsPage}/>
        <Stack.Screen options={{header:()=><CustomHeader title="All Products"/> }} name='AllProducts' component={AllProducts}/>
   </Stack.Navigator>
   
  )
}

export default HomeStack

