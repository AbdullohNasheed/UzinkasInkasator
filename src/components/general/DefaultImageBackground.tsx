import React, { PropsWithChildren } from "react";
import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from "react-native";

const DefaultImageBackground = (props: PropsWithChildren<{}>) => {
	return (
		<ImageBackground
			style={styles.imageBackground}
			imageStyle={styles.image}
			source={require("../../assets/image/light-logo.png")}
		>
			{props.children}
		</ImageBackground>
	);
};

export default DefaultImageBackground;

const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
        backgroundColor: '#181926',

	},
	image: {
		width: Dimensions.get("window").width - 115,
		height: Dimensions.get("window").width - 75,
		top: undefined,
		bottom: undefined,
		left: undefined,
		right: undefined,
		alignSelf: "center",
		marginTop:
			Dimensions.get("window").height / 2 -
			(Dimensions.get("window").width - 60) / 2,
	},
});
