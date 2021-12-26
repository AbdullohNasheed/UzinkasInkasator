import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

export interface InputBlackProps {
	placeholder: string;
	icon: (props: any) => JSX.Element;
}

const InputBlack = ({ icon, placeholder }: InputBlackProps) => {
	let Icon = icon;
	return (
		<View>
			<View style={styles.inputContainer}>
				<Icon style={styles.iconStyles} />
				<TextInput
					placeholderTextColor={'rgba(62, 62, 62, 1)'}
					placeholder={placeholder}
					style={styles.registerIcon}
				/>
			</View>
		</View>
	);
};

export default InputBlack;

const styles = StyleSheet.create({
	registerIcon: {
		// backgroundColor: 'red',
		fontSize: 19,
		width: "78%",
		marginVertical: 20,
		color: '#fff',
	},
	inputContainer: {
		backgroundColor: "#181926",
		flexDirection: "row",
		marginHorizontal: 20,
		alignItems: "center",
		borderRadius: 15,
	    marginVertical: 10,
	},
	iconStyles: {
		marginHorizontal: 15,
	},
});
