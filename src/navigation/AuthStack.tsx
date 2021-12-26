import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./ROUTES";
import Tabs from "./Tab";
import { LoginScreen } from "../screens/login";
import Direction1view from "../screens/Direction1/view";


const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={ROUTES.LOGIN}
				component={LoginScreen}
			/>
			<Stack.Screen name={ROUTES.HOME_TABS} component={Tabs} />
		</Stack.Navigator>
	);
};

export default AuthStack;

const styles = StyleSheet.create({});
