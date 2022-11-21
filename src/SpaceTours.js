import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import HomeRouter from './routes/MainRouter';
import { StatusBar } from 'expo-status-bar';
import { container } from './utils/styles';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/appoloClient';

const SpaceTours = () => {
	return (
		<ApolloProvider client={client()}>
			<SafeAreaView style={container.rootTop}></SafeAreaView>
			<SafeAreaView style={container.rootBottom}>
				<StatusBar style="light" />
				<HomeRouter />
			</SafeAreaView>
		</ApolloProvider>
	);
};

export default SpaceTours;
