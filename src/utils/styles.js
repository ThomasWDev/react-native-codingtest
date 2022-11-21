import { StyleSheet } from 'react-native';
import colors from './colors';

const container = StyleSheet.create({
	rootTop: {
		backgroundColor: colors.mainBg,
	},
	rootBottom: {
		flex: 1,
		backgroundColor: colors.containerBg,
	},
	container: {
		backgroundColor: colors.containerBg,
		flex: 1,
		height: '100%',
	},
});

const header = StyleSheet.create({
	mainHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: colors.headerBg,
		maxHeight: 120,
		zIndex: 1,
	},
	headerLeft: {
		flex: 1.5,
		alignItems: 'flex-end',
	},
	headerIcon: {
		width: 40,
		height: 40,
		alignSelf: 'flex-end',
	},
	headerCenter: {
		flex: 6,
		paddingTop: 5,
		alignItems: 'center',
	},
	headerLogoImg: {
		width: '100%',
		height: 100,
		resizeMode: 'contain',
	},
	headerRight: {
		flex: 1.5,
	},
	headerRightContents: {
		position: 'relative',
	},
	headerRightIcon: {
		position: 'absolute',
		zIndex: 9,
		width: '100%',
		height: 140,
		resizeMode: 'contain',
	},
	headerAfter: {
		backgroundColor: colors.containerBg,
		flex: 0.4,
	},
});

const home = StyleSheet.create({
	bannerContainer: {
		alignItems: 'center',
		marginTop: 10,
	},
	bannerImg: {
		width: '70%',
		resizeMode: 'contain',
	},
});

const button = StyleSheet.create({
	buttonContainer: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: colors.buttonBg,
		minWidth: 100,
		borderRadius: 20,
		minHeight: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonFull: {
		width: '100%',
	},
	buttonTransparent: {
		padding: 5,
		borderRadius: 20,
		minHeight: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: colors.buttonText,
		fontWeight: 'bold',
	},
	buttonIcon: {
		width: 25,
		height: 25,
		resizeMode: 'contain',
		tintColor: colors.actionText,
	},
});

const searchbar = StyleSheet.create({
	searchbarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	searchbarInput: {
		flex: 1,
	},
	searchInputWrapper: {
		backgroundColor: colors.searchBg,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
		borderRadius: 20,
		paddingLeft: 10,
	},
	searchInput: {
		height: 35,
		flex: 1,
		color: colors.searchInputText,
	},
	searchInputIcon: {
		paddingHorizontal: 10,
	},
	searchInputIconImg: {
		height: 25,
		width: 25,
	},
});

const dropdown = StyleSheet.create({
	button: {
		zIndex: 1,
	},
	buttonText: {
		flex: 1,
		textAlign: 'center',
	},
	icon: {
		marginRight: 10,
	},
	dropdown: {
		position: 'absolute',
		backgroundColor: colors.dropdownBg,
		width: '50%',
		left: 20,
		right: 20,
		shadowColor: '#868686',
		shadowRadius: 4,
		shadowOffset: { height: 4, width: 0 },
		shadowOpacity: 0.5,
		paddingTop: 5,
		paddingBottom: 10,
	},
	overlay: {
		width: '100%',
		height: '100%',
	},
	item: {
		padding: 10,
		marginHorizontal: 10,
		marginVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.dropdownItemBg,
		borderRadius: 10,
	},
});

const table = StyleSheet.create({
	tableHeader: {
		marginHorizontal: 15,
		marginTop: 10,
		paddingVertical: 5,
		paddingBottom: 10,
		position: 'relative',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tableHeaderBorder: {
		height: 6,
		backgroundColor: colors.headerBg,
		marginHorizontal: 20,
		marginTop: 10,
	},
	tableFilter: {
		position: 'absolute',
		left: 0,
		zIndex: 9,
	},
	tableSortContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	tableSortButton: {
		flexDirection: 'row',
		height: 30,
		justifyContent: 'center',
	},
	tableSortIcon: {
		marginTop: 5,
		marginLeft: 10,
		width: 20,
		height: 20,
		resizeMode: 'contain',
		tintColor: colors.actionText,
		transition: '1s ease-in-out',
	},
	tableSortText: {
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 5,
		color: colors.actionText,
	},
	tableData: {
		marginHorizontal: 70,
		paddingTop: 10,
	},
	tableRow: {
		backgroundColor: colors.tableRowBg,
		padding: 20,
		borderRadius: 10,
		marginVertical: 5,
		position: 'relative',
	},
	tableRowText: {
		textAlign: 'center',
		color: colors.tableRowText,
	},
	tableRowAction: {
		position: 'absolute',
		right: '-35%',
		padding: 15,
	},
	tableRowActionImage: {
		width: 35,
		height: 35,
		resizeMode: 'contain',
	},
	tableFooter: {
		marginTop: 30,
		marginVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	tableFooterPagination: {
		fontWeight: 'bold',
		color: colors.actionText,
	},
});

export { container, header, home, searchbar, button, dropdown, table };
