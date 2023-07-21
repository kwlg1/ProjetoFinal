import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/AntDesign"
import Icon1 from "react-native-vector-icons/Ionicons"
import { SafeAreaView, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import biografia from "./pags/biografia"
import gos from "./pags/gos"
import vidAcad from "./pags/vidAcad"
import imgGost from "./pags/imgGost"
import fim from "./pags/fim"

export default function App() {

const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer >
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarActiveBackgroundColor: "#8c8c8c",tabBarInactiveBackgroundColor: "#3c3c3c"}}>
          <Tab.Screen name="biografia" component={biografia} options={{tabBarIcon: ({focado}) => (<Text><Icon name="user" size={20} color={focado? "#fff" : "#000"}/></Text>)}} />
          <Tab.Screen name="gos" component={gos} options={{tabBarIcon: ({focado}) => (<Text><Icon name="like2" size={20} color={focado? "blue" : "black"}/></Text>)}}/>
          <Tab.Screen name="vidAcad" component={vidAcad} options={{tabBarIcon: ({focado}) => (<Text><Icon1 name="school-sharp" size={20} color={focado? "#fff" : "black"}/></Text>)}}/>
          <Tab.Screen name="imgGost" component={imgGost} options={{tabBarIcon: ({focado}) => (<Text><Icon1 name="images-outline" size={20} color={focado? "#fff" : "black"}/></Text>)}}/>
          <Tab.Screen name="fim" component={fim} options={{tabBarIcon: ({focado}) => (<Text><Icon name="closecircle" size={20} color={focado? "#fff" : "black"}/></Text>)}}/>
        </Tab.Navigator>
      </NavigationContainer>
    
  );
}