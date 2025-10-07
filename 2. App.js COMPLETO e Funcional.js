import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Telas principais
import HomeScreen from './src/screens/HomeScreen';
import RoutineScreen from './src/screens/RoutineScreen';
import SensoryScreen from './src/screens/SensoryScreen';
import SupportScreen from './src/screens/SupportScreen';

// Novos componentes
import ProductivityAnalytics from './src/components/ProductivityAnalytics';
import RewardSystem from './src/components/RewardSystem';
import WeeklyReport from './src/components/WeeklyReport';
import EisenhowerMatrix from './src/components/EisenhowerMatrix';
import IvyLeeMethod from './src/components/IvyLeeMethod';

const Tab = createBottomTabNavigator();

export default function App() {
  const [aiChatVisible, setAiChatVisible] = useState(false);

  const handleAIChatOpen = (initialMessage = '') => {
    setAiChatVisible(true);
    // Aqui você pode integrar com uma IA real depois
    console.log('Chat IA acionado:', initialMessage);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            switch(route.name) {
              case 'Início': 
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Rotina': 
                iconName = focused ? 'time' : 'time-outline';
                break;
              case 'Sensorial': 
                iconName = focused ? 'body' : 'body-outline';
                break;
              case 'Estatísticas': 
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                break;
              case 'Recompensas': 
                iconName = focused ? 'trophy' : 'trophy-outline';
                break;
              case 'Relatório': 
                iconName = focused ? 'document-text' : 'document-text-outline';
                break;
              case 'Eisenhower': 
                iconName = focused ? 'grid' : 'grid-outline';
                break;
              case 'Ivy Lee': 
                iconName = focused ? 'list' : 'list-outline';
                break;
              case 'Suporte': 
                iconName = focused ? 'heart' : 'heart-outline';
                break;
              default: 
                iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6366f1',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingVertical: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Início">
          {() => <HomeScreen onAIChatOpen={handleAIChatOpen} />}
        </Tab.Screen>
        <Tab.Screen name="Rotina" component={RoutineScreen} />
        <Tab.Screen name="Eisenhower" component={EisenhowerMatrix} />
        <Tab.Screen name="Ivy Lee" component={IvyLeeMethod} />
        <Tab.Screen name="Estatísticas" component={ProductivityAnalytics} />
        <Tab.Screen name="Recompensas" component={RewardSystem} />
        <Tab.Screen name="Relatório" component={WeeklyReport} />
        <Tab.Screen name="Sensorial" component={SensoryScreen} />
        <Tab.Screen name="Suporte" component={SupportScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}