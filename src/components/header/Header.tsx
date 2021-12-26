import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StyleProp, ViewStyle } from "react-native";
import { MenuIcon } from "../../assets/icons/icons";

export interface HeaderComponentProps {
    text: string;
    style: StyleProp<ViewStyle>

}


const HeaderComponent = ({text}:HeaderComponentProps) => {
    return (
		<View style={styles.headerContainer}>
			<Image
				source={require("../../assets/image/inkass2.png")}
				style={styles.image}
			/>
			<Text style={styles.text}>{text}</Text>
			<TouchableOpacity>
				<MenuIcon />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 45,
    },
    text:{
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginVertical: 30,
    },
})

export default HeaderComponent;
