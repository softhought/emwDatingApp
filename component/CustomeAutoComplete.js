import * as React from 'react';
import { View, Text ,  StyleSheet, Dimensions, Platform } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import Feather from 'react-native-vector-icons/Feather'
Feather.loadFont()

const CustomeAutoComplete = () => {
    const [selectedItem, setSelectedItem] = React.useState(null)
    return (
        <View style={[
            { flex: 1, },
            
        ]}>
            <AutocompleteDropdown
                direction={Platform.select({ ios: 'down' })}
                // debounce={600}
                suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
                clearOnFocus={false}
                closeOnBlur={true}
                onSelectItem={setSelectedItem}
                dataSet={[
                    { id: '1', title: 'Alpha' },
                    { id: '2', title: 'Beta' },
                    { id: '3', title: 'Gamma' },
                ]}
                suggestionsListMaxHeight={500}
                renderItem={(item, text) => <Text style={{ color: '#fff', padding: 15 }}>{item.title}</Text>}

                textInputProps={{
                    placeholder: 'Type location ...',
                    autoCorrect: false,
                    autoCapitalize: 'none',
                    style: {
                        borderRadius: 6,
                        backgroundColor: '#FFF',
                        color: '#323232',
                        paddingLeft: 18,
                    },
                }}
                rightButtonsContainerStyle={{
                    right: 8,
                    height: 30,

                    alignSelf: 'center',
                }}
                inputContainerStyle={{
                    // backgroundColor: '#FFF',
                    borderRadius: 25,
                }}
                suggestionsListContainerStyle={{
                    // backgroundColor: '#323232',
                    // color: '#323232'
                }}
                containerStyle={{ flexGrow: 1, flexShrink: 1 }}
                ChevronIconComponent={<Feather name="chevron-down" size={20} color="#668" />}
                ClearIconComponent={<Feather name="x-circle" size={18} color="#668" />}
                ItemSeparatorComponent={<View style={{ height: 1, width: '100%', backgroundColor: '#d8e1e6' }} />}
                inputHeight={50}
                showChevron={false}
                closeOnBlur={false}
                showClear={false}
            />
            {/* <Text style={{ color: '#668', fontSize: 13 }}>Selected item: {JSON.stringify(selectedItem)}</Text> */}
        </View>
    )
}

export default CustomeAutoComplete