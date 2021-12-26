import React from "react";
import {
	Dimensions,
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { InnIcon, NotIcon, UserIcon } from "../../assets/icons/icons";
import DefaultImageBackground from "../../components/general/DefaultImageBackground";
import DefaultInput from "../../components/general/DefaultInput";
import { useLoginScreenHook } from "./hooks";
import { styles } from "./style";

let { onTabsPress } = useLoginScreenHook();
const LoginView = () => {
	return (
		<View style={styles.Container}>
			<DefaultImageBackground>
				<SafeAreaView style={styles.allContainer}>
					<View style={{ alignItems: "center",}}>
						<Image
							source={require("../../assets/image/inkass1.png")}
							style={styles.imageInkass}
						/>
						<Text style={styles.text}>Авторизация</Text>
					</View>
					<View style={styles.buttonContainer}>
						<DefaultInput
							icon={UserIcon}
							placeholder={"Логин"}
						/>
						<DefaultInput icon={InnIcon} placeholder={"Пароль"} />
					</View>
					<TouchableOpacity
						onPress={onTabsPress}
						style={styles.buttonBox}
					>
						<Text style={styles.buttonText}>Войти</Text>
					</TouchableOpacity>
				</SafeAreaView>
			</DefaultImageBackground>
		</View>
	);
};

export default LoginView;
