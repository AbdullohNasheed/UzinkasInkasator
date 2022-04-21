import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { styles } from './style'

const Homeview = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imageBackground}
                imageStyle={styles.image}
                source={require("../../assets/image/x-11.png")}>
                <Image style={styles.imageInkass} source={require('../../assets/image/inkass3.png')} />
                <Text style={styles.inkassText}>
                    РЕСПУБЛИКАНСКАЯ СЛУЖБА
                    ИНКАССАЦИИ
                </Text>
            </ImageBackground>
        </View>
    )
}

export default Homeview
