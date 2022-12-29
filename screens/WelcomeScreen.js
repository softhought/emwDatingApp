import React from 'react'
import { Platform, Image, StyleSheet, View, ImageBackground } from 'react-native'
import WelcomeImage from '../assets/signup.png'
// import WelcomeBackground from '../assets/stacked-waves-haikei.png'
import WelcomeBackgroundImg from '../assets/welcomeBg.png'
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (



        <View style={welcome_styles.container}>
            <ImageBackground source={WelcomeBackgroundImg} resizeMode="cover" style={welcome_styles.image}>
                
                <View>
                    <Image source={WelcomeImage} style={welcome_styles.logo} />
                </View>
                <View style={{paddingLeft:10,paddingRight:10}}>
                    <Text style={{ fontFamily: 'Gotham-Black', fontWeight: '900', fontSize: 60, color: '#f81f88' }}>EMW</Text>
                    <Text variant="titleMedium" style={welcome_styles.tagLineText}>If you are going to use a passage of Lorem Ipsum </Text>
                    <Text variant="titleMedium" style={welcome_styles.tagLineText}>passage of Lorem Ipsum</Text>
                </View>


                <View style={welcome_styles.bottomView}>
                    <Button icon="chevron-right" buttonColor="#f81f88" textColor='#fff' mode="contained" onPress={() => navigation.navigate("Login")} contentStyle={welcome_styles.flexReverse}>
                        Get Started
                    </Button>
                </View>

            </ImageBackground>
        </View>


    )
}

export default WelcomeScreen

const welcome_styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#f81f88',
        // padding: 20,
        // paddingTop: (Platform.OS === 'ios') ? 20 : 0,


    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    logoText: {
        // fontSize: 12,
        // fontWeight: 700
    },
    logo: {
        marginTop:120,
        width: 250,
        height: 300,
    },
    tagLineText: {
        // fontSize: 12,
        // fontWeight: 700,
        fontFamily: 'Montserrat-VariableFont_wght',
        color: '#323232',
        fontWeight: '700',

    },
    flexReverse: {
        flexDirection: 'row-reverse',
    },
    bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20
    },


});