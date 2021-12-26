import React from 'react'
import { useNavigation } from "@react-navigation/core";
import { ROUTES } from "../../navigation/ROUTES";

export const useLoginScreenHook = () => {
	let navigation = useNavigation();
	let onTabsPress = () => {
		navigation.navigate(ROUTES.HOME_TABS);
	};
	return { onTabsPress};
};
