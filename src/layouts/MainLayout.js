import React from 'react';
import {
	Keyboard,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import HeaderMain from '../components/HeaderMain';
import { container } from '../utils/styles';

const MainLayout = ({ children, title, afterHeader }) => {
	const shouldSetResponse = () => true;
	const onRelease = () => Keyboard.dismiss();

	return (
		<TouchableWithoutFeedback onPress={onRelease}>
			<>
				<HeaderMain title={title} afterHeader={afterHeader} />
				<View style={container.container}>{children}</View>
			</>
		</TouchableWithoutFeedback>
	);
};

export default MainLayout;
