import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { searchbar } from '../utils/styles';
import colors from '../utils/colors';
import Button from './Button';

const SearchBar = ({ text, data }) => {
	return (
		<View style={searchbar.searchbarContainer}>
			<View style={searchbar.searchInput}>
				<View style={searchbar.searchInputWrapper}>
					<View style={searchbar.searchInputIcon}>
						<Image
							style={searchbar.searchInputIconImg}
							source={require('../../assets/searchRocket.png')}
						/>
					</View>
					<TextInput
						value={text}
						onChange={(value) => {
							console.log('value:', value);
						}}
						autoCapitalize="none"
						placeholder="Search for flights"
						placeholderTextColor={colors.searchInputText}
						style={searchbar.searchInput}
					/>
				</View>
			</View>
			<View>
				<Button title="SEARCH" />
			</View>
		</View>
	);
};

export default SearchBar;
