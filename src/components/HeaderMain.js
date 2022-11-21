import React from 'react';
import { Image, Text, View } from 'react-native';
import { header } from '../utils/styles';

const HeaderMain = ({ title, afterHeader }) => {
	return (
		<>
			<View style={header.mainHeader}>
				<View style={header.headerLeft}>
					<Image
						style={header.headerIcon}
						source={require('../../assets/planent.png')}
					/>
				</View>
				<View style={header.headerCenter}>
					<Image
						style={header.headerLogoImg}
						source={require('../../assets/logo.png')}
					/>
				</View>
				<View style={header.headerRight}>
					<View style={header.headerRightContents}>
						<Image
							style={header.headerRightIcon}
							source={require('../../assets/rocket.png')}
						/>
					</View>
				</View>
			</View>
			{afterHeader && <View style={header.headerAfter}>{afterHeader}</View>}
		</>
	);
};

export default HeaderMain;
