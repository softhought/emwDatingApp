import React, { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Text, RadioButton, Button, ProgressBar, MD3Colors, Chip } from 'react-native-paper'
import CustomeAutoComplete from '../../component/CustomeAutoComplete';
import MultiSelect from 'react-native-multiple-select';
import { useNavigation } from '@react-navigation/native';


const items = [{
    id: '1',
    name: 'Los Angeles'
}, {
    id: '2',
    name: 'Houston'
}, {
    id: '3',
    name: 'Phoenix'
}, {
    id: '4',
    name: 'Philadelphia'
}, {
    id: '5',
    name: 'San Antonio'
}, {
    id: '6',
    name: 'Mesa'
},
];

const InterestPreference = () => {
    const navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState([]);
    const [value, setValue] = React.useState('first');
 


    

    return (
        <View style={interest_preference_style.mainContainer}>
            <View>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    {/* <Appbar.Content title="Location (Steps 1/3)" /> */}
                </Appbar.Header>
            </View>

            <View style={interest_preference_style.preference_display_container}>
                <View>
                    <Text variant="displayLarge" style={interest_preference_style.preference_headeing_text, { color: '#f81f88' }}>Your preferred</Text>
                    <Text variant="displayLarge" style={interest_preference_style.preference_headeing_text}>Interest</Text>
                </View>
                

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 20 }}>

                    <Chip mode="outlined" compact icon="music" onPress={() => { }} onClose={() => { }} closeIcon="close" showSelectedOverlay={false} style={[
                interest_preference_style.chip,
                {
                  backgroundColor: "#FF3594",
                },
              ]}
              selectedColor="#FFF" >Music</Chip>
                    <Chip mode="outlined" compact icon="dance-ballroom" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Dancing</Chip>
                    <Chip mode="outlined" compact icon="gamepad-variant-outline" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Gaming</Chip>
                    <Chip mode="outlined" compact icon="weight-lifter" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Gym & Fitness</Chip>
                    <Chip mode="outlined" compact icon="football-helmet" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Football</Chip>
                    <Chip mode="outlined" compact icon="palette-outline" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Painting</Chip>
                    <Chip mode="outlined" compact icon="cricket" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Cricket</Chip>
                    <Chip mode="outlined" compact icon="pen" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Writing</Chip>
                    <Chip mode="outlined" compact icon="food-fork-drink" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Food & Drink</Chip>
                    <Chip mode="outlined" compact icon="movie-open" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Movie</Chip>
                    <Chip mode="outlined" compact icon="drama-masks" onPress={() => { }} onClose={() => { }} style={interest_preference_style.chip} closeIcon="close" showSelectedOverlay={false}>Acting</Chip>


                   


                </View>



            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end', margin: 20 }}>

                <Button icon="chevron-right" buttonColor="#f81f88" mode="contained" contentStyle={interest_preference_style.flexReverse} onPress={() => navigation.navigate("ImagePreference")}>
                    Next
                </Button>

            </View>


        </View>
    )
}

export default InterestPreference


const interest_preference_style = StyleSheet.create({
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
    bottomView: {

        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        // position: 'absolute',
        // bottom: 5,
        // right:0
    },


    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
    },
    chip: {
        margin: 8,
        
        borderRadius:20
    },
    tiny: {
        // marginVertical: 2,
        // marginRight: 2,
        // marginLeft: 2,
        // minHeight: 19,
        // lineHeight: 19,
    },
    bigTextFlex: {
        flex: 1,
    },
    bigTextStyle: {
        flex: -1,
    },
    fullWidthChip: {
        marginVertical: 4,
        marginHorizontal: 12,
    },
    customBorderRadius: {
        borderRadius: 16,
    },

});