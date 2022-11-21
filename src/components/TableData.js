import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { table } from '../utils/styles';
import colors from '../utils/colors';

const TableData = ({ data, loading, selectedRow, setSelected, footer }) => {
	return (
		<View style={table.tableData}>
			{loading ? (
				<View
					style={{
						height: '50%',
					}}
				>
					<ActivityIndicator color={colors.loader} />
				</View>
			) : (
				<FlatList
					data={data}
					style={{
						marginBottom: 30,
					}}
					renderItem={({ item: launch }) => {
						return (
							<TouchableOpacity
								style={table.tableRow}
								onPress={() => setSelected(1)}
							>
								<>
									<Text style={table.tableRowText}>{launch?.mission_name}</Text>
									<TouchableOpacity style={table.tableRowAction}>
										<Image
											style={table.tableRowActionImage}
											source={require('../../assets/chevronright.png')}
										/>
									</TouchableOpacity>
								</>
							</TouchableOpacity>
						);
					}}
					ListEmptyComponent={
						<View>
							<Text>No data found!</Text>
						</View>
					}
					ListFooterComponent={footer}
				/>
			)}
		</View>
	);
};

export default TableData;
