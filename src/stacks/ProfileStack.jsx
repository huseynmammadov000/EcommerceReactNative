import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';
import CustomHeader from '../common/CustomHeader';
import Terms from '../screens/profile/Terms';
import PrivacyPolicy from '../screens/profile/PrivacyPolicy';
import EditProfile from '../screens/profile/EditProfile';
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle: {
            color: 'white',
          },
          header: () => <CustomHeader title="Profile" />,
        }}
        name="ProfileScreen"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle: {
            color: 'white',
          },
          header: () => <CustomHeader title="Terms" />,
        }}
        name="Terms"
        component={Terms}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle: {
            color: 'white',
          },
          header: () => <CustomHeader title="Privacy and Policy" />,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle: {
            color: 'white',
          },
          header: () => <CustomHeader title="Edit Profile" />,
        }}
        name="EditProfile"
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
