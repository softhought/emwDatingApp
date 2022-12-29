import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Text, RadioButton, Button, ProgressBar, MD3Colors, TextInput, HelperText } from 'react-native-paper'

const AboutPreference = () => {
    const navigation = useNavigation();
    const [value, setValue] = React.useState('M');
    return (
        <View style={about_preference_style.mainContainer}>
            <View>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    {/* <Appbar.Content title="Gender Preference (Steps 1/3)" /> */}
                </Appbar.Header>
            </View>


            <View style={about_preference_style.preference_display_container}>
                <View>
                    <Text variant="displayLarge" style={about_preference_style.preference_headeing_text, { color: '#f81f88' }}>Something</Text>
                    <Text variant="displayLarge" style={about_preference_style.preference_headeing_text}>About You</Text>
                </View>
                <View style={{marginTop:30}}>
                    <View style={about_preference_style.inputContainer}>
                        <Text style={about_preference_style.inputLabel} >Write something about you</Text>
                        <TextInput style={about_preference_style.input} underlineColorAndroid="transparent" multiline={true} numberOfLines={5}  />
                    </View>

                    <View style={about_preference_style.inputContainer}>
                        <Text style={about_preference_style.inputLabel} >Slogan(Optional)</Text>
                        <TextInput style={about_preference_style.input} underlineColorAndroid="transparent" underlineColor="transparent"  />
                        <HelperText>Slogan will display to others </HelperText>
                    </View>
                </View>

            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end', margin: 20 }}>

                <Button icon="chevron-right" buttonColor="#f81f88" mode="contained" contentStyle={about_preference_style.flexReverse} onPress={() => navigation.navigate("InterestPreference")}>
                    Next
                </Button>

            </View>



        </View>
    )
}

export default AboutPreference


const about_preference_style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flexReverse: {
        flexDirection: 'row-reverse',
    },
    preference_display_container: {
        padding: 20
    },
    preference_headeing_text: {
        fontFamily: 'Montserrat-VariableFont_wght',
        fontWeight: '300'
    },
    inputContainer: {
        marginBottom: 10,
        borderRadius: 4,
        overflow: 'hidden',

    },
    inputLabel: {
        fontSize: 16,
        color: '#5D5C5D',
        fontWeight: '600',
        marginTop: 8,
        marginBottom: 8,
    },
    input: {
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
      
        overflow: 'hidden',
        borderColor: '#F7EEF2',
        //borderBottomColor: '#DDDDDD',
        paddingLeft: 5,
        paddingLeft: 20

    },
    bottomView: {

        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        // position: 'absolute',
        // bottom: 5,
        // right:0
    },

});