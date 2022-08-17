import * as React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../screens/Home';
import Page from '../screens/Page';
import theme from '../src/theme/theme';
import PharmacyDetails from '../src/screens/PharmacyDetails';

const Router = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={PharmacyDetails}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Maiia"
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
      }}>
      <BottomTab.Screen
        name="Maiia"
        component={Home}
        options={() => ({
          title: 'Test technique Maiia',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: colors.tint,
        })}
      />
      <BottomTab.Screen
        name="Code !"
        component={Page}
        options={{
          title: 'Code !',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const TabBarIcon = (props) => {
  const { font } = useTheme();
  return <FontAwesome size={font.sizes.medium} {...props} />;
};

export default Router;
