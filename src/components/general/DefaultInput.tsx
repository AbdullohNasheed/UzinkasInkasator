import React from "react";
import {
	Dimensions,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

export interface DefaultInputProps {
	placeholder: string;
	icon: (props: any) => JSX.Element;
}

const DefaultInput = ({ icon, placeholder }: DefaultInputProps) => {
	let Icon = icon;
	return (
		<View>
			<View style={styles.inputContainer}>
				<Icon style={styles.iconStyles} />
				<TextInput
					placeholderTextColor={"rgba(62, 62, 62, 1)"}
					placeholder={placeholder}
					style={styles.registerIcon}
				/>
			</View>
		</View>
	);
};

export default DefaultInput;

const styles = StyleSheet.create({
	registerIcon: {
		// backgroundColor: 'red',
		fontSize: 19,
		width: "60%",
		marginVertical: Platform.OS === "ios" ? 20 : 6,
		color: "#fff",
	},
	inputContainer: {
		backgroundColor: "#181926",
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 10,
		borderRadius: 15,
		marginVertical: 10,
		elevation: 10
	},
	iconStyles: {
		marginHorizontal: 10,
	},
});
