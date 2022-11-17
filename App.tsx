import {useState} from "react"
import { Image, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icons, Messages, Colors} from "./src/constants"
import RepoProvider from "./src/context/RepoProvider"
import BottomModal from "./src/components/BottomModal"
import HomeScreen from "./src/screens/HomeScreen"
import DetailScreen from "./src/screens/DetailScreen"
import FavoriteListScreen from "./src/screens/FavoriteListScreen"



const Stack = createNativeStackNavigator();

export default function App() {

  const [modalActive, setModalActive] = useState(false)


  const HeaderRightButton = () => {
    
    const OnShowPopup = () => {
      setModalActive(true)
    }

    return (
      <TouchableOpacity onPress={() => OnShowPopup()}>
        <Image source={Icons.gear} style={{width: 26, height: 26}} />
      </TouchableOpacity>
    )
  }

  const Tab = createBottomTabNavigator()

  const HomeStack = () => {
    return (
       <Stack.Navigator>
          <Stack.Screen
            name={Messages.Navigation.wefit}
            component={HomeScreen}
            options={{
              // headerTransparent: true,
              headerRight: () => (
                <HeaderRightButton/>
              ),
            }}
          />

          <Stack.Screen
            name={Messages.Navigation.details}
            component={DetailScreen}
            options={{
              // headerTransparent: true,
              headerTintColor: Colors.white,
              headerStyle: {
                backgroundColor: Colors.black,
              }
            }}
          /> 

         </Stack.Navigator> 
    )
  }

  const FavoriteListStack = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
            name={Messages.Navigation.favorite}
            component={FavoriteListScreen}
           
          /> 
          <Stack.Screen
            name={Messages.Navigation.details}
            component={DetailScreen}
            options={{
              // headerTransparent: true,
              headerTintColor: Colors.white,
              headerStyle: {
                backgroundColor: Colors.black,
              }
            }}
          /> 
         </Stack.Navigator> 
    )
  }

  return (
    <NavigationContainer>
      <RepoProvider>
        <Tab.Navigator >
          <Tab.Screen 
            name={Messages.BottomTabs.repos}
            component={HomeStack}
            options={{ 
              headerShown:false ,
              tabBarIcon: () => (
                <Image resizeMode={"contain"} style={{ width: 22,
                  height: 22,
                  marginLeft: 5}} source={Icons.github} />
              )
            }} 
          />
          <Tab.Screen 
            name={Messages.BottomTabs.favorite}
            component={FavoriteListStack}
            options={{ 
              headerShown:false ,
              tabBarIcon: () => (
                <Image resizeMode={"contain"} style={{ width: 22,
                  height: 22,
                  marginLeft: 5}} source={Icons.star_black} />
              )
            }} 
          />
        </Tab.Navigator>
        <BottomModal modalActive={modalActive} hideModal={() => setModalActive(false)}/>
      </RepoProvider>

    </NavigationContainer>
  );
}