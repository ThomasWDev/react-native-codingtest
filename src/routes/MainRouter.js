import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Ticket from '../screens/Ticket';

const HomeStack = createNativeStackNavigator();

const HomeRouter = () => (
	<HomeStack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		<HomeStack.Screen name="HomeScreen" component={Home} />
		<HomeStack.Screen name="TicketScreen" component={Ticket} />
	</HomeStack.Navigator>
);

export default HomeRouter;
