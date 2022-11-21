import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { button } from '../utils/styles';

const Button = ({
	children,
	title,
	onlyIcon,
	transparent,
	fullWidth,
	onPress,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				transparent ? button.buttonTransparent : button.buttonContainer,
				fullWidth && button.buttonFull,
			]}
		>
			{children ? (
				children
			) : onlyIcon ? (
				<Image style={button.buttonIcon} source={onlyIcon} />
			) : (
				<Text style={button.buttonText}>{title}</Text>
			)}
		</TouchableOpacity>
	);
};

export default Button;
