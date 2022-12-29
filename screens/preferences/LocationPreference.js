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

const LocationPreference = () => {
    const navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState([]);
    const [value, setValue] = React.useState('first');
    let multiselectRef = useRef < null > (null);


    const onSelectedItemsChange = selectedItems => {
        setSelectedItems([...selectedItems, selectedItems]);
    };


    return (
        <View style={location_preference_style.mainContainer}>
            <View>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    {/* <Appbar.Content title="Location (Steps 1/3)" /> */}
                </Appbar.Header>
            </View>

            <View style={location_preference_style.preference_display_container}>
                <View>
                    <Text variant="displayLarge" style={location_preference_style.preference_headeing_text, { color: '#f81f88' }}>Your preferred</Text>
                    <Text variant="displayLarge" style={location_preference_style.preference_headeing_text}>Location</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"

                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText="Select location"
                        searchInputPlaceholderText="Search ..."
                        onChangeInput={(text) => console.log(text)}
                        //  altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#CCC"
                        submitButtonText="OK"
                    />
                </View>


                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 20 }}>
                    <Chip
                        mode="outlined"
                        compact
                        icon="map-marker-outline"
                        onPress={() => { }}
                        onClose={() => { }}
                        style={location_preference_style.chip}
                        closeIconAccessibilityLabel="Close icon accessibility label"
                        closeIcon="close"
                        showSelectedOverlay={false}

                    >
                        Philadelphia
                    </Chip>

                    <Chip
                        mode="outlined"
                        compact
                        icon="map-marker-outline"
                        onPress={() => { }}
                        onClose={() => { }}
                        style={location_preference_style.chip}
                        closeIconAccessibilityLabel="Close icon accessibility label"
                        closeIcon="close"
                        showSelectedOverlay={false}

                    >
                        Los Angeles
                    </Chip>


                </View>



            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end', margin: 20 }}>

                <Button icon="chevron-right" buttonColor="#f81f88" mode="contained" contentStyle={location_preference_style.flexReverse} onPress={() => navigation.navigate("AboutPreference")}>
                    Next
                </Button>

            </View>


        </View>
    )
}

export default LocationPreference


const location_preference_style = StyleSheet.create({
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
        margin: 4,
    },
    tiny: {
        marginVertical: 2,
        marginRight: 2,
        marginLeft: 2,
        minHeight: 19,
        lineHeight: 19,
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