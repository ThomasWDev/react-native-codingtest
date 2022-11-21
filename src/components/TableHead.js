import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { table } from '../utils/styles';
import Button from './Button';
import Dropdown from './Dropdown';

const TableHead = ({ filter, sort }) => {
	const [sortAsc, setSort] = useState(true);
	const [selected, setSelected] = useState(undefined);
	const filters = [
		{ label: 'MISSION NAME', value: '1' },
		{ label: 'ROCKET NAME', value: '2' },
		{ label: 'ROCKET TYPE', value: '3' },
		{ label: 'LAUNCH YEAR', value: '4' },
	];

	useEffect(() => {
		setSelected(filters[0]);
	}, []);

	return (
		<View>
			<View style={table.tableHeader}>
				<View style={table.tableFilter}>
					<Dropdown data={filters} onSelect={setSelected}>
						<Image
							style={table.tableSortIcon}
							source={require('../../assets/filtericon.png')}
						/>
					</Dropdown>
				</View>
				<View style={table.tableSortContainer}>
					<Button transparent onPress={() => setSort(!sortAsc)}>
						<Text style={table.tableSortText}>{selected?.label}</Text>
						{sortAsc ? (
							<Image
								style={table.tableSortIcon}
								source={require(`../../assets/arrowdown.png`)}
							/>
						) : (
							<Image
								style={table.tableSortIcon}
								source={require(`../../assets/arrowup.png`)}
							/>
						)}
					</Button>
				</View>
			</View>
			<View style={table.tableHeaderBorder} />
		</View>
	);
};

export default TableHead;
