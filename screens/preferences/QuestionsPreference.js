import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Appbar, Text, RadioButton, Button, ProgressBar, MD3Colors, TextInput, HelperText, Divider, List, IconButton } from 'react-native-paper'

const QuestionsPreference = () => {
    const navigation = useNavigation();
    const [question, setQuestion] = React.useState('');
    const [questionList, setQuestionList] = React.useState([]);



    const addQuestion = () => {
        if (question.trim().length > 0 && questionList.length < 5) {
            setQuestionList(prevState => [...prevState, question]);
            setQuestion('')
        }
    };

    const removeQuestion = (index) => {
        const list = [...questionList];
        list.splice(index, 1);
        setQuestionList(list);
    }

    useEffect(() => {
        console.log(questionList)
    }, [questionList])


    return (
        <View style={about_preference_style.mainContainer}>
            <View>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    {/* <Appbar.Content title="Gender Preference (Steps 1/3)" /> */}
                </Appbar.Header>
            </View>


            <ScrollView style={about_preference_style.preference_display_container} automaticallyAdjustKeyboardInsets={true} keyboardShouldPersistTaps="always" >
                <View>
                    <Text variant="displayLarge" style={about_preference_style.preference_headeing_text, { color: '#f81f88' }}>Add some</Text>
                    <Text variant="displayLarge" style={about_preference_style.preference_headeing_text}>Questions</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <View style={about_preference_style.inputContainer}>
                        <Text style={about_preference_style.inputLabel} >Add your questions (Max 5 questions)</Text>
                        <TextInput style={about_preference_style.input} underlineColorAndroid="transparent" multiline={true} numberOfLines={3}
                            onChangeText={(text) => setQuestion(text)}
                            value={question}
                        />
                        <HelperText>Write only one question and click add.For more use Add More button </HelperText>
                    </View>
                    <View>
                        <Button icon="plus-thick" buttonColor="#f81f88" mode="contained" onPress={addQuestion}>
                            Add Question
                        </Button>

                    </View>
                </View>

                <View style={{ marginTop: 20 }}>


                    {
                        
                        questionList.map((question, index) => {
                            return <>
                                <View key={index} >


                                    <List.Item
                                        key={index}
                                        title={`Question ${index + 1}`}
                                        description={question}
                                        right={props => <IconButton
                                            icon="delete"
                                            iconColor='#f81f88'
                                            size={20}
                                            style={{
                                                backgroundColor:'#f81f8830',borderRadius:50,
                                            }}
                                            centered={true}
                                            animated={true}
                                           
                                            onPress={()=>removeQuestion(index)}
                                        />} 
                                    />

                                    <Divider />

                                </View>

                            </>
                        })
                    }

                </View>

            </ScrollView>


            <View style={{ flex: 1, justifyContent: 'flex-end', margin: 20 }}>
                <Button icon="chevron-right" buttonColor="#f81f88" mode="contained" contentStyle={about_preference_style.flexReverse} onPress={() => navigation.navigate("BottomNav")}>
                    Finish
                </Button>
            </View>



        </View>
    )
}

export default QuestionsPreference


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
        paddingLeft: 0

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