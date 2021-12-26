import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LeftIcon } from "../../assets/icons/icons";

const BackHeader = () => {
	let navigation = useNavigation();
	let onBackPress = () => {
		navigation.goBack();
	};
	return (
		<TouchableOpacity style={styles.leftIconBox} onPress={onBackPress}>
			<LeftIcon />
		</TouchableOpacity>
	);
};

export default BackHeader;

const styles = StyleSheet.create({
	leftIconBox: {
		marginHorizontal: 20,
	},
});
