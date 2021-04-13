import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PoleHaslo = () => {
	return (
		<View style={styles.iconContainer}>
			<Icon
				name="lock"
				color="#000"
				size={30}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Hasło"
			/>
		</View>
	);
};

export const PoleLogin = () => {
	return (
		<View style={styles.iconContainer}>
			<Icon
				name="user"
				color="#000"
				size={30}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Login"
			/>
		</View>
	);
};

export const LokalizacjaRaport = () => {
	return (
		<View style={styles.iconContainer, styles.PomaIn}>
			<Icon
				name="map-marker"
				color="#000"
				size={32}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Lokalizacja"
			/>
		</View>
	);
};

export const PoleKategoria = () => {
	return (
		<View style={styles.iconContainer, styles.PomaIn}>
			<Icon
				name="file"
				color="#000"
				size={28}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Kategoria"
			/>
		</View>
	);
};

export const PoleKod = () => {
	return (
		<View style={styles.iconContainer, styles.NiebIn}>
			<Icon
				name="search"
				color="#000"
				size={27}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Kod"
			/>
		</View>
	);
};

export const PoleLokalizacja = () => {
	return (
		<View style={styles.iconContainer, styles.PomaIn}>
			<Icon
				name="map-marker-alt"
				color="#000"
				size={30}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Lokalizacja"
			/>
		</View>
	);
};

export const PoleNazwa = () => {
	return (
		<View style={styles.iconContainer, styles.PomaIn}>
			<Icon
				name="archive"
				color="#000"
				size={28}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Nazwa"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	NiebIn: {
		backgroundColor: '#8fa5be',
		borderColor: '#eff2f6',
	},
	PomaIn: {
		backgroundColor: '#fec786',
		borderColor: '#fec786',
	},
	iconContainer: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		width: '100%',
		height: '100%',
		paddingVertical: '3%',
		paddingHorizontal: 13,
		borderWidth: 1,
		borderRadius: 25,
		fontSize: 16,
    	backgroundColor: '#8fa5be',
		borderColor: '#8fa5be',
	},
	inputStyle: {
		flex: 1,
		width: "100%",
	},
});
//import {PoleHaslo, PoleLogin, LokalizacjaRaport, PoleKategoria, PoleKod, PoleLokalizacja, PoleNazwa, } from './Buttons.js';
