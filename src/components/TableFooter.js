import React from 'react';
import { Text, View } from 'react-native';
import { table } from '../utils/styles';
import Button from './Button';

const TableFooter = ({ totalData, search, loadMore }) => {
	return (
		<View style={table.tableFooter}>
			<View>
				<Text style={table.tableFooterPagination}>
					{totalData} of {totalData}
				</Text>
			</View>
			<View>
				<Button title="LOAD MORE" fullWidth onPress={loadMore} />
			</View>
		</View>
	);
};

export default TableFooter;
