import React, { useRef, useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	Modal,
	View,
} from 'react-native';
import { dropdown } from '../utils/styles';

const Dropdown = ({ children, label, data, onSelect }) => {
	const DropdownButton = useRef();
	const [visible, setVisible] = useState(false);
	const [selected, setSelected] = useState(undefined);
	const [dropdownTop, setDropdownTop] = useState(0);

	const toggleDropdown = () => {
		visible ? setVisible(false) : openDropdown();
	};

	const openDropdown = () => {
		DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
			setDropdownTop(py + h);
		});
		setVisible(true);
	};

	const onItemPress = (item) => {
		setSelected(item);
		onSelect(item);
		setVisible(false);
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity style={dropdown.item} onPress={() => onItemPress(item)}>
			<Text>{item.label}</Text>
		</TouchableOpacity>
	);

	const renderDropdown = () => {
		return (
			<Modal visible={visible} transparent animationType="none">
				<TouchableOpacity
					style={dropdown.overlay}
					onPress={() => setVisible(false)}
				>
					<View style={[dropdown.dropdown, { top: dropdownTop + 10 }]}>
						<FlatList
							data={
								selected
									? data.filter((item) => item.value !== selected.value)
									: data
							}
							renderItem={renderItem}
							keyExtractor={(item, index) => index.toString()}
						/>
					</View>
				</TouchableOpacity>
			</Modal>
		);
	};

	return (
		<TouchableOpacity
			ref={DropdownButton}
			style={dropdown.button}
			onPress={toggleDropdown}
		>
			{renderDropdown()}
			{children ? (
				children
			) : (
				<Text style={dropdown.buttonText}>
					{(!!selected && selected.label) || label}
				</Text>
			)}
		</TouchableOpacity>
	);
};

export default Dropdown;
